import HeaderHero from './components/HeaderHero';
import RoleCards from './components/RoleCards';
import UsageOverview from './components/UsageOverview';
import RewardsAndEducation from './components/RewardsAndEducation';

function Footer() {
  return (
    <footer className="py-10 bg-[#0b0f1a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} زمن الشاشة — منصة عربية لإدارة وقت الشاشة وتعزيز العادات الرقمية الصحية.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#0b0f1a] text-white font-sans">
      <HeaderHero />
      <main className="relative">
        {/* subtle divider gradient from hero into content */}
        <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-white/5" />
        <RoleCards />
        <UsageOverview />
        <RewardsAndEducation />
      </main>
      <Footer />
    </div>
  );
}
