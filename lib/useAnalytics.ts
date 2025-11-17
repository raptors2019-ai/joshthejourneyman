import { useEffect } from 'react';

export function useAnalytics() {
  useEffect(() => {
    // Generate or retrieve user ID
    const getOrCreateUserId = () => {
      const key = 'analytics_user_id';
      let userId = localStorage.getItem(key);

      if (!userId) {
        userId = 'user_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem(key, userId);
      }

      return userId;
    };

    const userId = getOrCreateUserId();
    const sessionStart = new Date().toISOString();

    // Track page view
    const trackPageView = async () => {
      try {
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            sessionStart,
          }),
        });
      } catch (error) {
        console.error('Failed to track page view:', error);
      }
    };

    trackPageView();

    // Track when user leaves
    const handleBeforeUnload = async () => {
      const sessionEnd = new Date().toISOString();
      try {
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            sessionStart,
            sessionEnd,
          }),
          keepalive: true,
        });
      } catch (error) {
        console.error('Failed to track session end:', error);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
}
