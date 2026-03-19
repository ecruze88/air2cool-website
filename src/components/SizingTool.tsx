'use client'

import { useState } from 'react'
import Link from 'next/link'

interface SizingToolProps {
  compact?: boolean
}

const SYSTEM_TYPES = [
  { value: 'ac',   title: 'Air conditioner',    sub: 'Central AC or heat pump cooling' },
  { value: 'heat', title: 'Heating system',     sub: 'Furnace, boiler, or heat pump heat' },
  { value: 'both', title: 'Full HVAC system',   sub: 'Heating + cooling replacement' },
  { value: 'mini', title: 'Mini split',          sub: 'Ductless single or multi-zone' },
]

const FLOOR_OPTIONS = [
  { value: '1', title: '1 floor',   sub: 'Ranch or flat' },
  { value: '2', title: '2 floors',  sub: 'Colonial, split-level' },
  { value: '3', title: '3+ floors', sub: 'Large home or townhouse' },
]

const INSULATION_OPTIONS = [
  { value: 'poor', title: 'Older home, drafty',   sub: 'Built before 1980, original windows, feels cold near walls' },
  { value: 'avg',  title: 'Average',              sub: 'Some upgrades done, reasonably comfortable but not tight' },
  { value: 'good', title: 'Well insulated',        sub: 'Recent windows, spray foam or blown-in insulation' },
]

const SUN_OPTIONS = [
  { value: 'shaded', title: 'Mostly shaded',     sub: 'Lots of trees, north-facing' },
  { value: 'avg',    title: 'Average exposure',  sub: 'Mix of sun and shade' },
  { value: 'sunny',  title: 'Very sunny',        sub: 'Open lot, south or west facing' },
]

const SYSTEM_LABEL: Record<string, string> = {
  ac:   'Central air conditioner',
  heat: 'Heating system',
  both: 'Full HVAC system',
  mini: 'Ductless mini split',
}

const INSULATION_LABEL: Record<string, string> = {
  poor: 'Needs more capacity (+15%)',
  avg:  'Standard',
  good: 'Slight reduction (−10%)',
}

const SUN_LABEL: Record<string, string> = {
  sunny:  'Higher load (+10%)',
  avg:    'Standard',
  shaded: 'Lower load (−10%)',
}

export default function SizingTool({ compact = false }: SizingToolProps) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<{
    type?: string
    sqft: number
    floors?: string
    insulation?: string
    sun?: string
  }>({ sqft: 1200 })
  const [result, setResult] = useState<{
    tons: number
    btu: number
    label: string
  } | null>(null)

  const py = compact ? 'py-5 md:py-8' : 'py-8 md:py-12'
  const px = 'px-4 md:px-8'

  function calcResult(finalAnswers: typeof answers) {
    const baseSqftPerTon = 450
    const insFactor = finalAnswers.insulation === 'poor' ? 0.85 : finalAnswers.insulation === 'good' ? 1.10 : 1.0
    const sunFactor = finalAnswers.sun === 'sunny' ? 0.90 : finalAnswers.sun === 'shaded' ? 1.10 : 1.0
    const floorFactor = finalAnswers.floors === '3' ? 0.95 : 1.0
    const effectiveSqft = finalAnswers.sqft / (insFactor * sunFactor * floorFactor)
    const rawTons = effectiveSqft / baseSqftPerTon
    const sizes = [1.5, 2, 2.5, 3, 3.5, 4, 5]
    const tons = sizes.reduce((prev, cur) =>
      Math.abs(cur - rawTons) < Math.abs(prev - rawTons) ? cur : prev
    )
    const btu = Math.round(tons * 12000)
    const label =
      tons <= 2 ? 'Good for smaller homes and condos.' :
      tons <= 3 ? 'Typical for most North Jersey homes.' :
      'Appropriate for larger homes — may benefit from zoning.'
    setResult({ tons, btu, label })
  }

  function reset() {
    setStep(0)
    setAnswers({ sqft: 1200 })
    setResult(null)
  }

  // Progress bar: 5 steps (0–4)
  const totalSteps = 5
  function ProgressBar() {
    return (
      <div className="flex gap-1.5 mb-6 md:mb-8" aria-label="Progress">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-2 rounded-full transition-all"
            style={{
              backgroundColor:
                i < step ? '#1e40af' :
                i === step ? 'rgba(30,64,175,0.4)' :
                '#e5e7eb',
            }}
          />
        ))}
      </div>
    )
  }

  // Reusable option card
  function OptionCard({
    value, title, sub, selected, onClick, cols = 2,
  }: {
    value: string; title: string; sub: string;
    selected: boolean; onClick: () => void; cols?: 2 | 3
  }) {
    void cols
    return (
      <button
        type="button"
        onClick={onClick}
        style={{
          border: selected ? '2px solid #1e40af' : '1px solid #e5e7eb',
          backgroundColor: selected ? '#e6f1fb' : '#ffffff',
          borderRadius: 12,
          padding: '14px 16px',
          textAlign: 'left',
          cursor: 'pointer',
          transition: 'all 0.15s',
          minHeight: 56,
          width: '100%',
        }}
      >
        <div style={{ fontWeight: 600, fontSize: 15, color: '#111827', marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.4 }}>{sub}</div>
      </button>
    )
  }

  // Next button
  function NextButton({ disabled, label = 'Next →', onClick }: { disabled?: boolean; label?: string; onClick: () => void }) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        style={{
          marginTop: 20,
          width: '100%',
          padding: '14px 24px',
          borderRadius: 999,
          fontWeight: 700,
          fontSize: 16,
          backgroundColor: '#1e40af',
          color: '#fff',
          border: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.4 : 1,
          pointerEvents: disabled ? 'none' : 'auto',
          minHeight: 52,
          transition: 'opacity 0.15s',
        }}
      >
        {label}
      </button>
    )
  }

  function BackButton({ onClick }: { onClick: () => void }) {
    return (
      <button
        type="button"
        onClick={onClick}
        style={{
          marginTop: 12,
          width: '100%',
          padding: '12px 24px',
          borderRadius: 999,
          fontWeight: 600,
          fontSize: 15,
          backgroundColor: 'transparent',
          color: '#6b7280',
          border: '1px solid #e5e7eb',
          cursor: 'pointer',
          minHeight: 48,
        }}
      >
        ← Back
      </button>
    )
  }

  const wrapperStyle: React.CSSProperties = {
    maxWidth: compact ? '100%' : 680,
    margin: '0 auto',
  }

  const innerStyle: React.CSSProperties = {
    background: '#fff',
    borderRadius: 16,
    border: '1px solid #e5e7eb',
    boxShadow: compact ? 'none' : '0 4px 24px rgba(0,0,0,0.07)',
  }

  if (result) {
    return (
      <div style={wrapperStyle}>
        <div style={innerStyle} className={`${py} ${px}`}>
          <ProgressBar />

          {/* Tonnage result */}
          <div className="text-center mb-6">
            <div style={{ fontSize: 56, fontWeight: 800, color: '#1e40af', lineHeight: 1 }}>
              {result.tons} tons
            </div>
            <p style={{ color: '#4b5563', marginTop: 8, fontSize: 16 }}>{result.label}</p>
          </div>

          {/* Summary card */}
          <div style={{ background: '#f9fafb', borderRadius: 12, padding: '16px 20px', marginBottom: 20 }}>
            {[
              ['Square footage', answers.sqft.toLocaleString() + ' sq ft'],
              ['System type', SYSTEM_LABEL[answers.type ?? 'ac']],
              ['Insulation factor', INSULATION_LABEL[answers.insulation ?? 'avg']],
              ['Sun exposure', SUN_LABEL[answers.sun ?? 'avg']],
              ['Estimated BTU/hr', result.btu.toLocaleString() + ' BTU/hr'],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 12,
                  padding: '8px 0',
                  borderBottom: '1px solid #e5e7eb',
                }}
              >
                <span style={{ fontSize: 14, color: '#6b7280', flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#111827', textAlign: 'right' }}>{value}</span>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.5, marginBottom: 20 }}>
            This estimate uses simplified guidelines (~400–600 sq ft per ton for NJ climates). It is NOT a Manual J load calculation and should not be used to purchase equipment. Actual sizing requires an in-home assessment — undersized and oversized systems both cost more to operate and wear out faster.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+12017875657"
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '14px 20px', borderRadius: 999, fontWeight: 700, fontSize: 15,
                backgroundColor: '#dc2626', color: '#fff', textDecoration: 'none', minHeight: 52,
              }}
            >
              Call (201) 787-5657
            </a>
            <Link
              href="/contact"
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '14px 20px', borderRadius: 999, fontWeight: 600, fontSize: 15,
                border: '2px solid #1e40af', color: '#1e40af', textDecoration: 'none', minHeight: 52,
              }}
            >
              Get free estimate →
            </Link>
          </div>

          {/* Start over */}
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={reset}
              style={{ fontSize: 13, color: '#9ca3af', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', minHeight: 44 }}
            >
              Start over
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={wrapperStyle}>
      <div style={innerStyle} className={`${py} ${px}`}>
        <ProgressBar />

        {/* Step 0 — System type */}
        {step === 0 && (
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 20, color: '#111827', marginBottom: 6 }}>
              What are you looking to size?
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 10,
                marginTop: 16,
              }}
              className="sizing-grid-2"
            >
              {SYSTEM_TYPES.map((opt) => (
                <OptionCard
                  key={opt.value}
                  value={opt.value}
                  title={opt.title}
                  sub={opt.sub}
                  selected={answers.type === opt.value}
                  onClick={() => setAnswers(a => ({ ...a, type: opt.value }))}
                />
              ))}
            </div>
            <NextButton
              disabled={!answers.type}
              onClick={() => setStep(1)}
            />
          </div>
        )}

        {/* Step 1 — Square footage */}
        {step === 1 && (
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 20, color: '#111827', marginBottom: 4 }}>
              What&apos;s your home&apos;s square footage?
            </h3>
            <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 20 }}>
              Approximate is fine — we&apos;re estimating, not engineering.
            </p>

            {/* Current value display */}
            <div style={{ textAlign: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: 36, fontWeight: 800, color: '#1e40af' }}>
                {answers.sqft.toLocaleString()}
              </span>
              <span style={{ fontSize: 18, color: '#6b7280', marginLeft: 6 }}>sq ft</span>
            </div>

            {/* Slider */}
            <input
              type="range"
              min={400}
              max={4000}
              step={100}
              value={answers.sqft}
              onChange={(e) => setAnswers(a => ({ ...a, sqft: Number(e.target.value) }))}
              style={{ width: '100%', marginBottom: 16, accentColor: '#1e40af', height: 6 }}
            />

            {/* Presets */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 4 }}>
              {[
                { label: 'Small', value: 800 },
                { label: 'Average', value: 1200 },
                { label: 'Large', value: 1800 },
                { label: 'XL', value: 2500 },
                { label: 'Estate', value: 3500 },
              ].map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setAnswers(a => ({ ...a, sqft: p.value }))}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 600,
                    border: answers.sqft === p.value ? '2px solid #1e40af' : '1px solid #e5e7eb',
                    backgroundColor: answers.sqft === p.value ? '#e6f1fb' : '#f9fafb',
                    color: answers.sqft === p.value ? '#1e40af' : '#374151',
                    cursor: 'pointer',
                    minHeight: 44,
                  }}
                >
                  {p.label}<br />
                  <span style={{ fontSize: 11, fontWeight: 400, color: '#9ca3af' }}>{p.value.toLocaleString()}</span>
                </button>
              ))}
            </div>

            <NextButton disabled={false} onClick={() => setStep(2)} />
            <BackButton onClick={() => setStep(0)} />
          </div>
        )}

        {/* Step 2 — Floors */}
        {step === 2 && (
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 20, color: '#111827', marginBottom: 16 }}>
              How many floors does your home have?
            </h3>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}
              className="sizing-grid-3"
            >
              {FLOOR_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.value}
                  value={opt.value}
                  title={opt.title}
                  sub={opt.sub}
                  selected={answers.floors === opt.value}
                  onClick={() => setAnswers(a => ({ ...a, floors: opt.value }))}
                  cols={3}
                />
              ))}
            </div>
            <NextButton disabled={!answers.floors} onClick={() => setStep(3)} />
            <BackButton onClick={() => setStep(1)} />
          </div>
        )}

        {/* Step 3 — Insulation */}
        {step === 3 && (
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 20, color: '#111827', marginBottom: 4 }}>
              How would you describe the insulation?
            </h3>
            <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 16 }}>
              Older homes in NJ often have poor insulation — be honest, it affects the estimate.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {INSULATION_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.value}
                  value={opt.value}
                  title={opt.title}
                  sub={opt.sub}
                  selected={answers.insulation === opt.value}
                  onClick={() => setAnswers(a => ({ ...a, insulation: opt.value }))}
                />
              ))}
            </div>
            <NextButton disabled={!answers.insulation} onClick={() => setStep(4)} />
            <BackButton onClick={() => setStep(2)} />
          </div>
        )}

        {/* Step 4 — Sun exposure */}
        {step === 4 && (
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 20, color: '#111827', marginBottom: 4 }}>
              How sunny is your home?
            </h3>
            <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 16 }}>
              South-facing windows and little shade increase cooling load significantly.
            </p>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}
              className="sizing-grid-3"
            >
              {SUN_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.value}
                  value={opt.value}
                  title={opt.title}
                  sub={opt.sub}
                  selected={answers.sun === opt.value}
                  onClick={() => setAnswers(a => ({ ...a, sun: opt.value }))}
                  cols={3}
                />
              ))}
            </div>
            <NextButton
              disabled={!answers.sun}
              label="See my result"
              onClick={() => {
                const final = { ...answers }
                calcResult(final)
              }}
            />
            <BackButton onClick={() => setStep(3)} />
          </div>
        )}
      </div>

      {/* Responsive grid overrides */}
      <style>{`
        @media (max-width: 480px) {
          .sizing-grid-2 { grid-template-columns: 1fr !important; }
          .sizing-grid-3 { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 400px) {
          .sizing-ctas { flex-direction: column !important; }
        }
      `}</style>
    </div>
  )
}
