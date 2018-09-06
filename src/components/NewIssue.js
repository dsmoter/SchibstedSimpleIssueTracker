import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody, Form, FormGroup, FormFeedback, Label, Input } from 'reactstrap';

class NewIssue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popoverOpen: false,
            form: {
                name: '',
                description: ''
            },
            errors: {}
            
        }
        this.toggle = this.toggle.bind(this)
    }

    handleClick = (e) => {
        e.preventDefault();
        const { form } = this.state;
        const errors = this.validate(form);
        this.setState({ errors });
        if (!Object.keys(errors).length) {
            this.props.clickEvent(this.state.form)
            this.reset();
        }
    }

    reset() {
        this.setState({
            popoverOpen: false,
            form: {
                name: '',
                description: ''
            }
        })
    }

    validate = (data) => {
        const validationErrors = {};

        if (!data.name.trim()) {
            validationErrors.name = "Name can't be blank."
        }

        if (!data.description.trim()) {
            validationErrors.description = "Description can't be blank."
        }

        return validationErrors;

    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        })
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            form: {
                ...prevState.form,
                [name]: value
            }
        }));
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <Button id="Popover1" onClick={this.toggle.bind(this)}>+</Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    <PopoverHeader>Enter data:</PopoverHeader>
                    <PopoverBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Name:</Label>
                                <Input invalid={ !!errors.name } type="text" name="name" id="name" value={this.state.name} onChange={this.handleInputChange.bind(this)} placeholder="Enter name" />
                                { errors.name && <FormFeedback>{ errors.name }</FormFeedback> }
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description:</Label>
                                <Input invalid={ !!errors.description } type="textarea" name="description" value={this.state.description} onChange={this.handleInputChange.bind(this)} id="description" />
                                { errors.description && <FormFeedback>{ errors.description }</FormFeedback> }
                            </FormGroup>
                            <Button onClick={this.handleClick.bind(this)}>Submit</Button>
                        </Form>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default NewIssue;