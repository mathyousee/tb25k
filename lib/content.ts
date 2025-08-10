import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const contentDirectory = join(process.cwd(), 'content');
const configDirectory = join(process.cwd(), 'config');

export function getContentData(filename: string) {
  const filePath = join(contentDirectory, `${filename}.json`);
  const fileContents = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getSiteConfig() {
  const configPath = join(configDirectory, 'site.json');
  const fileContents = readFileSync(configPath, 'utf8');
  return JSON.parse(fileContents);
}

export function getSEOConfig() {
  const configPath = join(configDirectory, 'seo.json');
  const fileContents = readFileSync(configPath, 'utf8');
  return JSON.parse(fileContents);
}

export interface UpdatePost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export function getAllUpdates(): UpdatePost[] {
  const updatesDirectory = join(contentDirectory, 'updates');
  const filenames = readdirSync(updatesDirectory);
  
  const posts = filenames
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '');
      const fullPath = join(updatesDirectory, name);
      const fileContents = readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug: data.slug || slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return posts;
}

export function getUpdateBySlug(slug: string): UpdatePost | null {
  const updates = getAllUpdates();
  return updates.find((update) => update.slug === slug) || null;
}