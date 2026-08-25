\# TWISTTEX INTERNATIONAL — FULL WEBSITE DEVELOPMENT COMMAND



You are a senior product designer, UI/UX architect, frontend engineer, SEO specialist, and production-grade React developer.



Your task is to design and build a \*\*premium, modern, highly polished, SEO-friendly, scalable corporate website for Twisttex International\*\*, a fabric and textile sourcing business.



The final result must feel like a \*\*high-end international textile company\*\*, not a generic template, dashboard, startup landing page, or AI-generated website.



Use the existing business proposal and requirements as the source of truth.



\---



\# 1. PRIMARY OBJECTIVE



Build a visually outstanding, production-ready, responsive corporate website that:



\* Establishes Twisttex International as a credible and premium textile/fabric sourcing partner.

\* Clearly communicates fabric categories, sourcing capability, quality focus, process, and business credibility.

\* Builds trust before a potential buyer contacts the company.

\* Generates qualified enquiries.

\* Works flawlessly across desktop, tablet, and mobile.

\* Is SEO-friendly from the foundation.

\* Uses reusable components and scalable architecture.

\* Uses clean, maintainable, production-quality code.

\* Is designed with a strong “wow factor” without sacrificing usability or performance.



The experience should communicate:



\*\*PREMIUM → TRUST → FABRIC EXPERTISE → GLOBAL SOURCING → QUALITY → PARTNERSHIP → ENQUIRY\*\*



\---



\# 2. REFERENCE AND DESIGN DIRECTION



Use the following website only as a \*\*business structure and corporate storytelling reference\*\*:



https://anooshasourcing.com/



Do NOT copy its design, layout, styling, colors, sections, assets, or UI directly.



Instead:



\* Analyze the general corporate storytelling flow.

\* Create a completely original design system for Twisttex International.

\* Make Twisttex feel more modern, premium, visually refined, and contemporary.

\* Use a stronger visual hierarchy.

\* Improve spacing, typography, image composition, section transitions, interactions, and storytelling.

\* Avoid making the final website look like a clone.



The final product should look like a professionally designed website created by a high-end digital agency for an international textile company.



\---



\# 3. REQUIRED TECH STACK



Build the project using:



\## Core



\* React

\* TypeScript

\* Modern React architecture

\* Vite or the existing project architecture if already configured



\## Styling



Use a modern utility-first styling system.



Requirements:



\* Fully responsive

\* Reusable design tokens

\* Consistent spacing system

\* Reusable typography system

\* Reusable color variables

\* Maintainable component-level styling

\* Avoid duplicated styles



\## State Management



Use:



\* Zustand for global/shared application state.

\* `useState` for simple local UI state only.



Do NOT use Zustand unnecessarily.



Examples of Zustand usage may include:



\* Global navigation state

\* Mobile menu state

\* Modal state

\* Global enquiry/contact modal

\* UI preferences if required



Examples of local `useState` usage:



\* Accordion state

\* Form field interaction

\* Individual component UI state

\* Hover/temporary interactions



Keep state management simple and intentional.



\---



\# 4. CODE QUALITY REQUIREMENTS



The project must be written as production-grade code.



Follow these rules strictly:



\* Use TypeScript properly.

\* Avoid `any`.

\* Create reusable interfaces and types.

\* Separate data from UI components where practical.

\* Avoid unnecessary prop drilling.

\* Avoid giant monolithic components.

\* Avoid duplicate code.

\* Avoid copy-pasted sections.

\* Keep components focused and composable.

\* Use semantic HTML.

\* Maintain a clean folder structure.

\* Use meaningful variable and function names.

\* Remove unused code.

\* Remove unused dependencies.

\* No placeholder console logs.

\* No broken imports.

\* No unnecessary complexity.

\* No over-engineering.

\* Keep the architecture scalable for future pages.



Suggested structure:



```text

src/

├── components/

│   ├── common/

│   ├── layout/

│   ├── sections/

│   └── ui/

│

├── features/

│   ├── navigation/

│   └── enquiry/

│

├── store/

│   └── useAppStore.ts

│

├── data/

│   ├── products.ts

│   ├── capabilities.ts

│   └── company.ts

│

├── hooks/

│

├── lib/

│

├── types/

│

├── pages/

│

├── assets/

│

├── styles/

│

└── App.tsx

```



Adapt the structure if the existing project already has a better architecture.



Do NOT rewrite the entire project unnecessarily.



\---



\# 5. DESIGN SYSTEM



Create a complete visual design system before implementing sections.



The design should feel:



\* Premium

\* Editorial

\* Textile-focused

\* International

\* Minimal but not empty

\* Sophisticated

\* Trustworthy

\* Modern

\* Corporate

\* Visually rich



Avoid:



\* Generic SaaS aesthetics

\* Excessive gradients

\* Excessive glassmorphism

\* Random floating cards

\* Overuse of rounded rectangles

\* Cheap-looking animations

\* Generic stock-style layouts

\* Excessive shadows

\* Too many colors

\* Oversized empty sections without purpose



\---



\# 6. VISUAL LANGUAGE



Use fabric and textile as a major visual inspiration.



Possible visual elements:



\* Fabric texture

\* Woven patterns

\* Textile macro photography

\* Fabric folds

\* Swatches

\* Thread

\* Yarn

\* Material layers

\* Production environments

\* Quality inspection

\* Garment applications



Use imagery strategically.



Do NOT simply place random images in rectangular boxes.



Create editorial compositions with:



\* Layering

\* Cropped imagery

\* Large visual statements

\* Texture overlays where appropriate

\* Carefully controlled image aspect ratios

\* Strong typography interaction with imagery



The website should feel visually designed, not automatically generated.



\---



\# 7. TYPOGRAPHY



Create a strong typography hierarchy.



Use:



\* Large editorial-style hero headings.

\* Clear corporate body text.

\* Strong section labels.

\* Readable body typography.

\* Balanced line lengths.

\* Excellent spacing.



Hero typography should immediately communicate confidence.



Avoid tiny unreadable text.



Ensure typography scales correctly across:



\* Desktop

\* Laptop

\* Tablet

\* Mobile



\---



\# 8. COLOR SYSTEM



Create a premium textile-inspired color palette.



Do NOT use random colors.



The palette should be restrained and brand-driven.



Recommended direction:



\* Sophisticated neutral base

\* Deep premium primary tone

\* Warm textile-inspired accent

\* Off-white backgrounds

\* Dark charcoal/navy typography

\* Carefully controlled accent color for CTAs



Use color intentionally.



Ensure WCAG-friendly contrast where applicable.



\---



\# 9. WEBSITE INFORMATION ARCHITECTURE



Build the homepage as a carefully designed business journey.



The user journey should be:



\*\*FIRST IMPRESSION\*\*



↓



\*\*CREDIBILITY\*\*



↓



\*\*FABRIC EXPERTISE\*\*



↓



\*\*PRODUCT DISCOVERY\*\*



↓



\*\*WHY TWISTTEX\*\*



↓



\*\*PROCESS\*\*



↓



\*\*QUALITY \& TRUST\*\*



↓



\*\*GLOBAL CAPABILITY\*\*



↓



\*\*PARTNERSHIP\*\*



↓



\*\*ENQUIRY\*\*



Do not make sections feel disconnected.



Every section should naturally lead into the next.



\---



\# 10. HEADER / NAVIGATION



Create a premium sticky navigation system.



Desktop navigation should include:



\* Logo

\* Home

\* About

\* Fabrics / Products

\* Capabilities

\* Quality

\* Contact

\* Primary CTA



Primary CTA example:



\*\*Start an Enquiry\*\*



Requirements:



\* Transparent/light initial state depending on hero design.

\* Sticky behavior on scroll.

\* Smooth transition when sticky.

\* Mobile menu with excellent UX.

\* Accessible keyboard navigation.

\* Proper focus states.

\* No layout shift.



Mobile navigation must not be a simple poor-quality hamburger implementation.



Use a refined full-screen or panel navigation experience.



\---



\# 11. HERO SECTION



The hero section is extremely important.



Create a visually powerful opening experience.



Include:



\* Strong premium textile visual.

\* Large headline.

\* Short positioning statement.

\* Primary CTA.

\* Secondary CTA if appropriate.

\* Optional subtle proof point.



Example content direction:



\*\*Premium Fabrics. Reliable Sourcing. Built for Global Partnerships.\*\*



Do not treat this as final copy if better business-focused copy is available.



The hero should feel cinematic and premium.



Possible interactions:



\* Subtle image reveal

\* Slow parallax

\* Text reveal

\* Fabric-inspired motion

\* Layered composition



Do NOT use excessive animation.



The first viewport must immediately communicate:



\*\*WHO THEY ARE + WHAT THEY OFFER + WHY THEY MATTER\*\*



\---



\# 12. TRUST / CAPABILITY STRIP



Immediately after the hero, create a credibility section.



Possible metrics:



\* Years of experience

\* Fabric categories

\* Markets served

\* Sourcing partners

\* Quality focus

\* Global reach



IMPORTANT:



Do not invent business statistics.



Use placeholders only where actual verified data has not yet been supplied.



Make the section visually elegant.



Avoid generic “4 cards in a row” unless the composition is significantly improved.



\---



\# 13. ABOUT TWISTTEX



Create a premium company introduction section.



Focus on:



\* Company positioning

\* Fabric sourcing philosophy

\* Quality focus

\* Buyer relationship

\* Long-term partnership



Use:



\* Strong editorial layout

\* Large imagery

\* Supporting visual details

\* Refined text hierarchy



Avoid long paragraphs.



Make the company story easy to scan.



\---



\# 14. FABRIC CATEGORIES



Create a visually rich fabric category experience.



Possible categories:



\* Cotton

\* Linen

\* Denim

\* Woven Fabrics

\* Knit Fabrics

\* Sustainable Fabrics

\* Technical Fabrics

\* Custom Development



Final categories should be driven by actual Twisttex business information.



Each category should support:



\* Image

\* Category name

\* Short description

\* Optional hover interaction



Do NOT create generic equal-size cards.



Explore a premium editorial grid, asymmetrical layout, horizontal interaction, or carefully designed composition.



The user should feel they are exploring materials, not browsing dashboard widgets.



\---



\# 15. FABRIC SHOWCASE



Create an immersive fabric showcase.



Possible content:



\* Fabric textures

\* Swatches

\* Macro material photography

\* Garment application

\* Production imagery



Use Framer Motion for tasteful interaction.



Possible interactions:



\* Horizontal reveal

\* Hover zoom

\* Image transition

\* Cursor interaction

\* Layer reveal



Keep interactions performant.



Respect `prefers-reduced-motion`.



\---



\# 16. WHY CHOOSE TWISTTEX



Clearly communicate differentiation.



Possible points:



\* Quality-conscious sourcing

\* Reliable communication

\* Consistent supply

\* Responsive development

\* Flexible sourcing

\* Long-term partnership



Design this section as a premium storytelling experience.



Avoid generic icon cards.



Use:



\* Strong typography

\* Visual hierarchy

\* Numbered storytelling

\* Image integration

\* Scroll-based progression where appropriate



\---



\# 17. REQUIREMENT TO DELIVERY PROCESS



Create a clear visual process.



Suggested process:



1\. Requirement Discussion

2\. Fabric Sourcing / Development

3\. Sample \& Approval

4\. Quality Control

5\. Production Coordination

6\. Delivery / Shipment



Design the process as a premium interactive journey.



Possible patterns:



\* Horizontal timeline

\* Scroll progression

\* Connected nodes

\* Editorial numbered sequence



It must remain usable on mobile.



Do not sacrifice clarity for animation.



\---



\# 18. QUALITY \& COMPLIANCE



Create a strong trust-building section.



Possible content:



\* Quality control process

\* Fabric inspection

\* Testing

\* Compliance

\* Supplier standards

\* Production monitoring



IMPORTANT:



Do not invent certifications or compliance claims.



If actual information is unavailable:



\* Create clearly structured content placeholders.

\* Make the architecture ready for real data.



If certification logos are later added, create reusable components for them.



\---



\# 19. GLOBAL REACH



Create an international positioning section.



Possible content:



\* Countries or regions served

\* Sourcing network

\* International partnerships



Do not create a fake global map full of invented locations.



Use only verified markets.



If data is unavailable, create a visually strong section that communicates international readiness without false claims.



\---



\# 20. VALUES / PARTNERSHIP



Create a section focused on business philosophy.



Potential themes:



\* Reliability

\* Transparency

\* Quality

\* Partnership

\* Responsiveness

\* Long-term value



Make this section emotionally stronger than a normal corporate list.



Use premium visuals and storytelling.



\---



\# 21. PARTNERSHIP CTA



Create a powerful conversion section.



This should feel like the natural conclusion of the website.



Example direction:



\*\*Have a Fabric Requirement? Let’s Build the Right Solution.\*\*



Include:



\* Short supporting text

\* Primary enquiry CTA

\* WhatsApp/contact option if required



This section should visually stand out from the rest of the page.



\---



\# 22. CONTACT / ENQUIRY EXPERIENCE



Create a premium enquiry experience.



Possible fields:



\* Name

\* Company

\* Email

\* Phone

\* Country

\* Fabric Requirement

\* Message



The form should:



\* Have proper validation.

\* Be accessible.

\* Have loading state.

\* Have success state.

\* Have error state.

\* Prevent duplicate submission where applicable.



Do not build a fake backend submission flow.



Structure the frontend so that API integration can be added cleanly.



\---



\# 23. FOOTER



Create a complete premium corporate footer.



Include:



\* Logo

\* Short company statement

\* Navigation

\* Contact information

\* Social links if available

\* Copyright

\* Privacy / policy links if required



Avoid an oversized generic footer.



\---



\# 24. FRAMER MOTION REQUIREMENTS



Use Framer Motion throughout the website with restraint.



Recommended animation patterns:



\* Section fade and translate reveal

\* Staggered content

\* Image mask reveal

\* Text reveal

\* Navigation transitions

\* Mobile menu transitions

\* Hover micro-interactions

\* Process progression

\* CTA feedback



Rules:



\* Do not animate everything.

\* Do not create distracting continuous movement.

\* Avoid slow, heavy animations.

\* Keep animation durations consistent.

\* Use reusable animation variants.

\* Respect reduced-motion preferences.

\* Ensure animations do not block interaction.



Create reusable motion utilities where appropriate.



Example:



```text

lib/motion.ts

```



Centralize common animation variants instead of repeating them in every component.



\---



\# 25. RESPONSIVE DESIGN REQUIREMENTS



The website must be fully responsive.



Test carefully for:



\## Desktop



\* 1920px

\* 1440px

\* 1280px



\## Tablet



\* 1024px

\* 768px



\## Mobile



\* 430px

\* 390px

\* 375px

\* 360px



Check:



\* Typography scaling

\* Navigation

\* Image cropping

\* Horizontal overflow

\* Card layout

\* CTA positioning

\* Form usability

\* Section spacing

\* Touch interaction

\* Animation performance



Never assume that desktop simply shrinks into mobile.



Design each breakpoint intentionally.



\---



\# 26. SEO REQUIREMENTS



The website must be SEO-friendly from the beginning.



Implement:



\* Semantic HTML

\* Proper heading hierarchy

\* One clear H1

\* Logical H2/H3 structure

\* Page title

\* Meta description

\* Open Graph metadata

\* Twitter metadata if applicable

\* Canonical URL support

\* Structured data where appropriate

\* Organization schema

\* LocalBusiness schema only if business information supports it

\* Image alt text

\* Descriptive internal links

\* Clean URL structure

\* Sitemap-ready architecture

\* Robots.txt support



Do not use keyword stuffing.



SEO copy should remain natural and business-focused.



\---



\# 27. PERFORMANCE REQUIREMENTS



Optimize for excellent Core Web Vitals.



Focus on:



\* LCP

\* CLS

\* INP



Requirements:



\* Optimize hero images.

\* Use modern image formats where possible.

\* Lazy-load non-critical media.

\* Prevent layout shifts.

\* Avoid unnecessary JavaScript.

\* Avoid massive animation bundles.

\* Code split where appropriate.

\* Keep initial load lightweight.

\* Avoid rendering hidden large components unnecessarily.

\* Optimize fonts.

\* Use responsive images where supported.



The website should look premium without becoming heavy.



\---



\# 28. ACCESSIBILITY



Ensure:



\* Semantic elements.

\* Proper button labels.

\* Keyboard navigation.

\* Focus visibility.

\* Accessible forms.

\* Sufficient contrast.

\* Reduced motion support.

\* Proper aria attributes only where necessary.



Do not use divs as buttons when semantic buttons are appropriate.



\---



\# 29. REUSABLE COMPONENT REQUIREMENTS



Create reusable components such as:



```text

Button

Container

SectionHeading

SectionLabel

AnimatedSection

ImageReveal

Navbar

MobileMenu

FabricCard

CapabilityItem

ProcessStep

TrustMetric

CertificationItem

ContactForm

Footer

```



Do not create reusable components unnecessarily.



Use abstraction only when it genuinely improves maintainability.



\---



\# 30. DATA-DRIVEN CONTENT



Keep repeated content in structured data files.



Example:



```typescript

export const fabricCategories = \[

&#x20; {

&#x20;   id: "cotton",

&#x20;   title: "Cotton",

&#x20;   description: "...",

&#x20;   image: "...",

&#x20; },

];

```



Do not hardcode repetitive content directly throughout JSX.



This should make future CMS/API integration easier.



\---



\# 31. IMAGE HANDLING



Use high-quality textile-related imagery.



Before final production:



\* Replace placeholders with actual Twisttex assets where available.

\* Ensure image aspect ratios are intentional.

\* Optimize all media.

\* Add meaningful alt text.

\* Avoid repeating the same image.



If placeholder assets are necessary during development, clearly structure them so they can be replaced easily.



\---



\# 32. CONTENT ACCURACY RULE



Do NOT invent:



\* Certifications

\* Export countries

\* Customer logos

\* Years of experience

\* Production capacity

\* Factory details

\* Sustainability claims

\* Quality standards

\* Compliance certifications

\* Statistics



If the information has not been supplied, use a structured placeholder or make the section ready for future content.



Business credibility must come from accurate information, not fabricated claims.



\---



\# 33. IMPLEMENTATION PROCESS



Follow this workflow:



\## Step 1 — Audit



First inspect the existing project.



Understand:



\* Current framework

\* Existing components

\* Existing dependencies

\* Existing routes

\* Existing styling

\* Existing state management

\* Existing assets



Do not destroy working architecture unnecessarily.



\---



\## Step 2 — Architecture



Define:



\* Page structure

\* Component architecture

\* Data structure

\* State management

\* Responsive strategy

\* Animation strategy



\---



\## Step 3 — Design System



Establish:



\* Colors

\* Typography

\* Spacing

\* Buttons

\* Containers

\* Section rhythm

\* Motion system



\---



\## Step 4 — Build Core Layout



Implement:



\* App layout

\* Navbar

\* Mobile navigation

\* Main container system

\* Footer



\---



\## Step 5 — Build Homepage Sections



Implement sections in the following order:



1\. Hero

2\. Trust strip

3\. About

4\. Fabric categories

5\. Fabric showcase

6\. Why Twisttex

7\. Requirement-to-delivery process

8\. Quality and compliance

9\. Global reach

10\. Values / partnership

11\. Final CTA

12\. Contact

13\. Footer



\---



\## Step 6 — Add Motion



After the layout is structurally correct:



\* Add Framer Motion.

\* Use reusable animation variants.

\* Test performance.

\* Ensure reduced motion support.



\---



\## Step 7 — Responsive QA



Test every section across all breakpoints.



Fix:



\* Overflow

\* Broken grids

\* Cropped content

\* Navigation problems

\* Animation issues

\* Touch issues

\* Typography problems



\---



\## Step 8 — SEO + Performance



Perform final optimization.



Check:



\* Semantic structure

\* Metadata

\* Image optimization

\* Loading behavior

\* Bundle size

\* Accessibility

\* Lighthouse-related issues



\---



\# 34. FINAL QUALITY STANDARD



Before considering the project complete, review the entire website as if you are performing a professional agency QA process.



Check:



\## Visual Quality



\* Is the design premium?

\* Does it feel original?

\* Is the hierarchy strong?

\* Are sections visually connected?

\* Are images intentionally composed?

\* Is whitespace balanced?

\* Are typography sizes appropriate?

\* Are cards and components too generic?



\## UX Quality



\* Is navigation intuitive?

\* Are CTAs clear?

\* Is the business story easy to understand?

\* Can a buyer quickly identify the fabric capability?

\* Is the enquiry path obvious?



\## Technical Quality



\* No console errors.

\* No TypeScript errors.

\* No broken imports.

\* No unnecessary dependencies.

\* No duplicated components.

\* No dead code.

\* No layout shift.

\* No horizontal overflow.

\* Responsive across all target breakpoints.



\## Production Readiness



The project must be clean enough that another senior developer can:



\* Understand the architecture.

\* Add new sections.

\* Add additional pages.

\* Connect APIs.

\* Integrate a CMS.

\* Maintain the website without rewriting it.



\---



\# 35. IMPORTANT FINAL INSTRUCTION



Do NOT produce a basic corporate template.



Do NOT create a page consisting of:



```text

Hero

↓

Three cards

↓

Four cards

↓

Another grid

↓

Footer

```



Instead, think like a senior art director and product designer.



Create visual rhythm.



Alternate:



\* Light and dark sections

\* Editorial layouts

\* Full-width imagery

\* Split compositions

\* Horizontal visual experiences

\* Structured information sections

\* Large typography moments

\* Quiet whitespace

\* Strong conversion moments



The final website should feel:



\*\*EXPENSIVE\*\*

\*\*MODERN\*\*

\*\*TRUSTWORTHY\*\*

\*\*INTERNATIONAL\*\*

\*\*TEXTILE-SPECIFIC\*\*

\*\*VISUALLY MEMORABLE\*\*

\*\*FAST\*\*

\*\*SCALABLE\*\*

\*\*SEO-READY\*\*

\*\*PRODUCTION-GRADE\*\*



Prioritize quality over unnecessary complexity.



Do not stop at a wireframe or partial implementation.



Complete the entire responsive website and ensure the final result is cohesive from the first pixel to the footer.



Before finalizing, perform a complete review and fix all visible issues.



The goal is to create a \*\*wow-level digital presence for Twisttex International that can confidently be presented to international buyers and business partners\*\*.



