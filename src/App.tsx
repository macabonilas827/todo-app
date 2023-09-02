import Container from './components/container/Container'
import { TodoProdiver } from './context/todoContext'

Container

function App() {
  return (
    <TodoProdiver>
      <div className="absolute">
        <img
          src="src/assets/images/bg-mobile-light.jpg"
          alt="background image"
        />
      </div>
      <Container />
    </TodoProdiver>
  )
}

export default App
