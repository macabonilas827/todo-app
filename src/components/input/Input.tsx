import { useState, KeyboardEvent } from 'react'
import { useTodoContext } from '../../custom-hooks/useTodoContext'

const Input = () => {
  const [inputTodo, setInputTodo] = useState('')

  const { dispatch } = useTodoContext()

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          todo: inputTodo,
          todoId: crypto.randomUUID(),
          isCompleted: false,
        },
      })
      setInputTodo('')
    }
  }

  return (
    <div>
      <input
        className="h-12 w-full rounded-md  outline-none"
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
export default Input
