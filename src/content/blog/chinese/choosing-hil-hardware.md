---
title: "写第一行控制代码之前,先把 HIL 参考硬件定下来"
description: "一块跑着真实飞控代码的芯片,对着 Simulink 里一架虚拟飞机——现阶段没有电机、没有螺旋桨、没有电池。记录这两块板子的选型过程,以及为什么其中一块板子选定的时候已经停产了。"
date: 2026-07-20
image: "/images/hardware/hw-selection-cover.jpg"
draft: false
categories: ["硬件"]
tags: ["STM32", "Nucleo", "Simulink", "硬件在环", "HIL"]
---

今天做的不是写代码——是把整个平台要跑在哪两块板子上定下来,顺便想清楚第一个真正的里程碑到底需要什么、不需要什么。

## 这个阶段的目标:HIL,不是一架能飞的飞机

近期的目标故意定得很窄:一个编译好、跑在真实硬件上的飞控算法,闭环对接 Simulink 里仿真出来的一架虚拟飞机——现在还看不到任何真实的电机、螺旋桨或者机架。

![硬件在环架构图:NUCLEO-H753ZI 跑着编译好的飞控代码,和运行在主机 Simulink 里的虚拟飞机模型互相交换控制量和模拟传感器读数](/images/hardware/hil-architecture.png)

这个定位对采购来说很关键:真实 IMU、真实电机、真实电池,这些都是**下一阶段**才要用的硬件,不是这一阶段要用的。板子现在的任务就是跑真正的控制律——现在是 PID,随着课程体系推进会到 LQR/SMC/LPV——Simulink 里的虚拟飞机替它扮演物理世界那一部分。

## NUCLEO-H753ZI——以及它替代的那块板子

最初选的是 **NUCLEO-H743ZI2**:Cortex-M7,480MHz,双精度 FPU,2MB Flash,1MB RAM。查它现在的状态时发现了一个真问题——它已经停产了,不再生产。STMicroelectronics 自己的社区论坛确认,官方推荐的替代型号是 **NUCLEO-H753ZI**:性能完全一致,唯一的差异是板载加密/哈希外设,以及几个挪了位置的 LED/QSPI 引脚。据反馈,给 H743ZI2 写的工程可以直接烧到 H753ZI 上跑,不需要改代码。

双精度 FPU 这个细节值得单独说一下:MATLAB 和 Simulink 默认就是双精度运算,用这块板子能让开发阶段跑的数值精度跟模型设计时完全一致,不需要为了适配硬件做精度降级。这也是选它而不是选更便宜的单精度 Cortex-M4 板子（比如 MathWorks 官方教程标配的 NUCLEO-F401RE）的主要原因——现在要的是余量,等控制律验证过了,成本优化的事以后再说。

![硬件规格对比:NUCLEO-H753ZI(Cortex-M7、480MHz、双精度 FPU、2MB/1MB)与 X-NUCLEO-IKS5A1(双 IMU、磁力计、气压计、Arduino Uno R3 接口)](/images/hardware/reference-hardware-speccard.png)

## X-NUCLEO-IKS5A1——现在买,下一步才用得上

传感器扩展板选的是 ST 官方 Nucleo 传感器扩展板里最新的一代:两颗 IMU（带片上智能处理单元 ISPU 的 ISM330IS,以及支持双量程加速度检测的 ISM6HG256X）、一颗磁力计、一颗气压计——姿态、航向、高度三个维度的传感一次性覆盖,直接插进 Arduino 兼容排针,不需要面包板接线。

有一点要说清楚:上面说的 HIL 里程碑其实用不上它。虚拟飞机的"传感器读数"是 Simulink 里算出来的数字,不是一颗真实芯片输出的信号。这块板子要等真实传感器数据——以及它带来的真实噪声——进入闭环之后才真正派上用场,或者等项目从仿真机体过渡到实物机体的时候。现在买它是为余量买的,不是接下来要做的事情的硬性需求。

## 一个值得提前说清楚的平台限制

MathWorks 现行的 STM32 工具链（STM32 Microcontroller Blockset,从 R2026a 开始提供）列出的受支持主机平台只有 Windows 和 Linux——macOS 不在列表里。任何涉及"从 Simulink 给 STM32 生成代码并部署"的工作都得在 Windows 或 Linux 机器上做;仿真和控制器设计这部分工作在哪个平台都能做。

**参考来源**:STMicroelectronics NUCLEO-H753ZI 产品页与 UM2407 用户手册 · STMicroelectronics 社区,"Nucleo-H743ZI2 NRND and use NUCLEO-H753ZI" · MathWorks STM32 Microcontroller Blockset 平台需求页面 · STMicroelectronics X-NUCLEO-IKS5A1 产品页与 Data Brief。
