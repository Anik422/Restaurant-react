import React, { Component } from "react";
import DISHES from "../../data/dishes";
import COMMENTS from "../../data/Comments";
import MenuItem from "./ManuItem";
import DishDetali from "./DishDetails";
import { CardGroup, Modal, ModalBody, ModalFooter, Button } from "reactstrap";


class Menu extends Component {
    state = {
        dishes: DISHES,
        Comments:COMMENTS,
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
        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect={this.onDishSelect} />
            )
        })

        let dishDetails = null;
        if (this.state.selectedDish !== null) {
            const comments = this.state.Comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id
            })
            console.log(comments)
            dishDetails = <DishDetali dish={this.state.selectedDish} comments={comments} />
        }


        return (
            <div className="container">
                <div>
                    <CardGroup>
                        {menu}
                    </CardGroup>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
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

export default Menu;