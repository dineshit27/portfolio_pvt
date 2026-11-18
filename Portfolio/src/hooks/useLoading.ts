import { useState, useEffect } from 'react';

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Increased duration to allow for the full animation sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Wait for the full animation sequence (approx 3.6s) to complete

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
}