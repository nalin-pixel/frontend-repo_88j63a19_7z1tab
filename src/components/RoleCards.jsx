import { Users, Shield, Clock } from 'lucide-react';

export default function RoleCards() {
  const roles = [
    {
      title: 'المستخدم / الطفل',
      desc: 'يشاهد استخدامه اليومي ويتابع تقدم النقاط والمكافآت مع نصائح للسلوك الرقمي الصحي.',
      icon: Clock,
      color: 'from-white/30 to-orange-300',
    },
    {
      title: 'الوالد / المعلم',
      desc: 'يضع حدود الوقت، يحظر التطبيقات أو المواقع غير المناسبة، ويراقب التقارير والتاريخ.',
      icon: Shield,
      color: 'from-white/30 to-emerald-300',
    },
    {
      title: 'المسؤول (Admin)',
      desc: 'يدير المستخدمين والبيانات والمحتوى التعليمي ويضمن الامتثال وسياسات الأمان.',
      icon: Users,
      color: 'from-white/30 to-indigo-300',
    },
  ];

  return (
    <section id="roles" className="py-16 bg-[#0b0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">الأدوار المدعومة</h2>
        <p className="mt-2 text-center text-white/70">تجربة مصممة لكل دور لتعزيز عادات رقمية صحية</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <div
              key={r.title}
              className="group rounded-2xl bg-white/5 backdrop-blur p-6 ring-1 ring-white/10 hover:ring-orange-400/50 transition shadow-lg hover:shadow-orange-500/10"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${r.color} text-gray-900 flex items-center justify-center shadow-md`}> 
                <r.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-white/70 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
