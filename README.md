# Krasney Law - Premium Website Redesign Concept

A clean-room modernization concept for Krasney Law, built separately from the firm's current production WordPress website.

## Goal

Turn a content-heavy, dated personal-injury website into a premium, conversion-focused experience without sacrificing the firm's existing local SEO footprint.

## V1 Homepage Direction

- Editorial charcoal, warm ivory and restrained bronze visual system
- Responsive premium hero with subtle scroll depth
- Smooth viewport reveal animations using Motion
- Clear free-consultation and click-to-call actions
- Simplified practice-area hierarchy
- Firm differentiation around local, personal attention
- Robert A. Krasney attorney profile section
- Client review presentation
- San Bernardino and Rancho Cucamonga office sections
- Modern consultation form shell
- Reduced-motion accessibility support

## Source facts used in the concept

The prototype only uses claims currently represented on Krasney Law's public website or official attorney profile, including practice since 1987, free initial consultations, no fee unless recovery, California service, and the two established Inland Empire office locations.

## Important production migration notes

The live site has a large library of practice-area and city landing pages. A final rebuild should preserve high-value existing URL paths, map redirects intentionally, migrate metadata/schema, and avoid deleting indexed content simply to simplify navigation. The new navigation can be much cleaner while the SEO library remains accessible through contextual links, practice hubs, city hubs and the sitemap.

Before launch, the firm should approve all attorney advertising language, testimonial usage, phone numbers, SMS consent language, office listings and any case-result claims.

## Development

```bash
npm install
npm run dev
```

Validation:

```bash
npm run typecheck
npm run build
```
