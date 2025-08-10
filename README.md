# MN Taco Bell 25K Landing Site

A Next.js-powered landing site for the Minnesota Taco Bell 25K running event, featuring three "spice levels" of racing challenges and a full celebration of Taco Bell, fitness, and community.

## 🌮 Project Overview

This site serves as the official landing page for the MN Taco Bell 25K—a unique running race where participants choose from three spice levels (Mild, Hot, Diablo) and enjoy Taco Bell-themed experiences throughout their racing journey.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mathyousee/tb25k.git
cd tb25k
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
tb25k/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with analytics
│   ├── page.tsx             # Home page
│   ├── registration/        # Registration details
│   ├── schedule/           # Race day schedule
│   ├── location/          # Venue and directions
│   ├── faq/              # Frequently asked questions
│   ├── updates/          # News and announcements
│   └── contact/         # Contact form
├── components/          # React components
│   ├── Header.tsx      # Site navigation
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Homepage hero section
│   ├── Countdown.tsx   # Race day countdown
│   ├── FormatSelector.tsx # Spice level chooser
│   ├── FAQAccordion.tsx   # Accessible FAQ component
│   └── ...
├── content/            # Static content files
│   ├── home.json      # Homepage content
│   ├── registration.json # Registration details
│   ├── schedule.json     # Event schedule
│   ├── location.json    # Venue information
│   ├── faq.json        # FAQ content
│   └── updates/       # Markdown blog posts
├── config/           # Configuration files
│   ├── site.json    # Site-wide settings
│   └── seo.json    # SEO defaults
├── lib/           # Utility functions
│   ├── content.ts # Content loading helpers
│   ├── seo.ts    # SEO metadata generation
│   └── analytics.tsx # Analytics integration
└── tests/       # Jest test files
```

## 🎨 Features

- **Responsive Design**: Mobile-first, accessible UI built with Tailwind CSS
- **Three Race Formats**: "Spice level" selector for 5K, 15K, and 25K distances
- **Real-time Countdown**: Dynamic countdown to race day
- **Accessible Components**: WCAG 2.1 AA compliant with keyboard navigation
- **SEO Optimized**: OpenGraph, Twitter cards, and JSON-LD event schema
- **Performance Focused**: Static generation with Next.js for fast loading
- **Analytics Ready**: Plug-and-play support for Plausible or Google Analytics

## 🔧 Content Management

### Updating Site Configuration

Edit `config/site.json`:
```json
{
  "name": "MN Taco Bell 25K",
  "date": "2025-06-14",
  "time": "08:00:00",
  "location": {
    "venue": "Your Venue Name",
    "address": "123 Main St, Minneapolis, MN 55401"
  },
  "registrationUrl": "https://your-registration-platform.com"
}
```

### Adding Race Updates

Create new Markdown files in `content/updates/`:
```markdown
---
title: "Your Update Title"
date: "2025-01-15"
excerpt: "Brief description of the update"
slug: "your-update-slug"
---

Your update content in Markdown format...
```

### Modifying Page Content

Update JSON files in the `content/` directory:
- `home.json` - Homepage content and spice level descriptions
- `registration.json` - Pricing, policies, and registration details
- `schedule.json` - Race day timeline and logistics
- `location.json` - Venue details and directions
- `faq.json` - Frequently asked questions

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

Run tests in watch mode during development:
```bash
npm run test:watch
```

## 📊 Analytics Setup

### Plausible Analytics (Recommended)
Set environment variable:
```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

### Google Analytics 4
Set environment variable:
```bash
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

## 🎯 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push to main

### Static Export
The site can be exported as static HTML:
```bash
npm run build
```
The `out/` directory contains deployable files.

## 🔍 SEO Features

- **Structured Data**: Event schema for rich search results
- **Meta Tags**: Complete OpenGraph and Twitter card support
- **Performance**: Optimized images and lazy loading
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🎨 Customization

### Colors and Branding
Edit `tailwind.config.ts` to update the color palette:
```typescript
colors: {
  brand: {
    primary: '#7C2D92',    // Taco Bell Purple
    secondary: '#FF7F37',  // Taco Bell Orange
    accent: '#FFD320',     // Taco Bell Yellow
  }
}
```

### Components
All components are built with Tailwind CSS and can be customized by editing the respective files in the `components/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌮 About the Event

The MN Taco Bell 25K celebrates the unique combination of fitness and fun, bringing together runners of all levels for an unforgettable experience that includes:

- **Three Spice Levels**: Choose your challenge from Mild (5K), Hot (15K), or Diablo (25K)
- **Taco Bell Integration**: Pre-race fuel, post-race celebration, and themed experiences
- **Community Focus**: Bringing together runners, families, and taco enthusiasts
- **Minnesota Pride**: Showcasing the best of Minneapolis running culture

Whether you're a seasoned marathoner or just looking for a fun way to stay active, the MN Taco Bell 25K has something for everyone. Join us for what promises to be an epic day of running, community, and tacos!

---

For questions about the site or event, contact us at [contact@mntacobell25k.com](mailto:contact@mntacobell25k.com).
