import Link from 'next/link';

interface SiteConfig {
  name: string;
  tagline: string;
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    email: string;
  };
}

interface FooterProps {
  siteConfig: SiteConfig;
}

export function Footer({ siteConfig }: FooterProps) {
  const footerNavigation = {
    race: [
      { name: 'Registration', href: '/registration' },
      { name: 'Schedule', href: '/schedule' },
      { name: 'Location', href: '/location' },
      { name: 'FAQ', href: '/faq' },
    ],
    company: [
      { name: 'Updates', href: '/updates' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: siteConfig.social.facebook || '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: siteConfig.social.instagram || '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.343-1.046-2.343-2.343V9.356c0-1.297 1.046-2.343 2.343-2.343h7.098c1.297 0 2.343 1.046 2.343 2.343v5.289c0 1.297-1.046 2.343-2.343 2.343H8.449z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: siteConfig.social.twitter || '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-neutral-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-custom section-padding">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <Link href="/" className="text-2xl font-bold text-brand-accent">
              {siteConfig.name}
            </Link>
            <p className="text-neutral-300 mt-4 text-base">
              {siteConfig.tagline}
            </p>
            <div className="flex space-x-6 mt-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-400 hover:text-neutral-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold text-neutral-200 tracking-wider uppercase">
                  Race Info
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.race.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-neutral-300 hover:text-neutral-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-semibold text-neutral-200 tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-neutral-300 hover:text-neutral-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-700 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-base text-neutral-300">
                Contact: {siteConfig.social.email}
              </p>
            </div>
            <p className="mt-8 text-base text-neutral-400 md:mt-0 md:order-1">
              &copy; 2025 {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}