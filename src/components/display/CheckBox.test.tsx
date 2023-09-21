import '@testing-library/jest-dom'
import CheckBox from './CheckBox'
import { render, screen } from '@testing-library/react'

describe('CheckBox', () => {
  it('renders correctly', () => {
    render(<CheckBox />)
    const checkBox = screen.getByRole('checkbox')
    expect(checkBox).toBeInTheDocument()
  })
})
