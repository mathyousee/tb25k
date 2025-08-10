import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTAButton } from '@/components/CTAButton';
import { getContentData, getSiteConfig } from '@/lib/content';
import { generateMetadata as genMetadata } from '@/lib/seo';

export const metadata = genMetadata({
  title: 'Registration',
  description: 'Register for the MN Taco Bell 25K. Choose from three spice levels and secure your spot today!',
  path: '/registration'
});

export default function RegistrationPage() {
  const siteConfig = getSiteConfig();
  const content = getContentData('registration');
  
  const formatPrice = (price: string) => price;

  return (
    <>
      <Header siteConfig={siteConfig} />
      
      <main>
        {/* Page Hero */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="container-custom section-padding">
            <div className="text-center text-white">
              <h1 className="text-4xl font-extrabold sm:text-5xl">
                {content.title}
              </h1>
              <p className="mt-4 text-xl max-w-2xl mx-auto">
                {content.description}
              </p>
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <section className="bg-white section-padding">
          <div className="container-custom text-center">
            <div className="max-w-4xl mx-auto">
              <div className="card p-8 mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Ready to Register?
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Secure your spot for the MN Taco Bell 25K today! Choose your spice level and get ready for an unforgettable experience.
                </p>
                <CTAButton
                  variant="primary"
                  size="lg"
                  href={siteConfig.registrationUrl}
                >
                  Register Now
                </CTAButton>
                <p className="text-sm text-neutral-500 mt-4">
                  Registration opens in a new window
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Information */}
        <section className="bg-neutral-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                Pricing & Deadlines
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
                Register early to save! Prices increase as race day approaches.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Early Bird */}
              <div className="card p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Early Bird</h3>
                  <p className="text-neutral-600 mb-4">Until {content.pricing.earlyBird.deadline}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>5K Fun Run:</span>
                      <span className="font-semibold">{formatPrice(content.pricing.earlyBird.prices['5k'])}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>15K Challenge:</span>
                      <span className="font-semibold">{formatPrice(content.pricing.earlyBird.prices['15k'])}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>25K Ultra:</span>
                      <span className="font-semibold">{formatPrice(content.pricing.earlyBird.prices['25k'])}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regular */}
              <div className="card p-6 ring-2 ring-brand-primary">
                <div className="text-center">
                  <div className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">Regular</h3>
                  <p className="text-neutral-600 mb-4">Until {content.pricing.regular.deadline}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>5K Fun Run:</span>
                      <span className="font-semibold">{formatPrice(content.pricing.regular.prices['5k'])}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>15K Challenge:</span>
                      <span className="font-semibold">{formatPrice(content.pricing.regular.prices['15k'])}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>25K Ultra:</span>
                      <span className="font-semibold">{formatPrice(content.pricing.regular.prices['25k'])}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Late */}
              <div className="card p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-orange-600 mb-2">Late Registration</h3>
                  <p className="text-neutral-600 mb-4">Until {content.pricing.late.deadline}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>5K Fun Run:</span>
                      <span className="font-semibold">{formatPrice(content.pricing.late.prices['5k'])}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>15K Challenge:</span>
                      <span className="font-semibold">{formatPrice(content.pricing.late.prices['15k'])}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>25K Ultra:</span>
                      <span className="font-semibold">{formatPrice(content.pricing.late.prices['25k'])}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                What's Included
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-brand-primary mb-4">All Participants Receive</h3>
                  <ul className="space-y-3">
                    {content.included.all.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-bold text-brand-secondary mb-4">25K Ultra Bonus</h3>
                  <ul className="space-y-3">
                    {content.included['25k'].map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 mr-3 mt-0.5 text-brand-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="bg-neutral-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                Important Policies
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-primary mb-3">Refund Policy</h3>
                <p className="text-neutral-700">{content.policies.refund}</p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-primary mb-3">Age Requirements</h3>
                <p className="text-neutral-700">{content.policies.ageRestriction}</p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-brand-primary mb-3">Waivers</h3>
                <p className="text-neutral-700">{content.policies.waivers}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Group Options */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                Group & Corporate Options
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Team Registration</h3>
                <p className="text-neutral-700 mb-4">{content.groupOptions.teams}</p>
                <a href="mailto:contact@mntacobell25k.com?subject=Team Registration Inquiry" className="btn btn-outline">
                  Contact for Team Pricing
                </a>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Corporate Sponsorship</h3>
                <p className="text-neutral-700 mb-4">{content.groupOptions.corporate}</p>
                <a href="mailto:contact@mntacobell25k.com?subject=Corporate Sponsorship Inquiry" className="btn btn-outline">
                  Learn About Sponsorship
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-brand-primary to-brand-secondary section-padding">
          <div className="container-custom text-center">
            <div className="text-white">
              <h2 className="text-3xl font-extrabold mb-4">
                Don't Wait - Register Today!
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Spots are filling up fast. Secure your place in Minnesota's most unique running event.
              </p>
              <CTAButton
                variant="secondary"
                size="lg"
                href={siteConfig.registrationUrl}
              >
                Register Now
              </CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer siteConfig={siteConfig} />
    </>
  );
}