import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

export class ThemeInputGroupWithLabel extends Component {
  render() {
    return(
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">{this.props.inputLabel}</span>
        </div>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
      </div>
    )
  }
}

ThemeInputGroupWithLabel.propTypes = {
  inputLabel:PropTypes.string
}

ThemeInputGroupWithLabel.defaultProps = {
  inputLabel:"input"
}
