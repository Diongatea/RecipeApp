import React, { Component } from 'react'
import _ from 'lodash'

import RecipeItem from './recipeItem'

class RecipeBox extends Component {
  constructor () {
    super()
    this.state = { activeIndex: -1 }
  }

  handleClick = (index) => {
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  renderRecipes () {
    return _.map(this.props.recipes, (recipe, index) => {
      return <RecipeItem 
      recipe={recipe} index={index} 
      handleClick={this.handleClick} activeIndex={this.state.activeIndex} 
      updateRecipe={this.props.updateRecipe} key={index}/>
    })
  }

  render () {
    return (
      <div className="recipeBox">
        {this.renderRecipes()}
      </div>
    )
  }
}

export default RecipeBox
