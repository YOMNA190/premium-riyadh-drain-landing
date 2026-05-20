import { useState, useEffect } from 'react';
import { Star, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';

const reviews = [
  {
    name: 'محمد السالم',
    location: 'حي الياسمين',
    date: 'يناير 2026',
    rating: 5,
    text: 'خدمة ممتازة وسرعة رهيبة! وصلوا خلال 20 دقيقة وحلوا المشكلة من أول زيارة. أنصح الجميع بشدة.',
  },
  {
    name: 'عبدالله القحطاني',
    location: 'حي الملقا',
    date: 'ديسمبر 2025',
    rating: 5,
    text: 'أفضل شركة تسليك مجاري جربتها في الرياض. أسعار مناسبة وشغل نظيف ومنظم. الضمان يعطي راحة بال كبيرة.',
  },
  {
    name: 'فهد العتيبي',
    location: 'الرمال',
    date: 'نوفمبر 2025',
    rating: 4,
    text: 'فريق محترف ومعدات حديثة. حلوا انسداد مجاري المطبخ اللي عانينا منه شهر كامل في دقائق معدودة.',
  },
  {
    name: 'سعد الدوسري',
    location: 'حي النرجس',
    date: 'يناير 2026',
    rating: 5,
    text: 'خدمة 24 ساعة فعلاً! اتصلت عليهم الساعة 2 ليلاً ووصلوا بسرعة. معالجة طفح المجاري كانت احترافية.',
  },
  {
    name: 'ناصر المطيري',
    location: 'الصحافة',
    date: 'ديسمبر 2025',
    rating: 5,
    text: 'أشكر القائمين على هذه المؤسسة. التزام بالمواعيد وأسعار شفافة بدون أي مفاجآت.',
  },
  {
    name: 'خالد الشمري',
    location: 'شرق الرياض',
    date: 'نوفمبر 2025',
    rating: 5,
    text: 'جربت كثير من شركات التسليك لكن هذه المؤسسة تستحق اللقب. كمبروسر قوي وشغل نظيف.',
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  const visibleDesktop = 3;
  const maxIndex = Math.max(0, reviews.length - visibleDesktop);

  useEffect(() => {
    if (!isAuto) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isAuto, maxIndex]);

  const handlePrev = () => {
    setIsAuto(false);
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAuto(false);
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 lg:py-24 bg-dark-surface">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="eyebrow">آراء العملاء</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            ماذا يقول عملاؤنا عنا
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows - desktop only */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-dark-elevated border border-white/10 items-center justify-center text-gray-400 hover:text-yellow-brand hover:border-yellow-brand/30 transition-colors"
            aria-label="Previous review"
          >
            <ChevronRight size={20} />
          </button>
          <button
            onClick={handleNext}
            className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-dark-elevated border border-white/10 items-center justify-center text-gray-400 hover:text-yellow-brand hover:border-yellow-brand/30 transition-colors"
            aria-label="Next review"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-5"
              style={{ transform: `translateX(${current * (100 / 3 + 1.5)}%)` }}
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className={`card-testimonial flex-shrink-0 w-full lg:w-[calc(33.333%-14px)] reveal stagger-${(i % 3) + 1}`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={18}
                        className={j < review.rating ? 'text-yellow-brand fill-yellow-brand' : 'text-gray-600'}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 min-h-[80px]">
                    "{review.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-yellow-brand/10 flex items-center justify-center">
                      <span className="text-yellow-brand font-bold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{review.name}</p>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <MapPin size={12} />
                        <span>{review.location}</span>
                        <span>•</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAuto(false); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-yellow-brand' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
