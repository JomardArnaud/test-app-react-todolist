import React from 'react'
import { PropTypes } from 'prop-types'

function Modal ({ cancel, confirm }) {
  return (
    <div className="modal">
      <p>Are you sure ?</p>
      <button className='btn btn--alt' onClick={cancel}>Cancel</button>
      <button className='btn' onClick={confirm}>Confirm</button>
    </div>
  )
}

Modal.propTypes = {
  cancel: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired

}
export default Modal
