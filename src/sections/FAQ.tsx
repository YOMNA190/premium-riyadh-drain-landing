import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'كم سعر تسليك المجاري بالرياض؟',
    answer: 'تبدأ أسعار تسليك المجاري من 300 ريال للحالات البسيطة. السعر النهائي يعتمد على نوع الانسداد ومكان تواجده وصعوبة الوصول. نقدم عرض سعر مجاني بعد المعاينة.',
  },
  {
    question: 'هل الخدمة متاحة 24 ساعة؟',
    answer: 'نعم، خدمة تسليك المجاري متاحة على مدار 24 ساعة طوال أيام الأسبوع بما في ذلك أيام العطل الرسمية. فريق الطوارئ جاهز للاستجابة الفورية.',
  },
  {
    question: 'كم مدة الوصول إلى الموقع؟',
    answer: 'متوسط وقت الوصول 30 دقيقة في معظم أحياء الرياض. قد يختلف الوقت حسب الموقع والزحمة المرورية. نؤكد لك وقت الوصول عند الاتصال.',
  },
  {
    question: 'هل تستخدمون الكمبروسر في التسليك؟',
    answer: 'نعم، نستخدم أحدث أجهزة الكمبروسر والضغط العالي التي تفتت أصعب الانسدادات بدون تكسير أو إتلاف المواسير.',
  },
  {
    question: 'هل تقدمون ضمان على الخدمة؟',
    answer: 'نعم، نقدم ضمان 6 أشهر على جميع أعمال التسليك. إذا تكررت المشكلة خلال فترة الضمان، نقدم الخدمة مجاناً.',
  },
  {
    question: 'ما هي مناطق تغطيتكم في الرياض؟',
    answer: 'نغطي جميع أحياء الرياض بما فيها شمال الرياض، شرق الرياض، حي الياسمين، حي الملقا، حي النرجس، الرمال، والصحافة والمناطق المجاورة.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-dark-bg">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="eyebrow">الأسئلة الشائعة</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            كل ما تريد معرفته عن خدمات التسليك
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`accordion-item reveal stagger-${(i % 5) + 1}`}>
                <button
                  onClick={() => toggle(i)}
                  className="accordion-question"
                  aria-expanded={isOpen}
                >
                  <span className="text-right flex-1">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 flex-shrink-0 mr-4 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="accordion-answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
