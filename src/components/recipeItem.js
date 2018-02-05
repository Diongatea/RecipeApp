import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

import IngredientsList from './ingredientsList'
import RecipeModal from './recipeModal'

class RecipeItem extends Component {
  render () {
    const { activeIndex } = this.props

    return (
      <div>
        <Accordion styled fluid>
          <Accordion.Title active={activeIndex === this.props.index} index={this.props.index} onClick={() => this.props.handleClick(this.props.index)}>
            <Icon name='dropdown' />
            {this.props.recipe.name}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === this.props.index}>
            <IngredientsList ingredients={this.props.recipe.ingredients}/>
            <RecipeModal name={this.props.recipe.name} index={this.props.index} ingredients={this.props.recipe.ingredients} updateRecipe={this.props.updateRecipe} buttonText='Edit Recipe'/>
          </Accordion.Content>
        </Accordion>
      </div>

    )
  }
}

export default RecipeItem
