import { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
  };

  return (
    <div className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-200 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">Welcome back</p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">Log in</h1>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="alex@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {}}
            ariaLabel="Email"
            required
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => {}}
            ariaLabel="Password"
            required
          />

          <Button type="submit" loading={isSubmitting}>
            Log in
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Login;
