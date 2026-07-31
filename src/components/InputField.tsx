import React from 'react';

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
  autoComplete?: string;
  required?: boolean;
  ariaLabel?: string;
  inputRef?: React.Ref<HTMLInputElement>;
};

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(function InputField(
  { label, name, type = 'text', placeholder, value, onChange, onBlur, error, autoComplete, required, ariaLabel, inputRef },
  ref,
) {
  const inputId = `${name}-field`;

  return (
    <div className="space-y-1.5">
      <label htmlFor={inputId} className="block text-sm font-medium text-slate-700">
        {label}
        {required ? <span className="ml-1 text-rose-500">*</span> : null}
      </label>
      <input
        id={inputId}
        ref={inputRef || ref}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-label={ariaLabel || label}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full rounded-xl border px-4 py-3 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500 ${
          error ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-white focus:border-indigo-500'
        }`}
      />
      {error ? (
        <p id={`${inputId}-error`} role="alert" className="text-sm text-rose-600">
          {error}
        </p>
      ) : null}
    </div>
  );
});

export default InputField;
