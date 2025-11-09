# App Website Struktur

Dette prosjektet er organisert for å støtte flere app-sider med delt funksjonalitet.

## Mappestruktur

````markdown
# App Website Struktur

Dette prosjektet er organisert for å støtte flere app-sider med delt funksjonalitet.

## Mappestruktur

```
├── index.html           # Landingsside med begge apper
│
├── shared/              # Delte filer for alle apper
│   ├── layout.css       # Felles layout og struktur
│   └── language.js      # Felles språkbyttefunksjonalitet
│
├── svev/                # Svev-spesifikke filer
│   ├── index.html       # Svev hovedside
│   └── svev-theme.css   # Svev fargetema (varme bruntoner)
│
├── fot/                 # Fot-spesifikke filer
│   ├── index.html       # Fot hovedside
│   ├── foticon.png      # Fot ikon
│   ├── fot1.png, fot2.png # Fot screenshots
│   └── fot-theme.css    # Fot fargetema (varme raudtoner)
│
├── icon.png             # Svev ikon
├── Screenshot.png       # Svev screenshots
├── Screenshot2.png
├── Screenshot3.png
├── style.css            # GAMMEL FIL - kan slettes
└── script.js            # GAMMEL FIL - kan slettes
```

## Hvordan legge til en ny app

1. **Opprett ny mappe** for appen (f.eks. `nyapp/`)

2. **Lag theme CSS-fil** (`nyapp/nyapp-theme.css`):

   ```css
   :root {
     --bg: #fargehex;
     --panel: #fargehex;
     --text: #fargehex;
     --brand: #fargehex;
     --brand-2: #fargehex;
     --accent: #fargehex;
     --border: #fargehex;
     --button-text: #fargehex;
     --caption-text: #fargehex;
     --footer-text: #fargehex;
     --nav-hover-bg: rgba(...);
     --ring: 0 0 0 2px rgba(...);
   }

   /* Bruk variablene på elementer */
   body {
     background: var(--bg);
     color: var(--text);
   }
   header {
     background: var(--panel);
   }
   /* osv... */
   ```

3. **Lag index.html** i mappen:

   ```html
   <!DOCTYPE html>
   <html lang="nb">
     <head>
       <meta charset="utf-8" />
       <title>App Navn</title>
       <link rel="stylesheet" href="../shared/layout.css" />
       <link rel="stylesheet" href="nyapp-theme.css" />
     </head>
     <body>
       <!-- Kopier struktur fra fot/index.html eller svev index.html -->
       <script src="../shared/language.js"></script>
       <script>
         initLanguageSwitch(
           { nb: "nb-content", en: "en-content" },
           { nb: "nav-nb", en: "nav-en" }
         );
       </script>
     </body>
   </html>
   ```

4. **Legg til bilder** (ikon og screenshots) i app-mappen

## Delte komponenter

### layout.css

- Header/footer struktur
- Navigasjon
- Typography (h1, h2, h3)
- Screenshot styling
- Responsiv layout

### language.js

- `initLanguageSwitch()` - Funksjon for å initialisere språkbytte
- Håndterer både innholds- og navigasjonsbytting

## Fargetemaer

### Svev (varme toner)

- Primær: #d4a574 (gylden)
- Bakgrunn: #1a1410 (mørk brun)

### Fot (varme raudtoner)

- Primær: #d47474 (raud/terracotta)
- Bakgrunn: #1a1410 (mørk brun)

## Opprydding

Følgende gamle filer kan slettes etter migrering:

- `style.css` (erstattet av shared/layout.css + svev/svev-theme.css)
- `script.js` (erstattet av shared/language.js)
````
