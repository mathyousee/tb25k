import Link from 'next/link';
import { UpdatePost } from '@/lib/content';

interface UpdateCardProps {
  update: UpdatePost;
  showExcerpt?: boolean;
  className?: string;
}

export function UpdateCard({ update, showExcerpt = true, className = '' }: UpdateCardProps) {
  const formattedDate = new Date(update.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className={`card p-6 hover:shadow-xl transition-shadow duration-200 ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <time className="text-sm text-brand-primary font-medium" dateTime={update.date}>
          {formattedDate}
        </time>
        <div className="bg-brand-accent/10 text-brand-primary px-2 py-1 rounded-full text-xs font-medium">
          Update
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2">
        <Link 
          href={`/updates/${update.slug}`}
          className="hover:text-brand-primary transition-colors duration-200"
        >
          {update.title}
        </Link>
      </h3>
      
      {showExcerpt && update.excerpt && (
        <p className="text-neutral-600 mb-4 line-clamp-3">
          {update.excerpt}
        </p>
      )}
      
      <Link 
        href={`/updates/${update.slug}`}
        className="inline-flex items-center text-brand-primary font-medium hover:text-brand-primary/80 transition-colors duration-200"
      >
        Read more
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </article>
  );
}

interface UpdatesListProps {
  updates: UpdatePost[];
  limit?: number;
  showViewAll?: boolean;
  className?: string;
}

export function UpdatesList({ updates, limit, showViewAll = false, className = '' }: UpdatesListProps) {
  const displayUpdates = limit ? updates.slice(0, limit) : updates;
  
  if (updates.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-6xl mb-4">📢</div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">No updates yet</h3>
        <p className="text-neutral-600">
          Check back soon for the latest race news and announcements!
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayUpdates.map((update) => (
          <UpdateCard key={update.slug} update={update} />
        ))}
      </div>
      
      {showViewAll && limit && updates.length > limit && (
        <div className="text-center mt-8">
          <Link 
            href="/updates"
            className="btn btn-outline"
          >
            View All Updates
          </Link>
        </div>
      )}
    </div>
  );
}