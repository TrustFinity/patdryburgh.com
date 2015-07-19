---
layout: post
author: patdryburgh
title: High-Res Images in Tumblr
url_title: high-res-images-in-tumblr
date: 2010-08-04
old_entry_id: 79


---

One of my favourite elements of my current blog design is the large images used for photo posts. When I post a photo that I or a friend has taken, I like that the photo will span the width of the site’s content, giving the photo priority in the content.

This morning my friend <a href="http://log.philbowell.com/">Phil Bowell</a> emailed asking how I achieved this affect, when Tumblr limits photos to 500px wide when displayed in their themes. I thought the answer to be helpful enough to share with&nbsp;everyone.

When <a href="http://www.tumblr.com/docs/en/custom_themes">designing a Tumblr theme</a>, Tumblr allows the designer to set the width of an image in a photo post to a certain width, using the tags <code>{PhotoURL-500}</code>, <code>{PhotoURL-400}</code>, <code>{PhotoURL-250}</code>, <code>{PhotoURL-100}</code>, or <code>{PhotoURL-75sq}</code>. This, in essence, limits designers to a maximum width of 500px&nbsp;wide.

However, they also include another tag, which is <code>{PhotoURL-HighRes}</code>. This produces the largest possible file that was uploaded when posting the photo blog&nbsp;post.

Using this tag, along with the css&nbsp;declaration:

<pre><code>.photo img { max-width: 100%; height: auto }</code></pre>

I can have the photo span exactly the width of the content&nbsp;container.

With these two bits of Tumblr code and CSS in place, I usually post the URL of a Flickr photo using the 1024px version. This way, it will span the full length of my current design, and should I make my layout any wider, I shouldn’t have to go back and change all of my photo posts to accommodate a wider image&nbsp;layout.

I hope this helps you break free of the implied 500px width limit in Tumblr’s theme designs, and allows you to decide for yourself how you wish to display your photos and&nbsp;images.

<h2>Addendum</h2>

I missed a very important step in getting your site to display your high-res&nbsp;photos:

<ol>
<li>Go to the <a href="http://www.tumblr.com/customize">Customize</a> screen for your&nbsp;blog.</li>
<li>Select the “Advanced”&nbsp;menu.</li>
<li>Select “Enable high-res&nbsp;photos.”</li>
</ol>

<img src="http://28.media.tumblr.com/Yb4zJBopkko1n2jbZ7rx12Quo1_500.png" alt="">

Hope that&nbsp;helps!