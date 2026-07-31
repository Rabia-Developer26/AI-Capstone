import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">Welcome</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">AI Capstone Project</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          This is the landing page for the capstone app. Use the navigation above to explore the
          registration flow, log in, view the dashboard, manage your profile, or check the app's
          health status.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/register"
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Create an account
          </Link>
          <Link
            to="/login"
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
