---
title: Choosing the HIL reference hardware, before writing a line of control code
description: The flight-control board is picked, along with the sensor shield that rides on top of it. To keep debugging simple and make sure raw compute never becomes the bottleneck, I went straight for the higher-spec NUCLEO-H753ZI instead of easing in.
date: 2026-07-20
image: /images/hardware/hw-selection-cover.jpg
draft: false
categories:
  - Hardware
tags:
  - STM32
  - Nucleo
  - Simulink
  - hardware-in-the-loop
  - HIL
---

No code today — today was for locking down the hardware the flight controller gets flashed onto.

## The goal for this stage: HIL — just the controller, not yet a flying aircraft

The near-term goal is a flight-control algorithm, compiled and flashed onto real hardware, closing the loop against a virtual aircraft simulated in Simulink. Whether the control board eventually goes inside a real 3D-printed airframe depends on how the project progresses and whether the budget allows for it — that's a long-term plan, not this one. Right now the only hardware that exists is that one **NUCLEO-H753ZI**.

![Hardware-in-the-loop architecture: NUCLEO-H753ZI running the compiled flight controller exchanges control outputs and simulated sensor readings with a virtual aircraft model running in Simulink on the host PC](/images/hardware/hil-architecture.png)

That framing matters for purchasing, and the early spend still has to stay under control: a real IMU, real motors, a real battery — all of that is **next-phase** hardware, not this-phase hardware. The board's only job right now is to run the actual control law — PID today, LQR/SMC/LPV as the curriculum moves forward — while Simulink's virtual aircraft stands in for the physical world.

## NUCLEO-H753ZI

STMicroelectronics' lineup of flight-control-capable boards is sprawling, with a rigid hierarchy from entry-level to flagship. The board I first considered wasn't especially powerful — plenty for a plain PID or LQR loop — but knowing I'd likely end up hand-rolling something closer to LPV control down the line, I went straight for the flagship, the **NUCLEO-H753ZI**: whatever flight-control algorithm I throw at it during testing, however complicated, the processor should handle it without breaking a sweat.

The double-precision FPU is the detail worth calling out: MATLAB and Simulink compute in double precision by default, so this board runs the exact numerical precision a model was designed in, with no downcasting during development. That heavily influenced the choice over a cheaper single-precision Cortex-M4 board (like the MathWorks-tutorial-standard NUCLEO-F401RE) — headroom now, cost-optimization later once the control law is proven.

![Spec comparison: NUCLEO-H753ZI (Cortex-M7, 480MHz, double-precision FPU, 2MB/1MB) and X-NUCLEO-IKS5A1 (dual IMU, magnetometer, barometer, Arduino Uno R3 connector)](/images/hardware/reference-hardware-speccard.png)

## X-NUCLEO-IKS5A1 — bought now, needed next

The sensor expansion board is the current generation of ST's official Nucleo sensor shields: two IMUs (ISM330IS with an onboard ISPU for edge processing, and ISM6HG256X with dual-range acceleration sensing), a magnetometer, and a barometer — attitude, heading, and altitude sensing in one board that plugs straight into the Arduino-compatible header, no breadboard wiring required.

Worth stating plainly: it isn't needed for the HIL milestone described above. A virtual aircraft's "sensor readings" are just numbers computed inside Simulink, not signals off a real chip. This board earns its place once real sensor data — and the real noise that comes with it — actually enters the loop, or once the project moves from a simulated airframe to a physical one. Buying it now was a headroom decision... and, if I'm honest, also a free-shipping-threshold decision.

## The STM32 platform limitation

MathWorks' current STM32 toolchain (the STM32 Microcontroller Blockset, shipping since R2026a) lists Windows and Linux as its only supported host platforms — macOS isn't on the list. Anything involving Simulink-to-STM32 code generation and deployment has to happen on a Windows or Linux machine; simulation and controller design can still happen anywhere. (Which is its own headache right now: my Windows workstation gave out five years into service, just before this post went up, and currently won't even get past the boot screen.)

**References**: STMicroelectronics NUCLEO-H753ZI product page and UM2407 user manual · STMicroelectronics community, "Nucleo-H743ZI2 NRND and use NUCLEO-H753ZI" · MathWorks STM32 Microcontroller Blockset platform requirements · STMicroelectronics X-NUCLEO-IKS5A1 product page and data brief.
