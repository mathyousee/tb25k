import { render, screen } from '@testing-library/react';
import { Countdown } from '@/components/Countdown';

// Mock current date to a fixed point for testing
jest.useFakeTimers();

describe('Countdown Component', () => {
  beforeEach(() => {
    jest.setSystemTime(new Date('2025-05-01T10:00:00.000Z'));
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('displays countdown when target date is in the future', () => {
    const futureDate = '2025-06-14T08:00:00';
    
    render(<Countdown targetDate={futureDate} />);
    
    expect(screen.getByText('Countdown to Race Day')).toBeInTheDocument();
    expect(screen.getByText('Days')).toBeInTheDocument();
    expect(screen.getByText('Hours')).toBeInTheDocument();
    expect(screen.getByText('Minutes')).toBeInTheDocument();
    expect(screen.getByText('Seconds')).toBeInTheDocument();
  });

  it('shows the "Race Day!" message for past dates', () => {
    const pastDate = '2025-04-01T08:00:00';
    
    render(<Countdown targetDate={pastDate} />);
    
    // Check for the race day message elements
    expect(screen.getByText(/Race Day!/)).toBeInTheDocument();
    expect(screen.getByText('The big day is here!')).toBeInTheDocument();
  });

  it('calculates time differences correctly', () => {
    // Set a specific future date exactly 1 hour away
    const oneHourLater = '2025-05-01T11:00:00';
    
    render(<Countdown targetDate={oneHourLater} />);
    
    // Should show 0 days, 1 hour, 0 minutes, 0 seconds
    expect(screen.getByText('0')).toBeInTheDocument(); // days
    expect(screen.getByText('01')).toBeInTheDocument(); // hour
    expect(screen.getByText('00')).toBeInTheDocument(); // minutes (will appear twice)
  });
});