import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

const ModalMain = ({ isOpen, toggleModal, title, content, actions, closedModal }) => {
  return(
    <Modal isOpen={isOpen} toggle={toggleModal} onClosed={closedModal}>
      <ModalHeader toggle={toggleModal}>{ title }</ModalHeader>
      <ModalBody>{ content }</ModalBody>
      <ModalFooter>
        { actions(toggleModal) }
      </ModalFooter>
    </Modal>
  );
}

class SModal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { title, content, actions, closedModal } = this.props;
    return ReactDOM.createPortal(
      <ModalMain
        isOpen={isOpen}
        toggleModal={this.toggleModal}

        title={title}
        content={content}
        actions={actions}
        closedModal={closedModal}
      />,
      document.getElementById('modal')
    );
  }
}

export default SModal;
