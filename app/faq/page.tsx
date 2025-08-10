import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FAQAccordion } from '@/components/FAQAccordion';
import { getContentData, getSiteConfig } from '@/lib/content';
import { generateMetadata as genMetadata } from '@/lib/seo';

export const metadata = genMetadata({
  title: 'Frequently Asked Questions',
  description: 'Get answers to common questions about the MN Taco Bell 25K including registration, race day logistics, and more.',
  path: '/faq'
});

export default function FAQPage() {
  const siteConfig = getSiteConfig();
  const content = getContentData('faq');

  return (
    <>
      <Header siteConfig={siteConfig} />
      
      <main>
        {/* Page Hero */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="container-custom section-padding">
            <div className="text-center text-white">
              <h1 className="text-4xl font-extrabold sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 text-xl max-w-2xl mx-auto">
                Got questions? We've got answers! Find everything you need to know about the MN Taco Bell 25K.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <FAQAccordion faqs={content.faqs} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer siteConfig={siteConfig} />
    </>
  );
}