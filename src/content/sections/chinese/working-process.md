---
enable: true
title: "每个实验都遵循<br />同一套五段结构"
# Images should remain lightweight transparent illustrations for the process step layout.
list:
  - title: "在 Simulink 中设计"
    description: "先完全在纯 Simulink 环境里设计并调试控制器——在把理论真正调对之前,不承担任何硬件风险。"
    image: "/images/process/step-01.png"
  - title: "部署到 STM32"
    description: "自动生成代码并烧录到真实的飞控板上。同一个模型现在跑在 HIL 实验台内的真实测试平台上。"
    image: "/images/process/step-02.png"
  - title: "注入故障并测量"
    description: "现场触发一个标准故障,记录控制器的响应,并依据明确的通过阈值自动生成一份性能报告。"
    image: "/images/process/step-03.png"
---
