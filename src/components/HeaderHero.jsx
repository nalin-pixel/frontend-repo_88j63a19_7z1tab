import { BarChart3, Shield, Settings } from 'lucide-react';

export default function HeaderHero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-600/90 to-indigo-700 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur">
            <Shield className="w-6 h-6" />
          </span>
          <span className="text-xl font-semibold">زمن الشاشة</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-sm">
          <a href="#features" className="hover:text-indigo-200">المزايا</a>
          <a href="#roles" className="hover:text-indigo-200">الأدوار</a>
          <a href="#reports" className="hover:text-indigo-200">التقارير</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-indigo-700 hover:bg-indigo-50 transition">
            <BarChart3 className="w-4 h-4" />
            لوحة الويب
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/30 hover:bg-indigo-500/40 transition">
            <Settings className="w-4 h-4" />
            البدء الآن
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            تحكّم صحي وذكي في وقت الشاشة على الهواتف والحواسيب
          </h1>
          <p className="mt-4 text-indigo-100 leading-relaxed">
            تابع استخدام التطبيقات والمواقع، ضع حدودًا يومية وأسبوعية، امنع المحتوى غير المناسب، وكافئ التوازن الصحي بالنقاط والمكافآت.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-white/10">لوحة تقارير تفصيلية</span>
            <span className="px-3 py-1 rounded-full bg-white/10">نظام مكافآت</span>
            <span className="px-3 py-1 rounded-full bg-white/10">أمان للطفل</span>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl bg-white/10 backdrop-blur p-6 shadow-xl">
            <div className="text-sm mb-4 text-indigo-100">نظرة عامة اليوم</div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold">3س 24د</div>
                <div className="text-xs text-indigo-100 mt-1">الاستخدام</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold">+45</div>
                <div className="text-xs text-indigo-100 mt-1">نقاط اليوم</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold">9/10</div>
                <div className="text-xs text-indigo-100 mt-1">توازن صحي</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-2/3 bg-emerald-400"></div>
              </div>
              <div className="mt-2 text-xs text-indigo-100">تم استخدام 66% من الحد اليومي</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
