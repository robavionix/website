---
title: "PID vs. SMC: two answers to the same motor fault"
description: "The same 60% motor thrust loss, tried against a classical PID controller and a sliding mode controller. Same hardware, same fault, two very different stories."
date: 2026-02-10
image: "/images/blog/blog-header.png"
draft: false
categories: ["Curriculum"]
tags: ["PID", "sliding mode control", "fault tolerance"]
---

Every level in the Robavionix curriculum ends the same way: inject a standard fault, and see what the controller does. The clearest version of that story is also the simplest — take one fault, run it against two controllers designed weeks apart by the same student, and put the results side by side.

## The fault

A single motor's thrust is degraded to 60% of commanded value, live, while the quadrotor is holding attitude. Nothing about the airframe changes — no software reset, no re-trim. The controller has to notice and respond entirely through its own feedback loop.

## What L1's PID controller does

A well-tuned cascaded PID controller can absorb a fault like this — up to a point. The rate loop fights the asymmetric torque, the attitude loop corrects the resulting tilt, and for a 60% degradation the system typically holds, visibly working harder than before. The interesting part isn't that it survives; it's watching *how close* to the edge it is. Push the same fault to 40%, then 25%, and the same controller that looked robust at 60% starts to lose the argument.

## What L3's sliding mode controller does

By L3, students have built a controller from an entirely different assumption: that the model is wrong within some bound, and the control law should guarantee convergence anyway. Run the identical 60% fault against it, and the difference isn't dramatic in the way a demo video wants it to be — it's *quieter*. Less visible correction, faster settling, and — this is the part that matters — it's still holding when PID and LQR have already given up at the 25% stage.

## The point isn't "SMC wins"

It's tempting to end the story there, but the more useful lesson is the one L3's chattering experiment teaches right next to it: that robustness has a cost, visible on an oscilloscope as control-signal noise on real actuators. PID is simpler, cheaper to compute, and fine for the faults it was tuned for. SMC is more robust and less model-dependent, at the cost of chattering you have to actively manage. Neither answer is free — and that trade-off, measured rather than asserted, is the entire premise of [L1](/curriculum/l1-pid/) through [L3](/curriculum/l3-smc/).
