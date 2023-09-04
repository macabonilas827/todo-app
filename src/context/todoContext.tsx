import { Dispatch, ReactNode, createContext, useReducer } from 'react'

type TodoAction = { type: 'ADD_TODO'; payload: Todo }

interface Todo {
  todo: string
  todoId: string
  isCompleted: boolean
}
interface TodoContextType {
  todos: Todo[]
  dispatch: Dispatch<TodoAction>
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined)

interface TodoProviderProps {
  children: ReactNode
}

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.payload, ...state]
    default:
      return state
  }
}

export const TodoProdiver = ({ children }: TodoProviderProps) => {
  const [todos, dispatch] = useReducer(todoReducer, [])

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}
