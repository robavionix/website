---
enable: true
title: "有课程方面的想法吗?"
description: "告诉我们你的班级规模和时间安排,我们会帮你判断合适的套装——也欢迎直接来问课程体系的任何问题。"
officeHours: "通常 2 个工作日内回复"

formTitle: "填写联系表单"
formDescription: "告诉我们你的需求,我们会回复实用的下一步建议。"

form:
  emailSubject: "来自你网站的新表单提交"
  submitButton:
    enable: true
    label: "发送消息"
    class: "w-full justify-center rounded-md"
    hoverEffect: "magnetic-text-flip"

  inputs:
    - label: "你的姓名"
      name: "Name"
      placeholder: "你的姓名"
      required: true
      halfWidth: true
    - label: "邮箱地址"
      name: "Email"
      placeholder: "邮箱地址"
      type: "email"
      required: true
      halfWidth: true
    - label: "所在院校 / 部门"
      name: "Institution"
      placeholder: "院校或机构名称"
      halfWidth: true
    - label: "预计开课学期"
      name: "Start Date"
      placeholder: "预计开课学期"
      type: "date"
      halfWidth: true
    - label: "你感兴趣的档位"
      name: "Tier"
      placeholder: "选择一个档位"
      required: true
      dropdown:
        type: "search"
        search:
          placeholder: "搜索档位"
        items:
          - label: "Core(£179,个人版)"
            value: "Core"
          - label: "Pro(£299,个人版)"
            value: "Pro"
          - label: "Classroom(£2,499,十套装)"
            value: "Classroom"
          - label: "还没想好"
            value: "Not sure yet"
    - label: "个人购买"
      name: "Project Type"
      value: "Individual purchase"
      type: "radio"
      group: "Project Type"
      groupLabel: "购买类型"
      checked: true
      halfWidth: true
    - label: "院系 / 机构采购"
      name: "Project Type"
      value: "Institutional purchase"
      type: "radio"
      group: "Project Type"
      halfWidth: true
    - label: "邮箱"
      name: "Preferred Contact"
      value: "Email"
      type: "checkbox"
      group: "Preferred Contact"
      groupLabel: "偏好的联系方式"
      checked: true
      halfWidth: true
    - label: "电话"
      name: "Preferred Contact"
      value: "Phone"
      type: "checkbox"
      group: "Preferred Contact"
      halfWidth: true
    - label: "写下你的留言"
      name: "Message"
      placeholder: "写下你的留言"
      tag: "textarea"
      rows: "5"
      required: true
    - label: "我同意就此次请求被联系。"
      name: "Consent"
      value: true
      type: "checkbox"
      required: true
    - note: success
      parentClass: "hidden text-sm message success"
      content: "谢谢,我们已收到你的请求,会尽快回复实用的下一步建议。"
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "出了点问题,请重试或直接联系我们。"
---
