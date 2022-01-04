import React from 'react'
import { PropTypes } from 'prop-types'

function Backdrop ({ cancel }) {
  return <div className="backdrop" onClick={cancel} />
}
Backdrop.propTypes = {
  cancel: PropTypes.func.isRequired
}
export default Backdrop
