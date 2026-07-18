---
enable: true
title: "Five levels, one <br/> progressive curriculum"

button:
  # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  enable: true
  label: "View all levels"
  url: "/curriculum/"
  hoverEffect: "magnetic-text-flip" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  variant: "fill" # Optional: fill | fill-white | outline | text | circle
  # rel: "" # Optional
  # target: "" # Optional
  # class: "" # Optional
  icon: # Optional
    enable: true
    name: "ArrowUpRight"
    position: "right" # left | right

options:
  layout: "grid" # grid | carousel; grid shows the level icon since curriculum entries don't ship a background photo yet
  column: 3
  iconPlacement: "top"
  limit: 6
  marquee: # Used when layout is "carousel"
    elementWidthAuto: false
    elementWidth: "22rem"
    elementWidthResponsive: "18rem"
    pauseOnHover: true
    reverse: "" # reverse / ""
    duration: "22s"
---
