import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export class Test extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div class="test">Hello test</div>
    )
  }
}

Test.propTypes = {

}

Test.defaultProps = {

}
