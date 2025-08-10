interface Sponsor {
  name: string;
  logo: string;
  website?: string;
  tier: 'title' | 'presenting' | 'gold' | 'silver' | 'bronze';
}

interface SponsorGridProps {
  sponsors: Sponsor[];
  className?: string;
}

export function SponsorGrid({ sponsors, className = '' }: SponsorGridProps) {
  if (sponsors.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-6xl mb-4">🤝</div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">Sponsors Welcome!</h3>
        <p className="text-neutral-600 mb-4">
          Interested in partnering with the MN Taco Bell 25K? We'd love to hear from you.
        </p>
        <a 
          href="mailto:contact@mntacobell25k.com?subject=Sponsorship Inquiry"
          className="btn btn-primary"
        >
          Contact Us About Sponsorship
        </a>
      </div>
    );
  }

  const getSponsorsByTier = (tier: string) => {
    return sponsors.filter(sponsor => sponsor.tier === tier);
  };

  const tierOrder = ['title', 'presenting', 'gold', 'silver', 'bronze'];
  const tierLabels = {
    title: 'Title Sponsor',
    presenting: 'Presenting Sponsors',
    gold: 'Gold Sponsors',
    silver: 'Silver Sponsors',
    bronze: 'Bronze Sponsors'
  };

  const getSponsorSizeClass = (tier: string) => {
    switch (tier) {
      case 'title':
        return 'h-24 md:h-32';
      case 'presenting':
        return 'h-20 md:h-24';
      case 'gold':
        return 'h-16 md:h-20';
      case 'silver':
        return 'h-12 md:h-16';
      case 'bronze':
        return 'h-10 md:h-12';
      default:
        return 'h-12 md:h-16';
    }
  };

  const getGridClass = (tier: string) => {
    switch (tier) {
      case 'title':
        return 'grid-cols-1 justify-items-center';
      case 'presenting':
        return 'grid-cols-1 md:grid-cols-2 justify-items-center';
      case 'gold':
        return 'grid-cols-2 md:grid-cols-3 justify-items-center';
      default:
        return 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center';
    }
  };

  return (
    <div className={`bg-white ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl mb-4">
          Our Amazing Sponsors
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-neutral-600">
          Thank you to our incredible sponsors who make the MN Taco Bell 25K possible!
        </p>
      </div>

      {tierOrder.map(tier => {
        const tierSponsors = getSponsorsByTier(tier);
        
        if (tierSponsors.length === 0) return null;

        return (
          <div key={tier} className="mb-12">
            <h3 className="text-xl font-bold text-center text-brand-primary mb-6">
              {tierLabels[tier as keyof typeof tierLabels]}
            </h3>
            
            <div className={`grid gap-6 ${getGridClass(tier)}`}>
              {tierSponsors.map((sponsor, index) => (
                <div
                  key={`${tier}-${index}`}
                  className="flex items-center justify-center p-4 rounded-lg border border-neutral-200 hover:border-brand-primary/30 transition-colors duration-200 bg-white"
                >
                  {sponsor.website ? (
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className={`object-contain ${getSponsorSizeClass(tier)} max-w-full`}
                      />
                    </a>
                  ) : (
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className={`object-contain ${getSponsorSizeClass(tier)} max-w-full`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="text-center pt-8 border-t border-neutral-200">
        <p className="text-neutral-600 mb-4">
          Interested in becoming a sponsor?
        </p>
        <a 
          href="mailto:contact@mntacobell25k.com?subject=Sponsorship Inquiry"
          className="btn btn-outline"
        >
          Learn About Sponsorship Opportunities
        </a>
      </div>
    </div>
  );
}