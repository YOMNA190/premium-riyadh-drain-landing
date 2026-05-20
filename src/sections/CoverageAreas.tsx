import { MapPin } from 'lucide-react';

const mainAreas = [
  'شمال الرياض',
  'شرق الرياض',
  'حي الياسمين',
  'حي الملقا',
  'حي النرجس',
  'الرمال',
  'الصحافة',
];

const secondaryAreas = [
  'حي العليا',
  'حي السليمانية',
  'حي الورود',
  'حي المروج',
  'حي الروضة',
  'حي الربوة',
];

export default function CoverageAreas() {
  return (
    <section id="areas" className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/riyadh-bg.jpg"
          alt="مدينة الرياض"
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ transform: 'translateY(var(--parallax, 0))' }}
        />
        <div className="absolute inset-0 bg-dark-bg/85" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="eyebrow">نغطي جميع أحياء الرياض</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            خدمة تسليك مجاري في جميع أنحاء الرياض
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            نصل إليك أينما كنت في الرياض بأسرع وقت ممكن
          </p>
        </div>

        {/* Main areas - large pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {mainAreas.map((area, i) => (
            <span
              key={area}
              className={`pill-tag text-base py-3 px-6 reveal stagger-${(i % 5) + 1}`}
            >
              <MapPin size={16} className="text-yellow-brand" />
              {area}
            </span>
          ))}
        </div>

        {/* Secondary areas - smaller pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {secondaryAreas.map((area, i) => (
            <span
              key={area}
              className={`pill-tag text-sm py-2 px-4 opacity-70 hover:opacity-100 reveal stagger-${(i % 5) + 2}`}
            >
              <MapPin size={14} className="text-cyan-brand" />
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
