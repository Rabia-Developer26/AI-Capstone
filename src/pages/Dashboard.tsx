const Dashboard = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">Overview</p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">Dashboard</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          Placeholder screen. This is where user activity, stats, and collaborative tools will
          appear once the dashboard is built out.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {['Active projects', 'Team members', 'Tasks due'].map((label) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">—</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
