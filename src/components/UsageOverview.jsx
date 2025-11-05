import { Smartphone, Tablet, Monitor, BarChart3 } from 'lucide-react';

function Donut({ percent = 66, color = '#10b981' }) {
  const radius = 36;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <svg width={90} height={90}>
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={45}
        cy={45}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeLinecap="round"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.6s ease' }}
        r={normalizedRadius}
        cx={45}
        cy={45}
      />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">
        {percent}%
      </text>
    </svg>
  );
}

export default function UsageOverview() {
  const devices = [
    { name: 'الهاتف', icon: Smartphone, percent: 72, color: '#6366f1', time: '2س 15د' },
    { name: 'اللوحي', icon: Tablet, percent: 48, color: '#10b981', time: '1س 05د' },
    { name: 'الحاسوب', icon: Monitor, percent: 33, color: '#f59e0b', time: '45د' },
  ];

  const bars = [
    { label: 'تعليم', value: 40, color: 'bg-emerald-500' },
    { label: 'اجتماعي', value: 25, color: 'bg-indigo-500' },
    { label: 'ترفيه', value: 20, color: 'bg-amber-500' },
    { label: 'أخرى', value: 15, color: 'bg-slate-400' },
  ];

  return (
    <section id="reports" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-indigo-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">التقارير والإحصاءات</h2>
        </div>
        <p className="mt-2 text-gray-600">لوحة ذكية تعرض الوقت المستهلك حسب الجهاز والفئة مع مقارنة بالحدود الزمنية.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">الاستخدام حسب الجهاز</h3>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              {devices.map((d) => (
                <div key={d.name} className="flex flex-col items-center text-center">
                  <Donut percent={d.percent} color={d.color} />
                  <div className="mt-2 text-sm text-gray-600">{d.name}</div>
                  <div className="text-base font-semibold text-gray-900">{d.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">توزيع الوقت حسب الفئة</h3>
            <div className="mt-4 space-y-3">
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-700">{b.label}</span>
                    <span className="text-gray-900 font-medium">{b.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${b.color}`} style={{ width: `${b.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-xs text-gray-500">يمكن تعديل الحدود الزمنية لكل فئة وفقًا للعمر والمرحلة الدراسية.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
