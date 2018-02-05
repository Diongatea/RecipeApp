import React from 'react'
import { Button, Header, TextArea, Modal, Input, Icon } from 'semantic-ui-react'

function ModalActions (props) {
  return (
    <Modal.Actions>
      <Button color='green' onClick={props.handleUpdate} inverted>
        <Icon name='checkmark' /> {props.buttonText}
      </Button>
      <Button color='red' onClick={props.handleClose} inverted>
        <Icon name='checkmark' /> Cancel
      </Button>
    </Modal.Actions>
  )
}

export default ModalActions
