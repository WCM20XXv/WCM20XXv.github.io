import { useState } from 'react'
import { Liquid } from 'liquid-gooey'

const RADIUS = 100
// Angles in degrees, measured clockwise from the positive x-axis (0 = right, 90 = down, 180 = left).
// This spreads the three icons into a fan below the trigger button.
const ANGLES = [140, 90, 40]

const links = [
  {
    href: 'https://www.linkedin.com/in/warren-caldwell/',
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin-in',
    external: true,
  },
  {
    href: 'https://github.com/WCM20XXv',
    label: 'GitHub',
    icon: 'fa-brands fa-github',
    external: true,
  },
  {
    href: 'resume.html',
    label: 'Resume',
    icon: 'fa-solid fa-file-lines',
    external: false,
  },
]

function petalOffset(angleDeg, open) {
  if (!open) return { x: 0, y: 0 }
  const rad = (angleDeg * Math.PI) / 180
  return { x: Math.round(Math.cos(rad) * RADIUS), y: Math.round(Math.sin(rad) * RADIUS) }
}

export default function SocialFab() {
  const [open, setOpen] = useState(false)

  return (
    <Liquid
      className="social-fab"
      blur={9}
      contrast={20}
      fill="var(--accent-brighter)"
      shadow="0 4px 14px rgba(0,0,0,.35)"
      filterPadding={RADIUS + 60}
    >
      {links.map((link, i) => {
        const { x, y } = petalOffset(ANGLES[i], open)
        return (
          <Liquid.Item
            key={link.href}
            x={x}
            y={y}
            transition={{ duration: 480, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            delay={i * 40}
          >
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              aria-label={link.label}
              className={`round-btn round-btn--petal${open ? ' is-open' : ''}`}
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              tabIndex={open ? 0 : -1}
            >
              <i className={link.icon} aria-hidden="true"></i>
            </a>
          </Liquid.Item>
        )
      })}

      <Liquid.Item>
        <button
          type="button"
          className="round-btn"
          aria-label={open ? 'Close social menu' : 'Open social menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-plus'} aria-hidden="true"></i>
        </button>
      </Liquid.Item>
    </Liquid>
  )
}
