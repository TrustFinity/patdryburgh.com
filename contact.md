---
title: Contact
permalink: "/contact/"
layout: page
---

Currently accepting project inquiries for September. Always accepting messages to say hello.

<form action="https://formspree.io/hello@patdryburgh.com" method="POST">
    <div class="floating-input">
      <input type="text" name="name" placeholder="Your Name" value="" required>
      <label for="name" class="hide">Your Name</label>
    </div>
    <div class="floating-input">
      <input type="email" name="_replyto" placeholder="Your Email" value="" onkeyup="this.setAttribute('value', this.value);" required>
      <label for="_replyto" class="hide">Your Email</label>
    </div>
    <div class="floating-input">
      <textarea name="message" placeholder="" value="" required></textarea>
      <label for="message" class="hide">Project Details</label>
    </div>
    <input type="hidden" name="_next" value="http://patdryburgh.com/thanks/">
    <input type="text" name="_gotcha" style="display:none">
    <button type="submit" class="btn">Send Message &rarr;</button>
</form>