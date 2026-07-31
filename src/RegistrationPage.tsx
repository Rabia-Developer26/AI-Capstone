import React, { FormEvent, useState } from 'react';

type FormState = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialState: FormState = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields.');
      setMessage('');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long.');
      setMessage('');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setMessage('');
      return;
    }

    setMessage(`Welcome, ${formData.fullName}! Your account has been created.`);
    setError('');
    setFormData(initialState);
  };

  return (
    <main className="page-shell">
      <section className="card">
        <div className="card-copy">
          <p className="eyebrow">Create your account</p>
          <h1>Join our community</h1>
          <p className="description">
            Register in just a few steps to access exclusive updates and features.
          </p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Alex Morgan"
            />
          </label>

          <label>
            Email address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@example.com"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
            />
          </label>

          <label>
            Confirm password
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
            />
          </label>

          <button type="submit">Register now</button>
        </form>

        {error ? <p className="feedback error">{error}</p> : null}
        {message ? <p className="feedback success">{message}</p> : null}
      </section>
    </main>
  );
};

export default RegistrationPage;
