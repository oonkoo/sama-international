# SAMA Service Company Ltd. - Website Landing Page Plan

## Project Overview

A professional, corporate landing page for SAMA Service Company Ltd., a leading construction, MEP, and facility management company based in Jeddah, Saudi Arabia. The design should reflect the industrial/construction sector while maintaining a modern, trustworthy aesthetic aligned with Saudi Arabia's Vision 2030 ambitions.

---

## Design Direction

### Color Palette
- **Primary**: Deep Navy Blue (#1a365d) - Trust, professionalism, stability
- **Secondary**: Gold/Amber (#d4a853) - Premium quality, Saudi heritage
- **Accent**: Emerald Green (#059669) - Growth, Saudi national color, sustainability
- **Neutrals**: Slate grays, warm whites, charcoal for text

### Typography
- **Headings**: Bold, authoritative sans-serif (Geist Sans)
- **Body**: Clean, readable (Geist Sans)
- **Arabic Support**: RTL-ready layout structure included

### Visual Style
- Clean, grid-based layouts
- Strong geometric shapes (construction-inspired)
- Gradient backgrounds with subtle patterns
- Professional card-based design
- Subtle hover animations

---

## Progress Tracker

| Phase | Section | Priority | Status |
|-------|---------|----------|--------|
| 1.1 | Hero Section | High | DONE |
| 1.2 | Navigation Header | High | DONE |
| 2.1 | About Section | High | DONE |
| 2.2 | Vision & Mission | Medium | DONE |
| 3.1 | Services Grid | High | DONE |
| 4.1 | Featured Projects | High | DONE (6 projects) |
| 5.1 | Clients Logo Grid | Medium | DONE (15 clients) |
| 5.2 | Certifications | Low | DONE |
| 6.1 | Equipment/Resources | Low | DONE |
| 7.1 | Contact Section | High | DONE (with form) |
| 7.2 | Footer | Medium | DONE |

---

## Completed Features

### Navigation
- [x] Sticky header with logo
- [x] Desktop navigation links
- [x] Phone number visible
- [x] Mobile hamburger menu with toggle
- [x] Smooth scroll to sections

### Hero Section
- [x] Full-height gradient background with pattern
- [x] Established 2019 badge
- [x] Company logo prominently displayed
- [x] Main headline + Arabic name
- [x] Service category badges
- [x] CTA buttons (Projects / Contact)
- [x] Wave transition to next section

### About Section
- [x] Company overview text
- [x] CR and VAT registration numbers
- [x] Statistics grid (2019, 50+, 200+, 15+)

### Vision & Mission
- [x] Two-card layout with icons
- [x] Navy gradient for Vision
- [x] Green gradient for Mission
- [x] Full content from company profile

### Services Section
- [x] 4-service grid layout
- [x] Image cards with hover zoom effect
- [x] Icon badges on each card
- [x] Facility Management as gradient card

### Projects Section
- [x] 6 featured projects in grid
- [x] NEOM Community Expansion II
- [x] Triple Bay Workers Village
- [x] NEOM Worker Bay Village
- [x] Umluj Airport Project
- [x] CEER EV Manufacturing (Ongoing)
- [x] Delta Marriott Hotel (Ongoing)
- [x] Status badges (Completed/Ongoing)
- [x] Category tags and client info

### Clients Section
- [x] 15 major clients displayed
- [x] Responsive grid layout
- [x] Hover effects

### Certifications Section
- [x] Navy background strip
- [x] 6 certification badges
- [x] ISO 9001, ISO 45001, ISO 14001
- [x] Saudi Building Code, MEP Standards, HSE Policy

### Equipment Section
- [x] 6 equipment categories
- [x] Earthmoving, Concrete, Lifting, Transport, MEP, Support
- [x] Item lists for each category
- [x] Skilled workforce highlight banner

### Contact Section
- [x] Contact form (Name, Email, Phone, Message)
- [x] Full office address
- [x] Multiple phone numbers
- [x] Multiple email addresses
- [x] Website link
- [x] Vision 2030 Partner badge

### Footer
- [x] Company logo and Arabic name
- [x] Service tags
- [x] Quick links navigation
- [x] Contact information with icons
- [x] Copyright notice
- [x] CR and VAT numbers

---

## Remaining / Future Enhancements

### Optional Improvements
- [ ] Scroll animations (fade-in on scroll)
- [ ] Real client logos (when available)
- [ ] Project photography (when available)
- [ ] Google Maps embed in contact
- [ ] Form submission functionality (backend)
- [ ] Arabic language version
- [ ] Loading skeleton states
- [ ] SEO meta tags enhancement

---

## File Structure

```
app/
  layout.tsx        # Root layout with Geist fonts, metadata
  page.tsx          # Main landing page (all sections)
  globals.css       # Tailwind + brand colors + animations
public/
  sama-logo.svg     # Company logo
  service-1.png     # General Contracting image
  service-2.png     # Civil Construction image
  service-3.png     # MEP Solutions image
```

---

## Technical Notes

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Client Component**: Uses "use client" for mobile menu state
- **Responsive**: Mobile-first with md/lg breakpoints

---

*Last Updated: April 2026*
*Status: Landing Page Complete*
