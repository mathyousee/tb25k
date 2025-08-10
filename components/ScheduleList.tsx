interface ScheduleItem {
  time: string;
  event: string;
  description: string;
}

interface ScheduleListProps {
  schedule: ScheduleItem[];
  date?: string;
  className?: string;
}

export function ScheduleList({ schedule, date, className = '' }: ScheduleListProps) {
  return (
    <div className={`bg-white ${className}`}>
      {date && (
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-neutral-900">Race Day Schedule</h3>
          <p className="text-lg text-brand-primary font-semibold mt-2">{date}</p>
        </div>
      )}
      
      <div className="space-y-4">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-lg border border-neutral-200 hover:border-brand-primary/30 transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="bg-brand-primary text-white px-4 py-2 rounded-lg text-center min-w-[100px]">
                <div className="font-bold text-lg">{item.time}</div>
              </div>
            </div>
            
            <div className="flex-grow">
              <h4 className="font-semibold text-lg text-neutral-900 mb-1">
                {item.event}
              </h4>
              <p className="text-neutral-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-brand-accent/10 rounded-lg">
        <h4 className="font-semibold text-brand-primary mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Important Notes
        </h4>
        <ul className="text-sm text-neutral-700 space-y-1">
          <li>• Arrive at least 30 minutes before your race start time</li>
          <li>• Timing chips must be returned after the race</li>
          <li>• Water stations available every 2.5K on the course</li>
          <li>• Medical support available throughout the event</li>
        </ul>
      </div>
    </div>
  );
}