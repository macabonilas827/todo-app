import { useTodoContext } from '../../custom-hooks/useTodoContext'

const DisplayTodo = () => {
  const { todos } = useTodoContext()

  const todo = todos.map(({ todo, todoId }) => {
    return (
      <div className="flex justify-between p-4" key={todoId}>
        <h6>{todo}</h6>
        <div>
          <img
            className="w-3 cursor-pointer "
            src="src/assets/images/icon-cross.svg"
            alt="delete todo"
          />
        </div>
      </div>
    )
  })

  return (
    <div className="divide-y divide-very-Light-grayish-blue rounded bg-very-light-gray drop-shadow-md ">
      {todo}
    </div>
  )
}
export default DisplayTodo
