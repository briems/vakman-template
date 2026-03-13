# Vakman Website Template

## Overzicht
Herbruikbare Next.js website template voor Nederlandse vakmensen (loodgieters, schilders, elektriciens, etc.). Per klant hoeft alleen `src/config/klant.ts` aangepast te worden.

## Structuur

```
src/
├── config/
│   └── klant.ts          # ENIGE bestand dat per klant aangepast wordt
├── components/
│   ├── Navbar.tsx         # Sticky navbar met bedrijfsnaam en telefoon
│   ├── Hero.tsx           # Grote hero sectie met CTA knoppen
│   ├── Diensten.tsx       # Grid met diensten uit config
│   ├── WaaromWij.tsx      # 4 USPs (24/7, geen voorrijkosten, ervaring, gratis offerte)
│   ├── Werkgebied.tsx     # Regio informatie
│   ├── Reviews.tsx        # 3 klantreviews met sterren
│   ├── Contact.tsx        # Contactformulier (Resend API)
│   ├── Footer.tsx         # Footer met bedrijfsgegevens
│   └── StickyBelKnop.tsx  # Mobiele sticky bel-knop onderaan
├── app/
│   ├── page.tsx           # Hoofdpagina, combineert alle secties
│   ├── layout.tsx         # Root layout met metadata uit config
│   ├── globals.css        # Globale styles, --primary CSS variabele
│   └── api/contact/
│       └── route.ts       # API route voor contactformulier (Resend)
```

## Nieuwe klant opzetten

1. Kopieer het hele project
2. Pas `src/config/klant.ts` aan met klantgegevens
3. Zet `RESEND_API_KEY` in `.env.local`
4. Optioneel: plaats een hero achtergrondafbeelding in `public/hero-bg.jpg`
5. Deploy

## Config velden (klant.ts)
- `bedrijfsnaam` - Naam van het bedrijf
- `telefoonnummer` - Telefoonnummer (weergave formaat)
- `whatsappNummer` - WhatsApp nummer (internationaal, zonder +)
- `email` - E-mailadres voor contactformulier
- `stad` - Hoofdstad/vestigingsplaats
- `werkgebied` - Beschrijving van het werkgebied
- `primaryColor` - Primaire kleur (momenteel via CSS var --primary in globals.css)
- `kvkNummer` - KvK nummer
- `diensten` - Array met { naam, beschrijving, icoon (emoji) }

## Technisch
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4 met CSS variabele `--primary` voor hoofdkleur
- **E-mail**: Resend API via `/api/contact` route
- **Taal**: Nederlands (html lang="nl")
- **Font**: Inter via next/font

## Kleuren aanpassen
De primaire kleur (#E67E00 oranje) wordt ingesteld via de CSS variabele `--primary` in `src/app/globals.css`. Alle componenten gebruiken `bg-[--primary]` en `text-[--primary]`.

## Commands
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - ESLint
