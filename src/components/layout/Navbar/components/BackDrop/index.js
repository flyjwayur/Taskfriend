import React from 'react'
import Proptypes from 'prop-types'

import './styles.scss'

const BackDrop = ({ click }) => (
  <div
    className="backdrop"
    onKeyPress={click}
    tabIndex={-1}
    role="button"
    onClick={click}
  />
)

BackDrop.propTypes = {
  click: Proptypes.func.isRequired,
}

export default BackDrop
