import { Zap, Clock, Settings, Users, Tag, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Zap, title: 'سرعة الوصول', desc: 'نصل خلال 30 دقيقة فقط' },
  { icon: Clock, title: 'خدمة 24 ساعة', desc: 'متاحون طوال أيام الأسبوع' },
  { icon: Settings, title: 'معدات حديثة', desc: 'أحدث أجهزة الكمبروسر العالمية' },
  { icon: Users, title: 'فريق محترف', desc: 'فنيون مدربون ومعتمدون' },
  { icon: Tag, title: 'أسعار مناسبة', desc: 'أفضل الأسعار مع الضمان' },
  { icon: ShieldCheck, title: 'جودة مضمونة', desc: 'ضمان 6 أشهر على جميع الأعمال' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-24 bg-dark-surface">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Content */}
          <div className="w-full lg:w-[55%]">
            <div className="reveal-left">
              <span className="eyebrow">لماذا نحن</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                أفضل خدمة تسليك مجاري في الرياض
              </h2>
              <p className="text-gray-400 mb-10 max-w-md">
                نتميز بخبرة سنوات في مجال الصرف الصحي، ونستخدم أحدث التقنيات لضمان أفضل النتائج
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {trustItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 reveal-left stagger-${i + 1}`}
                >
                  <div className="w-11 h-11 rounded-lg bg-cyan-brand/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={22} className="text-cyan-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-[45%] reveal-right">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/why-us.jpg"
                alt="فني يستخدم جهاز الكمبروسر لتسليك المجاري"
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />
              {/* Decorative accent */}
              <div className="absolute top-4 right-4 glass-panel rounded-lg px-4 py-2">
                <span className="text-yellow-brand font-bold text-sm">+10,000 عميل سعيد</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
