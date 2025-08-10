import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { FormatSelector } from '@/components/FormatSelector';
import { ScheduleList } from '@/components/ScheduleList';
import { MapCard } from '@/components/MapCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { UpdatesList } from '@/components/UpdateCard';
import { SponsorGrid } from '@/components/SponsorGrid';
import { getContentData, getSiteConfig, getAllUpdates } from '@/lib/content';
import { generateMetadata as genMetadata, generateEventStructuredData } from '@/lib/seo';

export const metadata = genMetadata({
  title: 'Home',
  description: 'Join us for the MN Taco Bell 25K, a unique running race celebrating Taco Bell, fitness, and camaraderie. Choose your spice level and register today!'
});

export default function HomePage() {
  const siteConfig = getSiteConfig();
  const homeContent = getContentData('home');
  const scheduleContent = getContentData('schedule');
  const locationContent = getContentData('location');
  const faqContent = getContentData('faq');
  const updates = getAllUpdates();

  // Get preview items for home page
  const schedulePreview = scheduleContent.schedule.slice(0, 3);
  const faqPreview = faqContent.faqs.slice(0, 5);
  const updatesPreview = updates.slice(0, 3);

  return (
    <>
      <Header siteConfig={siteConfig} />
      
      <main>
        {/* Hero Section with Countdown */}
        <Hero
          title={homeContent.hero.title}
          subtitle={homeContent.hero.subtitle}
          description={homeContent.hero.description}
          ctaText={homeContent.hero.ctaText}
          showCountdown={true}
        />

        {/* Spice Level Format Selection */}
        <section id="formats">
          <FormatSelector
            formats={homeContent.spiceFormats}
            registrationUrl={siteConfig.registrationUrl}
          />
        </section>

        {/* Schedule Preview */}
        <section className="bg-neutral-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                {homeContent.sections.schedule.title}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
                {homeContent.sections.schedule.description}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <ScheduleList 
                schedule={schedulePreview}
                date={scheduleContent.date}
              />
              
              <div className="text-center mt-8">
                <a href="/schedule" className="btn btn-primary">
                  View Full Schedule
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Location Preview */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                {homeContent.sections.location.title}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
                {homeContent.sections.location.description}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="card p-8 text-center">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {locationContent.venue.name}
                </h3>
                <p className="text-lg text-neutral-600 mb-6">
                  {locationContent.venue.address}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/location" className="btn btn-primary">
                    View Location Details
                  </a>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationContent.venue.address)}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="bg-neutral-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                {homeContent.sections.updates.title}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
                {homeContent.sections.updates.description}
              </p>
            </div>
            
            <UpdatesList 
              updates={updatesPreview}
              showViewAll={true}
              limit={3}
            />
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                {homeContent.sections.faq.title}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
                {homeContent.sections.faq.description}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <FAQAccordion faqs={faqPreview} />
              </div>
              
              <div className="text-center mt-8">
                <a href="/faq" className="btn btn-primary">
                  View All FAQs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors */}
        {homeContent.sponsors && homeContent.sponsors.length > 0 && (
          <section className="bg-neutral-50 section-padding">
            <div className="container-custom">
              <SponsorGrid sponsors={homeContent.sponsors} />
            </div>
          </section>
        )}
      </main>

      <Footer siteConfig={siteConfig} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateEventStructuredData()),
        }}
      />
    </>
  );
}