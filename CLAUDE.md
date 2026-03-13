# Vakman Website Template

## Overzicht
Herbruikbare Next.js website template voor Nederlandse vakmensen (loodgieters, schilders, elektriciens, etc.). Per klant hoeft alleen `src/config/klant.ts` aangepast te worden. Momenteel gepersonaliseerd voor **Appel Loodgieters** (Voorburg).

## Structuur

```
src/
├── config/
│   └── klant.ts                  # ENIGE bestand dat per klant aangepast wordt
├── components/
│   ├── ui/
│   │   ├── button.tsx            # shadcn button component
│   │   ├── before-after-slider.tsx  # Voor/na afbeelding vergelijking slider
│   │   └── container-scroll-animation.tsx  # Aceternity scroll animatie (ongebruikt)
│   ├── Navbar.tsx                # Sticky navbar, wordt oranje bij scrollen, hamburger menu mobiel
│   ├── Hero.tsx                  # Video achtergrond, animated counters, trust badges, pulse CTA
│   ├── Diensten.tsx              # 2/3-koloms grid met lucide-react iconen per dienst
│   ├── WaaromWij.tsx             # 4 USPs met lucide-react iconen
│   ├── Projecten.tsx             # Before/after slider projecten met filters per categorie
│   ├── Werkgebied.tsx            # Regio informatie
│   ├── Reviews.tsx               # Google Reviews badge, avatars, animated slide-in, platform logos
│   ├── Contact.tsx               # Contactformulier (Resend API) met reactietijd badge
│   ├── SpoedCTA.tsx              # Oranje spoed-balk met telefoonnummer
│   ├── Footer.tsx                # Footer met bedrijfsgegevens
│   ├── StickyBelKnop.tsx         # Mobiele sticky bel-knop onderaan (alleen mobiel)
│   └── WhatsAppKnop.tsx          # Zwevende WhatsApp knop rechtsonder
├── lib/
│   └── utils.ts                  # shadcn cn() utility
├── app/
│   ├── page.tsx                  # Hoofdpagina, combineert alle secties
│   ├── layout.tsx                # Root layout met metadata uit config
│   ├── globals.css               # Globale styles, --vakman-primary, animaties, shadcn vars
│   └── api/contact/
│       └── route.ts              # API route voor contactformulier (Resend)
public/
├── hero-video.mp4                # Gecomprimeerde hero video (526KB)
└── hero-video.webm               # WebM variant (454KB)
```

## Nieuwe klant opzetten

1. Kopieer het hele project
2. Pas `src/config/klant.ts` aan met klantgegevens (bedrijfsinfo, diensten, projecten, reviews)
3. Zet `RESEND_API_KEY` in `.env.local`
4. Pas iconen aan in `Diensten.tsx` iconMap als diensten veranderen
5. Vervang hero video in `public/` (optioneel)
6. Pas `--vakman-primary` kleur aan in `globals.css`
7. Deploy op Vercel

## Config velden (klant.ts)
- `bedrijfsnaam` - Naam van het bedrijf
- `eigenaar` - Naam van de eigenaar
- `telefoonnummer` - Telefoonnummer (weergave formaat)
- `whatsappNummer` - WhatsApp nummer (internationaal, zonder +)
- `email` - E-mailadres voor contactformulier
- `stad` - Hoofdstad/vestigingsplaats
- `adres` - Volledig adres
- `werkgebied` - Beschrijving van het werkgebied
- `primaryColor` - Primaire kleur (wordt ingesteld via CSS var in globals.css)
- `kvkNummer` - KvK nummer
- `jarenlange_ervaring` - Jaren ervaring (bijv. "25+")
- `tagline` - Hoofd tagline voor de hero
- `diensten` - Array met { naam, beschrijving }
- `projecten` - Array met { titel, categorie, locatie, tijdsduur, quote, klantNaam, voorAfbeelding, naAfbeelding }
- `reviews` - Array met { naam, stad, sterren, tekst }

## Technisch
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Iconen**: lucide-react (geen emoji's)
- **Animaties**: CSS animations (pulse, water drops, pipe float), IntersectionObserver (counters, slide-in)
- **E-mail**: Resend API via `/api/contact` route
- **Afbeeldingen**: Unsplash (remote patterns in next.config.ts)
- **Video**: Gecomprimeerde MP4/WebM hero achtergrond (<1MB)
- **Taal**: Nederlands (html lang="nl")
- **Font**: Inter via next/font
- **Mobiel**: Volledig responsive, sticky bel-knop, WhatsApp floating button

## Kleuren aanpassen
De primaire kleur (`#E67E00` oranje) wordt ingesteld via `--vakman-primary` in `src/app/globals.css`.
Alle componenten gebruiken `bg-[var(--vakman-primary)]` en `text-[var(--vakman-primary)]`.
shadcn heeft een apart `--primary` systeem dat niet interfereert.

## Diensten iconen aanpassen
De iconMap in `src/components/Diensten.tsx` koppelt dienstnamen aan lucide-react iconen.
Bij nieuwe diensten: voeg een entry toe aan de iconMap met de juiste lucide-react icon.
Fallback is `Wrench` als de dienstnaam niet in de map staat.

## Conversie elementen
- **Sticky navbar**: Wordt oranje bij scrollen met "Bel nu: gratis advies" knop
- **Floating WhatsApp**: Groene knop rechtsonder met ping animatie
- **Sticky bel-knop**: Oranje balk onderaan (alleen mobiel)
- **Spoed CTA**: Opvallende oranje balk boven footer
- **Reactietijd badge**: "Gemiddeld binnen 23 minuten reactie" bij contactformulier
- **Pulse animatie**: Op de hoofd CTA button in de hero

## Commands
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - ESLint
