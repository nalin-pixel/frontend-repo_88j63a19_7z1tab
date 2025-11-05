import { Users, Shield, Clock } from 'lucide-react';

export default function RoleCards() {
  const roles = [
    {
      title: 'المستخدم / الطفل',
      desc: 'يشاهد استخدامه اليومي ويتابع تقدم النقاط والمكافآت مع نصائح للسلوك الرقمي الصحي.',
      icon: Clock,
      color: 'from-sky-500 to-sky-600',
    },
    {
      title: 'الوالد / المعلم',
      desc: 'يضع حدود الوقت، يحظر التطبيقات أو المواقع غير المناسبة، ويراقب التقارير والتاريخ.',
      icon: Shield,
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'المسؤول (Admin)',
      desc: 'يدير المستخدمين والبيانات والمحتوى التعليمي ويضمن الامتثال وسياسات الأمان.',
      icon: Users,
      color: 'from-violet-500 to-violet-600',
    },
  ];

  return (
    <section id="roles" className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">الأدوار المدعومة</h2>
        <p className="mt-2 text-center text-gray-600">تجربة مصممة لكل دور لتعزيز عادات رقمية صحية</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <div key={r.title} className="group rounded-2xl bg-white shadow-sm hover:shadow-md transition p-6 border border-gray-100">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${r.color} text-white flex items-center justify-center shadow-md`}>
                <r.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{r.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
