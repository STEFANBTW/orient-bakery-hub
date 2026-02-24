
# Orient Bakery Development Plan

## 1. Architectural Overview
We will build a multi-page React SPA using `HashRouter` to manage navigation between the different facets of the Orient Bakery business.

### Pages:
- **Home (Live Menu)**: Based on the first design. Focuses on "Freshness" and "Urgency".
- **Cake Architect**: Based on the second design. A tool for customers to customize tiered cakes.
- **Wholesale & Catering**: Based on the fifth design. A B2B focused portal for bulk ordering and event planning.
- **Our Story**: Based on the process sections of the fourth design.

## 2. Animation Scheme: "The Rising Dough"
To create an "exciting but not distracting" experience, we will use **Framer Motion** with the following scheme:

- **Soft Entry (Rise & Fade)**: Sections will use a staggered entry. As the user scrolls, components will drift up by 20px and fade in over 0.6s.
- **The Heat Pulse**: "Hot Now" and "Live" indicators will have a subtle scale-pulse (1.0 to 1.05) to draw the eye without being jittery.
- **Interactive Flourish**: 
    - Buttons will have a "squish" effect on click (scale 0.95).
    - Grid cards will lift (Y-translation) and gain a soft glow/shadow on hover.
- **Glazed Page Transitions**: Smooth cross-fades when switching between the Live Menu and the Architect tool.
- **Marquee Ticker**: A continuous, smooth horizontal scroll for the fresh batch alerts.

## 3. Technical Implementation
- **Styling**: Tailwind CSS with custom theme extensions for "Bakery Orange" (#f26c0d) and "Deep Coffee" (#221710).
- **Icons**: Material Icons for consistency with the design mocks.
- **Components**: Functional React components with heavy use of `framer-motion` for layout transitions.
