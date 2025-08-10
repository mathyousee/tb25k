import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { UpdatesList } from '@/components/UpdateCard';
import { getAllUpdates, getSiteConfig } from '@/lib/content';
import { generateMetadata as genMetadata } from '@/lib/seo';

export const metadata = genMetadata({
  title: 'Race Updates',
  description: 'Stay up to date with the latest news and announcements for the MN Taco Bell 25K race.',
  path: '/updates'
});

export default function UpdatesPage() {
  const siteConfig = getSiteConfig();
  const updates = getAllUpdates();

  return (
    <>
      <Header siteConfig={siteConfig} />
      
      <main>
        {/* Page Hero */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="container-custom section-padding">
            <div className="text-center text-white">
              <h1 className="text-4xl font-extrabold sm:text-5xl">
                Race Updates & News
              </h1>
              <p className="mt-4 text-xl max-w-2xl mx-auto">
                Stay informed with the latest announcements, race information, and important updates
              </p>
            </div>
          </div>
        </div>

        {/* Updates List */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <UpdatesList updates={updates} />
            
            {updates.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📢</div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  No updates yet
                </h2>
                <p className="text-neutral-600 mb-6">
                  We'll be posting important race information, announcements, and updates here as race day approaches. Check back soon!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:contact@mntacobell25k.com?subject=Updates Subscription" className="btn btn-primary">
                    Get Email Updates
                  </a>
                  <a href="/" className="btn btn-outline">
                    Return to Home
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer siteConfig={siteConfig} />
    </>
  );
}