import { Gift, PlayCircle } from 'lucide-react';

export default function RewardsAndEducation() {
  const videos = [
    { title: 'السلامة الرقمية للأطفال', duration: '4:20' },
    { title: 'التوازن الصحي مع التقنية', duration: '3:05' },
    { title: 'الخصوصية على الإنترنت', duration: '5:10' },
  ];

  return (
    <section id="features" className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-bold text-gray-900">نظام المكافآت</h3>
            </div>
            <p className="mt-2 text-gray-600">اكسب نقاطًا عند الالتزام بالحدود والقيام بأنشطة غير رقمية. استبدل النقاط بمكافآت مخصصة من الوالدين أو المدرسة.</p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>النقاط الحالية</span>
                <span className="font-semibold text-gray-900">245 نقطة</span>
              </div>
              <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: '62%' }} />
              </div>
              <div className="mt-2 text-xs text-gray-500">بقي 38% للوصول إلى المكافأة التالية</div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-900">فيديوهات تعليمية</h3>
            </div>
            <p className="mt-2 text-gray-600">محتوى قصير وشيّق لتعزيز السلوك الرقمي المسؤول لدى الأطفال واليافعين.</p>
            <div className="mt-4 grid gap-3">
              {videos.map((v) => (
                <button key={v.title} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/40 transition text-right">
                  <div>
                    <div className="font-medium text-gray-900">{v.title}</div>
                    <div className="text-xs text-gray-500">المدة: {v.duration}</div>
                  </div>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white">
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
