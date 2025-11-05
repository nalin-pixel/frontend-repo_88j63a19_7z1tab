import { Gift, PlayCircle } from 'lucide-react';

export default function RewardsAndEducation() {
  const videos = [
    { title: 'السلامة الرقمية للأطفال', duration: '4:20' },
    { title: 'التوازن الصحي مع التقنية', duration: '3:05' },
    { title: 'الخصوصية على الإنترنت', duration: '5:10' },
  ];

  return (
    <section id="features" className="py-16 bg-[#0b0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur p-6 shadow-lg">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">نظام المكافآت</h3>
            </div>
            <p className="mt-2 text-white/70">اكسب نقاطًا عند الالتزام بالحدود والقيام بأنشطة غير رقمية. استبدل النقاط بمكافآت مخصصة من الوالدين أو المدرسة.</p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-white/80">
                <span>النقاط الحالية</span>
                <span className="font-semibold text-white">245 نقطة</span>
              </div>
              <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-orange-400" style={{ width: '62%' }} />
              </div>
              <div className="mt-2 text-xs text-white/60">بقي 38% للوصول إلى المكافأة التالية</div>
            </div>
          </div>

          <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur p-6 shadow-lg">
            <div className="flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-bold text-white">فيديوهات تعليمية</h3>
            </div>
            <p className="mt-2 text-white/70">محتوى قصير وشيّق لتعزيز السلوك الرقمي المسؤول لدى الأطفال واليافعين.</p>
            <div className="mt-4 grid gap-3">
              {videos.map((v) => (
                <button
                  key={v.title}
                  className="flex items-center justify-between p-3 rounded-xl ring-1 ring-white/10 hover:ring-orange-400/50 hover:bg-white/10 transition text-right"
                >
                  <div>
                    <div className="font-medium text-white">{v.title}</div>
                    <div className="text-xs text-white/60">المدة: {v.duration}</div>
                  </div>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white">
                    <PlayCircle className="w-5 h-5" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
