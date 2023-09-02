import DisplayTodo from '../display/DisplayTodo'
import Input from '../input/Input'
import Navbar from '../navbar/Navbar'

const Container = () => {
  return (
    <main className="container absolute p-8">
      <div className="flex flex-col gap-4">
        <Navbar />
        <Input />
        <DisplayTodo />
      </div>
    </main>
  )
}
export default Container
