import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Phone, Clock, Shield, BadgeCheck } from 'lucide-react';
import { trackContactAction } from '../lib/gtag';

const stats = [
  { value: 10000, prefix: '+', suffix: '', label: 'عملية تسليك' },
  { value: 30, prefix: '', suffix: '', label: 'دقيقة متوسط الوصول' },
  { value: 24, prefix: '', suffix: '/7', label: 'خدمة طوارئ' },
  { value: 6, prefix: '', suffix: ' أشهر', label: 'ضمان الخدمة' },
];

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(end: number, duration = 1500, start = 0) {
  const [count, setCount] = useState(start);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let animationId: number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      setCount(Math.floor(start + (end - start) * easedProgress));
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [started, end, duration, start]);

  return { count, ref };
}

function StatItem({ value, prefix, suffix, label }: { value: number; prefix: string; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="stat-number">
        {prefix}{count.toLocaleString('ar-SA')}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="فريق عمل احترافي لتسليك المجاري بالرياض"
          className={`w-full h-full object-cover ${loaded ? 'ken-burns' : 'scale-105'}`}
        />
        {/* Dark overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, #0A0E1A 0%, rgba(10,14,26,0.75) 35%, rgba(10,14,26,0.4) 70%, rgba(10,14,26,0.2) 100%)',
          }}
        />
      </div>

      {/* Top announcement bar */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-yellow-brand text-dark-bg py-2">
        <p className="text-center text-sm font-semibold">
          خدمة 24 ساعة — نصل خلال 30 دقيقة — اتصل الآن: 0576807249
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 section-container pt-20 pb-48 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Text content */}
          <div className="max-w-2xl">
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem] font-extrabold text-white leading-tight mb-6 transition-all duration-800 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              تسليك مجاري بالكمبروسر في الرياض 24 ساعة
            </h1>

            <p
              className={`text-base lg:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl transition-all duration-600 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              خدمة احترافية سريعة لمعالجة انسداد المجاري وتنظيف مواسير الصرف بأحدث أجهزة الكمبروسر — نصل إليك خلال 30 دقيقة في جميع أحياء الرياض
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-500 delay-500 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <a
                href="https://wa.me/966576807249"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base justify-center"
                onClick={() => trackContactAction('whatsapp')}
              >
                <MessageCircle size={20} />
                تواصل واتساب
              </a>
              <a
                href="tel:+966576807249"
                className="btn-primary text-base justify-center"
                onClick={() => trackContactAction('phone')}
              >
                <Phone size={20} />
                اتصل الآن: 0576807249
              </a>
            </div>
          </div>

          {/* Floating badges */}
          <div className="hidden lg:flex flex-col gap-4 mt-8">
            {[
              { icon: Clock, text: 'نصل خلال 30 دقيقة', delay: 'delay-600' },
              { icon: Shield, text: 'خدمة 24 ساعة', delay: 'delay-700' },
              { icon: BadgeCheck, text: 'ضمان على الخدمة', delay: 'delay-800' },
            ].map((badge, i) => (
              <div
                key={i}
                className={`glass-panel rounded-xl px-5 py-4 flex items-center gap-3 transition-all duration-500 ${badge.delay} ${
                  loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ animationDelay: `${0.6 + i * 0.15}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-yellow-brand/10 flex items-center justify-center flex-shrink-0">
                  <badge.icon size={20} className="text-yellow-brand" />
                </div>
                <span className="text-white font-semibold text-sm whitespace-nowrap">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stats strip */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-20 transition-all duration-700 delay-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="glass-panel">
          <div className="section-container py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat, i) => (
                <StatItem key={i} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
