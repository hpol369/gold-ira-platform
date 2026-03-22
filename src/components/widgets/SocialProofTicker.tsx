// src/components/widgets/SocialProofTicker.tsx
// Subtle social proof notification with Patriot Light Theme
// Fixed position bottom-left, desktop only (lg:block)
// Shows cycling notifications with CSS animations (optimized for performance)

"use client";

import { useState, useEffect, useCallback, useRef, useTransition } from "react";
import { X, MapPin } from "lucide-react";

interface CuratedEntry {
  name: string;
  profession: string;
  state: string;
  action: string;
  timeAgo: string;
}

const CURATED_NOTIFICATIONS: CuratedEntry[] = [
  { name: "Robert T.", profession: "Retired Electrician", state: "Ohio", action: "requested their free Gold IRA kit", timeAgo: "just now" },
  { name: "Linda M.", profession: "Retired Nurse", state: "Florida", action: "downloaded the 2026 retirement guide", timeAgo: "2 minutes ago" },
  { name: "James W.", profession: "Former Truck Driver", state: "Texas", action: "completed their retirement readiness check", timeAgo: "3 minutes ago" },
  { name: "Patricia K.", profession: "Retired Teacher", state: "Pennsylvania", action: "requested a fee comparison", timeAgo: "5 minutes ago" },
  { name: "Gary S.", profession: "Retired Firefighter", state: "Michigan", action: "started their Gold IRA application", timeAgo: "just now" },
  { name: "Carol D.", profession: "Former Postal Worker", state: "North Carolina", action: "requested their free Gold IRA kit", timeAgo: "1 minute ago" },
  { name: "Dennis R.", profession: "Retired Police Officer", state: "Arizona", action: "downloaded the 2026 retirement guide", timeAgo: "8 minutes ago" },
  { name: "Sharon H.", profession: "Retired Factory Worker", state: "Indiana", action: "completed their retirement readiness check", timeAgo: "3 minutes ago" },
  { name: "Kenneth B.", profession: "Former Construction Foreman", state: "Tennessee", action: "requested their free Gold IRA kit", timeAgo: "5 minutes ago" },
  { name: "Barbara J.", profession: "Retired Government Worker", state: "Virginia", action: "requested a fee comparison", timeAgo: "2 minutes ago" },
  { name: "Ronald P.", profession: "Retired Machinist", state: "Wisconsin", action: "started their Gold IRA application", timeAgo: "just now" },
  { name: "Donna L.", profession: "Former School Secretary", state: "Georgia", action: "downloaded the 2026 retirement guide", timeAgo: "12 minutes ago" },
  { name: "Larry C.", profession: "Retired Plumber", state: "Missouri", action: "requested their free Gold IRA kit", timeAgo: "1 minute ago" },
  { name: "Nancy F.", profession: "Retired Nurse", state: "South Carolina", action: "completed their retirement readiness check", timeAgo: "8 minutes ago" },
  { name: "Wayne A.", profession: "Former Auto Mechanic", state: "Alabama", action: "requested a fee comparison", timeAgo: "3 minutes ago" },
  { name: "Susan E.", profession: "Retired Teacher", state: "Colorado", action: "started their Gold IRA application", timeAgo: "5 minutes ago" },
  { name: "Thomas G.", profession: "Retired Welder", state: "Kentucky", action: "requested their free Gold IRA kit", timeAgo: "2 minutes ago" },
  { name: "Margaret N.", profession: "Former Union Rep", state: "Illinois", action: "downloaded the 2026 retirement guide", timeAgo: "just now" },
  { name: "Richard V.", profession: "Retired Electrician", state: "Nevada", action: "completed their retirement readiness check", timeAgo: "15 minutes ago" },
  { name: "Deborah W.", profession: "Retired Cafeteria Worker", state: "Oklahoma", action: "requested their free Gold IRA kit", timeAgo: "1 minute ago" },
  { name: "Harold M.", profession: "Former Truck Driver", state: "Iowa", action: "requested a fee comparison", timeAgo: "5 minutes ago" },
  { name: "Judy R.", profession: "Retired Dispatcher", state: "Minnesota", action: "started their Gold IRA application", timeAgo: "3 minutes ago" },
  { name: "Carl T.", profession: "Retired Firefighter", state: "Louisiana", action: "downloaded the 2026 retirement guide", timeAgo: "8 minutes ago" },
  { name: "Betty S.", profession: "Former Medical Assistant", state: "Arkansas", action: "requested their free Gold IRA kit", timeAgo: "2 minutes ago" },
  { name: "Frank D.", profession: "Retired Postal Worker", state: "Oregon", action: "completed their retirement readiness check", timeAgo: "just now" },
];

/** Fisher-Yates shuffle (returns a new array) */
function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface Notification {
  id: number;
  name: string;
  profession: string;
  state: string;
  action: string;
  timeAgo: string;
}

export function SocialProofTicker() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [notificationId, setNotificationId] = useState(0);
  const [, startTransition] = useTransition();

  // Shuffled queue and current index, persisted across renders
  const queueRef = useRef<CuratedEntry[]>(shuffleArray(CURATED_NOTIFICATIONS));
  const indexRef = useRef(0);

  /** Get next entry from the shuffled queue, re-shuffling when exhausted */
  const getNextEntry = useCallback((): CuratedEntry => {
    if (indexRef.current >= queueRef.current.length) {
      queueRef.current = shuffleArray(CURATED_NOTIFICATIONS);
      indexRef.current = 0;
    }
    const entry = queueRef.current[indexRef.current];
    indexRef.current += 1;
    return entry;
  }, []);

  // Show a new notification
  const showNotification = useCallback(() => {
    if (isDismissed) return;

    const newId = notificationId + 1;
    const entry = getNextEntry();
    setNotificationId(newId);
    setCurrentNotification({
      id: newId,
      name: entry.name,
      profession: entry.profession,
      state: entry.state,
      action: entry.action,
      timeAgo: entry.timeAgo,
    });
    setIsExiting(false);
    setIsVisible(true);

    // Hide after 4 seconds
    setTimeout(() => {
      setIsExiting(true);
      // Wait for exit animation to complete
      setTimeout(() => {
        startTransition(() => {
          setIsVisible(false);
          setIsExiting(false);
        });
      }, 300);
    }, 4000);
  }, [isDismissed, notificationId, getNextEntry]);

  // Schedule next notification (15-30 seconds random)
  const scheduleNextNotification = useCallback(() => {
    if (isDismissed) return;

    const delay = Math.random() * 15000 + 15000; // 15-30 seconds
    return setTimeout(() => {
      showNotification();
    }, delay);
  }, [isDismissed, showNotification]);

  // Initial delay of 10 seconds before first notification
  useEffect(() => {
    if (isDismissed) return;

    const initialTimer = setTimeout(() => {
      showNotification();
    }, 10000);

    return () => clearTimeout(initialTimer);
  }, [isDismissed, showNotification]);

  // Schedule next notification after current one hides
  useEffect(() => {
    if (!isVisible && currentNotification && !isDismissed) {
      const timer = scheduleNextNotification();
      return () => {
        if (timer) clearTimeout(timer);
      };
    }
  }, [isVisible, currentNotification, isDismissed, scheduleNextNotification]);

  // Handle dismiss
  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsDismissed(true);
    }, 300);
  };

  // Don't render anything if permanently dismissed
  if (isDismissed && !isVisible) return null;

  return (
    <>
      {isVisible && currentNotification && (
        <div
          className={`fixed bottom-20 left-4 z-40 sm:bottom-6 sm:left-6 ${
            isExiting ? 'notification-exit' : 'notification-enter'
          }`}
        >
          <div className="relative max-w-[280px] sm:max-w-xs bg-white rounded-lg border border-slate-200 shadow-lg overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-700 transition-colors rounded-full hover:bg-slate-100"
              aria-label="Dismiss notifications"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="p-4 pr-8">
              {/* Main notification text */}
              <p className="text-sm text-slate-700 leading-relaxed">
                <span className="font-semibold text-[#B22234]">
                  {currentNotification.name}
                </span>
                {", "}
                <span className="text-slate-500">
                  {currentNotification.profession}
                </span>
                {" from "}
                <span className="font-medium text-slate-900">
                  {currentNotification.state}
                </span>
                {" — "}
                {currentNotification.action}
              </p>

              {/* Time and location indicator */}
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span className="text-xs text-slate-500">
                  {currentNotification.timeAgo}
                </span>
              </div>
            </div>

            {/* Subtle red accent line at bottom */}
            <div className="h-0.5 bg-gradient-to-r from-[#B22234]/50 via-[#B22234]/30 to-transparent" />
          </div>
        </div>
      )}
    </>
  );
}
