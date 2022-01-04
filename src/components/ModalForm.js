import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function ModalForm ({ addTodo, cancel }) {
  const [nameTodo, setNameTodo] = useState('')

  return (<div className="modal">
    <div>
    <TextField onChange={e => setNameTodo(e.target.value)}></TextField>
    </div>
    <Button variant="contained" onClick={() => { addTodo(nameTodo) }}>Confirm</Button>
    <Button variant="contained" onClick={cancel}>Cancel</Button>
  </div>)
}

ModalForm.propTypes = {
  cancel: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
}

export default ModalForm
