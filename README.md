# 📊 Graph Builder

Interactive scatter plot configuration tool built with Angular and Apache ECharts. Renders server-provided data as a scatter plot and lets users reconfigure its display in real time, including which data variables map to each axis.

<img width="835" height="718" alt="Снимок экрана 2026-06-21 в 20 54 28" src="https://github.com/user-attachments/assets/42d313b1-0f06-4c8f-80e6-8b3c0f986e17" />

## ✨ Features

- **Dynamic axis mapping** — variable names are read directly from the server response (`res.json`), allowing users to choose which variables are displayed on the X and Y axes
- **Chart title from server data** — the chart title is generated from the API response rather than hardcoded
- **Color customization** — customize point colors through a color picker
- **Point symbol selection** — choose from multiple predefined marker shapes
- **Persisted display settings** — selected color and point symbol are stored in local storage and restored on page reload
- **Responsive chart resizing** — the chart automatically resizes when the browser window changes
- **Built with Apache ECharts** — a powerful charting library for interactive data visualization

## 🏗 Architecture

The application loads chart metadata and data points via an HTTP service and generates scatter plot configuration dynamically based on the available variables.

Users can select which variables are displayed on the X and Y axes, allowing the same dataset to be explored from different perspectives.

Visualization settings are persisted in local storage and restored between sessions.

## 🛠 Tech Stack

| Layer | Technologies |
|---|---|
| Language | TypeScript |
| Framework | Angular (Standalone Components) |
| Charting | Apache ECharts |
| Forms | Angular Template-Driven Forms (ngModel) |
| UI Components | Angular Material |
| Styles | SCSS |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation & Run

```bash
git clone git@github.com:SplitCode/graph.git
cd graph
npm install
npm start
```

The application will be available at [http://localhost:4200](http://localhost:4200).
