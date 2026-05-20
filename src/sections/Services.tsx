import { Wrench, Unlock, Droplets, Wind, Clock, AlertTriangle } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'تسليك مجاري بالكمبروسر',
    description: 'نستخدم أحدث أجهزة الضغط العالي لتفتيت الانسدادات الصعبة في المجاري والمواسير الكبيرة',
  },
  {
    icon: Unlock,
    title: 'فتح انسداد المجاري',
    description: 'حلول سريعة لجميع أنواع الانسدادات المنزلية والتجارية مع ضمان عدم التكرار',
  },
  {
    icon: Droplets,
    title: 'تنظيف مواسير الصرف',
    description: 'تنظيف عميق بضغط الماء العالي لإزالة الدهون والرواسب المتراكمة في مواسير الصرف',
  },
  {
    icon: Wind,
    title: 'شفط وتسليك احترافي',
    description: 'خدمات الشفط والتسليك المتكاملة للبيارات والخزانات بمعدات صناعية متطورة',
  },
  {
    icon: Clock,
    title: 'صيانة طوارئ 24 ساعة',
    description: 'فريق طوارئ متاح على مدار الساعة لمعالجة طفح المجاري والطوارئ الصحية',
  },
  {
    icon: AlertTriangle,
    title: 'معالجة طفح المجاري',
    description: 'استجابة فورية لحالات طفح المجاري مع عزل المشكلة ومعالجة الأسباب الجذرية',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-dark-bg">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-14 reveal">
          <span className="eyebrow">خدماتنا</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            حلول شاملة لجميع مشاكل الصرف الصحي
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            نقدم مجموعة متكاملة من خدمات تسليك المجاري وصيانة شبكات الصرف بأحدث المعدات
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className={`card-service flex flex-col items-start text-right reveal stagger-${i + 1}`}
            >
              <div className="w-14 h-14 rounded-xl bg-yellow-brand/10 flex items-center justify-center mb-5">
                <service.icon size={28} className="text-yellow-brand" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
