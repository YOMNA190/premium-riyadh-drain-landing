import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 95, suffix: '%', label: 'نسبة رضا العملاء' },
  { value: 10000, prefix: '+', suffix: '', label: 'عملية نجاح' },
  { value: 0, suffix: '%', label: 'معدل تكرار المشكلة' },
];

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function CountUpStat({ value, prefix = '', suffix, label }: { value: number; prefix?: string; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
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
      const progress = Math.min(elapsed / 1500, 1);
      const easedProgress = easeOutExpo(progress);
      setCount(Math.floor(value * easedProgress));
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="stat-number">
        {prefix}{count.toLocaleString('ar-SA')}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-20 lg:py-24 bg-dark-bg">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="eyebrow">النتائج تتحدث</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            قبل وبعد خدماتنا
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            فرق واضح بين حالة الانسداد وبعد التسليك الاحترافي بأجهزة الكمبروسر
          </p>
        </div>

        {/* Before/After Panels */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Before - on the RIGHT for RTL */}
          <div className="flex-1 reveal-scale stagger-1">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/images/before.jpg"
                alt="مواسير مجاري مسدودة قبل التسليك"
                className="w-full h-64 lg:h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="bg-red-500/90 text-white text-sm font-bold px-4 py-2 rounded-lg">
                  قبل
                </span>
                <span className="text-white/80 text-sm">انسداد تام في المجاري</span>
              </div>
            </div>
          </div>

          {/* Divider with VS - hidden on mobile */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-yellow-brand flex items-center justify-center text-dark-bg font-bold text-sm z-10">
              VS
            </div>
          </div>

          {/* After - on the LEFT for RTL */}
          <div className="flex-1 reveal-scale stagger-2">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/images/after.jpg"
                alt="مواسير مجاري نظيفة بعد التسليك"
                className="w-full h-64 lg:h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="bg-green-500/90 text-white text-sm font-bold px-4 py-2 rounded-lg">
                  بعد
                </span>
                <span className="text-white/80 text-sm">تدفق طبيعي للمياه</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className={`reveal stagger-${i + 1}`}>
              <CountUpStat {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
