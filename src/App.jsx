import HeaderHero from './components/HeaderHero';
import RoleCards from './components/RoleCards';
import UsageOverview from './components/UsageOverview';
import RewardsAndEducation from './components/RewardsAndEducation';

function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} زمن الشاشة — منصة عربية لإدارة وقت الشاشة وتعزيز العادات الرقمية الصحية.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-white text-gray-900 font-sans">
      <HeaderHero />
      <main>
        <RoleCards />
        <UsageOverview />
        <RewardsAndEducation />
      </main>
      <Footer />
    </div>
  );
}
