import React, { Component } from "react";
import { Button, FormGroup, Label, Col  } from "reactstrap";
import { Form, Control, Errors, actions } from 'react-redux-form';
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        resetFeetbackForm : () => {
            dispatch(actions.reset('feedback')) 
        }
    }
};


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {
    handleSubmit = values => {
        console.log(values);
        this.props.resetFeetbackForm();
    }

    render() {
        document.title = "Contact";
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="Col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="Col-12 Col-md-7">
                        <Form model="feedback" onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label for="firstname" md={2}>First Name</Label>
                                <Col  md={10}>
                                    <Control.text 
                                    model=".firstname"
                                    id="firstname"  
                                    name="firstname" 
                                    placeholder="First Name" 
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                     />
                                     <Errors 
                                     className="text-danger"
                                     model=".firstname"
                                     show="touched"
                                     messages={
                                        {
                                            required: "Required"
                                        }
                                     }
                                     />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="listname" md={2}>List Name</Label>
                                <Col md={10}>
                                    <Control.text
                                    model=".listname"
                                    id="listname"  
                                    name="listname" 
                                    placeholder="List Name" 
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                    />
                                     <Errors 
                                     className="text-danger"
                                     model=".listname"
                                     show="touched"
                                     messages={
                                        {
                                            required: "Required"
                                        }
                                     }
                                     />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text 
                                    model=".telnum"
                                    id="telnum"
                                    name="telnum" 
                                    placeholder="Tel. Number" 
                                    className="form-control"
                                    validators={{
                                        required,
                                        isNumber
                                    }}
                                    />
                                     <Errors 
                                     className="text-danger"
                                     model=".telnum"
                                     show="touched"
                                     messages={
                                        {
                                            required: "Required",
                                            isNumber: "Invalid number!"
                                        }
                                     }
                                     />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text  
                                    model=".email"
                                    id="email"  
                                    name="email" 
                                    placeholder="abc@gmail.com"
                                    className="form-control"
                                    validators={{
                                        required,
                                        validEmail
                                    }}
                                     />
                                      <Errors 
                                     className="text-danger"
                                     model=".email"
                                     show="touched"
                                     messages={
                                        {
                                            required: "Required",
                                            validEmail: "Invalid Email!"
                                        }
                                     }
                                     />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox 
                                            model=".agree"
                                            name="agree" 
                                            className="form-check-input"
                                             /> <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select  
                                    model=".select"
                                    name="contactonChangetype" 
                                    className="form-select"
                                    > 
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea 
                                    model=".message"
                                    name="message" 
                                    placeholder="Message" 
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                    />
                                     <Errors 
                                     className="text-danger"
                                     model=".message"
                                     show="touched"
                                     messages={
                                        {
                                            required: "Required"
                                        }
                                     }
                                     />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{size:10, offset:2}}>
                                    <Button onChange={this.handleInputChange}  type="submit" color="success">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null, mapDispatchToProps) (Contact);