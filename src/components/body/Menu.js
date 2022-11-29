import React, { Component } from "react";
import MenuItem from "./ManuItem";
import DishDetali from "./DishDetails";
import { CardGroup, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import * as actionType from '../../redux/actionType'

const mapStateToProps = state =>{
    return { 
        dishes: state.dishes,
        Comments: state.comments,
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        addcomment: (dishId, rating, comment, author) => dispatch({
            type: actionType.ADD_COM,
            payload:{
                dishId: dishId,
                rating: rating,
                comment: comment,
                author: author,
            }
        })
    }
}



class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false,
    }

    onDishSelect = dish => {
        this.setState({ 
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        })
    }
    toggleModal = () =>{
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect={this.onDishSelect} />
            )
        })

        let dishDetails = null;
        if (this.state.selectedDish !== null) {
            const comments = this.props.Comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id
            })
            // console.log(comments)
            dishDetails = <DishDetali dish={this.state.selectedDish} comments={comments} addcomment={this.props.addcomment} />
        }


        return (
            <div className="container">
                <div>
                    <CardGroup>
                        {menu}
                    </CardGroup>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {dishDetails}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                    {/* <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetails}
                    </div> */}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Menu);