import React, { Component } from "react";
import { Form, Button, FormGroup, Label, Input, Col  } from "reactstrap";


class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            listname: "",
            telnum: '',
            email: "",
            agree: false,
            contactonChangetype: "Tel.",
            message: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const name = event.target.name
        this.setState({
            [name]:value
        })
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault()
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="firstname" md={2}>First Name</Label>
                                <Col  md={10}>
                                    <Input id="firstname" onChange={this.handleInputChange} type="text" name="firstname" placeholder="First Name" value={this.state.firstname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="listname" md={2}>List Name</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange}  type="text" name="listname" placeholder="List Name" value={this.state.listname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange}  type="tel" name="telnum" placeholder="Tel. Number" value={this.state.telnum} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange}  type="email" name="email" placeholder="abc@gmail.com" value={this.state.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input onChange={this.handleInputChange}  type="checkbox" name="agree" value={this.state.agree} /> <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input onChange={this.handleInputChange}  type="select" name="contactonChangetype" value={this.state.contactonChangetype}> 
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange}  type="textarea" name="message" placeholder="Message" value={this.state.message} />
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
export default Contact;