import React, { Component } from 'react'
import { Button, Header, TextArea, Modal, Input, Icon } from 'semantic-ui-react'

import ModalActions from './modalActions'

class RecipeModal extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      modalOpen: false,
      ingredients: this.props.ingredients,
      name: this.props.name
     }
     this.baseState = this.state.ingredients 
     this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  


  handleUpdate () {
    const recipe = {
      ingredients: this.state.ingredients,
      name: this.state.name
    }
    this.props.updateRecipe(recipe, this.props.index)
    this.handleClose()
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
        trigger={<Button onClick={this.handleOpen}>Edit Recipe</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
        className="gg"
      >
        <Modal.Content>
          <h1>Edit Recipe</h1>
          <label htmlFor="name">Recipe Name</label>
          <Input fluid id="name" value={this.state.name} onChange={event => this.onInput(event.target)}/>
          <label hmtlFor="ingredients">Ingredients</label>
          <Input fluid id="ingredients" value={this.state.ingredients} onChange={event => this.onInput(event.target)} placeholder="Seperate ingredients with commas"/>
        </Modal.Content>
        <ModalActions handleClose={this.handleClose} handleOpen={this.handleOpen} buttonText={this.props.buttonText} handleUpdate={this.handleUpdate}/>
      </Modal>
    )
  }
}

export default RecipeModal
