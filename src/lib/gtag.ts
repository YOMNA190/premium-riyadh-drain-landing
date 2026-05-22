/**
 * Google Ads Conversion Tracking Utility
 * Uses the global function defined in index.html
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

/**
 * Calls the global conversion report function
 */
export function gtag_report_conversion(url?: string) {
  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
    return window.gtag_report_conversion(url);
  } else if (typeof window !== 'undefined' && window.gtag) {
    // Fallback if global function is not yet defined
    window.gtag('event', 'conversion', {
      'send_to': 'AW-18177050440/mIreCM7hoLEcEMiOv9tD',
      'event_callback': () => {
        if (typeof url !== 'undefined' && url !== '') {
          window.location.href = url;
        }
      }
    });
    return false;
  }
  
  if (typeof url !== 'undefined' && url !== '') {
    window.location.href = url;
  }
  return false;
}

/**
 * Helper for React onClick events
 */
export function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>, method: 'phone' | 'whatsapp') {
  const url = e.currentTarget.href;
  
  if (method === 'whatsapp') {
    gtag_report_conversion();
    return; // Let default behavior open WhatsApp
  }
  
  e.preventDefault();
  gtag_report_conversion(url);
}
