---
enable: true
imagePosition: "left"

images:
  large: "/images/skill/skill-1.png"
  small: "/images/skill/skill-2.jpg"

title: |
  不只是纯仿真玩具,是真实硬件与真实故障
subtitle: |
  你设计的每一个控制器都会烧录到 STM32 板上,在 HIL 实验台内的真实测试平台上运行——故障注入开关是硬件本身自带的,不是后来加上去的。
description: |
  从传递函数到基于 Lyapunov 的鲁棒性,每一级课程都以同一个问题收尾:注入一个标准故障,精确测出控制器究竟撑到哪一步。

# EXTRATYPE OPTIONS: "skills" | "list-x" | "list-y" | "stats" | "none"
extraType: "list-x"

# SHARED BUTTON CONFIGURATION (Applies to all section buttons)
buttons:
  - enable: true # Boolean: true | false
    label: "查看课程体系"
    url: "/curriculum/"
    tag: "a" # Enum: a | button
    variant: "fill" # Enum: fill | fill-white | outline | text | circle
    hoverEffect: "magnetic-text-flip" # Enum: text-flip | creative-fill | magnetic | magnetic-text-flip
    icon: # Object
      enable: true
      name: "ArrowUpRight" # String: Lucide Icon Name - https://lucide.de v/icons/?search=
      position: "right" # Enum: left | right (Note: text variant is always right)
    rel: "noopener"
    target: "_blank" # String: _blank | _self
    class: "" # String: Additional button Tailwind classes

listItems:
  - title: "硬件在环,<br />不是纯仿真"
    icon: "Cpu"
  - title: "故障注入<br />内置在实验台里"
    icon: "Zap"
---
