import { useEffect, useState } from 'react';

type HealthCheck = {
  id: number;
  title: string;
  completed: boolean;
};

type Status = 'loading' | 'success' | 'error';

const Health = () => {
  const [status, setStatus] = useState<Status>('loading');
  const [data, setData] = useState<HealthCheck | null>(null);
  const [checkedAt, setCheckedAt] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const runCheck = async () => {
      setStatus('loading');
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        const json: HealthCheck = await response.json();
        if (!isMounted) return;
        setData(json);
        setCheckedAt(new Date().toLocaleTimeString());
        setStatus('success');
      } catch (err) {
        if (!isMounted) return;
        setStatus('error');
      }
    };

    runCheck();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">System</p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">Health Check</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          This page confirms the app can fetch and render data from an external API at runtime.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          {status === 'loading' ? (
            <p className="text-sm text-slate-500" role="status">
              Checking service status...
            </p>
          ) : null}

          {status === 'error' ? (
            <p className="text-sm text-rose-600" role="alert">
              Health check failed — could not reach the service.
            </p>
          ) : null}

          {status === 'success' && data ? (
            <div className="space-y-3" role="status">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-sm font-semibold text-emerald-700">Service is reachable</span>
              </div>
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                <dt className="text-slate-500">Record ID</dt>
                <dd className="font-medium text-slate-900">{data.id}</dd>
                <dt className="text-slate-500">Title</dt>
                <dd className="font-medium text-slate-900">{data.title}</dd>
                <dt className="text-slate-500">Completed</dt>
                <dd className="font-medium text-slate-900">{data.completed ? 'Yes' : 'No'}</dd>
                <dt className="text-slate-500">Last checked</dt>
                <dd className="font-medium text-slate-900">{checkedAt}</dd>
              </dl>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Health;
