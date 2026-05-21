import { MessageCircle, Phone, CheckCircle } from 'lucide-react';
import { trackContactAction } from '../lib/gtag';

export default function CTABanner() {
  return (
    <section id="contact" className="relative py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#0F1729' }}>
      {/* Yellow accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-brand" />

      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.5) 20px,
            rgba(255,255,255,0.5) 21px
          )`,
        }}
      />

      <div className="section-container relative z-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            عندك انسداد أو طفح مجاري؟
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            فريقنا جاهز للاستجابة الفورية — نصل خلال 30 دقيقة في جميع أحياء الرياض
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://wa.me/966576807249"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg py-4 px-8 w-full sm:w-auto justify-center"
              onClick={() => trackContactAction('whatsapp')}
            >
              <MessageCircle size={22} />
              تواصل واتساب الآن
            </a>
            <a
              href="tel:+966576807249"
              className="btn-primary text-lg py-4 px-8 w-full sm:w-auto justify-center"
              onClick={() => trackContactAction('phone')}
            >
              <Phone size={22} />
              اتصل: 0576807249
            </a>
          </div>

          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <CheckCircle size={16} className="text-green-500" />
            <span>استجابة فورية 24 ساعة في جميع أحياء الرياض</span>
          </div>
        </div>
      </div>
    </section>
  );
}
