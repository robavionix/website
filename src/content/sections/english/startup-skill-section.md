---
enable: true
imagePosition: "left"

images:
  large: "/images/skill/skill-1.png"
  small: "/images/skill/skill-2.jpg"

title: |
  Not a simulation-only toy. Real hardware, real faults
subtitle: |
  Every controller you design gets flashed to an STM32 board and exercised against a physical testbed inside a HIL rig — with a fault-injection switch built into the hardware, not bolted on afterward.
description: |
  From transfer functions to Lyapunov-based robustness, each level closes with the same question: inject a standard fault and measure exactly where the controller stops holding.

# EXTRATYPE OPTIONS: "skills" | "list-x" | "list-y" | "stats" | "none"
extraType: "list-x"

# SHARED BUTTON CONFIGURATION (Applies to all section buttons)
buttons:
  - enable: true # Boolean: true | false
    label: "View the Curriculum"
    url: "/curriculum/"
    tag: "a" # Enum: a | button
    variant: "fill" # Enum: fill | fill-white | outline | text | circle
    hoverEffect: "magnetic-text-flip" # Enum: text-flip | creative-fill | magnetic | magnetic-text-flip
    icon: # Object
      enable: true
      name: "ArrowUpRight" # String: Lucide Icon Name - https://lucide.de v/icons/?search=
      position: "right" # Enum: left | right (Note: text variant is always right)
    rel: "noopener"
    target: "_blank" # String: _blank | _self
    class: "" # String: Additional button Tailwind classes

listItems:
  - title: "Hardware-in-the-<br />Loop, not pure sim"
    icon: "Cpu"
  - title: "Fault injection<br />built into the rig"
    icon: "Zap"
---
