import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

export class ThemePanel extends Component {

  getComponent = key => {
    const found = this.props.children.filter( (comp) => {
      return comp.key === key
    })

    return found.length>0?found:null
  }

  render() {
    const title = this.getComponent('title')
    console.log({ title })
    return(
      <div className="card theme-panel">
        <h4 className="card-header">
          {this.getComponent('header')}
        </h4>
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          {this.getComponent('body')}
        </div>
      </div>
    )
  }
}

ThemePanel.propTypes = {
  body:PropTypes.object,
  header:PropTypes.object,

}

ThemePanel.defaultProps = {

}
