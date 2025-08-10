import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapCard } from '@/components/MapCard';
import { getContentData, getSiteConfig } from '@/lib/content';
import { generateMetadata as genMetadata } from '@/lib/seo';

export const metadata = genMetadata({
  title: 'Location & Directions',
  description: 'Find the MN Taco Bell 25K race location, parking information, and detailed directions. Get all the logistics you need for race day.',
  path: '/location'
});

export default function LocationPage() {
  const siteConfig = getSiteConfig();
  const content = getContentData('location');

  return (
    <>
      <Header siteConfig={siteConfig} />
      
      <main>
        {/* Page Hero */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="container-custom section-padding">
            <div className="text-center text-white">
              <h1 className="text-4xl font-extrabold sm:text-5xl">
                Location & Directions
              </h1>
              <p className="mt-4 text-xl max-w-2xl mx-auto">
                Find us at the heart of Minneapolis with convenient parking and transit options
              </p>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <MapCard locationData={content} />
            </div>
          </div>
        </section>

        {/* Detailed Directions */}
        <section className="bg-neutral-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                Driving Directions
              </h2>
              <p className="mt-4 text-xl text-neutral-600">
                Detailed directions from all directions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card p-6">
                  <h3 className="text-lg font-bold text-brand-primary mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    From the North
                  </h3>
                  <p className="text-neutral-700">{content.directions.fromNorth}</p>
                </div>

                <div className="card p-6">
                  <h3 className="text-lg font-bold text-brand-primary mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    From the South
                  </h3>
                  <p className="text-neutral-700">{content.directions.fromSouth}</p>
                </div>

                <div className="card p-6">
                  <h3 className="text-lg font-bold text-brand-primary mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    From the East
                  </h3>
                  <p className="text-neutral-700">{content.directions.fromEast}</p>
                </div>

                <div className="card p-6">
                  <h3 className="text-lg font-bold text-brand-primary mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    From the West
                  </h3>
                  <p className="text-neutral-700">{content.directions.fromWest}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Race Day Logistics */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                Race Day Logistics
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Timing & Arrival */}
                <div className="card p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 mx-auto bg-brand-primary rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">Arrival Time</h3>
                  </div>
                  <ul className="text-sm text-neutral-600 space-y-2">
                    <li>• Arrive 60-90 minutes early</li>
                    <li>• Allow extra time for parking</li>
                    <li>• Packet pickup opens at 6:00 AM</li>
                    <li>• First race starts at 8:00 AM</li>
                  </ul>
                </div>

                {/* Spectators */}
                <div className="card p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 mx-auto bg-brand-secondary rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">For Spectators</h3>
                  </div>
                  <ul className="text-sm text-neutral-600 space-y-2">
                    <li>• Multiple viewing areas along course</li>
                    <li>• Finish line festival is free</li>
                    <li>• Food and beverages available</li>
                    <li>• Family-friendly atmosphere</li>
                  </ul>
                </div>

                {/* Weather Backup */}
                <div className="card p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 mx-auto bg-brand-accent rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-neutral-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">Weather Policy</h3>
                  </div>
                  <ul className="text-sm text-neutral-600 space-y-2">
                    <li>• Race happens rain or shine</li>
                    <li>• Severe weather may delay start</li>
                    <li>• Updates via email & social media</li>
                    <li>• Indoor areas available at venue</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Questions */}
        <section className="bg-brand-primary/5 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">
                Need Help Finding Us?
              </h2>
              <p className="text-neutral-600 mb-6">
                If you have any questions about the location, parking, or getting to the race, we're here to help make sure you arrive stress-free and ready to run!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.venue.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Open in Google Maps
                </a>
                <a href="mailto:contact@mntacobell25k.com?subject=Location Question" className="btn btn-outline">
                  Email Us
                </a>
                <a href="/faq" className="btn btn-outline">
                  Check FAQs
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer siteConfig={siteConfig} />
    </>
  );
}