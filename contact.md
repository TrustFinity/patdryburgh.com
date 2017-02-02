---
layout: page
title: Contact
hide_title: true
permalink: /contact/
---

<div class="no-il">
  <p>I would love to help you solve problems and design products people love. Please complete the project inquiry form below and I will get back to you as quickly as I can.</p>
</div>

<form action="https://formspree.io/hello@patdryburgh.com" method="POST">
    <div class="floating-input">
      <input type="text" name="name" placeholder="First &amp; Last" value="" onkeyup="this.setAttribute('value', this.value);" required>
      <label for="name">Your Name</label>
    </div>
    <div class="floating-input">
      <input type="email" name="_replyto" placeholder="name@example.com" value="" onkeyup="this.setAttribute('value', this.value);" required>
      <label for="_replyto">Your Email</label>
    </div>
    <div class="floating-input">
      <textarea name="project_details" placeholder="Please provide as much detail as possible." value="" onkeyup="this.setAttribute('value', this.value);" required></textarea>
      <label for="project_details">Project Details</label>
    </div>
    <input type="hidden" name="_next" value="http://patdryburgh.com/thanks/">
    <input type="text" name="_gotcha" style="display:none">
    <button type="submit" class="btn">Send Inquiry &rarr;</button>
</form>