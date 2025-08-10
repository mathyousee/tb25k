'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { CTAButton } from './CTAButton';

interface SpiceFormat {
  id: string;
  name: string;
  distance: string;
  description: string;
  whoItsFor: string;
  nutrition: string;
  color: string;
}

interface FormatSelectorProps {
  formats: SpiceFormat[];
  registrationUrl: string;
}

export function FormatSelector({ formats, registrationUrl }: FormatSelectorProps) {
  const [selectedFormat, setSelectedFormat] = useState(formats[0]?.id || '');

  const selectedFormatData = formats.find(format => format.id === selectedFormat);

  const getColorClasses = (color: string, isSelected: boolean) => {
    const baseClasses = 'transition-all duration-200';
    
    if (color === 'green') {
      return classNames(baseClasses, {
        'bg-green-50 border-green-200 text-green-800': !isSelected,
        'bg-green-100 border-green-400 text-green-900': isSelected,
      });
    }
    if (color === 'orange') {
      return classNames(baseClasses, {
        'bg-orange-50 border-orange-200 text-orange-800': !isSelected,
        'bg-orange-100 border-orange-400 text-orange-900': isSelected,
      });
    }
    if (color === 'red') {
      return classNames(baseClasses, {
        'bg-red-50 border-red-200 text-red-800': !isSelected,
        'bg-red-100 border-red-400 text-red-900': isSelected,
      });
    }
    return baseClasses;
  };

  const getSpiceIcon = (color: string) => {
    const baseClass = "w-8 h-8 mx-auto mb-3";
    if (color === 'green') return '🌶️';
    if (color === 'orange') return '🌶️🌶️';
    if (color === 'red') return '🌶️🌶️🌶️';
    return '🌶️';
  };

  return (
    <div className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            How Spicy Are You Feeling?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
            Choose your challenge level and join the fun! Each distance includes unique Taco Bell experiences.
          </p>
        </div>

        {/* Format Selection Tabs */}
        <div className="mt-12">
          <div className="sm:hidden">
            <label htmlFor="format-select" className="sr-only">
              Select a format
            </label>
            <select
              id="format-select"
              name="format-select"
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md"
            >
              {formats.map((format) => (
                <option key={format.id} value={format.id}>
                  {format.name} - {format.distance}
                </option>
              ))}
            </select>
          </div>
          
          <div className="hidden sm:block">
            <nav className="flex space-x-8 justify-center" aria-label="Format selection">
              {formats.map((format) => (
                <button
                  key={format.id}
                  onClick={() => setSelectedFormat(format.id)}
                  className={classNames(
                    'px-8 py-4 rounded-xl border-2 text-center min-w-[200px]',
                    getColorClasses(format.color, format.id === selectedFormat),
                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary'
                  )}
                  aria-pressed={format.id === selectedFormat}
                >
                  <div className="text-2xl mb-2">{getSpiceIcon(format.color)}</div>
                  <div className="font-bold text-lg">{format.name}</div>
                  <div className="text-sm font-medium mt-1">{format.distance}</div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Selected Format Details */}
        {selectedFormatData && (
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="text-center">
                <div className="text-4xl mb-4">{getSpiceIcon(selectedFormatData.color)}</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {selectedFormatData.name} - {selectedFormatData.distance}
                </h3>
                <p className="text-lg text-neutral-600 mb-6">
                  {selectedFormatData.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <h4 className="font-semibold text-brand-primary mb-2">Who It's For</h4>
                  <p className="text-neutral-600">{selectedFormatData.whoItsFor}</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-brand-primary mb-2">Nutrition Experience</h4>
                  <p className="text-neutral-600">{selectedFormatData.nutrition}</p>
                </div>
              </div>
              
              <div className="text-center">
                <CTAButton
                  variant="primary"
                  size="lg"
                  href={registrationUrl}
                >
                  Register for {selectedFormatData.name}
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}