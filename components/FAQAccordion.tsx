'use client';

import { useState } from 'react';
import classNames from 'classnames';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

export function FAQAccordion({ faqs, className = '' }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <div className={`bg-white ${className}`}>
      <div className="divide-y divide-neutral-200">
        {faqs.map((faq) => {
          const isOpen = openItems.has(faq.id);
          
          return (
            <div key={faq.id} className="group">
              <button
                type="button"
                className="w-full px-6 py-5 text-left flex justify-between items-start hover:bg-neutral-50 focus:outline-none focus:bg-neutral-50 transition-colors duration-200"
                onClick={() => toggleItem(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                id={`faq-question-${faq.id}`}
              >
                <span className="text-lg font-medium text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0 h-7 flex items-center">
                  <svg
                    className={classNames(
                      'h-6 w-6 transform transition-transform duration-200',
                      {
                        'rotate-180': isOpen,
                        'rotate-0': !isOpen,
                      }
                    )}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              
              <div
                id={`faq-answer-${faq.id}`}
                role="region"
                aria-labelledby={`faq-question-${faq.id}`}
                className={classNames(
                  'overflow-hidden transition-all duration-200 ease-in-out',
                  {
                    'max-h-96 opacity-100': isOpen,
                    'max-h-0 opacity-0': !isOpen,
                  }
                )}
              >
                <div className="px-6 pb-5">
                  <p className="text-base text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Contact Information */}
      <div className="mt-8 p-6 bg-brand-primary/5 rounded-lg">
        <h3 className="text-lg font-semibold text-brand-primary mb-3">
          Still have questions?
        </h3>
        <p className="text-neutral-600 mb-4">
          We're here to help! If you can't find the answer you're looking for, don't hesitate to reach out.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:contact@mntacobell25k.com"
            className="btn btn-primary inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Email Us
          </a>
          <a
            href="/contact"
            className="btn btn-outline inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Contact Form
          </a>
        </div>
        <p className="text-sm text-neutral-500 mt-3">
          We typically respond to emails within 24-48 hours.
        </p>
      </div>
    </div>
  );
}