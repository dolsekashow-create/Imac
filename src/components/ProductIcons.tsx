import type { IconName } from '@/data/products'

type IconProps = { className?: string }

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

/** برج تقطير */
const Tower = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M8 21V7a4 4 0 0 1 8 0v14z" />
    <path d="M6.5 11h11M6.5 14.5h11M6.5 18h11" />
    <path d="M12 3V1.5M9.5 21h5" />
  </svg>
)

/** مواسير ووصلات */
const Pipe = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2 8.5h7.5v7H2z" />
    <path d="M9.5 6.5h2.5v11H9.5z" />
    <path d="M12 8.5h4a5.5 5.5 0 0 1 5.5 5.5V22" />
    <path d="M12 15.5h4a1.5 1.5 0 0 1 1.5 1.5V22" />
    <path d="M2 6.5v11" />
  </svg>
)

/** فلانش */
const Flange = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9.2" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="4.6" r="1.1" />
    <circle cx="12" cy="19.4" r="1.1" />
    <circle cx="4.6" cy="12" r="1.1" />
    <circle cx="19.4" cy="12" r="1.1" />
    <circle cx="6.8" cy="6.8" r="1.1" />
    <circle cx="17.2" cy="17.2" r="1.1" />
    <circle cx="17.2" cy="6.8" r="1.1" />
    <circle cx="6.8" cy="17.2" r="1.1" />
  </svg>
)

/** أنابيب — Tubes */
const Tube = (p: IconProps) => (
  <svg {...base} {...p}>
    <ellipse cx="6" cy="7.5" rx="3.4" ry="2.2" />
    <path d="M2.6 7.5v9c0 1.2 1.5 2.2 3.4 2.2s3.4-1 3.4-2.2v-9" />
    <ellipse cx="17" cy="5.6" rx="3.4" ry="2.2" />
    <path d="M13.6 5.6v9c0 1.2 1.5 2.2 3.4 2.2s3.4-1 3.4-2.2v-9" />
  </svg>
)

/** محبس */
const Valve = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 10.5 12 15l-8 4.5z" />
    <path d="M20 10.5 12 15l8 4.5z" />
    <path d="M12 15V7" />
    <path d="M7.5 5.2h9" />
    <path d="M12 7V5.2" />
    <circle cx="12" cy="3.2" r="1.4" />
    <path d="M2 19.5h4M18 19.5h4" />
  </svg>
)

/** مصيدة بخار */
const Steam = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="5" y="11" width="14" height="8.5" rx="1.6" />
    <path d="M2 15.2h3M19 15.2h3" />
    <circle cx="12" cy="15.2" r="2.2" />
    <path d="M8.5 8c0-1.4 1.6-1.4 1.6-2.8S8.5 3.8 8.5 2.4" />
    <path d="M13.9 8c0-1.4 1.6-1.4 1.6-2.8s-1.6-1.4-1.6-2.8" />
  </svg>
)

/** قرص أمان */
const Disc = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v4.2M12 16.8V21M3 12h4.2M16.8 12H21" />
    <path d="M12 7.2 9.4 12l3.6 1.6-1.6 3.2" />
  </svg>
)

/** منتجات صلب */
const Steel = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 16.6 12 20l9-3.4" />
    <path d="M3 12.8 12 16.2l9-3.4" />
    <path d="M3 9 12 12.4 21 9l-9-3.4z" />
  </svg>
)

/** جوانات وإحكام */
const Seal = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
  </svg>
)

/** خرطوم */
const Hose = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2 6.5h3.5v4H2z" />
    <path d="M18.5 13.5H22v4h-3.5z" />
    <path d="M5.5 8.5c5 0 3.5 7 8 7 2.2 0 3.4-.5 5-.5" />
    <path d="M5.5 8.5c5 0 3.5 7 8 7" opacity=".35" />
    <path d="M8.4 9.5v3M11 12.4v3M14.4 14v2.4" opacity=".8" />
  </svg>
)

/** جهاز قياس */
const Gauge = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="10.5" r="7.2" />
    <path d="M12 10.5 15.6 7" />
    <circle cx="12" cy="10.5" r="1" />
    <path d="M6.4 6.4 5.2 5.2M17.6 6.4l1.2-1.2M12 3.3V2" />
    <path d="M9.6 17.2 8.8 22h6.4l-.8-4.8" />
  </svg>
)

/** كيماويات */
const Chemical = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9.5 2.5v6.2L4.6 17.4A2.6 2.6 0 0 0 6.9 21.5h10.2a2.6 2.6 0 0 0 2.3-4.1L14.5 8.7V2.5" />
    <path d="M8.2 2.5h7.6" />
    <path d="M7.2 14.4h9.6" />
    <circle cx="10.6" cy="17.4" r=".9" />
    <circle cx="13.8" cy="18.6" r=".7" />
  </svg>
)

/** تتبّع حراري */
const Heat = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2 17.5c3 0 3-3 6-3s3 3 6 3 3-3 6-3" />
    <path d="M2 21c3 0 3-3 6-3s3 3 6 3 3-3 6-3" opacity=".45" />
    <path d="M7.5 10.5c0-2 2.5-2.4 2.5-4.6 0-1.4-1-2.4-2-3.4 2.8.4 5 2.6 5 5.2 0 1.6-.8 2.4-.8 3.4" />
    <path d="M15.5 11c.6-1 1-2 1-3.2" opacity=".5" />
  </svg>
)

const ICONS: Record<IconName, (p: IconProps) => React.ReactElement> = {
  tower: Tower,
  pipe: Pipe,
  flange: Flange,
  tube: Tube,
  valve: Valve,
  steam: Steam,
  disc: Disc,
  steel: Steel,
  seal: Seal,
  hose: Hose,
  gauge: Gauge,
  chemical: Chemical,
  heat: Heat,
}

export default function ProductIcon({
  name,
  className = 'h-8 w-8',
}: {
  name: IconName
  className?: string
}) {
  const Cmp = ICONS[name] ?? Tower
  return <Cmp className={className} />
}
