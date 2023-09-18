import { render, fireEvent } from '@testing-library/react'
import TodoInput from './TodoInput'

// Dispatches ADD_TODO action on Enter key press
it('should dispatch ADD_TODO action when Enter key is pressed', () => {
  // Mock the dispatch function
  const dispatchMock = jest.fn()
  // Mock the useTodoContext hook to return the dispatch function
  jest.mock('../../custom-hooks/useTodoContext', () => ({
    useTodoContext: () => ({
      dispatch: dispatchMock,
    }),
  }))

  // Render the TodoInput component
  const { getByPlaceholderText } = render(<TodoInput />)
  const inputElement = getByPlaceholderText('Create a new todo...')

  // Simulate Enter key press
  fireEvent.keyUp(inputElement, { key: 'Enter' })

  // Check if the dispatch function was called with the correct action type and payload
  expect(dispatchMock).toHaveBeenCalledWith({
    type: 'ADD_TODO',
    payload: {
      todo: '',
      todoId: expect.any(String),
      isCompleted: false,
    },
  })
})
