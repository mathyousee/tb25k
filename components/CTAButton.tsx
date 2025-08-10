'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { trackRegistrationClick } from '@/lib/analytics';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  disabled = false,
  target,
  rel,
}: CTAButtonProps) {
  const baseClasses = classNames(
    'btn',
    {
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-outline': variant === 'outline',
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3 text-base': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',
    },
    className
  );

  const handleClick = () => {
    // Track registration clicks for analytics
    if (href && (href.includes('register') || href.includes('registration'))) {
      trackRegistrationClick();
    }
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    // External link
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          className={baseClasses}
          onClick={handleClick}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
        >
          {children}
        </a>
      );
    }

    // Internal link
    return (
      <Link href={href} className={baseClasses} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  // Button
  return (
    <button
      type="button"
      className={baseClasses}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}