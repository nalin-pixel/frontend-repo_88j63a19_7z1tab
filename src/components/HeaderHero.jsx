import { BarChart3, Shield, Settings } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function HeaderHero() {
  return (
    <header className="relative overflow-hidden text-white" style={{ backgroundColor: '#0b0f1a' }}>
      {/* Spline full-width cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlay to blend to dark->orange without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-orange-500/10" />
      </div>

      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur">
            <Shield className="w-6 h-6" />
          </span>
          <span className="text-xl font-semibold">زمن الشاشة</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-orange-300 transition">المزايا</a>
          <a href="#roles" className="hover:text-orange-300 transition">الأدوار</a>
          <a href="#reports" className="hover:text-orange-300 transition">التقارير</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition">
            <BarChart3 className="w-4 h-4" />
            لوحة الويب
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/90 hover:bg-orange-500 transition">
            <Settings className="w-4 h-4" />
            البدء الآن
          </button>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            تحكّم صحي وذكي في وقت الشاشة على الهواتف والحواسيب
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            تابع استخدام التطبيقات والمواقع، ضع حدودًا يومية وأسبوعية، امنع المحتوى غير المناسب، وكافئ التوازن الصحي بالنقاط والمكافآت.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur">لوحة تقارير تفصيلية</span>
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur">نظام مكافآت</span>
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur">أمان للطفل</span>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-medium">جرّب اللوحة</button>
            <button className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition font-medium">معرفة المزيد</button>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl bg-white/10 backdrop-blur p-6 shadow-xl ring-1 ring-white/10">
            <div className="text-sm mb-4 text-white/80">نظرة عامة اليوم</div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold">3س 24د</div>
                <div className="text-xs text-white/80 mt-1">الاستخدام</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold">+45</div>
                <div className="text-xs text-white/80 mt-1">نقاط اليوم</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold">9/10</div>
                <div className="text-xs text-white/80 mt-1">توازن صحي</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-2/3 bg-orange-400"></div>
              </div>
              <div className="mt-2 text-xs text-white/80">تم استخدام 66% من الحد اليومي</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
