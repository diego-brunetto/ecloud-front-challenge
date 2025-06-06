# Action Plan - Ecloud Frontend Challenge

## 📋 Challenge Overview

**Objective:** Build homepage for Nomad (hotel chain for digital nomads)

**Tech Stack:**

- Next.js 15 with App Router (SSR for SEO)
- Chakra UI v3
- TypeScript
- Deploy on Vercel

---

## 🎯 Development Strategy

### Feature Prioritization

1. **Main Story** (mandatory) - 100% functional
2. **Sidequest 1** (Mobile responsive) - Critical to stand out
3. **Sidequest 2** (UX enhancements) - High added value
4. **Sidequests 3-5** - Based on available time

---

## 📅 Development Phases

### 🚀 PHASE 1: Setup & Base Architecture

**Estimated duration:** 2-3 hours

#### Objectives

- Configure robust development environment
- Establish scalable architecture
- Prepare foundation for all sidequests

#### Tasks

- [ ] Create Next.js 15 project with App Router + TypeScript
- [ ] Configure Chakra UI v3 + theme setup
- [ ] Create modular folder structure:

  ```
  /app
    /(routes)
    /globals.css
  /components
    /ui (primitives)
    /sections (Hero, Hotels, etc)
    /layout (Nav, Footer)
  /lib
    /api (clients)
    /types (schemas)
    /utils
    /constants
  /hooks
  /public
  ```

- [ ] Setup Biome (linting + formatting) + configuration
- [ ] Initialize Git repository + connect to Vercel
- [ ] Define base TypeScript schemas and interfaces

#### Sidequest Considerations

- Structure that supports CMS (Sanity)
- Responsive breakpoints from the start
- Separated hooks for reusability

---

### 🎨 PHASE 2: Layout & Base Content

**Estimated duration:** 4-5 hours

#### Objectives

- Implement main visual structure
- Integrate static content
- Responsive foundation ready

#### Tasks

- [ ] Main layout with Nav + Footer
- [ ] Navigation component (without interactions)
- [ ] Static Hero section
- [ ] Motivational phrase section
- [ ] Basic Footer
- [ ] Typography and colors per Figma
- [ ] Base responsive breakpoints

#### Deliverables

- Static but responsive homepage
- Modular reusable components

---

### 🔗 PHASE 3: APIs & Dynamic Content

**Estimated duration:** 3-4 hours

#### Objectives

- Integrate APIs for content
- Implement SSR correctly
- Loading state management

#### Tasks

- [ ] API client for content (SSR)
- [ ] API client for availability (client-side)
- [ ] TypeScript types for API responses
- [ ] HotelList component with real data
- [ ] Loading and error states
- [ ] Implement SSR in main page

#### Technical Considerations

- Appropriate data caching
- Error boundaries
- Fallbacks for missing data

---

### ⚡ PHASE 4: Core Interactions (Main Story)

**Estimated duration:** 5-6 hours

#### Objectives

- Complete all mandatory requirements
- Smooth and functional interactions

#### Tasks

- [ ] Dropdown hover on nav "Experimenta"
- [ ] Reservation drawer (click on "Reservar")
- [ ] Integrate availability API in drawer
- [ ] Hotel hover effects:
  - [ ] Box blur
  - [ ] Description expansion
- [ ] Hotel slider with library (Swiper.js)
  - [ ] Correct alignment on last slide
- [ ] Basic form in reservation drawer

#### Validation

- [ ] All Main Story requirements working
- [ ] Complete manual testing
- [ ] Functional deploy on Vercel

---

### 📱 PHASE 5: Mobile First (Sidequest 1)

**Estimated duration:** 4-5 hours

#### Objectives

- Perfect mobile experience
- Mobile-first methodology applied

#### Tasks

- [ ] Refactor components for mobile-first
- [ ] Mobile navigation (hamburger menu)
- [ ] Optimized responsive hero
- [ ] Mobile-friendly hotel slider
- [ ] Mobile reservation drawer
- [ ] Testing on real devices

#### Target Breakpoints

- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

---

### ✨ PHASE 6: UX Enhancements (Sidequest 2)

**Estimated duration:** 3-4 hours

#### Objectives

- Improve user experience
- Polished microinteractions

---

### 🎠 PHASE 7: Advanced Hero Slider (Sidequest 3)

**Estimated duration:** 4-5 hours

#### Objectives

- Professional automatic slider
- Intuitive and accessible UX

#### Tasks

- [ ] Automatic slider with configurable timing
- [ ] Functional clickable paginator
- [ ] Progress bar per slide
- [ ] Play/pause controls
- [ ] Swipe gestures (mobile)
- [ ] Accessibility (keyboard navigation)

#### Technical Considerations

- Optimized performance
- Image preloading
- Fallbacks for slow connections

---

### 🎯 PHASE 8: Custom Cursor (Sidequest 4)

**Estimated duration:** 3-4 hours

#### Objectives

- Unique and functional cursor
- Don't interfere with mobile UX

#### Tasks

- [ ] Circular cursor that follows mouse
- [ ] Link hover detection (enlarge)
- [ ] Transform to emoji on "Reservar" button
- [ ] Device detection (hide on mobile)
- [ ] Performance optimization
- [ ] Smooth animations

---

### 🏗️ PHASE 9: CMS Integration (Sidequest 5)

**Estimated duration:** 6-8 hours

#### Objectives

- Manageable content
- Foundation for internationalization

#### Tasks

- [ ] Setup Sanity CMS
- [ ] Content schemas:
  - [ ] Hotels
  - [ ] Pages
  - [ ] General configuration
- [ ] Sanity client in Next.js
- [ ] Migrate hardcoded content
- [ ] Preview mode for editors
- [ ] Webhooks for revalidation

---

### 🌍 PHASE 10: Internationalization (Extra Sidequest)

**Estimated duration:** 4-6 hours

#### Objectives

- Complete ES/EN support
- Multilingual content from CMS

#### Tasks

- [ ] Setup next-intl
- [ ] Multilingual Sanity schemas
- [ ] Language selector in UI
- [ ] Routing by locale
- [ ] Fallbacks and translations
- [ ] Multilingual SEO

---

## 🎯 Delivery Milestones

### Milestone 1: Functional MVP

- Complete Main Story
- Working Vercel deploy
- **Target time:** 15-18 hours

### Milestone 2: Production Ready

- Main Story + Mobile responsive
- Basic UX enhancements
- **Target time:** 22-25 hours

### Milestone 3: Advanced Features

- - Hero slider + Custom cursor
- **Target time:** 30-35 hours

### Milestone 4: Full Stack

- - CMS + Internationalization
- **Target time:** 40-50 hours

---

## 🚨 Risks and Contingencies

### Technical Risks

1. **APIs unavailable/slow**: Mock fallback data
2. **Chakra UI v3 compatibility**: Limited documentation, have Plan B
3. **Performance issues**: Lazy loading, code splitting
4. **Mobile compatibility**: Early and frequent testing

### Mitigation Strategies

1. **Iterative development**: Frequent deploy for validation
2. **Feature flags**: Ability to disable complex features
3. **Progressive enhancement**: Core works without JS
4. **Cross-browser testing**: Prioritize Chrome, Safari, Firefox

---

## 📊 Success Criteria

### Technical

- [ ] Lighthouse score > 90 (Performance, SEO, Accessibility)
- [ ] Perfect responsive on 3+ devices
- [ ] Initial load < 3 seconds
- [ ] Zero console errors in production

### Functional

- [ ] All Main Story requirements 100% functional
- [ ] At least 2 sidequests implemented
- [ ] Smooth UX without obvious bugs
- [ ] Stable deploy on Vercel

### Presentation

- [ ] README with setup instructions
- [ ] Functional demo with realistic data
- [ ] Clean and well-documented code
- [ ] Organized Git history

---

## 🛠️ Tech Stack

### Core

- Next.js 15
- TypeScript
- Chakra UI v3
- Vercel

### Additional Libraries

- Swiper.js (sliders)
- Framer Motion (animations)
- React Hook Form (forms)
- Zustand (state management)
- next-intl (i18n)
- @sanity/next-sanity (CMS)

### Dev Tools

- Biome (linting + formatting)
- Husky (git hooks)
- TypeScript strict mode
- Chrome DevTools
