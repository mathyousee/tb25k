import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FAQAccordion } from '@/components/FAQAccordion';

const mockFAQs = [
  {
    id: 'test-faq-1',
    question: 'What is the MN Taco Bell 25K?',
    answer: 'The MN Taco Bell 25K is a unique running event that combines the thrill of racing with the fun of Taco Bell.'
  },
  {
    id: 'test-faq-2',
    question: 'When is the race?',
    answer: 'The race is scheduled for June 14, 2025.'
  }
];

describe('FAQAccordion Component', () => {
  it('renders all FAQ questions', () => {
    render(<FAQAccordion faqs={mockFAQs} />);
    
    expect(screen.getByText('What is the MN Taco Bell 25K?')).toBeInTheDocument();
    expect(screen.getByText('When is the race?')).toBeInTheDocument();
  });

  it('hides answers by default', () => {
    render(<FAQAccordion faqs={mockFAQs} />);
    
    // Answers should not be visible initially
    expect(screen.queryByText('The MN Taco Bell 25K is a unique running event')).not.toBeInTheDocument();
    expect(screen.queryByText('The race is scheduled for June 14, 2025.')).not.toBeInTheDocument();
  });

  it('shows answer when question is clicked', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion faqs={mockFAQs} />);
    
    const firstQuestion = screen.getByText('What is the MN Taco Bell 25K?');
    await user.click(firstQuestion);
    
    expect(screen.getByText('The MN Taco Bell 25K is a unique running event that combines the thrill of racing with the fun of Taco Bell.')).toBeInTheDocument();
  });

  it('toggles answer visibility when question is clicked multiple times', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion faqs={mockFAQs} />);
    
    const firstQuestion = screen.getByText('What is the MN Taco Bell 25K?');
    
    // Click to open
    await user.click(firstQuestion);
    expect(screen.getByText('The MN Taco Bell 25K is a unique running event that combines the thrill of racing with the fun of Taco Bell.')).toBeInTheDocument();
    
    // Click to close
    await user.click(firstQuestion);
    expect(screen.queryByText('The MN Taco Bell 25K is a unique running event that combines the thrill of racing with the fun of Taco Bell.')).not.toBeInTheDocument();
  });

  it('supports keyboard navigation with Enter key', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion faqs={mockFAQs} />);
    
    const firstQuestion = screen.getByText('What is the MN Taco Bell 25K?');
    firstQuestion.focus();
    
    await user.keyboard('{Enter}');
    
    expect(screen.getByText('The MN Taco Bell 25K is a unique running event that combines the thrill of racing with the fun of Taco Bell.')).toBeInTheDocument();
  });

  it('supports keyboard navigation with Space key', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion faqs={mockFAQs} />);
    
    const firstQuestion = screen.getByText('What is the MN Taco Bell 25K?');
    firstQuestion.focus();
    
    await user.keyboard('{ }'); // Space key
    
    expect(screen.getByText('The MN Taco Bell 25K is a unique running event that combines the thrill of racing with the fun of Taco Bell.')).toBeInTheDocument();
  });

  it('has proper ARIA attributes', () => {
    render(<FAQAccordion faqs={mockFAQs} />);
    
    const firstButton = screen.getByRole('button', { name: /What is the MN Taco Bell 25K?/ });
    
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    expect(firstButton).toHaveAttribute('aria-controls', 'faq-answer-test-faq-1');
    expect(firstButton).toHaveAttribute('id', 'faq-question-test-faq-1');
  });

  it('updates ARIA attributes when expanded', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion faqs={mockFAQs} />);
    
    const firstButton = screen.getByRole('button', { name: /What is the MN Taco Bell 25K?/ });
    await user.click(firstButton);
    
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
  });
});