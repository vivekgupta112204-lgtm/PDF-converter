import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdUnitProps {
  slot: string;
  className?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
}

const AdUnit: React.FC<AdUnitProps> = ({ 
  slot, 
  className = "", 
  format = 'auto', 
  responsive = true 
}) => {
  const adRef = useRef<HTMLModElement>(null);
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  // Ref to track mounted state to prevent state updates/retries on unmounted component
  const isMounted = useRef(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Prevent multiple initializations
    if (isAdLoaded) return;

    let retryCount = 0;
    const maxRetries = 40; // Try for ~4-5 seconds

    const pushAd = () => {
      if (!isMounted.current) return;

      try {
        const element = adRef.current;
        // Ensure the element exists, has width, is visible in DOM (offsetParent), and isn't hidden by style
        if (element && 
            element.offsetWidth > 0 && 
            element.offsetParent !== null && 
            window.getComputedStyle(element).display !== 'none') {
          
          const adsbygoogle = window.adsbygoogle || [];
          adsbygoogle.push({});
          if (isMounted.current) {
            setIsAdLoaded(true);
          }
        } else {
          // If width is 0 or hidden, retry
          if (retryCount < maxRetries) {
            retryCount++;
            timeoutRef.current = setTimeout(pushAd, 100) as unknown as number;
          } else {
            console.warn(`AdUnit (slot ${slot}) skipped: Container not ready after retries.`);
          }
        }
      } catch (e) {
        console.error("AdSense error:", e);
      }
    };

    // Initial delay to ensure DOM is painted and layout is calculated
    timeoutRef.current = setTimeout(pushAd, 300) as unknown as number;

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [slot, isAdLoaded]);

  if (!slot) return null;

  return (
    <div className={`w-full flex flex-col items-center justify-center my-8 ${className}`}>
      <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Advertisement</span>
      <div className="w-full min-h-[100px] bg-slate-50/50 rounded-lg flex items-center justify-center overflow-hidden">
        <ins ref={adRef}
             className="adsbygoogle"
             style={{ display: 'block', width: '100%' }}
             data-ad-client="ca-pub-2014274337287264"
             data-ad-slot={slot}
             data-ad-format={format}
             data-full-width-responsive={responsive ? "true" : "false"}></ins>
      </div>
    </div>
  );
};

export default AdUnit;