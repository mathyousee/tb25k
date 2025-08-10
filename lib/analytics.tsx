'use client';

import Script from 'next/script';

interface AnalyticsProps {
  children?: React.ReactNode;
}

export function Analytics({ children }: AnalyticsProps) {
  // Analytics configuration from environment variables
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <>
      {/* Plausible Analytics */}
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
        />
      )}
      
      {/* Google Analytics 4 */}
      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}');
            `}
          </Script>
        </>
      )}
      {children}
    </>
  );
}

// Helper function to track events
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  // Plausible event tracking
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(eventName, { props: parameters });
  }
  
  // GA4 event tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
}

// Common event tracking functions
export const trackRegistrationClick = () => {
  trackEvent('registration_click', {
    event_category: 'engagement',
    event_label: 'cta_button',
  });
};

export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit', {
    event_category: 'form',
    event_label: 'contact',
  });
};

export const trackPageView = (path: string) => {
  trackEvent('page_view', {
    page_path: path,
  });
};