import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo ({ text, removeTodo }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function deleteHandler () {
    setModalIsOpen(true)
  }

  function closeModalHandler () {
    setModalIsOpen(false)
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={() => {
          deleteHandler()
        }}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal cancel={closeModalHandler} confirm={() => { removeTodo(text) }}/>}
      {modalIsOpen && <Backdrop cancel={closeModalHandler}/>}
    </div>
  )
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default Todo
