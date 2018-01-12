---
layout: post
title: Housekeeping
date: 2017-06-11 17:11:26 +0300
category: blog
---

This humble site has seen a number of changes over the last few weeks. As more of [my work][mw] of late has been focused on research, process, workflows, and strategy, I've been itching for ways to stretch my design and development muscles. Below is a summary of the work I've been doing to improve your reading experience and my publishing experience.

## NightMode

Ever since I lost my Kindle Paperwhite on the flight from Brussels to Entebbe, I've been doing the majority of my reading on my iPhone. This has served to emphasize one of my favourite design features of modern reading apps: night mode.

Leaning on [the work of Chris Coyier][cc], I first added a simple function which changes between light and dark themes depending on your computer's local time. Thanks to SASS, I can produce as many colour themes as I'd like just by changing a few variables.

Of course, as someone who cares deeply about his own reading environment, I wouldn't want to prevent you from viewing the site how you'd prefer. Using some more JavaScript and HTML5's `localStorage` and `sessionStorage`, I've added the ability for you to override the time-based theme to suit your own preference. I'm storing your preference in `sessionStorage` so it will reset the next time you visit this site.

You can have a look at how I'm doing this thanks to…

## Public Github Repo

I've learned everything I know about design and development through experience and the generosity of others. Just last night I was having a conversation about viewing the source code of my favourite sites to see how they're made. I did this back when I first started in design and still do to this day.

On a few occasions I've published some tips and tricks here on the site, but recently I've been thinking about how I could share even more. Of course one option is to continue writing and publishing what I know and I certainly intend to do so. However, I realized recently that by opening up [the entire codebase for my site][gb] to the public, anyone can have a look under the hood and learn from both my successes and my mistakes.

Since its inception, this site has been my playground for learning and experimentation. By opening up the code for you to see, my hope is you will be inspired to follow a similar path.

## Microblog

The dozen or so of you who subscribe to my [feed][sub] may have noticed an increase in posts from me this past week. This is due to the recent addition of micro posts, small title-less musings that fall between longer-form posts like this one.

Back when I used ExpressionEngine to publish this site, I used to have a section called “asides”. These were always links to other sites with a bit of personal commentary. At times these links were interspersed with the long-form posts, other times they lived on their own page. Currently, the new micro posts only live on the homepage of this site.

The way I've designed the new micro posts makes linking to other pages optional. While some may link out, others will feel more like a tweet. Until Manton Reece's new service, [Micro.blog][mb] opens to the general public, I'm [using IFTTT to post these][if] to my Twitter feed.

Probably the best part of adding these short-form posts to the site has been the inspiration to finally find a solution to a problem I've faced for almost 5 years now, which was…

## Publishing from my iPhone

When I had finally had enough of ExpressionEngine, I started publishing to Tumblr for one very simple reason: it was the only way (outside of using WordPress) I could see to publish from my iPhone.

While the Tumblr app is a great app, I've always struggled philosophically with the fact that Tumblr is a hosted service. This means someone else could shut it down or repurpose its content for nefarious purposes at any time without my consent. If the recent [del.icio.us announcement][da] is any indication, it's not unreasonable to foresee Yahoo-owned Tumblr suffering a similar fate.

Eventually, this philosophical divide felt more important than the need to publish from my phone. At the same time, I had become far more comfortable working in terminal and decided to publish my site through Jekyll.

The transition from Tumblr to Jekyll happened over a year ago. While I've enjoyed publishing via the command line on my computer, the nagging desire to publish directly from my phone never waivered.

My first attempt at solving this problem was to use [Siteleaf][sl], a cloud-based platform for publishing static websites. Siteleaf provides users an online dashboard — similar to the WordPress dashboard — that allows you to publish posts and pages to a Jekyll site using a beautifully designed GUI.

As great as this experience is on a desktop, the only option for publishing through Siteleaf on mobile is though the mobile web app. Having to wait for the web app to load and not having the ability to draft posts offline made this solution untenable on the phone.

My optimal solution is to use a native app (or apps) to publish to my site. After a bit of research, I found Kirby Turner's method of [posting to Jekyll from his iPhone][kt] to be a good place to start. Kirby uses [Editorial][ed] to write his posts and [Editorial Workflows][ew] to publish to his site through [Working Copy][wc], a git client for iOS.

I downloaded Editorial to see what it was like and have really enjoyed writing this post in it. However, Editorial is a bit too cumbersome when I want to post a micro post. To me, those are more like tweets and should take far less time to compose than is required by Editorial.

[Drafts][dr] is an app that gives you a blank sheet each time you open it. It's the quickest way I've found to go from having an idea to jotting it down so as not to forget and I've used the app for this purpose for several years.

Posting micro posts felt exactly up Drafts' alley, so I adapted Kirby's approach by using Drafts to write, [Workflow][wf] to run the post through a series of actions, and Working Copy to commit the post to my git repo. While publishing the post isn't quite as quick as tweeting, it feels really good to know my content is going to a place I own and control.

## Feeds

Much like the last time I added short-form posts to my site, this time has necessitated the need for new RSS feeds. This was also the perfect opportunity to familiarize myself with the new [JSON feed][jsf] format by Manton Reece and Brent Simmons.

Head to the new [Subscribe page][sub] to see all of the feed options available as well as an option to receive a weekly digest via email.

## Back to blogging

Around this time last year, I was [beating myself up][bmu] for not writing as often as I would have liked. I said I was going to start publishing once a week which was a foolish thing to say. I was and am still a ways away from being able to maintain that kind of pace.

But, I'm feeling more motivated than ever to write and publish thanks to the effort I've put into making this site a better place for you and for me.

[mw]: http://patdryburgh.com/blog/designing-in-uganda/
[cc]: https://css-tricks.com/snippets/javascript/different-stylesheet-pending-the-time-of-day/
[gb]: https://github.com/patdryburgh/patdryburgh.com
[mb]: http://micro.blog
[da]: https://blog.pinboard.in/2017/06/pinboard_acquires_delicious/
[sl]: http://siteleaf.com
[kt]: https://www.thecave.com/2017/04/21/how-i-post-to-my-jekyll-site-using-my-iphone/
[sub]: http://patdryburgh.com/subscribe
[if]: http://patdryburgh.com/blog/tweeting-micro-posts/
[ed]: http://omz-software.com/editorial/
[ew]: http://www.editorial-workflows.com/
[wc]: https://workingcopyapp.com/
[dr]: http://agiletortoise.com/drafts/
[wf]: https://workflow.is/
[jsf]: https://jsonfeed.org
[bmu]: http://patdryburgh.com/blog/just-write-and-publish/

