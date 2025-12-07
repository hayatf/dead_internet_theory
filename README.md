# CS 1710 Project -- Dead Internet Theory

# The Dead Internet Theory – Interactive Web Experience

An immersive, data-driven exploration of the “Dead Internet Theory” — the belief that the internet is increasingly dominated by bots, algorithmic content, and AI-generated activity.  
This interactive web experience blends cinematic visuals, narrative storytelling, interactive simulations, and data visualizations to investigate what the modern internet really looks like.

---

## Overview

This project guides users through a scroll-based narrative journey combining:

- A cinematic matrix-style intro  
- Interactive sentiment and search-trend visualizations  
- A bot-identification guessing game  
- A 100-tweet bot prediction experiment  
- A data-driven reveal showing actual bot prevalence  
- Visualizations of rising bad-bot traffic across industries  
- A Sankey-style bot-flow map showing attack pathways

Through these components, users explore both cultural anxieties and empirical evidence behind the “Dead Internet Theory.”

---

## Features

### Cinematic Intro

- HTML5 `<canvas>` animation simulating matrix-style green code “rain.”  
- Glitch text animations revealing the site title and theme.  
- Sets the tone for an internet conspiracy–theory aesthetic.

---

### Scrollable Story Sections

- Fullscreen scroll-snap sections for a controlled narrative experience.
- Navigation dot system updating automatically based on visible section.
- Story progression includes:
  - Dictionary-style definition of the Dead Internet Theory  
  - Global sentiment data about AI  
  - A fictional chat-style conversation reflecting public confusion  
  - Interactive questions and transitions  

---

### Interactive Components & Data Visualizations

#### 1. **Google Search Trend Explorer (D3.js)**

- Plots rising global search interest in “Dead Internet Theory.”  
- Supports:
  - Country comparison toggles  
  - Event highlighting (e.g., ChatGPT launch, GPT-4 release)  
  - Zooming using an overview brush  
  - Local CSV fallback to sample data if files are unavailable  
- Includes an onboarding overlay explaining how to interact with the visualization.

---

#### 2. **AI Sentiment Visualization**

- Split-view interface combining:
  - **Scatterplot** showing “excited vs. nervous” attitudes toward AI across 21 countries.  
  - **Interactive globe** where users can rotate and analyze sentiment geography.  
- Color gradients represent sentiment gaps between excitement and concern.

---

#### 3. **Bot Prediction Experiment (100-Tweet Grid)**

- Users drag-select squares representing tweets they believe are bots.  
- Realistic tweet-style cards with usernames and simple text.  
- After submission, users scroll to reveal:
  - Their predicted number  
  - The true number of bots (3 out of 100 based on dataset)  
- D3.js animates a reveal grid showing which tweets were actually bots.

---

#### 4. **“Spot the AI” Tweet Classifier Mini-Game**

- Six-question quiz using real dataset examples.  
- Users guess whether each tweet is **human** or **AI-generated**.  
- Features:
  - Score tracking  
  - Feedback animations  
  - Randomized question order  
  - Restart option  

---

#### 5. **Bad Bot Traffic Timeline (D3.js)**

- Stacked area chart visualizing **good vs. bad bot traffic from 2013–2023**.  
- Industry-specific sparklines show 2023 bad-bot levels across:
  - E-commerce  
  - Travel  
  - Financial services  
  - Gaming  
  - Education  
  - And more  
- Hover and click revealing industry overlays.

---

#### 6. **Bot Flow Sankey-Style Map**

- HTML5 `<canvas>` visualization showing the path of malicious bots:
  **Origin → Sophistication Level → Target Industry → Target Country**
- Includes:
  - Step-based filters for isolating pathways  
  - Hover highlighting of flows  
  - Focus on top-targeted countries (US, Netherlands, Australia)

---

### Educational Takeaways

The concluding sections reinforce three central themes:

- **Bots exist, but the internet is not actually “dead.”**  
- **Humans still produce the vast majority of online content.**  
- **Misperceptions arise from growing anxiety about AI, not reality.**

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, JavaScript (ES6) |
| Data Visualization | D3.js v7 |
| Icons | Font Awesome 6 |
| Animation | CSS keyframes, canvas rendering, JS-driven transitions |
| Interaction Design | IntersectionObserver, drag-selection logic, event listeners |

---

## Notes for Local Development

- The project runs entirely client-side — just open `index.html`.  
- For CSV-based visualizations, some browsers require a local server:  
  ```bash
  python3 -m http.server
