'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { trackContactFormSubmit } from '@/lib/analytics';

// Static config for client component
const siteConfig = {
  name: 'MN Taco Bell 25K',
  registrationUrl: 'https://example.com/register',
  tagline: 'A unique running race celebrating Taco Bell, fitness, and camaraderie.',
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    email: 'contact@mntacobell25k.com'
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, this would submit to Formspree or similar
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      trackContactFormSubmit();
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header siteConfig={siteConfig} />
      
      <main>
        {/* Page Hero */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="container-custom section-padding">
            <div className="text-center text-white">
              <h1 className="text-4xl font-extrabold sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 text-xl max-w-2xl mx-auto">
                Have questions about the MN Taco Bell 25K? We'd love to hear from you!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-4 mt-1 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-neutral-900">Email</h3>
                        <p className="text-neutral-600">contact@mntacobell25k.com</p>
                        <p className="text-sm text-neutral-500 mt-1">We typically respond within 24-48 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-4 mt-1 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-neutral-900">Response Time</h3>
                        <p className="text-neutral-600">24-48 hours for most inquiries</p>
                        <p className="text-sm text-neutral-500 mt-1">Urgent race day questions: call venue directly</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-4 mt-1 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-neutral-900">Quick Answers</h3>
                        <p className="text-neutral-600">Check our FAQ page first</p>
                        <a href="/faq" className="text-brand-primary hover:underline text-sm">
                          View Frequently Asked Questions →
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-neutral-200">
                    <h3 className="font-semibold text-neutral-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-neutral-400 hover:text-brand-primary">
                        <span className="sr-only">Facebook</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-brand-primary">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.343-1.046-2.343-2.343V9.356c0-1.297 1.046-2.343 2.343-2.343h7.098c1.297 0 2.343 1.046 2.343 2.343v5.289c0 1.297-1.046 2.343-2.343 2.343H8.449z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-brand-primary">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                    Send us a Message
                  </h2>

                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <svg className="w-12 h-12 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h3 className="text-lg font-semibold text-green-900 mb-2">Message Sent!</h3>
                      <p className="text-green-700">
                        Thank you for your message. We'll get back to you within 24-48 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        >
                          <option value="">Select a topic</option>
                          <option value="registration">Registration Questions</option>
                          <option value="race-day">Race Day Logistics</option>
                          <option value="volunteer">Volunteer Opportunities</option>
                          <option value="sponsorship">Sponsorship Inquiries</option>
                          <option value="media">Media Inquiries</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      {/* Honeypot field for spam protection */}
                      <input
                        type="text"
                        name="honeypot"
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn btn-primary text-lg py-4"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>

                      <p className="text-xs text-neutral-500 text-center">
                        By submitting this form, you agree to receive email responses from the MN Taco Bell 25K team.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer siteConfig={siteConfig} />
    </>
  );
}