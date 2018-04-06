---
title: Using Mint With Tumblr
date: 2009-12-15 00:00:00 Z
categories:
- blog
tags: development
layout: post
author: patdryburgh
url_title: using-mint-with-tumblr
old_entry_id: 260
---

I’ve had a couple people ask how I track my stats with Mint if I’m using Tumblr. It’s actually quite simple. Mint works based on domains, not servers. So long as your Mint installation is under the same domain name as your Tumblr (including subdomains), then you’re golden.

You need:

1. Mint installed on a subdomain (ie. mint.domain.com)
2. Tumblr setup with a custom domain (ie. domain.com, blog.domain.com)

Once you have your Tumblr blog setup with its custom domain, and your Mint installation setup on a subdomain, you just need to put the following code in your custom HTML in your Tumblr theme:

<pre><code>&lt;script src="http://mint.domain.com/?js" type="text/javascript">&lt;/script></code></pre>

I use this same bit of code on both my Tumblr blog and on my portfolio hosted on Cargo Collective. That way I can keep track of my whole website, even if different parts are hosted on multiple servers.