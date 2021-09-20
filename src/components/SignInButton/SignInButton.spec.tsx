import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/client'
import { mocked } from 'ts-jest/utils'

import SignInButton from '.'

jest.mock('next-auth/client')

describe('SignInButton component', () => {
  it('render correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <SignInButton />
    )

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })

  it('render correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValue([
      {
        user: { name: 'John Doe', email: 'johndoe@test.com'},
        expires: 'test-expires'
      },
      false])

    render(
      <SignInButton />
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
