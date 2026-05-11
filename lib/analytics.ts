declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    SavvyCal?: (action: string, options?: Record<string, unknown>) => void;
  }
}

function fbqTrack(event: string, eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(event, eventName, params);
  }
}

export const trackLead = () => fbqTrack('track', 'Lead');
export const trackSubscribe = () => fbqTrack('track', 'Subscribe');
export const trackContact = () => fbqTrack('track', 'Contact');

export function trackSchedule() {
  fbqTrack('track', 'Schedule');
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'schedule_call_opened');
  }
}

export function openSavvyCal() {
  if (typeof window !== 'undefined' && typeof window.SavvyCal === 'function') {
    window.SavvyCal('open', { link: 'tomasfigueroa/chat-with-tomas' });
  }
}

export function openBriefingModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('openBriefing'));
  }
}
