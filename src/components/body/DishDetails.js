import React from "react";
import { Card, CardBody, CardImg, CardHeader, CardTitle, CardText } from "reactstrap";
import Comment from "./commends";

const DishDetali = props => {
    let comment = props.comments.map(item => {
        return (
            <Comment comment={item} key={item.id} />
        );
    })
    return (
        <div>
            <Card style={{ marginTop: '10px' }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardHeader>
                        <CardTitle tag="h5">
                            {props.dish.name}
                        </CardTitle>
                    </CardHeader>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                </CardBody>
            </Card>
            <div>
                <div style={{ margin: "10px 0" }}>
                    <Card className="my-2"
                        color="secondary"
                        inverse
                    >
                        <CardHeader>
                            <CardTitle tag="h5">
                                Product Reviews
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </div>
                {comment}
            </div>
        </div>
    );
}

export default DishDetali;