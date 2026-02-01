// src/components/widgets/SocialProofTicker.tsx
// Subtle social proof notification with Patriot Light Theme
// Fixed position bottom-left, desktop only (lg:block)
// Shows cycling notifications with CSS animations (optimized for performance)

"use client";

import { useState, useEffect, useCallback, useTransition } from "react";
import { X, MapPin } from "lucide-react";

// Common first names for realistic fake data
const FIRST_NAMES = [
  "Sarah", "Michael", "Jennifer", "David", "Lisa", "James", "Emily", "Robert",
  "Michelle", "William", "Jessica", "John", "Amanda", "Daniel", "Ashley",
  "Christopher", "Stephanie", "Matthew", "Nicole", "Anthony", "Elizabeth",
  "Mark", "Heather", "Steven", "Megan", "Paul", "Rachel", "Andrew", "Laura",
  "Kenneth", "Karen", "Joshua", "Susan", "Kevin", "Linda", "Brian", "Patricia",
  "George", "Barbara", "Timothy", "Nancy", "Ronald", "Betty", "Edward", "Margaret",
  "Thomas", "Sandra", "Richard", "Dorothy", "Charles", "Carol"
];

// US states for location diversity
const US_STATES = [
  "Texas", "California", "Florida", "New York", "Pennsylvania", "Illinois",
  "Ohio", "Georgia", "North Carolina", "Michigan", "New Jersey", "Virginia",
  "Washington", "Arizona", "Massachusetts", "Tennessee", "Indiana", "Missouri",
  "Maryland", "Wisconsin", "Colorado", "Minnesota", "South Carolina", "Alabama",
  "Louisiana", "Kentucky", "Oregon", "Oklahoma", "Connecticut", "Utah",
  "Nevada", "Iowa", "Arkansas", "Mississippi", "Kansas", "New Mexico"
];

// Actions users can take
const ACTIONS = [
  { text: "requested their free kit", icon: "kit" },
  { text: "started their retirement audit", icon: "audit" },
  { text: "downloaded the 2026 guide", icon: "guide" },
  { text: "requested a free consultation", icon: "consultation" },
  { text: "compared Gold IRA companies", icon: "compare" },
];

interface Notification {
  id: number;
  name: string;
  state: string;
  action: string;
  timeAgo: string;
}

// Helper to generate random time ago
function getRandomTimeAgo(): string {
  const options = [
    "just now",
    "1 minute ago",
    "2 minutes ago",
    "3 minutes ago",
    "5 minutes ago",
    "8 minutes ago",
    "12 minutes ago",
    "15 minutes ago",
  ];
  return options[Math.floor(Math.random() * options.length)];
}

// Helper to get random item from array
function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Generate a random notification
function generateNotification(id: number): Notification {
  return {
    id,
    name: getRandomItem(FIRST_NAMES),
    state: getRandomItem(US_STATES),
    action: getRandomItem(ACTIONS).text,
    timeAgo: getRandomTimeAgo(),
  };
}

export function SocialProofTicker() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [notificationId, setNotificationId] = useState(0);
  const [, startTransition] = useTransition();

  // Show a new notification
  const showNotification = useCallback(() => {
    if (isDismissed) return;

    const newId = notificationId + 1;
    setNotificationId(newId);
    setCurrentNotification(generateNotification(newId));
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
  }, [isDismissed, notificationId]);

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
          className={`fixed bottom-6 left-6 z-40 hidden lg:block ${
            isExiting ? 'notification-exit' : 'notification-enter'
          }`}
        >
          <div className="relative max-w-xs bg-white rounded-lg border border-slate-200 shadow-lg overflow-hidden">
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
                </span>{" "}
                from{" "}
                <span className="font-medium text-slate-900">
                  {currentNotification.state}
                </span>{" "}
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
