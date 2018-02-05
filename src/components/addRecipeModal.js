import React, { Component } from 'react'
import { Button, Modal, Input, } from 'semantic-ui-react'

import ModalActions from './modalActions'

class AddRecipeModal extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      modalOpen: false,
      ingredients: '',
      name: ''
     }
     this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  


  handleUpdate () {
    this.setState({ modalOpen: false })
    const recipe = {
      ingredients: this.state.ingredients,
      name: this.state.name
    }
    this.props.updateRecipe(recipe)
    this.setState({ingredients: '', name: ''})
  }

  onInput (e) {
    if(e.id === 'ingredients') {
      const newArray = e.value.split(',')
      return this.setState({[e.id] : newArray})
    }
    this.setState({[e.id] : e.value})
  }

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Add Recipe</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
      >
        <Modal.Content>
          <h1>Add Recipe</h1>
          <label htmlFor="name">Recipe Name</label>
          <Input fluid id="name" value={this.state.name} onChange={event => this.onInput(event.target)}/>
          <label htmlFor="ingredients">Ingredients</label>
          <Input fluid id="ingredients" value={this.state.ingredients} onChange={event => this.onInput(event.target)} placeholder="Seperate ingredients with commas "/>
        </Modal.Content>
        <ModalActions handleClose={this.handleClose} handleOpen={this.handleOpen} buttonText={"Add New Recipe"} handleUpdate={this.handleUpdate}/>
      </Modal>
    )
  }
}

export default AddRecipeModal
