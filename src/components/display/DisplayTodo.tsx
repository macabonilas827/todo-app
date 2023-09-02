import { useTodoContext } from '../../custom-hooks/useTodoContext'

const DisplayTodo = () => {
  const { todos } = useTodoContext()

  const todo = todos.map(({ todo, todoId }) => {
    return (
      <h1 className="p-4" key={todoId}>
        {todo}
      </h1>
    )
  })

  return (
    <div className="divide-y divide-very-Light-grayish-blue rounded bg-very-light-gray drop-shadow-md">
      {todo}
    </div>
  )
}
export default DisplayTodo
