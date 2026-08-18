/**
 * رسومات صناعية بصيغة SVG — مستوحاة من الشكل الموجود داخل اللوجو
 * تستخدم currentColor علشان تتلوّن حسب القسم اللي حواليها
 */

type Props = { className?: string }

/** برج الحفر — هيكل شبكي */
function Derrick({ cx, base, top }: { cx: number; base: number; top: number }) {
  const levels = 11
  const baseHalf = 52
  const topHalf = 13
  const pts = Array.from({ length: levels + 1 }, (_, i) => {
    const t = i / levels
    return { y: base + (top - base) * t, hw: baseHalf + (topHalf - baseHalf) * t }
  })

  return (
    <g>
      {/* الأرجل */}
      <path
        d={`M${cx - baseHalf} ${base} L${cx - topHalf} ${top} M${cx + baseHalf} ${base} L${cx + topHalf} ${top}`}
        strokeWidth={2.4}
      />
      {/* العوارض الأفقية */}
      {pts.map((p, i) => (
        <line key={`r${i}`} x1={cx - p.hw} y1={p.y} x2={cx + p.hw} y2={p.y} strokeWidth={1.5} />
      ))}
      {/* التقاطعات */}
      {pts.slice(0, -1).map((p, i) => {
        const n = pts[i + 1]
        return (
          <g key={`x${i}`} strokeWidth={1}>
            <line x1={cx - p.hw} y1={p.y} x2={cx + n.hw} y2={n.y} />
            <line x1={cx + p.hw} y1={p.y} x2={cx - n.hw} y2={n.y} />
          </g>
        )
      })}
      {/* التاج */}
      <path
        d={`M${cx - topHalf - 5} ${top} h${(topHalf + 5) * 2} M${cx - 6} ${top} v-13 h12 v13 M${cx} ${top - 13} v-9`}
        strokeWidth={1.8}
      />
      {/* الطاولة والمنصة */}
      <path d={`M${cx - baseHalf - 22} ${base} h${(baseHalf + 22) * 2}`} strokeWidth={3} />
      <path d={`M${cx - 20} ${base - 34} h40 v34 M${cx} ${base - 34} v-46`} strokeWidth={1.6} />
    </g>
  )
}

/** وحدة الضخ — Pump Jack */
function PumpJack({ x, base }: { x: number; base: number }) {
  const postTop = base - 96
  return (
    <g>
      {/* القاعدة */}
      <path d={`M${x - 92} ${base} h184`} strokeWidth={3} />
      <path d={`M${x - 78} ${base} v-16 h156 v16`} strokeWidth={1.6} />
      {/* عمود سامسون */}
      <path d={`M${x - 26} ${base - 16} L${x} ${postTop} L${x + 26} ${base - 16} Z`} strokeWidth={2.2} />
      <path d={`M${x - 14} ${base - 52} h28`} strokeWidth={1.2} />
      {/* الذراع الهزّاز */}
      <path d={`M${x - 74} ${postTop + 26} L${x + 78} ${postTop - 8}`} strokeWidth={7} strokeLinecap="round" />
      {/* رأس الحصان */}
      <path
        d={`M${x + 74} ${postTop - 10} q26 4 27 30 q1 26 -21 38 l-8 -12 q13 -9 12 -26 q-1 -17 -14 -20 Z`}
        strokeWidth={2}
      />
      {/* قضيب التوصيل */}
      <path d={`M${x + 82} ${postTop + 56} v${base - postTop - 56}`} strokeWidth={2.4} />
      <path d={`M${x + 70} ${base} h24`} strokeWidth={4} />
      {/* الثقل الموازن والمحرك */}
      <circle cx={x - 78} cy={postTop + 30} r={22} strokeWidth={2.2} />
      <circle cx={x - 78} cy={postTop + 30} r={7} strokeWidth={1.4} />
      <path d={`M${x - 78} ${postTop + 52} L${x - 62} ${base - 16}`} strokeWidth={2} />
      <path d={`M${x - 48} ${base - 16} h34 v-22 h-34 Z`} strokeWidth={1.6} />
    </g>
  )
}

/** برج تقطير */
function Column({
  x,
  base,
  height,
  width,
  bands = 4,
}: {
  x: number
  base: number
  height: number
  width: number
  bands?: number
}) {
  const top = base - height
  const hw = width / 2
  return (
    <g>
      <path d={`M${x - hw} ${base} v-${height - hw} a${hw} ${hw} 0 0 1 ${width} 0 v${height - hw} Z`} strokeWidth={2} />
      {Array.from({ length: bands }, (_, i) => {
        const y = top + hw + ((height - hw) / (bands + 1)) * (i + 1)
        return (
          <g key={i} strokeWidth={1.2}>
            <line x1={x - hw - 7} y1={y} x2={x + hw + 7} y2={y} />
          </g>
        )
      })}
      <path d={`M${x} ${top - hw} v-16`} strokeWidth={1.6} />
    </g>
  )
}

/** خزان تخزين */
function Tank({ x, base, w = 78, h = 52 }: { x: number; base: number; w?: number; h?: number }) {
  const hw = w / 2
  return (
    <g>
      <path d={`M${x - hw} ${base} v-${h} q${hw} -20 ${w} 0 v${h} Z`} strokeWidth={2} />
      <line x1={x - hw} y1={base - h + 8} x2={x + hw} y2={base - h + 8} strokeWidth={1.1} />
      <line x1={x - hw} y1={base - h / 2} x2={x + hw} y2={base - h / 2} strokeWidth={1.1} />
    </g>
  )
}

/** شبكة مواسير */
function PipeRack({ x1, x2, base }: { x1: number; x2: number; base: number }) {
  const supports = Math.max(2, Math.round((x2 - x1) / 90))
  return (
    <g>
      {[0, 9, 18].map((d) => (
        <line key={d} x1={x1} y1={base - 44 + d} x2={x2} y2={base - 44 + d} strokeWidth={1.6} />
      ))}
      {Array.from({ length: supports + 1 }, (_, i) => {
        const x = x1 + ((x2 - x1) / supports) * i
        return <line key={i} x1={x} y1={base - 48} x2={x} y2={base} strokeWidth={1.4} />
      })}
    </g>
  )
}

/** برج الشعلة */
function Flare({ x, base, h = 210 }: { x: number; base: number; h?: number }) {
  return (
    <g>
      <path d={`M${x - 11} ${base} L${x - 4} ${base - h} h8 L${x + 11} ${base} `} strokeWidth={1.8} />
      {Array.from({ length: 8 }, (_, i) => {
        const t = (i + 1) / 9
        const y = base - h * t
        const hw = 11 - 7 * t
        return <line key={i} x1={x - hw} y1={y} x2={x + hw} y2={y} strokeWidth={0.9} />
      })}
      <path d={`M${x - 5} ${base - h} q5 -16 5 -22 q4 10 5 22 Z`} strokeWidth={1.4} />
    </g>
  )
}

/**
 * الخط الصناعي الكامل — يُستخدم كخلفية للهيرو والأقسام الداكنة
 */
export function IndustrialSkyline({ className }: Props) {
  const base = 400
  return (
    <svg
      viewBox="0 0 1440 440"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
    >
      <g opacity={0.55}>
        <Flare x={128} base={base} h={228} />
        <Column x={236} base={base} height={196} width={40} bands={5} />
        <Column x={306} base={base} height={148} width={30} bands={3} />
        <Tank x={404} base={base} />
        <PipeRack x1={168} x2={470} base={base} />
      </g>

      <g opacity={0.95}>
        <Derrick cx={700} base={base} top={64} />
      </g>

      <g opacity={0.75}>
        <PumpJack x={1010} base={base} />
      </g>

      <g opacity={0.5}>
        <Tank x={1216} base={base} w={92} h={60} />
        <Column x={1330} base={base} height={168} width={34} bands={4} />
        <PipeRack x1={1140} x2={1400} base={base} />
      </g>

      {/* خط الأرض */}
      <line x1={0} y1={base} x2={1440} y2={base} strokeWidth={2.5} opacity={0.8} />
      <line x1={0} y1={base + 12} x2={1440} y2={base + 12} strokeWidth={1} opacity={0.35} />
    </svg>
  )
}

/** شبكة نقاط خفيفة كخلفية للأقسام */
export function DotGrid({ className }: Props) {
  return (
    <svg aria-hidden="true" className={className}>
      <defs>
        <pattern id="imac-dots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#imac-dots)" />
    </svg>
  )
}

/** نمط خطوط مائلة — يُستخدم كزخرفة جانبية */
export function DiagonalLines({ className }: Props) {
  return (
    <svg aria-hidden="true" className={className}>
      <defs>
        <pattern
          id="imac-diagonal"
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="12" stroke="currentColor" strokeWidth="1.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#imac-diagonal)" />
    </svg>
  )
}
