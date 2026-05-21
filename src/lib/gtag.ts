/**
 * Google Ads Conversion Tracking Utility
 * This file handles all conversion tracking events for Google Ads
 */

// Define the window type to include gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a conversion event for Google Ads
 * @param conversionId - The conversion ID from Google Ads
 * @param conversionLabel - The conversion label from Google Ads
 * @param value - Optional conversion value
 * @param currency - Optional currency code (default: 'SAR')
 */
export function trackConversion(
  conversionId: string,
  conversionLabel: string,
  value?: number,
  currency: string = 'SAR'
) {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventData: any = {
      event_category: 'engagement',
      event_label: conversionLabel,
    };

    if (value) {
      eventData.value = value;
      eventData.currency = currency;
    }

    window.gtag('event', 'conversion', {
      ...eventData,
      'send_to': `${conversionId}/${conversionLabel}`,
    });

    console.log('✓ Conversion tracked:', {
      conversionId,
      conversionLabel,
      value,
      currency,
    });
  } else {
    console.warn('⚠ gtag is not available');
  }
}

/**
 * Track contact action (phone call or WhatsApp)
 * This is the main conversion action for the landing page
 */
export function trackContactAction(method: 'phone' | 'whatsapp') {
  // Conversion ID and label from Google Ads
  const CONVERSION_ID = '18177050440';
  const CONVERSION_LABEL = 'mIreCM7hoLEcEMiOv9tD';

  trackConversion(CONVERSION_ID, CONVERSION_LABEL, undefined, 'SAR');

  // Also push to dataLayer for additional tracking
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'contact_action',
      contact_method: method,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track page view event
 */
export function trackPageView() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'AW-18177050440', {
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }
}
