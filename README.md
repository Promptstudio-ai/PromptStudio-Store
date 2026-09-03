# PromptStudio — page vitrine

Page d'accueil statique unique (HTML/CSS, sans framework ni build) présentant
les applications web PromptStudio. Chaque carte ouvre directement
l'application correspondante dans un nouvel onglet :

- **Petit Gambit** — https://petitgambit.prompt-studio.app/
- **Viza** — https://viza.prompt-studio.app/
- **Kifaikoi** — https://kifaikoi.prompt-studio.app/
- **Arcana** — https://arcana.prompt-studio.app/

## Structure

```
index.html          page unique (hero + grille des apps)
css/style.css        design system
assets/img/*.webp    captures d'écran et icônes de chaque app
robots.txt, sitemap.xml
```

## SEO / GEO

La page inclut : title/description, Open Graph + Twitter Card, URL
canonique, et des données structurées JSON-LD `Organization` listant les
apps comme `Offer`/`SoftwareApplication` avec leur URL réelle, pour
faciliter la compréhension du contenu par les moteurs de recherche et les
moteurs génératifs (GEO).

## Développement local

Aucune dépendance : ouvrez `index.html` dans un navigateur, ou servez le
dossier avec n'importe quel serveur statique, par ex. :

```bash
python3 -m http.server 8000
```

## Déploiement

La page est 100% statique : elle peut être déployée telle quelle sur Vercel,
Netlify, GitHub Pages ou tout hébergeur de fichiers statiques. Le domaine
canonique est `https://www.prompt-studio.app/` (balises `canonical`, Open
Graph et `sitemap.xml`) — à mettre à jour partout si le domaine final change.
