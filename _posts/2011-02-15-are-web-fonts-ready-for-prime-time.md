---
title: Are Web Fonts Ready for Prime Time?
date: 2011-02-15 00:00:00 Z
categories:
- blog
tags: design development
layout: post
author: patdryburgh
url_title: are-web-fonts-ready-for-prime-time
old_entry_id: 109
---

Designers, for the most part, are geeks. And geeks, for the most part, are trailblazers. They are willing to give new technology a chance, even if it means building their own computer from spare parts, waiting for a dial-up connection to be made, or [waiting in line for 4 days](http://firstinline.wordpress.com/) for a phone.

2010 saw the rise of the web font. Fantastic services such as [Typekit](http://typekit.com) and [Web Type](http://www.webtype.com/) have provided a way for web designers to leave behind relics like Georgia, Verdana and Arial. We've seen some pretty incredible work done with typography on the web since, and I am sure that more work is on the horizon.

I've been using Typekit on my personal site for a year now, and have always been pleased with how things look on my machine. Today I was playing around with the type on my site and decided to start using [FF Meta Serif Web](http://typekit.com/fonts/ff-meta-serif-web-pro). FF Meta Serif looked fantastic on my Mac. I knew that on computers powered by Windows the type might look a little jaggy, but that has been the case since the day I designed my first website over 5 years ago.

I assumed that using type served by these services were at least readable on operating systems and browsers. However, [this screenshot](https://twitter.com/dereksilva/status/37694994030534657) from Derek Silva shows I was terribly mistaken: 

<img src="{{ site.url }}/images/uploads/swtzk2.jpg" alt="Screenshot of PatDryburgh.com on Windows 7 running Chrome" />

It turns out that on Derek's Windows 7 machine running Chrome, the text is beyond jaggy; it's almost entirely unreadable. If a potential client were to visit my site from a Windows machine, they would think I'm completely unprofessional.

What confounds me even more about this situation is that FF Meta Serif Web, specifically, [was endorsed](http://fontfeed.com/archives/some-thoughts-on-web-fonts-by-stephen-coles/) by respected typographer Stephen Coles, among others. I thought I had done my due diligence by selecting a font which had been hinted for the screen. It seems there's much more to it than I initially thought.

This experience has caused me to wonder, are today's web fonts ready for prime time? Are we, as designers, wise in making fonts&mdash;which aren't properly designed for the screen&mdash;widely available for use on the web?

Or maybe there are web fonts that I'm not seeing that are specifically designed for the screen like Georgia and Verdana were. What fonts are you using on your personal projects and client work?

## Addendum

Well, it appears as though there is in fact more to this story. After I published this article I was able to get my hands on my parents' Windows PC and test my site out on Google Chrome. As [Derek experienced](https://twitter.com/dereksilva/status/37693342624137216), the type was almost completely illegible.

I did a bit of digging, and remembered a bit of CSS code I had [picked up from Tim Van Damme](http://maxvoltar.com/archive/-webkit-font-smoothing) a while back that related specifically to font antialiasing: 

<pre><code>-webkit-font-smoothing: antialiased</code></pre>

At one point when I was using Helvetica on my site, I had used this bit of code to smooth out the look of the type on Webkit browsers. However it turns out that when you use this code on a font that's already hinted for the screen&mdash;like FF Meta Serif Web is&mdash;the font is in effect over-aliased to the point of being unreadable. Once I went back into my CSS code and removed that declaration, the type on the Windows machine was as clear as any other font on a Windows machine. For a before and after comparison: 

<img src="{{ site.url }}/images/uploads/font-smoothing.jpg" alt="Font Smoothing Comparison" />

While I would still argue that we need to be mindful of the fonts we choose to use in our web design work, I am glad to know that there are in fact web fonts which are designed for the screen which are available to use today.