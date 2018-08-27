import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

export const ThemeInputGroup = props => {
  return(
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder={`${props.label}`} aria-label="Recipient's username" aria-describedby="basic-addon2" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">{props.buttonLabel}</button>
      </div>
    </div>
  )
}

ThemeInputGroup.propTypes = {
  buttonLabel:PropTypes.string,
  label:PropTypes.string
}

ThemeInputGroup.defaultProps = {
  buttonLabel:"Button",
  label:"Label"
}
