# PromptStudio — site vitrine

Site statique (HTML/CSS/JS, sans framework ni build) présentant les quatre applications PromptStudio :

- **Petit Gambit** — jeu d'échecs pédagogique en famille
- **Viza** — carte du monde à gratter numérique
- **Kifaikoi** — tâches ménagères des enfants
- **Arcana** — apprentissage du tarot Rider-Waite-Smith

## Structure

```
index.html                  accueil (grille des 4 apps)
apps/<slug>/index.html      page de présentation de chaque app
css/style.css               design system
assets/img/*.webp           captures d'écran et icônes de chaque app
assets/icons/*.svg          icônes Iconoir (MIT — https://iconoir.com/) inlinées dans les pages
robots.txt, sitemap.xml     SEO
```

## SEO / GEO

Chaque page inclut : title/description uniques, Open Graph + Twitter Card,
URL canonique, et des données structurées JSON-LD (`SoftwareApplication`,
`FAQPage`, `BreadcrumbList` sur les fiches app, `Organization` sur l'accueil)
pour faciliter la compréhension du contenu par les moteurs de recherche et
les moteurs génératifs (GEO). Les FAQ de chaque page répondent aux questions
les plus probables des utilisateurs pour être citées directement par les IA.

## Développement local

Aucune dépendance : ouvrez `index.html` dans un navigateur, ou servez le
dossier avec n'importe quel serveur statique, par ex. :

```bash
python3 -m http.server 8000
```

## Déploiement

Le site est 100% statique : il peut être déployé tel quel sur Vercel,
Netlify, GitHub Pages ou tout hébergeur de fichiers statiques. Pensez à
mettre à jour le domaine `https://promptstudio.app/` dans les balises
`canonical`, Open Graph et dans `sitemap.xml` si le domaine final diffère.
