import { MessageCircle, Phone } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex h-16">
        <a
          href="https://wa.me/966576807249"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold flex items-center justify-center gap-2 transition-colors"
        >
          <MessageCircle size={20} />
          <span>واتساب</span>
        </a>
        <a
          href="tel:+966576807249"
          className="flex-1 bg-yellow-brand hover:bg-yellow-hover text-dark-bg font-bold flex items-center justify-center gap-2 transition-colors"
        >
          <Phone size={20} />
          <span>اتصل الآن</span>
        </a>
      </div>
    </div>
  );
}
