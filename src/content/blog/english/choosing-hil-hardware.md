---
title: "Choosing the HIL reference hardware, before writing a line of control code"
description: "A real flight controller on real silicon, talking to a virtual aircraft in Simulink — no motors, no propellers, no battery yet. The hardware decisions behind that loop, and why one board was already discontinued by the time we picked it."
date: 2026-07-20
image: "/images/hardware/hw-selection-cover.jpg"
draft: false
categories: ["Hardware"]
tags: ["STM32", "Nucleo", "Simulink", "hardware-in-the-loop", "HIL"]
---

Today's work wasn't code — it was picking the two boards this whole platform runs on, and figuring out exactly what the first real milestone needs and doesn't need.

## The goal for this stage: HIL, not a flying aircraft

The near-term target is deliberately narrow: a flight-control law compiled and running on real hardware, closing the loop against a virtual aircraft simulated in Simulink — not a physical motor, propeller, or airframe in sight yet.

![Hardware-in-the-loop architecture: NUCLEO-H753ZI running the compiled flight controller exchanges control outputs and simulated sensor readings with a virtual aircraft model running in Simulink on the host PC](/images/hardware/hil-architecture.png)

That framing matters for purchasing: a real IMU, real motors, and a real battery are all *next-phase* hardware, not this-phase hardware. The board's job right now is just to run the actual control law — PID today, LQR/SMC/LPV as the curriculum progresses — while Simulink's virtual aircraft plays the part of the physical world.

## NUCLEO-H753ZI — and the board it replaced

The first pick was **NUCLEO-H743ZI2**: Cortex-M7 at 480MHz, double-precision FPU, 2MB flash, 1MB RAM. Checking its current status turned up a real problem — it's obsolete, no longer manufactured. STMicroelectronics' own community forum confirms the recommended substitute is **NUCLEO-H753ZI**: identical performance, the only differences are onboard crypto/hash peripherals and a handful of relocated LED/QSPI pins. A project built for the H743ZI2 reportedly runs on the H753ZI with no code changes.

The double-precision FPU is the detail worth calling out: MATLAB and Simulink compute in double precision by default, so this board runs the exact numerical precision a model was designed in, with no downcasting during development. That heavily influenced the choice over a cheaper single-precision Cortex-M4 board (like the MathWorks-tutorial-standard NUCLEO-F401RE) — headroom now, cost-optimization later once the control law is proven.

![Spec comparison: NUCLEO-H753ZI (Cortex-M7, 480MHz, double-precision FPU, 2MB/1MB) and X-NUCLEO-IKS5A1 (dual IMU, magnetometer, barometer, Arduino Uno R3 connector)](/images/hardware/reference-hardware-speccard.png)

## X-NUCLEO-IKS5A1 — bought now, needed next

The sensor expansion board is the current generation of ST's official Nucleo sensor shields: two IMUs (ISM330IS with an onboard ISPU for edge processing, and ISM6HG256X with dual-range acceleration sensing), a magnetometer, and a barometer — attitude, heading, and altitude sensing in one board that plugs straight into the Arduino-compatible header, no breadboard wiring required.

Worth stating plainly: it isn't needed for the HIL milestone described above. A virtual aircraft's "sensor readings" are numbers computed inside Simulink, not signals from a physical chip. This board earns its place once real sensor data — and its real noise — enters the loop, or when the project moves from a simulated airframe to a physical one. Buying it now was a headroom decision, not a requirement for the next thing actually being built.

## One platform note worth flagging early

MathWorks' current STM32 toolchain (the STM32 Microcontroller Blockset, shipping since R2026a) lists Windows and Linux as its only supported host platforms — macOS isn't on the list. Anything involving Simulink-to-STM32 code generation and deployment has to happen from a Windows or Linux machine; simulation and controller design work can still happen anywhere.

**References**: STMicroelectronics NUCLEO-H753ZI product page and UM2407 user manual · STMicroelectronics community, "Nucleo-H743ZI2 NRND and use NUCLEO-H753ZI" · MathWorks STM32 Microcontroller Blockset platform requirements · STMicroelectronics X-NUCLEO-IKS5A1 product page and data brief.
