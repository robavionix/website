---
title: "可验证,而不只是看起来合理:FT-1 从参数文件到真实 AVL 运行"
description: "Robavionix 固定翼机体背后的每一个数字,都能追溯到一个公式、一次真实的涡格法计算,或一篇引用文献——包括模型自己揭示出的两个真问题。"
date: 2026-07-20
image: "/images/ft1/ft1-cover.jpg"
draft: false
categories: ["建站记录"]
tags: ["AVL", "飞机设计", "飞行品质", "FT-1"]
---

网上大部分小型飞行器的“设计”都是一张谁也没重新推导过的、看起来还算合理的数字表。FT-1——从 [L2](/curriculum/l2-lqr-state-feedback/) 起与四轴并行贯穿 Robavionix 课程体系的固定翼机体——遵循的是另一条规则:每一个几何和质量数字,都必须能追溯到一个公式、一个引用过的方法,或者一次真实的求解器运行。这篇文章就是那条追溯链本身,包括模型自己发现的两个真问题。

<ImageList>
  <ImageItem
    halfWidth
    imageSrc="/images/ft1/ft1-top-view.png"
    imageAlt="FT-1 俯视图,展示机翼、尾翼、操纵面与重心位置,直接由 AVL 验证过的坐标绘制"
  />
  <ImageItem
    halfWidth
    imageSrc="/images/ft1/ft1-front-view.png"
    imageAlt="FT-1 前视图,展示 3 度上反角,已通过真实 AVL 的 Clβ 符号检查验证"
  />
</ImageList>

两张图都是直接从 `ft1.avl` 里的坐标渲染出来的,不是手绘草图——机身外形是唯一明确标注的例外,仍是示意性的,等最终机身剖面定稿后修正。

## 从第一性原理定尺寸,不是抄表格

机翼面积来自翼载荷目标(概念设计阶段的尺寸选择,不是推导量),并直接用升力方程核对失速速度:在 0.45 m²、2.0 kg 设计重量、假设 CL_max=1.2 的条件下,V_stall≈7.7 m/s,相对 13 m/s 的巡航目标有 1.69 倍裕度。尾翼尺寸用的是飞机概念设计教材里的标准方法——尾容量系数法(Raymer 的《Aircraft Design: A Conceptual Approach》是这类系数按机型分类典型区间最常被引用的参考)——平尾容量取 0.55、垂尾容量取 0.035,都落在轻型/通用航空级飞行器常见区间内。

## 一个真能加载的几何模型——以及证明这一点的那个 bug

Simulink 里画一张线图很容易造假。一个 AVL 模型要么能加载,要么不能。把真实几何文件跑进 **AVL 3.40**(Drela & Youngren,MIT——最初由 Youngren 大约在 1988 年为 MIT 的 Athena 软件集合编写,此后经过大量开发)时,第一次尝试就暴露了一个真 bug:放在 Clark-Y 翼型坐标(直接取自 [UIUC Airfoil Coordinates Database](https://m-selig.ae.illinois.edu/ads/coord/clarky.dat))前面的多行来源说明注释,打断了 AVL 的行读取器——它只接受一行标题,之后必须直接是数值数据。四次翼型读取先后静默失败,才定位到问题。

修好之后,同一次运行又暴露出更要紧的事:设计里“25% MAC”这个重心默认目标,对上 AVL 实际算出的中性点,静稳定裕度是 **24.3%**——几乎是 10–15% 设计目标的两倍。这个修正不是走过场:解出命中目标区间上限所需的重心,参考点要后移 23 mm,刚好落在电池舱滑动余量本来就是为这种情况预留的范围内。修正后的静稳定裕度:**14.97%**。

## 质量与惯量,用两条独立路径核对过

小型 UAV 的质量特性不像尾容量那样能查表——全尺寸飞机的统计重量分数法在这个尺度上不成立。标准做法是部件累加法:把实际或估算的部件质量放在已知位置,近似成简单几何形状,再用平行轴定理求和。FT-1 的六部件拆分里,电池位置是唯一的自由变量,用来闭合整个方程——解出上面那个目标重心所需的质量矩方程,电池落在 0.2825 m,正好在机翼和目标重心之间,也正是这种布局里电池托架实际会摆放的位置。

由此得到的惯量(Ixx=0.1507、Iyy=0.0928、Izz=0.2392 kg·m²)先用平行轴定理手算了一遍,又在把对应质量文件喂给 AVL 后独立复算了一遍——两者精确到三四位有效数字都吻合。作为一个有真实物理内容的体检:滚转惯量 99.6% 来自机翼——这正是“大部分质量集中在离机身中线 25cm 以内,而机翼两侧各展到 90cm”这种质量分布理应产生的结果。

最终的实测校核——测量实物机体的真实惯量——会用双线摆,这是小型飞行器的标准技术,有专门的优化测量方法发表过:Jardin & Mueller, "Optimized Measurements of Unmanned-Air-Vehicle Mass Moment of Inertia with a Bifilar Pendulum," *Journal of Aircraft*, Vol. 46, No. 3 (2009), pp. 763–775。

## 把特征值跑出来,如实报告它们说了什么

用一个配平好的工况(CL=0.4212,V=13 m/s,升降舵只需偏转 0.75°、远没打满),AVL 的 `MODE` 命令直接给出线性化动态模态,对照的是 **MIL-F-8785C**,*Military Specification: Flying Qualities of Piloted Airplanes*(1980)里的 Level 1 飞行品质判据——这也是本课程体系[固定翼验证判据](/curriculum/l5-lpv-smc-fdi/)已经在引用的同一份文献。

三个模态干净通过:滚转(时间常数 0.063s,远优于 ≤1.0s 上限)、荷兰滚(ωn=5.12 rad/s,ζ=0.181,落在目标区间)、短周期(ζ=0.769,接近目标)。两个没通过,这里如实报告,不做删减:

- **螺旋模态发散**,而且比预期更快——幅值倍增时间 12.4s,对照 >30s 的设计目标,也没达到 MIL-F-8785C 自己给 Category B 定的 20s 最低门槛。
- **长周期阻尼比规格低了一个数量级**——ζ=0.0044,对照 Level 1 的 0.04 最低门槛。这个模态是稳定的,但几乎不衰减,一个可能的原因是当前模型粘性阻力仍是零(XFOIL 极曲线还没跑,CDvis 全程为 0)。

这两项在现阶段都不算失格——这正是验证流程本来就该发现的那种问题——但如果把“五项全过”包装出来,而真实情况是“五项过三项”,那就违背了从一开始就要做一个“可核查”的东西这件事本身的意义。

## 为什么这才是真正的重点

一个只靠“相信我们”撑起可信度的教学平台,教不了它自称要教的东西。这篇文章里的每一个数字,要么能对应一个你可以重新跑一遍的公式,要么能对应一篇你可以查到的引用文献,要么能对应一份真实存在于硬盘上的 AVL 日志文件。两个还没解决的问题会进入下一轮设计迭代,不会被塞进一个脚注里假装不存在。

**参考文献**:AVL 3.40, M. Drela & H. Youngren, MIT — [User Primer](https://web.mit.edu/drela/Public/web/avl/AVL_User_Primer.pdf) · Clark-Y 坐标,[UIUC Airfoil Coordinates Database](https://m-selig.ae.illinois.edu/ads/coord/clarky.dat) · MIL-F-8785C, *Flying Qualities of Piloted Airplanes* (1980) · M. Jardin & T. Mueller, "Optimized Measurements of Unmanned-Air-Vehicle Mass Moment of Inertia with a Bifilar Pendulum," *Journal of Aircraft*, 46(3), 2009, pp. 763–775。
