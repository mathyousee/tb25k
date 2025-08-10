import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getUpdateBySlug, getAllUpdates, getSiteConfig } from '@/lib/content';
import { generateMetadata as genMetadata } from '@/lib/seo';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const updates = getAllUpdates();
  
  return updates.map((update) => ({
    slug: update.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const update = getUpdateBySlug(params.slug);
  
  if (!update) {
    return genMetadata({
      title: 'Update Not Found',
      description: 'The requested update could not be found.',
      path: `/updates/${params.slug}`
    });
  }

  return genMetadata({
    title: update.title,
    description: update.excerpt,
    path: `/updates/${params.slug}`
  });
}

export default function UpdatePost({ params }: Props) {
  const siteConfig = getSiteConfig();
  const update = getUpdateBySlug(params.slug);

  if (!update) {
    notFound();
  }

  const formattedDate = new Date(update.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Header siteConfig={siteConfig} />
      
      <main>
        {/* Article Header */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="container-custom section-padding">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="mb-4">
                <Link 
                  href="/updates"
                  className="inline-flex items-center text-brand-accent hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Updates
                </Link>
              </div>
              <h1 className="text-4xl font-extrabold sm:text-5xl mb-4">
                {update.title}
              </h1>
              <div className="flex items-center justify-center text-brand-accent">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <time dateTime={update.date}>{formattedDate}</time>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: update.content.replace(/\n/g, '<br />') }}
                />
              </div>
              
              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Link 
                    href="/updates"
                    className="btn btn-outline inline-flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    View All Updates
                  </Link>
                  
                  <div className="flex gap-2">
                    <Link href="/registration" className="btn btn-primary btn-sm">
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer siteConfig={siteConfig} />
    </>
  );
}