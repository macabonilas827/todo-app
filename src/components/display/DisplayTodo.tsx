import { useTodoContext } from '../../custom-hooks/useTodoContext'
import CheckBox from './CheckBox'

const DisplayTodo = () => {
  const { todos } = useTodoContext()

  const todo = todos.map(({ todo, todoId }) => {
    return (
      <div className="flex items-center justify-between p-4" key={todoId}>
        <div className="flex items-center gap-3">
          <CheckBox />
          <h6 className="m-0 p-0">{todo}</h6>
        </div>
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
