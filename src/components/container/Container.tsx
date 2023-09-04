import DisplayTodo from '../display/DisplayTodo'
import TodoInput from '../input/TodoInput'
import Navbar from '../navbar/Navbar'

const Container = () => {
  return (
    <main className="container absolute p-6 font-todo text-sm">
      <div className="flex flex-col gap-4">
        <Navbar />
        <TodoInput />
        <DisplayTodo />
      </div>
    </main>
  )
}
export default Container
