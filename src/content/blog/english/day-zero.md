---
title: 'Day 0: the domain, the repo, and a plan'
description: A short, honest build log for the day this site actually went live — what got built, what's still just a plan, and why this gets written down at all.
date: 2026-07-19
image: /images/blog/blog-header.png
draft: false
categories:
  - Build Log
tags:
  - build in public
  - github
  - cloudflare
---

Robavionix was born today. The early groundwork was mundane by design: register a domain, stand up a GitHub repo, and wire the site through Cloudflare Pages onto that domain.

## Where the idea came from

I'm not, by training, a control-and-automation "professional." Everything I know about control systems I picked up during my PhD. Because of that, almost none of the fundamentals came easily — I had to chew through them one piece at a time, and in a little over a year I had to grow from an undergraduate-level newcomer in automatic control into something approaching a competent entry-level researcher at Master's standard.

Along the way I ran into just how abstract control theory really is — not just the underlying mathematics, which is hard enough to hold onto, but even the "simple" physical examples everyone reaches for, spring-mass systems and pendulums included. My own students can't quite see how three numbers, P, I, and D, actually move a robot arm; in my first months of learning, neither could I, not even for the simplest textbook model — let alone sliding-mode control on a tailless, bio-inspired UAV.

When a student asks, "sir, what actually *is* PID, and how does it control the arm," the best I can do is write three letters on paper and talk them through what each one does to the motion. It wears me out, and it leaves the student no less confused.

So the thought was: what if a student could put their hands on an actual controller, and watch with their own eyes what changing P, I, D — or an LQR gain, or an SMC parameter — actually does to an actuator? Would that finally make it click?

## Why write this down at all

Honestly, a PhD in fault-tolerant control doesn't turn itself into a shipped teaching product by accident, and the version of this story worth reading later won't start with "spring-mass control using PID" — it'll start with a student watching a 3D-animated aircraft change how it flies as they change a controller's parameters. Today is day one of that undertaking. I don't know yet what it will give me back, but I'd like it, somehow, to return the education I was given, and the effort that went into earning it.

## What's actually next

Real hardware BOM, a first PID controller running against a physical testbed, and — per the [curriculum](/curriculum/) already written — a lot more blog posts than this one. This is a start, not a milestone.
