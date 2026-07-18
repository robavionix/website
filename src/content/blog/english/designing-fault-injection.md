---
title: "Designing fault injection: letting students fail safely, a hundred times"
description: "Why the fault-injection switch is the actual product, and what it took to make failing a controller cheap, repeatable, and safe to do over and over."
date: 2026-02-03
image: "/images/blog/blog-header.png"
draft: false
categories: ["Product"]
tags: ["fault injection", "HIL", "product design"]
---

The single hardest design constraint on Robavionix was never the control theory — it was making failure cheap. A student needs to be able to break a controller, watch it happen, reset, and try again, dozens of times in one lab session, without breaking anything that costs money to replace and without anyone leaving the room.

## Why "just fly a drone" doesn't satisfy this constraint

A platform that actually flies solves a different, and in some ways easier, problem: making the vehicle fly well. It does not solve this one. Every real flight carries real risk to real hardware, real airspace rules, and real people in the room — which means every fault-injection experiment on a flying platform has a cost attached to running it again. That cost is exactly what caps how many times a student can watch a controller fail before the lab session runs out.

Robavionix never leaves the table. The controller runs on real STM32 hardware against a physical testbed inside a HIL rig, so every fault — a degraded motor, a noise burst, a jammed actuator — is injected and resolved without anything ever leaving the ground.

## What "fault injection" actually has to be, mechanically

It's not a slider in a GUI. The fault bus sits in the Simulink plant model, driving actual hardware behavior in real time: per-motor health coefficients that scale thrust output, injected sensor noise and bias on the IMU channel, actuator jam and saturation states. Every fault in the [standard fault library](/curriculum/l1-pid/) is triggerable on demand or randomized, and every trial automatically logs the resulting state trajectory — because the log is what turns "the controller failed" into a measured, reproducible result a student can put in a report.

## The constraint that shaped the curriculum

Once failure is cheap, the curriculum can be built around watching it happen, deliberately, over and over: [L1](/curriculum/l1-pid/) pushes PID past its limit on purpose. [L4](/curriculum/l4-gain-scheduling-lpv/) constructs a transition-instability case specifically so students watch a correctly-tuned controller fail between two stable points. [L5](/curriculum/l5-lpv-smc-fdi/)'s capstone hides the fault schedule entirely and scores the outcome. None of that is possible if running the experiment twice costs a rebuild, a re-trim, or a repair.
