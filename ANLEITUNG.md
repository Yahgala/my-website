# Gaby Luong Portfolio: So kommt die Seite online

## Ordnerstruktur
```
index.html              Startseite
books/index.html        Case Study MDPI Books        → /books/
design-system/index.html Case Study Design System    → /design-system/
user-hub/index.html     Case Study User Hub          → /user-hub/
404.html                Fehlerseite
assets/style.css        Gesamtes Design
assets/main.js          Hell/Dunkel-Umschalter
assets/img/             Bilder (WebP) + og.jpg (Vorschaubild für LinkedIn & Co.)
robots.txt, sitemap.xml Für Google
favicon.svg             Tab-Icon
```

## 1. Platzhalter ersetzen (vor dem Upload)
Öffne den Ordner in einem Editor (z. B. VS Code, kostenlos) und nutze „Suchen & Ersetzen in allen Dateien“:
- `https://www.gabyluong.ch` → deine echte Domain (kommt in allen HTML-Dateien, robots.txt und sitemap.xml vor)
- `https://www.linkedin.com/in/gaby-luong-458124151` → dein LinkedIn-Profil-Link
- CV-Button: PDF als `assets/cv-gaby-luong.pdf` ablegen und in `index.html` den CV-Link auf `assets/cv-gaby-luong.pdf` setzen
- Reflection-Sätze in den drei Case Studies in deinen eigenen Worten formulieren

## 2. Lokal ansehen
Doppelklick auf `index.html` genügt für einen ersten Blick.

## 3. Domain registrieren
Eine .ch-Domain bekommst du z. B. bei Infomaniak, Hostpoint oder Cyon.

## 4. Hosting (kostenlos): Netlify oder Cloudflare Pages
**Netlify (am einfachsten):**
1. Konto erstellen auf netlify.com
2. „Add new site“ → „Deploy manually“ → den ganzen Ordner per Drag & Drop hineinziehen
3. Seite ist sofort unter einer xyz.netlify.app-Adresse online. Zuerst dort testen
4. „Domain management“ → „Add a domain“ → deine Domain eintragen
5. Bei deinem Domain-Anbieter die DNS-Einträge setzen, die Netlify anzeigt
6. HTTPS schaltet Netlify automatisch ein (kann bis zu 24 h dauern)

Updates: Ordner einfach erneut hochladen („Deploys“ → Drag & Drop).

## 5. Bei Google anmelden
1. search.google.com/search-console → Property mit deiner Domain hinzufügen
2. Domain bestätigen (DNS-TXT-Eintrag beim Domain-Anbieter)
3. „Sitemaps“ → `sitemap.xml` einreichen
4. Unter „URL-Prüfung“ die Startseite eingeben → „Indexierung beantragen“

Bis Google die Seite zeigt, dauert es meist einige Tage bis Wochen.

## 6. Nach dem Launch
- Link zur Seite in LinkedIn (Profil → Kontaktinfo → Website und im „Featured“-Bereich), im CV und in der E-Mail-Signatur. Diese Links helfen auch dem Ranking.
- Vorschau testen: Link in eine LinkedIn-Nachricht an dich selbst einfügen. Das Vorschaubild ist `assets/img/og.jpg`.
- Performance prüfen: pagespeed.web.dev
