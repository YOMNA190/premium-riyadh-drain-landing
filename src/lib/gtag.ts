/**
 * Google Ads Conversion Tracking Utility
 * Official snippet implementation for "جهة اتصال"
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Official Google Ads conversion report function
 * @param url - Optional URL to redirect to after tracking
 */
export function gtag_report_conversion(url?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-18177050440/mIreCM7hoLEcEMiOv9tD',
      'event_callback': () => {
        if (typeof url !== 'undefined' && url !== '') {
          window.location.href = url;
        }
      }
    });
    console.log('✓ Conversion reported to Google Ads');
  } else {
    console.warn('⚠ gtag not found, redirecting directly');
    if (typeof url !== 'undefined' && url !== '') {
      window.location.href = url;
    }
  }
  return false;
}

/**
 * Helper for React onClick events
 */
export function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>, method: 'phone' | 'whatsapp') {
  const url = e.currentTarget.href;
  
  // For WhatsApp, we often want to open in new tab, so we don't use the callback redirect
  if (method === 'whatsapp') {
    gtag_report_conversion();
    return; // Let the default anchor behavior handle opening the new tab
  }
  
  // For phone calls, we trigger the conversion and let the default behavior happen
  // or use the callback if we want to be sure.
  e.preventDefault();
  gtag_report_conversion(url);
}
