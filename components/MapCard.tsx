'use client';

import { useState } from 'react';

interface LocationData {
  venue: { name: string; address: string };
  mapEmbed: string;
  parking: { info: string; alternativeOptions: string[] };
  transit: { metro: string; bus: string; bike: string };
  accessibility: { facilities: string; accommodations: string; serviceAnimals: string };
  amenities: string[];
  directions: { fromNorth: string; fromSouth: string; fromEast: string; fromWest: string };
}

interface MapCardProps {
  locationData: LocationData;
  className?: string;
}

export function MapCard({ locationData, className = '' }: MapCardProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleGetDirections = (service: 'google' | 'apple') => {
    const address = encodeURIComponent(locationData.venue.address);
    if (service === 'google') {
      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
    } else {
      window.open(`http://maps.apple.com/?q=${address}`, '_blank');
    }
  };

  return (
    <div className={`bg-white ${className}`}>
      {/* Venue Information */}
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
          {locationData.venue.name}
        </h3>
        <p className="text-lg text-neutral-600 mb-4" id="venue-address">
          {locationData.venue.address}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => handleGetDirections('google')}
            className="btn btn-primary"
          >
            Get Directions (Google)
          </button>
          <button
            onClick={() => handleGetDirections('apple')}
            className="btn btn-outline"
          >
            Get Directions (Apple)
          </button>
        </div>
      </div>

      {/* Map Embed */}
      <div className="mb-8">
        <div className="relative w-full h-64 md:h-96 bg-neutral-200 rounded-lg overflow-hidden">
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setMapLoaded(true)}
                className="btn btn-primary"
              >
                Load Map
              </button>
            </div>
          )}
          {mapLoaded && (
            <iframe
              src={locationData.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Race location map"
            />
          )}
        </div>
      </div>

      {/* Parking Information */}
      <div className="mb-6">
        <h4 className="font-semibold text-lg text-brand-primary mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
          </svg>
          Parking & Transportation
        </h4>
        <p className="text-neutral-600 mb-3">{locationData.parking.info}</p>
        
        <div className="bg-neutral-50 rounded-lg p-4">
          <h5 className="font-medium text-neutral-900 mb-2">Alternative Options:</h5>
          <ul className="text-sm text-neutral-700 space-y-1">
            {locationData.parking.alternativeOptions.map((option, index) => (
              <li key={index}>• {option}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Transit Information */}
      <div className="mb-6">
        <h4 className="font-semibold text-lg text-brand-primary mb-3">Public Transit & Biking</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h5 className="font-medium text-neutral-900 mb-1">Metro</h5>
            <p className="text-sm text-neutral-600">{locationData.transit.metro}</p>
          </div>
          <div>
            <h5 className="font-medium text-neutral-900 mb-1">Bus</h5>
            <p className="text-sm text-neutral-600">{locationData.transit.bus}</p>
          </div>
          <div>
            <h5 className="font-medium text-neutral-900 mb-1">Bike</h5>
            <p className="text-sm text-neutral-600">{locationData.transit.bike}</p>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <h4 className="font-semibold text-lg text-brand-primary mb-3">Available Amenities</h4>
        <div className="grid sm:grid-cols-2 gap-2">
          {locationData.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center text-sm text-neutral-700">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {amenity}
            </div>
          ))}
        </div>
      </div>

      {/* Accessibility */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
          </svg>
          Accessibility Information
        </h4>
        <div className="space-y-2 text-sm text-blue-800">
          <p><strong>Facilities:</strong> {locationData.accessibility.facilities}</p>
          <p><strong>Accommodations:</strong> {locationData.accessibility.accommodations}</p>
          <p><strong>Service Animals:</strong> {locationData.accessibility.serviceAnimals}</p>
        </div>
      </div>
    </div>
  );
}