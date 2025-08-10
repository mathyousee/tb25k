import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScheduleList } from '@/components/ScheduleList';
import { getContentData, getSiteConfig } from '@/lib/content';
import { generateMetadata as genMetadata } from '@/lib/seo';

export const metadata = genMetadata({
  title: 'Race Schedule',
  description: 'Complete race day schedule for the MN Taco Bell 25K including packet pickup, start times, and post-race festivities.',
  path: '/schedule'
});

export default function SchedulePage() {
  const siteConfig = getSiteConfig();
  const content = getContentData('schedule');

  return (
    <>
      <Header siteConfig={siteConfig} />
      
      <main>
        {/* Page Hero */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="container-custom section-padding">
            <div className="text-center text-white">
              <h1 className="text-4xl font-extrabold sm:text-5xl">
                Race Day Schedule
              </h1>
              <p className="mt-4 text-xl max-w-2xl mx-auto">
                Everything you need to know to make race day smooth and enjoyable
              </p>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <ScheduleList 
                schedule={content.schedule}
                date={content.date}
              />
            </div>
          </div>
        </section>

        {/* Packet Pickup */}
        <section className="bg-neutral-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                Packet Pickup Information
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-6">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 mr-3 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-xl font-bold text-neutral-900">Race Day Pickup</h3>
                  </div>
                  <p className="text-neutral-600 mb-2">
                    <strong>Time:</strong> {content.packetPickup.raceDay}
                  </p>
                  <p className="text-neutral-600">
                    Available at the main event tent starting bright and early. We recommend arriving at least 30 minutes before your race start time.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-xl font-bold text-neutral-900">Pre-Race Pickup</h3>
                    <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Recommended</span>
                  </div>
                  <p className="text-neutral-600 mb-2">
                    <strong>Time:</strong> {content.packetPickup.preRace}
                  </p>
                  <p className="text-neutral-600">
                    Skip the race morning lines! Pick up your packet the evening before at our pre-race location (details will be emailed to registered participants).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Race Day Tips */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                Race Day Tips
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">What to Bring</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Registration confirmation email
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Valid photo ID
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Comfortable running gear
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Water bottle (optional)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Change of clothes for post-race
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Helpful Reminders</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Arrive early to avoid parking stress
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Check weather and dress appropriately
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Don't try anything new on race day
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Stay for the post-race celebration
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Remember timing chip return
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Notes */}
        <section className="bg-brand-accent/10 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-brand-primary mb-4">
                  Questions About Race Day?
                </h2>
                <p className="text-neutral-600 mb-6">
                  We want to make sure your race day experience is perfect. If you have any questions about the schedule, logistics, or what to expect, don't hesitate to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/faq" className="btn btn-primary">
                    Check Our FAQs
                  </a>
                  <a href="mailto:contact@mntacobell25k.com" className="btn btn-outline">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer siteConfig={siteConfig} />
    </>
  );
}