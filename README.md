# TemPulse ⏱️

Une application minimaliste de minuteur qui change dynamiquement de couleur en fonction du temps restant, créée avec React et Vite.

![TemPulse App](https://via.placeholder.com/800x400?text=TemPulse+App)

## 🌟 Fonctionnalités

- **Minuteur interactif** avec réglage précis des minutes et secondes
- **Changement de couleur dynamique** qui évolue en fonction du temps restant
- **Interface intuitive** et minimaliste
- **Contrôles flexibles** pour ajuster facilement le temps (+/- 1 minute, +/- 1 seconde)

## 🛠️ Technologies

- **React** - Bibliothèque UI
- **Vite** - Outil de build et serveur de développement
- **Hooks React** - useState et useEffect pour la gestion d'état et des effets
- **Manipulation du DOM** - Changement dynamique des couleurs de fond

## 🚀 Installation

1. Clonez ce dépôt
```bash
git clone git@github.com:techmefr/TemPulse.git
cd TemPulse
```

2. Installez les dépendances
```bash
npm install
```

3. Démarrez le serveur de développement
```bash
npm run dev
```

4. Construisez pour la production
```bash
npm run build
```

## 📋 Structure du Projet

```
TemPulse/
├── src/
│   ├── components/
│   │   ├── Timer.jsx         # Composant principal du minuteur
│   │   └── ColorChanger.jsx  # Gestion du changement de couleur
│   ├── App.jsx               # Composant racine de l'application
│   ├── main.jsx              # Point d'entrée React
│   └── index.css             # Styles globaux
└── ...
```

## 🎮 Comment Utiliser

1. **Réglage du temps** : Modifiez directement les valeurs des minutes et secondes ou utilisez les boutons +/- pour ajuster le temps
2. **Démarrage/Arrêt** : Cliquez sur "Start" pour lancer le minuteur, "Stop" pour le mettre en pause
3. **Expérience visuelle** : Observez comment l'arrière-plan change de couleur au fil du temps, créant une expérience visuelle correspondant au temps qui passe

## 🧠 Apprentissages Acquis

Ce projet m'a permis de pratiquer :
- L'utilisation des Hooks React (useState, useEffect)
- La création de composants fonctionnels
- Le passage de props et la communication entre composants
- La manipulation du DOM via React
- La gestion des intervalles en JavaScript
- L'implémentation de changements visuels basés sur des états

## 🔮 Améliorations Futures

- Ajouter des sons de notification à la fin du décompte
- Implémenter des thèmes de couleur prédéfinis
- Créer une fonctionnalité de sauvegarde de minuteurs personnalisés
- Ajouter une vue historique des minuteurs utilisés
- Développer une version mobile avec des notifications

## 📝 Licence

Ce projet est sous licence GNU General Public License v3.0 - voir le fichier LICENSE pour plus de détails.

---

Développé avec ❤️ en utilisant React et Vite
