# Nani's Barbers — Website

A modern, mobile-responsive website built for **Nani's Barbers**, 184 Dean Rd, South Shields NE33 4AQ.

## Project Structure

```
nanis-barbers/
├── index.html    — Main HTML structure & content
├── style.css     — All styles, variables, animations, responsive layout
├── script.js     — Navbar scroll, hamburger menu, card interactions, scroll-reveal
└── README.md     — This file
```

## Tech Stack

- **HTML5** — Semantic markup, accessibility attributes
- **CSS3** — Custom properties (variables), Grid, Flexbox, animations
- **Vanilla JavaScript** — No frameworks or dependencies

## Features

- ✅ Fully mobile-responsive (mobile-first breakpoints)
- ✅ Sticky navbar with blur/scroll effect
- ✅ Hamburger menu for mobile
- ✅ Scroll-reveal animations on all sections
- ✅ Hero section with animated entrance
- ✅ Services grid with image cards (hover + click colour change)
- ✅ Prices menu (hover + click colour change)
- ✅ Google Reviews section (hover + click colour change)
- ✅ Photo gallery with CSS grid masonry
- ✅ Embedded Google Maps + opening hours
- ✅ CTA banner section
- ✅ Footer with links and contact info
- ✅ Active nav highlighting on scroll

## Business Info

| Field        | Value                                 |
|--------------|---------------------------------------|
| Name         | Nani's Barbers                        |
| Address      | 184 Dean Rd, South Shields NE33 4AQ   |
| Phone        | 07935 975426                          |
| Google Rating| 4.6 ★ (28 reviews)                    |
| Facebook     | facebook.com/profile.php?id=100093704462804 |
| Mon–Sat      | 9:00 AM – 6:00 PM                     |
| Sunday       | 10:00 AM – 4:00 PM                    |

## Services Listed

- Men's Haircut — from £12
- Skin Fade — from £14
- Kids' Cut (Under 12) — from £8
- Beard Trim & Shape — from £6
- Hot Towel Shave — from £10
- Cut & Beard Combo — from £18
- Razor Cut — from £14
- Long Haircut — from £16
- Head Shave — from £10

## Free Hosting Options

### Option 1 — GitHub Pages (Recommended)
- **Free custom domain:** Yes (via CNAME)
- **SSL:** Free
- Steps:
  1. Push files to a GitHub repository
  2. Go to Settings → Pages → Deploy from branch (main)
  3. Site live at `https://yourusername.github.io/nanis-barbers/`
  4. Add a custom domain in Settings → Pages → Custom Domain
  5. Point the domain's DNS CNAME to `yourusername.github.io`
- **Good domain registrars:** Namecheap (~£8–10/yr for .co.uk)

### Option 2 — Netlify
- **Free tier:** 100GB bandwidth/month
- **Custom domain:** Yes (free SSL via Let's Encrypt)
- Steps:
  1. Drag and drop folder at netlify.com/drop
  2. Or connect GitHub repo for auto-deploy on push
  3. Add custom domain in Site Settings → Domain Management
- **Live URL:** `https://yoursite.netlify.app` (free subdomain)

### Option 3 — Cloudflare Pages
- **Free tier:** Unlimited requests, unlimited bandwidth
- **Custom domain:** Yes (free)
- Steps:
  1. Connect GitHub repo at pages.cloudflare.com
  2. Set build settings: no build command, publish `/`
  3. Add custom domain in Settings → Custom domains

### Domain Recommendation for Client
- `.co.uk` domain: ~£8–12/year via Namecheap or 123Reg
- Suggested: `nanisbarbers.co.uk` or `nanisbarberssouthshields.co.uk`

## Fonts Used

- **Playfair Display** (headings, display text) — via Google Fonts
- **DM Sans** (body text, labels, UI) — via Google Fonts

## Colour Palette

| Variable        | Value     | Usage                  |
|-----------------|-----------|------------------------|
| `--clr-bg`      | `#0e0e0e` | Page background        |
| `--clr-surface` | `#161616` | Alternate sections     |
| `--clr-card`    | `#1c1c1c` | Card backgrounds       |
| `--clr-gold`    | `#c9933a` | Brand accent           |
| `--clr-cream`   | `#f5efe6` | Light text             |
| `--clr-text`    | `#e8e0d5` | Body text              |
| `--clr-muted`   | `#9c8f7e` | Secondary text         |

## Customisation Notes

- Replace Unsplash placeholder images with real photos of the shop
- Update pricing in `index.html` after confirming with client
- Update the Google Maps embed URL with the exact business place ID
- Add Fresha/booking link if client wants online booking

---

Built by **Karthik Digital Services**
