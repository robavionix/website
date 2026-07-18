---
enable: true # Control the visibility of this section across all pages where it is used
title: "Have a course in mind?"
description: "Tell us about your cohort and timeline, and we'll help you pick the right tier — or just answer your questions about the curriculum."
officeHours: "Usually replies within 2 business days" # Optional; remove or set empty to hide this row.

# Check config.toml file for form action related settings
# this is also used in the footer of the personal portfolio homepage
formTitle: "Fill the contact form"
formDescription: "Tell us what you need and we'll reply with useful next steps."

form:
  emailSubject: "New form submission from your website" # Customized email subject (applicable when anyone submit form, form submission may receive by email depend on provider)
  submitButton:
    # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
    enable: true
    label: "Send Message"
    class: "w-full justify-center rounded-md"
    hoverEffect: "magnetic-text-flip" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
    # variant: "" # Optional: fill | outline | text | circle
    # rel: "" # Optional
    # target: "" # Optional

  # This note will show at the end of form
  # note: |
  #   Your data is safe with us. We respect your privacy and never share your information. <br /> Read our [Privacy Policy](/privacy-policy/).
  inputs:
    - label: "Your name"
      name: "Name"
      placeholder: "Your name"
      required: true
      halfWidth: true
    - label: "Email address"
      name: "Email"
      placeholder: "Email address"
      type: "email"
      required: true
      halfWidth: true
    - label: "Institution / department"
      name: "Institution"
      placeholder: "University or organization"
      halfWidth: true
    - label: "Target term"
      name: "Start Date"
      placeholder: "Target term"
      type: "date"
      halfWidth: true
    - label: "Which tier are you interested in?"
      name: "Tier"
      placeholder: "Select a tier"
      required: true
      dropdown:
        type: "search"
        search:
          placeholder: "Search tier"
        items:
          - label: "Core (£179, individual)"
            value: "Core"
          - label: "Pro (£299, individual)"
            value: "Pro"
          - label: "Classroom (£2,499, 10 sets)"
            value: "Classroom"
          - label: "Not sure yet"
            value: "Not sure yet"
    - label: "Individual purchase"
      name: "Project Type"
      value: "Individual purchase"
      type: "radio"
      group: "Project Type"
      groupLabel: "Purchase type"
      checked: true
      halfWidth: true
    - label: "Institutional / department purchase"
      name: "Project Type"
      value: "Institutional purchase"
      type: "radio"
      group: "Project Type"
      halfWidth: true
    - label: "Email"
      name: "Preferred Contact"
      value: "Email"
      type: "checkbox"
      group: "Preferred Contact"
      groupLabel: "Preferred contact method"
      checked: true
      halfWidth: true
    - label: "Phone"
      name: "Preferred Contact"
      value: "Phone"
      type: "checkbox"
      group: "Preferred Contact"
      halfWidth: true
    - label: "Write your message"
      name: "Message"
      placeholder: "Write your message"
      tag: "textarea"
      rows: "5"
      required: true
    - label: "I agree to be contacted about this request."
      name: "Consent"
      value: true
      type: "checkbox"
      required: true
    - note: success
      parentClass: "hidden text-sm message success"
      content: "Thank you. We received your request and will reply with useful next steps."
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "Something went wrong. Please try again or contact us directly."
---
