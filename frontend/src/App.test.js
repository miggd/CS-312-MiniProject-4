import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Home component with welcome message', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const welcomeMessage = screen.getByText(/Welcome to the Blog Hub/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders Register link in UserRegister component', () => {
  render(
    <MemoryRouter initialEntries={['/UserRegister']}>
      <App />
    </MemoryRouter>
  );

  const registerButton = screen.getByText(/Register/i);
  expect(registerButton).toBeInTheDocument();
});

test('renders Login link in UserLogin component', () => {
  render(
    <MemoryRouter initialEntries={['/UserLogin']}>
      <App />
    </MemoryRouter>
  );

  const loginButton = screen.getByText(/Login/i);
  expect(loginButton).toBeInTheDocument();
});
