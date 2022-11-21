import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = props => {
    return (
        <div>
            <Card inverse style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle
                            onClick={() => props.DishSelect(props.dish)}
                            style={{ cursor: 'pointer' }}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;