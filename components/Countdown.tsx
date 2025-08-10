'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isRaceDay, setIsRaceDay] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsRaceDay(false);
      } else {
        setIsRaceDay(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isRaceDay) {
    return (
      <div className="text-center">
        <div className="text-4xl font-bold text-brand-accent animate-pulse">
          🎉 Race Day! 🎉
        </div>
        <p className="text-white/90 mt-2">The big day is here!</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="text-white/90 text-lg mb-4">Countdown to Race Day</div>
      <div className="flex justify-center space-x-4 sm:space-x-8">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-brand-accent">
            {timeLeft.days}
          </div>
          <div className="text-white/80 text-sm uppercase tracking-wide">
            {timeLeft.days === 1 ? 'Day' : 'Days'}
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-brand-accent">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-white/80 text-sm uppercase tracking-wide">
            Hours
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-brand-accent">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-white/80 text-sm uppercase tracking-wide">
            Minutes
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-brand-accent">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-white/80 text-sm uppercase tracking-wide">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
}