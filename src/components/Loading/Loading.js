import React from 'react'
import PropTypes from 'prop-types'

import './Loading.scss'

const Loading = (props) => {
const {text} = props
  return (
    <div className="loading-container">
      <div className="loading" />
      <div id="loading-text">{text}</div>
    </div>
  )
}

Loading.propTypes = {
  text: PropTypes.string
}

Loading.defaultProps = {
  text: 'loading'
}

export default Loading
