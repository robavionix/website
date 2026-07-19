---
title: "Day 0: the domain, the repo, and the rebuild"
description: "A short, honest build log for the day this site actually went live — what got built, what's still just a plan, and why this gets written down at all."
date: 2026-07-19
image: "/images/blog/blog-header.png"
draft: false
categories: ["Build Log"]
tags: ["build in public", "github", "cloudflare"]
---

Nothing about Robavionix ships this week. No hardware, no curriculum video, no student has touched a fault-injection switch yet. What happened yesterday was smaller than that, and still worth writing down: the domain got registered, the GitHub repo went up, and the site got wired through Cloudflare Pages onto a real domain.

## What actually happened

The site started as a generic IT-services template — every page talking about "cloud consulting" and "digital transformation," a stock lightning-bolt logo, a fake team of twelve people with stock photos. Over one long session, that became this: the actual L1–L5 curriculum described in detail, a real (if deliberately anonymized) founder page, a custom logo built around the sliding-mode-control idea at the center of the product, and a bilingual EN/ZH site instead of the default EN/FR.

Repo's on GitHub, public. Deploy is on Cloudflare Pages, auto-building on every push to `main`. Domain's live. That's the whole boring, necessary stack — the kind of infrastructure that's supposed to disappear once it's working, which is exactly why it's worth one paragraph now, before it does.

## Why write this down at all

The honest answer is that a fault-tolerant-control PhD doesn't turn into a shipped teaching product by accident, and the version of this story worth reading later isn't the one that starts at "and then we had 200 units sold" — it's the one with the boring first commit still in it. If you're going to build something in public, the site going live counts as day 0, even when day 0 is mostly configuration files.

## What's actually next

Real hardware BOM, a first PID controller running against a physical testbed, and — per the [curriculum](/curriculum/) already written — a lot more blog posts than this one. This is a start, not a milestone.
