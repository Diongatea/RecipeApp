import React, { Component} from 'react'
import _ from 'lodash'
import { Segment, SegmentGroup } from 'semantic-ui-react'

class IngredientsList extends Component {
  renderIngredients () {
    return _.map(this.props.ingredients, (ingredient, index) => {
      return (
        <Segment key={index}>{ingredient}</Segment>
      )
    })
  }

  render () {
    return (
      <div>
        <SegmentGroup>
          {this.renderIngredients()}
        </SegmentGroup>

      </div>
    )
  }
}

export default IngredientsList
