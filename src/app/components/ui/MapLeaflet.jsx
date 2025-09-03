"use client";

import { useEffect, useRef, useState } from "react";

const MapLeaflet = ({ lat = 55.6761, lng = 12.5683, zoom = 13 }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure we're in the browser and DOM is ready
    if (typeof window === "undefined" || !mapRef.current) return;

    const initMap = async () => {
      try {
        // Check if map is already initialized
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }

        // Clear any existing map container content
        if (mapRef.current) {
          mapRef.current.innerHTML = '';
          mapRef.current._leaflet_id = null;
        }

        // Dynamic import to avoid SSR issues
        const L = (await import("leaflet")).default;
        await import("leaflet/dist/leaflet.css");
        
        // Fix default icon paths
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "/leaflet/marker-icon-2x.png",
          iconUrl: "/leaflet/marker-icon.png",
          shadowUrl: "/leaflet/marker-shadow.png",
        });

        // Small delay to ensure container is properly mounted
        setTimeout(() => {
          if (mapRef.current && !mapInstanceRef.current) {
            mapInstanceRef.current = L.map(mapRef.current, {
              center: [lat, lng],
              zoom: zoom,
              scrollWheelZoom: false,
            });

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution: '© OpenStreetMap contributors'
            }).addTo(mapInstanceRef.current);

            L.marker([lat, lng]).addTo(mapInstanceRef.current)
              .bindPopup("Her finder du klinikken");

            setIsLoaded(true);
          }
        }, 100);

      } catch (error) {
        console.warn("Failed to load map:", error);
        setIsLoaded(false);
      }
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
        mapRef.current._leaflet_id = null;
      }
      setIsLoaded(false);
    };
  }, [lat, lng, zoom]);

  return (
    <div className="w-full h-40 rounded overflow-hidden bg-gray-100 relative">
      <div ref={mapRef} className="w-full h-full" />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
          Indlæser kort...
        </div>
      )}
    </div>
  );
};

export default MapLeaflet;
