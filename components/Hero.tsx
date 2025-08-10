import { getSiteConfig } from '@/lib/content';
import { CTAButton } from './CTAButton';
import { Countdown } from './Countdown';

const siteConfig = getSiteConfig();

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  showCountdown?: boolean;
}

export function Hero({
  title = siteConfig.name,
  subtitle = siteConfig.tagline,
  description,
  ctaText = 'Register Now',
  showCountdown = true,
}: HeroProps) {
  return (
    <div className="relative bg-gradient-to-r from-brand-primary to-brand-secondary overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      
      <div className="relative container-custom section-padding">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xl text-brand-accent">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {new Date(siteConfig.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            
            <span className="hidden sm:inline">•</span>
            
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {siteConfig.location.cityState}
            </div>
          </div>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90">
            {subtitle}
          </p>
          
          {description && (
            <p className="mt-4 max-w-3xl mx-auto text-base text-white/80">
              {description}
            </p>
          )}

          {showCountdown && (
            <div className="mt-8">
              <Countdown targetDate={`${siteConfig.date}T${siteConfig.time}`} />
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton
              variant="secondary"
              size="lg"
              href={siteConfig.registrationUrl}
            >
              {ctaText}
            </CTAButton>
            
            <CTAButton
              variant="outline"
              size="lg"
              href="/schedule"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-brand-primary"
            >
              View Schedule
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}