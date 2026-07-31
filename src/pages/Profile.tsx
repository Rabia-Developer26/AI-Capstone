const Profile = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">Account</p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">Profile</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          Placeholder screen. Profile details, avatar, and account settings will live here.
        </p>

        <dl className="mt-8 divide-y divide-slate-100 border-t border-slate-100">
          {[
            ['Full name', '—'],
            ['Email', '—'],
            ['Member since', '—'],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between py-4 text-sm">
              <dt className="text-slate-500">{label}</dt>
              <dd className="font-medium text-slate-900">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Profile;
