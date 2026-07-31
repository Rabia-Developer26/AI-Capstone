import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Registration page', () => {
  it('renders the form fields and disables submit until the form is valid', async () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /join the platform/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/^full name\s*\*?$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email\s*\*?$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password\s*\*?$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^confirm password\s*\*?$/i)).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /create account/i });
    expect(submitButton).toBeDisabled();
  });

  it('shows errors and submits when the form is valid', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/^full name\s*\*?$/i), 'Alex Morgan');
    await user.type(screen.getByLabelText(/^email\s*\*?$/i), 'alex@example.com');
    await user.type(screen.getByLabelText(/^password\s*\*?$/i), 'StrongPass1!');
    await user.type(screen.getByLabelText(/^confirm password\s*\*?$/i), 'StrongPass1!');
    await user.click(screen.getByLabelText(/accept terms and conditions/i));

    const submitButton = screen.getByRole('button', { name: /create account/i });
    await waitFor(() => expect(submitButton).toBeEnabled());

    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByRole('status')).toHaveTextContent(/account created successfully/i);
    });
  });
});
