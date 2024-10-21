import React, { useEffect, useState, useRef } from 'react';

function GoogleMap() {
  const [isVisible, setIsVisible] = useState(false);  // State to track visibility
  const iframeRef = useRef(null);  // Reference to the iframe container

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);  // Set visibility when the map is in view
          observer.disconnect();  // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 }  // Trigger when 10% of the iframe is visible
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);  // Attach observer to the container
    }

    return () => {
      if (observer && iframeRef.current) {
        observer.unobserve(iframeRef.current);  // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div ref={iframeRef} style={{ minHeight: '300px' }}>
      {isVisible ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.447888070609!2d74.32870097442614!3d31.539320646207674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904958d88f07b%3A0x489650f4e9cb0cc3!2sSigma%20Engineering%20Services!5e0!3m2!1sen!2s!4v1728463706521!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"  // Optional: Double lazy-load
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <p>Loading map...</p>  // Placeholder while map is loading
      )}
    </div>
  );
}

export default GoogleMap;
