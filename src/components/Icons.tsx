import { type SVGProps } from "react";

// Small, consistent line icons (stroke-based) used in trust badges and lists.
// Decorative by default — always aria-hidden.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function PawIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="9" r="1.6" />
      <circle cx="12" cy="7.5" r="1.6" />
      <circle cx="17" cy="9" r="1.6" />
      <circle cx="19" cy="13.5" r="1.4" />
      <path d="M12 12c-2.4 0-4.5 1.6-5 3.8-.3 1.4.8 2.7 2.2 2.7.9 0 1.8-.4 2.8-.4s1.9.4 2.8.4c1.4 0 2.5-1.3 2.2-2.7-.5-2.2-2.6-3.8-5-3.8Z" />
    </svg>
  );
}

export function StethoscopeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3v4a4 4 0 0 0 8 0V3" />
      <path d="M9 15a5 5 0 0 0 5 5h.5a4.5 4.5 0 0 0 4.5-4.5V13" />
      <circle cx="19" cy="11" r="2" />
      <path d="M9 11v4" />
    </svg>
  );
}

export function BookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5V5.5Z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5A1.5 1.5 0 0 1 20 20.5V5.5Z" />
    </svg>
  );
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-6.5-4.3-8.7-8.2C1.9 8.9 3.3 6 6.2 6c1.9 0 3 1.1 3.8 2.2C10.8 7.1 11.9 6 13.8 6c2.9 0 4.3 2.9 2.9 5.8C18.5 15.7 12 20 12 20Z" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5H10l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3.5a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}
