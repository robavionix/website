---
title: About the Founder
metaDescription: Robavionix comes out of one person's PhD research on fault-tolerant flight control for morphing-wing UAVs — not a committee's whiteboard session.
draft: false
---

I set out to become a car designer. Instead, fluid dynamics and control theory turned out to be my two worst subjects in the whole degree.

I'm the kind of person who, when a subject is my weakest, decides that's the exact one to go head-to-head with. So almost every choice I made afterwards was a deliberate step toward the thing I was worst at — and Robavionix, in the end, is that habit taken to its conclusion.

For my undergraduate thesis I threw myself at CFD, building a full turbine stator and rotor stage from scratch. For my master's I studied aero-engines, and picked a thesis on boundary-layer ingestion — deriving that part of the boundary-layer mesh by hand, then using CFD to compute the energy it bled away. Every time, I chose the fluids problem I was least comfortable with. By the time I came to choose a PhD, aerodynamics and propulsion were things I finally had a handle on — and the one area still completely blank was avionics and flight control. So once again, I picked the thing I was worst at.

## The controller you can't see

This time was harder than any that came before. I barely knew MATLAB, I'd never touched flight control, and I essentially sat in with a room full of second-year undergraduates, spending a year cramming foundations that should have taken several.

But what really got to me wasn't the difficulty — it was that none of it was visible. The first time I learned PID, I'd stare at a spring-mass system and simply could not picture how P, I and D actually pulled it back into place. In the end I had to build a model I could see before it truly clicked. Later, with sliding mode control, the smooth factor was the same kind of thing: a parameter that lived only in the equations and refused to take shape in my head.

My drones were never like that. In AVL I could see the aircraft, plainly — I could see every one of its aerodynamic parameters. The aerodynamics were visible; the controller stayed a ghost.

Then I ended up on the other side of the lecture hall. For several years as a control-engineering teaching assistant I took 150+ undergraduates a year, and watched them hit, over and over, the exact wall I'd hit myself: able to recite every step of a Lyapunov stability proof, yet having never once seen a controller actually work — or actually fail.

The design procedure on the exam paper, the tuning, the string of numbers — however elegant, none of it beats a real controller in your hand, a real sensor, and a real aircraft on the screen flying, manoeuvring, fighting to stay in control at the edge of failure.

## So Robavionix exists

My PhD ran for over four years, on fault-tolerant flight control for bio-inspired, morphing-wing UAVs; the LPV/SMC work behind it was peer-reviewed and presented four times at IFAC and IEEE conferences, and it is the direct source of [L5](/curriculum/l5-lpv-smc-fdi/) in the curriculum. It was pure theory — but having built the whole path once, from modelling to simulation to controller design, I couldn't bring myself to leave it on paper.

Robavionix moves that entire path onto real hardware, so students can watch a controller work, and watch it handle failure. Not something a committee drew on a whiteboard — something one person built line by line, failure by failure. On real boards, safely — failing as many times as it takes.

Questions about the research behind a specific level, or how it maps to your syllabus? [Get in touch](/#contact).
