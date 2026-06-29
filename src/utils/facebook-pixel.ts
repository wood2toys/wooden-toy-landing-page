// Facebook Pixel Utility Functions

declare global {
  interface Window {
    fbq: any;
  }
}

// Track Purchase Event
export const trackPurchase = (value: number, currency: string = 'BDT') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency
    });
  }
};

// Track Add to Cart Event
export const trackAddToCart = (contentName: string, value: number, currency: string = 'BDT') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToCart', {
      content_name: contentName,
      value: value,
      currency: currency
    });
  }
};

// Track Lead Event (when someone fills the form)
export const trackLead = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
};

// Track InitiateCheckout Event
export const trackInitiateCheckout = (value: number, currency: string = 'BDT') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      value: value,
      currency: currency
    });
  }
};

// Track ViewContent Event
export const trackViewContent = (contentName: string, value: number, currency: string = 'BDT') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
      value: value,
      currency: currency
    });
  }
};