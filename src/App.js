import React, { Component } from 'react'

import './App.css'

import RecipeBox from './components/recipeBox'
import AddRecipeModal from './components/addRecipeModal'

class App extends Component {
  constructor () {
    super()
    if (!window.localStorage.recipes) {
      const initialState = [
        { name: 'Pasta',
          ingredients: ['Pasta', 'Sauce']
        },
        { name: 'Pasta',
          ingredients: ['Pasta', 'Sauce']
        }
      ]
      window.localStorage.setItem('recipes', JSON.stringify(initialState))
      this.state = {recipes: initialState}
    } else {
      this.state = {recipes: JSON.parse(window.localStorage.getItem('recipes'))}
    }
    this.addRecipe = this.addRecipe.bind(this)
    this.updateRecipe = this.updateRecipe.bind(this)
  }

  componentDidUpdate () {
    window.localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
  }

  updateRecipe (newRecipe, index) {
    const recipes = this.state.recipes
    recipes.splice(index, 1, newRecipe)
    this.setState({recipes: recipes})
  }

  addRecipe (newRecipe) {
    const recipes = this.state.recipes.concat(newRecipe)
    this.setState({recipes: recipes})
  }

  render () {
    return (
      <div className="App">
        <RecipeBox recipes={this.state.recipes} updateRecipe={this.updateRecipe}/>
        <div className="modalButton"><AddRecipeModal updateRecipe={this.addRecipe} name='' ingredients='' buttonText='Add Recipe' /></div>
      </div>
    )
  }
}

export default App
