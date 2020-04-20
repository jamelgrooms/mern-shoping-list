import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import {v4 as uuid} from 'uuid';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            id: uuid(),
            name: this.state.name
        }
        // Add Item via addItem aciton
        this.props.addItem(newItem);

        //Close Modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}>
                    Add Item
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader
                        toggle={this.toggle}>Add to Shopping List</ModalHeader>
                        <Form onSubmit={this.onSubmit}>
                        <ModalBody>
                            <FormGroup>
                                <Label for="item"></Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                        </ModalBody> 
                        <ModalFooter>
                            <Button
                                type="submit"
                                color="dark"
                                block
                            >Add Item</Button>
                        </ModalFooter>
                        </Form>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    item: state.item
  })
export default connect(mapStateToProps, { addItem })(ItemModal)