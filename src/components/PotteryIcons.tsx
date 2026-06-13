import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

// School Meals: Traditional rounded pottery milk/honey jar
export function SchoolPot(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 3h8v2H8V3z" />
      <path d="M9 5v1.5C9 8.5 7 10 7 13.5v3.5A3.5 3.5 0 0 0 10.5 20.5h3A3.5 3.5 0 0 0 17 17v-3.5C17 10 15 8.5 15 6.5V5" />
      <path d="M7 13.5h10" strokeWidth="1.25" strokeDasharray="1.5 2" />
      <path d="M8.5 17h7" strokeWidth="1.25" />
    </svg>
  );
}

// Hotel Hospitality: Tall beverage urn or pitcher
export function HotelDallah(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 21h6v-6c0-2.5-2-4-2-5V6.5L12 5.5l-1 1V10c0 1-2 2.5-2 5v6z" />
      <path d="M12 5.5V3" />
      <path d="M10 5.5h4" />
      <path d="M9 11.5c-1.8 0-3 1.2-3 2.8s1.2 1.2 2 1.2" />
      <path d="M15 11.5c2 0 3 1.2 3 2.8s-1 3.2-3 3.2" />
    </svg>
  );
}

// Gatherings & Events: Large sharing serving bowl/tagine platter
export function EventBowl(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 10.5c0 4.5 3.5 7.5 9 7.5s9-3 9-7.5H3z" />
      <path d="M12 10.5V6.5" />
      <path d="M10 6.5h4" />
      <circle cx="12" cy="4.5" r="1" />
      <path d="M4.5 13.5c2 .75 5 .75 7.5 0s5.5-.75 7.5 0" strokeWidth="1" strokeDasharray="1.5 1.5" />
      <path d="M9 18v2a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 15 19v-2" />
    </svg>
  );
}

// Worksite Meals: Two-handled clay amphora / grain jar
export function WorksiteJar(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 3.5h6v1.5H9V3.5z" />
      <path d="M8.5 5v1.5c0 1.8 1.5 3 1.5 5.5v5A2.5 2.5 0 0 0 12.5 19.5h0A2.5 2.5 0 0 0 15 17v-5c0-2.5 1.5-3.7 1.5-5.5V5" />
      <path d="M8.5 7c-1.8 0-2.8 1.2-2.8 2.8s1 2.8 2.8 2.8" />
      <path d="M15.5 7c1.8 0 2.8 1.2 2.8 2.8s-1 2.8-2.8 2.8" />
    </svg>
  );
}

// Shift Meals: Conical clay tagine pot
export function ShiftTagine(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 7L6.5 16h11L12 7z" />
      <circle cx="12" cy="4.5" r="1.25" />
      <path d="M12 5.75v1.25" />
      <path d="M4.5 16h15v2.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V16z" />
      <path d="M3.5 16h17" strokeWidth="1.5" />
    </svg>
  );
}

// Office Tables: Standard finjan cup and pouring jar
export function OfficeFinjan(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.5 6.5h6v2H5.5v-2z" />
      <path d="M5 8.5v2c0 2.2 1.2 3 1.2 4.8v2A1.5 1.5 0 0 0 7.7 18.8h2.6A1.5 1.5 0 0 0 11.8 17.3v-2c0-1.8 1.2-2.6 1.2-4.8v-2" />
      <path d="M11.5 10.5c1.5 0 2.2.8 2.2 2s-.7 2-2.2 2" />
      <path d="M14.5 15.5H19v2.2A1.3 1.3 0 0 1 17.7 19h-.7a1.3 1.3 0 0 1-1.3-1.3v-2.2z" />
      <path d="M14 15.5h5.5" strokeWidth="1.5" />
    </svg>
  );
}

// RosetteIcon: 8-pointed traditional geometric Hijazi star/rosette
export function RosetteIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2l2.5 2.5h3.5v3.5l2.5 2.5-2.5 2.5v3.5h-3.5L12 22l-2.5-2.5H6v-3.5L3.5 13.5l2.5-2.5V7.5h3.5L12 2z" />
      <circle cx="12" cy="12" r="3.25" />
      <path d="M12 8.5v7M8.5 12h7" strokeWidth="1.25" />
    </svg>
  );
}

// LineJarIcon: Minimal elegant line-art clay jar
export function LineJarIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.5 4h5v1.5h-5z" />
      <path d="M9 5.5v1.5c0 2 1.5 2.5 1.5 4.5v4.5A2.5 2.5 0 0 0 13 18.5h0a2.5 2.5 0 0 0 2.5-2.5V12c0-2 1.5-2.5 1.5-4.5V5.5" />
      <path d="M7.5 19.5h9" strokeWidth="1.5" />
    </svg>
  );
}

