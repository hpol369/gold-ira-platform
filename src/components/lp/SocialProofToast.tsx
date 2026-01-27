"use client";

import { useState, useEffect } from "react";
import { X, MapPin, Download } from "lucide-react";

// Realistic American names and states
const NAMES = [
    "Elizabeth", "Robert", "Patricia", "Michael", "Jennifer", "William", "Linda", "David",
    "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles",
    "Karen", "Christopher", "Nancy", "Daniel", "Betty", "Matthew", "Margaret", "Anthony",
    "Sandra", "Mark", "Ashley", "Donald", "Dorothy", "Steven", "Kimberly", "Paul",
    "Emily", "Andrew", "Donna", "Joshua", "Michelle", "Kenneth", "Carol", "Kevin",
    "Amanda", "Brian", "Melissa", "George", "Deborah", "Timothy", "Stephanie", "Ronald",
    "Rebecca", "Edward", "Sharon", "Jason", "Laura", "Jeffrey", "Cynthia", "Ryan",
];

const STATES = [
    "Texas", "Florida", "California", "Arizona", "Ohio", "Pennsylvania", "Georgia",
    "North Carolina", "Michigan", "Tennessee", "Virginia", "Indiana", "Missouri",
    "Wisconsin", "Colorado", "Alabama", "South Carolina", "Louisiana", "Kentucky",
    "Oregon", "Oklahoma", "Nevada", "Iowa", "Arkansas", "Utah", "Kansas", "New Mexico",
    "Nebraska", "West Virginia", "Idaho", "Montana", "Wyoming", "Alaska",
];

const ACTIONS = [
    { text: "downloaded the 2026 guide", icon: "download" },
    { text: "requested their free kit", icon: "download" },
    { text: "started their gold IRA", icon: "download" },
    { text: "claimed the free guide", icon: "download" },
];

function getRandomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomTime(): string {
    const minutes = Math.floor(Math.random() * 12) + 1;
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
}

interface SocialProofToastProps {
    variant?: "gold" | "silver";
}

export default function SocialProofToast({ variant = "gold" }: SocialProofToastProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [notification, setNotification] = useState({
        name: "Elizabeth",
        state: "Utah",
        action: ACTIONS[0].text,
        time: "3 minutes ago",
    });

    useEffect(() => {
        // Don't show on first load, wait a bit
        const initialDelay = setTimeout(() => {
            showNewNotification();
        }, 8000); // First notification after 8 seconds

        return () => clearTimeout(initialDelay);
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        // Auto-hide after 5 seconds
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        // Schedule next notification
        const nextTimer = setTimeout(() => {
            showNewNotification();
        }, 25000 + Math.random() * 20000); // 25-45 seconds

        return () => {
            clearTimeout(hideTimer);
            clearTimeout(nextTimer);
        };
    }, [isVisible, notification]);

    const showNewNotification = () => {
        setNotification({
            name: getRandomItem(NAMES),
            state: getRandomItem(STATES),
            action: getRandomItem(ACTIONS).text,
            time: getRandomTime(),
        });
        setIsVisible(true);
    };

    if (!isVisible) return null;

    const accentColor = variant === "gold" ? "text-amber-500" : "text-slate-300";

    return (
        <div
            className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-left-full duration-500"
            role="status"
            aria-live="polite"
        >
            <div className="bg-white rounded-lg shadow-2xl border-2 border-[#000080] overflow-hidden max-w-sm">
                {/* Top accent bar */}
                <div className="h-1 bg-[#B22234]"></div>

                <div className="p-4 flex items-start gap-3">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 bg-[#000080] rounded-full flex items-center justify-center">
                        <Download className="h-5 w-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <p className="text-slate-800 text-sm font-medium">
                            <span className={`font-bold ${accentColor}`}>{notification.name}</span>
                            {" "}from{" "}
                            <span className="font-semibold text-[#000080]">{notification.state}</span>
                            {" "}{notification.action}
                        </p>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {notification.time}
                        </p>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors"
                        aria-label="Close notification"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
