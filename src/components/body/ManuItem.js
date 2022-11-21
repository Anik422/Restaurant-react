import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = props => {
    console.log(props);
    return (
        <div>
            <Card inverse style={{margin:"10px"}}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{opacity:"0.5"}} />
                    <CardImgOverlay>
                        <CardTitle color="red">{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;