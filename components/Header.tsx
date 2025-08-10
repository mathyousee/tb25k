'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CTAButton } from './CTAButton';

interface SiteConfig {
  name: string;
  registrationUrl: string;
}

interface HeaderProps {
  siteConfig: SiteConfig;
}

export function Header({ siteConfig }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Registration', href: '/registration' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Location', href: '/location' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Updates', href: '/updates' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">{siteConfig.name}</span>
              <div className="text-2xl font-bold text-brand-primary">
                TB25K
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-neutral-600 hover:text-neutral-500 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-neutral-600 hover:text-brand-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <CTAButton variant="primary" href={siteConfig.registrationUrl}>
              Register Now
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-neutral-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-brand-primary">
                  TB25K
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-neutral-600 hover:text-neutral-500 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-neutral-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="ml-3 text-base font-medium text-neutral-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <CTAButton 
                variant="primary" 
                href={siteConfig.registrationUrl}
                className="w-full"
              >
                Register Now
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}