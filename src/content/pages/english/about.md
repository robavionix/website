---
title: "About the Founder"
metaDescription: "Robavionix comes out of one person's PhD research on fault-tolerant flight control for bio-inspired, morphing-wing UAVs — not a committee's whiteboard session."
draft: false
---

Robavionix comes out of one person's PhD research, not a committee's whiteboard session.

## From gas turbines to glitching drones

Before fault-tolerant flight control, there was a mechanical engineering degree, then a master's in thermal power engineering — turbomachinery, blade cooling, gas turbine performance and diagnostics. The MSc thesis was a year-long project run in collaboration with a major aerospace manufacturer on boundary-layer-ingesting propulsion, ending in a findings presentation to the manufacturer's own project team. The path from jet engines to sliding mode control on morphing-wing UAVs wasn't a straight line, but it left a habit that shows up everywhere in this platform: an engineer's instinct for building things that have to survive contact with a real, physical, unforgiving system — not just a simulation that behaves.

## The PhD that built this curriculum

The research that eventually became L5 is a PhD at a UK university on fault-tolerant flight control for bio-inspired, morphing-wing aircraft — wings that change dihedral and sweep in flight, and the sliding-mode and LPV-based controllers that have to keep the aircraft flying when an actuator fails mid-manoeuvre. Getting the LPV side of that to hold together meant building structured datasets across 30+ dihedral-variation trim points and 25+ sweep-variation trim points, then designing weighted control-allocation logic that turns the redundancy a morphing wing creates into an actual robustness advantage instead of just extra actuators to coordinate. The fault side used nonlinear observer-based detection — the same underlying principle as the EKF-based sensor fusion this curriculum uses elsewhere, applied here to catch an actuator failure instead of estimating a state.

That work has been peer-reviewed and presented four times at IFAC and IEEE conferences over three years. It is the direct, un-textbook-ified source of [L5's LPV-SMC fault-tolerant controller](/curriculum/l5-lpv-smc-fdi/), and of the fault-detection and control-allocation reconfiguration built into it.

## Also: several years in a lecture hall, and some hardware before any of this was a PhD

Alongside the PhD came years as a control-engineering and Industry 4.0 teaching assistant — running labs and one-to-one mentoring for 150+ undergraduates a year, including co-developing the department's own PID trajectory-tracking teaching rig for a robotic arm. That's where the actual product idea came from, not from a market-research spreadsheet: watching, semester after semester, exactly where students hit the wall between "I can recite the Lyapunov argument" and "I have never once seen a controller actually fail."

The hands-on-hardware habit goes back further than the PhD, too: an early internship at an industrial robotics company doing Arduino-based Cartesian-space trajectory control on a robot arm, and — well outside flight control entirely — contributing development ideas and example code to a published textbook on embedded GNSS/cellular positioning systems.

Robavionix exists to close that specific curriculum gap — on real hardware, safely, and as many times as it takes.

Questions about the research behind a specific level, or how it maps to your syllabus? [Get in touch](/#contact).
