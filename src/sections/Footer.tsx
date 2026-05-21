import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { trackContactAction } from '../lib/gtag';

const quickLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'آراء العملاء', href: '#reviews' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
];

const serviceLinks = [
  'تسليك مجاري بالكمبروسر',
  'فتح انسداد المجاري',
  'تنظيف مواسير الصرف',
  'صيانة طوارئ 24 ساعة',
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-white/5 pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-yellow-brand font-bold text-lg mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="6" fill="#F5C518" fillOpacity="0.1" />
                <path d="M8 16h6M18 12h6M18 20h6M14 12v8" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="14" cy="16" r="2" stroke="#F5C518" strokeWidth="2" />
              </svg>
              <span>مؤسسة تسليك مجاري الرياض</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              خدمات احترافية لتسليك المجاري وصيانة شبكات الصرف الصحي بأحدث المعدات
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+966576807249"
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-brand transition-colors text-sm"
                onClick={() => trackContactAction('phone')}
              >
                <Phone size={16} />
                <span>0576807249</span>
              </a>
              <a
                href="https://wa.me/966576807249"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors text-sm"
                onClick={() => trackContactAction('whatsapp')}
              >
                <MessageCircle size={16} />
                <span>واتساب: 0576807249</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    className="text-gray-500 hover:text-yellow-brand transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-gray-500 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours & Coverage */}
          <div>
            <h4 className="text-white font-semibold mb-4">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-cyan-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">خدمة 24 ساعة / 7 أيام</p>
                  <p className="text-gray-500 text-xs">طوارئ على مدار الساعة</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-cyan-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">جميع أحياء الرياض</p>
                  <p className="text-gray-500 text-xs">شمال • شرق • غرب • جنوب</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            جميع الحقوق محفوظة 2026
          </p>
          <p className="text-gray-600 text-xs">
            صُنع بحب في الرياض 🇸🇦
          </p>
        </div>
      </div>
    </footer>
  );
}
