# Site Inspection Dashboard

A modular, interactive React web application built from scratch to track safety, maintenance, and facility inspection reports in real-time. Designed as a clean frontend project to master core React principles including component composition, state lifting, controlled form inputs, and modal management.

---

## ✨ Features

- **Dynamic Inspection List:** Renders dynamic inspection cards with color-coded status badges (*Passed*, *Failed*, *Pending*) and priority indicators.
- **Detailed View Modal:** Click any inspection card to open a full-screen overlay modal displaying complete inspection notes, inspector details, and location metadata.
- **Interactive Form Modal:** A popup form allowing users to submit new inspection entries with automatic unique timestamp-based ID generation (`Date.now()`).
- **Responsive & Accessible Design:** Built with clean modern CSS featuring automatic light and dark mode styling based on system preferences.
- **Modular Architecture:** Clean separation of concerns with isolated components, modular styling, and local state management.

---

## 📂 Project Directory Structure

```text
site-inspection-app/
├── public/                # Static assets and icons
├── src/
│   ├── components/
│   │   ├── Footer.jsx                 # Page footer framing
│   │   ├── Header.jsx                 # Application header & trigger action
│   │   ├── InspectionCard.jsx         # Individual summary card component
│   │   ├── InspectionDetailModal.jsx  # Full details pop-up overlay
│   │   ├── InspectionForm.jsx         # New inspection input form modal
│   │   └── InspectionList.jsx         # Grid container mapping inspection items
│   ├── data/
│   │   └── initialInspections.js      # Initial sample data payload
│   ├── App.css                        # Component-specific styles (if any)
│   ├── App.jsx                        # Main parent component & global state host
│   ├── index.css                      # Global design tokens and layout rules
│   └── main.jsx                       # React DOM entry point
├── index.html
├── package.json
└── vite.config.js