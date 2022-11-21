import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardText, CardGroup, CardFooter } from "reactstrap";
import dateFormat, { masks } from "dateformat";
const Comment = props => {
    let date = dateFormat(props.comment.data, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    console.log(date);
    return (
        <div>
            <CardGroup>

                <Card
                    className="my-2"
                    color="primary"
                    outline
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardHeader>
                        <CardTitle tag="h5">
                            {props.comment.author}
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            {props.comment.comment}
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <small className="text-muted">
                            <div className="row">
                                <div className="col-6" style={{textAlign:'center'}}>
                                    {date}
                                </div>
                                <div className="col-6" style={{textAlign:'center'}}>
                                    Food Rating : {props.comment.rating}
                                </div>
                            </div>
                        </small>
                    </CardFooter>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Comment;