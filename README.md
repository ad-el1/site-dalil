# Dalil · دليل — Site de présentation

Site web statique de présentation du projet **Dalil**, l'assistant d'orientation
intelligent de la **Faculté des Sciences Semlalia** (FSSM), Université Cadi Ayyad,
Marrakech.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (aucune bibliothèque UI externe — Tailwind pur)
- Animations au scroll via **Intersection Observer**
- 100 % statique — déployable sur **GitHub Pages**

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # génère dist/
npm run preview     # prévisualise le build
```

## Déploiement GitHub Pages

Le fichier `.github/workflows/deploy.yml` build et publie automatiquement à
chaque push sur `main`.

1. Créer un repo GitHub et y pousser ce dossier.
2. **Settings → Pages → Source : GitHub Actions**.
3. Chaque push sur `main` déploie le site.

> `vite.config.js` utilise `base: './'` (chemins relatifs) : le site fonctionne
> quel que soit le nom du repo, sans configuration supplémentaire.

## Personnalisation

- **Liens externes** (repo GitHub, app Dalil, Map FSSM) : `src/data/site.js`
- **Contenu des sections** : tableaux `CARDS` / `FEATURES` / `VERSIONS` / `STATS` /
  `EVENTS` / `MEMBERS` en tête de chaque composant dans `src/components/`
- **Couleurs & typographie** : `tailwind.config.js`

## Structure

```
src/
├── App.jsx                 # assemble les sections
├── index.css               # Tailwind + animations (pulse-ring, reveal, badge-glow)
├── data/site.js            # liens externes + ancres de navigation
├── hooks/useInView.js      # Intersection Observer
└── components/
    ├── Navbar.jsx          # navigation sticky + menu mobile
    ├── Hero.jsx            # 1. Hero plein écran + anneaux qui pulsent
    ├── Problem.jsx         # 2. Le problème
    ├── Solution.jsx        # 3. La solution — Dalil
    ├── Timeline.jsx        # 4. Timeline des versions
    ├── Stats.jsx           # 5. Les chiffres
    ├── EventVision.jsx     # 6. Vision événementielle
    ├── Team.jsx            # 7. L'équipe
    ├── Footer.jsx          # 8. Footer
    ├── Reveal.jsx          # wrapper fade-in + slide-up
    ├── SectionHeading.jsx  # titre de section réutilisable
    └── Logo.jsx            # cercle vert دليل
```

---

Développé dans le cadre de la Licence Informatique S6 — FSSM 2026.
