import React, { useState } from 'react'
import ModalForm from './ModalForm'
import Backdrop from './Backdrop'
import Todo from './Todo'

function ListTodo () {
  const [todoName, setTodoName] = useState([
    'Learn React',
    'Master React',
    'Adds React'
  ])
  const [modalFormIsOpen, setModalFormIsOpen] = useState(false)

  function addingTodoModal () {
    setModalFormIsOpen(true)
  }

  function closeModalHandler () {
    setModalFormIsOpen(false)
  }

  function addTodo (nameTodo) {
    setTodoName([...todoName, nameTodo])
    closeModalHandler()
  }

  function removeTodo (keyTodo) {
    console.log(keyTodo)
    setTodoName(todoName.filter((elem) => elem !== keyTodo))
  }

  return (
    <div>
      <ul>
        {todoName.map((todo) => (
          <Todo key={todo} text={todo} removeTodo={removeTodo}/>
        ))}
      </ul>
      <button onClick={addingTodoModal}>Add a task</button>
      {modalFormIsOpen && <ModalForm cancel={() => { closeModalHandler() }} addTodo={(e) => { addTodo(e) }}/>}
      {modalFormIsOpen && <Backdrop cancel={() => { closeModalHandler() }}/>}
    </div>
  )
}

export default ListTodo
