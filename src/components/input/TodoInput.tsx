import { useState, KeyboardEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTodoContext } from '../../custom-hooks/useTodoContext'

const TodoInput = () => {
  const [inputTodo, setInputTodo] = useState('')

  const { dispatch } = useTodoContext()

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          todo: inputTodo,
          todoId: uuidv4(),
          isCompleted: false,
        },
      })
      setInputTodo('')
    }
  }

  return (
    <div>
      <input
        className="w-full rounded-md p-4  outline-none"
        type="text"
        name="todo"
        value={inputTodo}
        placeholder="Create a new todo..."
        onChange={(event) => setInputTodo(event.target.value)}
        onKeyUp={handleKeyPress}
      />
    </div>
  )
}
export default TodoInput
