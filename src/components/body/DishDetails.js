import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
import Comment from "./commends";

const DishDetali = props =>{
    let comment = props.dish.comments.map(item =>{
        return(
            <Comment comment={item} key={item.id}/>
        );
    })
    return(
        <div>
            <Card style={{marginTop:'10px'}}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{textAlign:'left'}}>
                    <CardText>
                        {props.dish.name}
                    </CardText>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                </CardBody>
            </Card>
            <div>
                {comment}
            </div>
        </div>
    );
}

export default DishDetali;