import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from '../components/InputField';
import Button from '../components/Button';

const registrationSchema = z
  .object({
    fullName: z.string().trim().min(1, 'Full name is required.'),
    email: z.string().trim().email('Please enter a valid email.'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long.')
      .regex(/[A-Z]/, 'Password must include an uppercase letter.')
      .regex(/[a-z]/, 'Password must include a lowercase letter.')
      .regex(/[0-9]/, 'Password must include a number.')
      .regex(/[^A-Za-z0-9]/, 'Password must include a special character.'),
    confirmPassword: z.string().min(1, 'Please confirm your password.'),
    terms: z.boolean().refine((value) => value, 'You must accept the terms and conditions.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

type RegistrationFormValues = z.infer<typeof registrationSchema>;

const Register = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const values = watch();
  const isFormValid = Boolean(
    values.fullName && values.email && values.password && values.confirmPassword && values.terms && isValid,
  );

  const onSubmit = async (_data: RegistrationFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <section className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 px-6 py-10 text-white sm:px-10 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-100">Create account</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Join the platform</h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-indigo-100 sm:text-base">
            Register to unlock collaborative tools and personalized insights for your team.
          </p>
        </div>

        <div className="px-6 py-8 sm:px-10 lg:px-12">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="Alex Morgan"
              value={values.fullName || ''}
              onChange={register('fullName').onChange}
              onBlur={register('fullName').onBlur}
              inputRef={register('fullName').ref}
              error={errors.fullName?.message}
              ariaLabel="Full Name"
              required
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="alex@example.com"
              value={values.email || ''}
              onChange={register('email').onChange}
              onBlur={register('email').onBlur}
              inputRef={register('email').ref}
              error={errors.email?.message}
              ariaLabel="Email"
              required
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter a strong password"
              value={values.password || ''}
              onChange={register('password').onChange}
              onBlur={register('password').onBlur}
              inputRef={register('password').ref}
              error={errors.password?.message}
              ariaLabel="Password"
              required
            />

            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={values.confirmPassword || ''}
              onChange={register('confirmPassword').onChange}
              onBlur={register('confirmPassword').onBlur}
              inputRef={register('confirmPassword').ref}
              error={errors.confirmPassword?.message}
              ariaLabel="Confirm Password"
              required
            />

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <label className="flex items-start gap-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  {...register('terms')}
                  aria-label="Accept terms and conditions"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>I agree to the terms and conditions and privacy policy.</span>
              </label>
              {errors.terms ? (
                <p role="alert" className="mt-2 text-sm text-rose-600">
                  {errors.terms.message}
                </p>
              ) : null}
            </div>

            <Button type="submit" loading={isSubmitting} disabled={!isFormValid}>
              Create account
            </Button>
          </form>

          {submitted ? (
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700" role="status">
              Account created successfully. Please check your inbox to verify your email.
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Register;
