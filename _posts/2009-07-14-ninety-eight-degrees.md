---
title: Ninety-Eight Degrees
date: 2009-07-14 00:00:00 Z
categories:
- blog
layout: post
author: patdryburgh
url_title: ninety-eight-degrees
old_entry_id: 46
---

I grew up in a small town of just a couple thousand people. We had small schools, small stores, small parks, and one small, weekly paper. *The Signpost* came out on Wednesdays and covered not just my town, but several surrounding towns as well. It was not an uncommon occurrence to see your name or picture somewhere in the paper. I remember the first time my first time on the front page, I was around 3 and collecting Easter Eggs in our community park.

The Signpost came out once a week because that was all our little town needed. Had it been a daily, it likely would have been one sheet folded in four, with extra space for personal notes. When I was learning to read I would read the Signpost. It was all the news I needed to hear.

As I got a little older I began to pick up the London Free Press, the local paper for the city nearby. A full daily paper with news, sports, entertainment, comments, business and more found its way to our family's doorstep every morning. When I began reading the Free Press, my world was opened wide. Suddenly there was an influx of news, more than I could possibly dream of reading.

Fast forward a few years with the introduction of blogs, news websites, social bookmarking sites, Digg and later, Twitter, and with it all a need to better manage the news I consumed. That's when I was introduced to feed readers, a personal inbox where the world's news could be digitally delivered right to me. Google Feed Reader and later [NetNewsWire][] would become my gateway to the world's news. From personal blogs to tech news sites, design websites to music news sites and everything in between, my reader replaced the traditional newspaper. It was instant, it was personal and it was free.

Until it became too much. 

### Overload 

When I read a newspaper, I rarely read most of the articles. I glance at some of the major headlines, blow past the minor ones, and linger in the comments and business sections for a bit before heading off to work. Out of hundreds of articles I maybe read 3-5.

On the other hand, when I open my feed reader I am bombarded by 40-50 articles, all of varying length and quality, from several hundred different sources. There's no indication aside from looking at where the article came from to decide the priority any given article should have. In most cases, I blow through it all and only read what a few friends have written. I know I'm missing a lot of great stuff, because I don't subscribe to feeds I'm not interested in. The contrast to this are the times when I've let my feeds simmer a little too long, only to have several hundred articles waiting to be addressed. On occasion this is a welcome escape. More often than not, however, a click of the "Mark All as Read" button frees me from the daunting task ahead. Only, who knows what I've missed…

### More of What I Want, When I Want

A few months ago [a friend](http://michaelmistretta.com/ "Michael Mistretta") shared a great tip to help counter the issue I was having with my feed reader. His suggestion was to put my feeds into three separate folders, called "1st," "2nd," and "Sparks." The idea was to put only the must-reads into the 1st folder. The 2nd folder was for blogs I enjoy, but if I missed something wouldn't be the end of the world. The last folder was for new blogs, that with time would either find themselves either in the 1st or 2nd folder, or out of my feed reader altogether. For a few months, this really worked well, and I found myself having a better grasp on what I really wanted to read. Thought, even with this system I had to be careful not to subscribe to too many blogs, or the system would become useless. 

### 98.6&deg;

The problem with RSS feed readers today is that no priority is placed on different types of posts. Going back to the newspaper analogy, stories are given priority by the type size of the headlines, the position in the paper and on each individual page, the presence of an image and length of an article. In a feed reader, however, all articles are given the exact same priority: unread. There is nothing to differentiate between a beautifully written article from one of your favourite writers and a post full of lolcats. The user is left to fend for himself, or to hopefully build a system that hopefully separates the wheat from the chaff.

### 98.6&deg; and Climbing

Enter [Shaun Inman][]'s latest creation, [Fever][]. Fever is a combination of a normal RSS feed reader and a personal recommendation service, &agrave; la Digg or Reddit. Unlike Digg or Reddit, news is filtered not through a community voting system, but rather through links tracked through your own personal feed subscriptions. 

To do this, Fever introduces what it calls the "Hot List." To create this Hot List, Fever asks you to distinguish between your essential feeds, called Kindling, and your supplemental feeds, called Sparks. Taking the links that are tracked in your Sparks, the Hot List feeds you recommended stories and links that you won't want to miss. The more feeds that link to a particular story or link, the hotter that item becomes and the higher it sits in your Hot List. Your Hot List can track items back over a period of a day, a few days, a few weeks and up to a month. You'll never miss the most important news because you were too busy being Rickrolled again.

Like Inman's previous product, [Mint][], Fever is a self-hosted app built to run on your own hosting server using PHP and a MySQL database to operate. While this may deter casual users who are not comfortable with self-installed web apps, that has never really been Shaun's market. Fever, like Mint, is targeted at a tech-savvy market that values quality design and unique functionality.

### Like a Real App, in the Browser!

One of the identifying qualities of an Inman creation is the high level of attention to detail, both in the aesthetics of the product as well as how the product functions. With Fever, Inman does not disappoint on either level. 

When Fever first loads, users are presented with a two column layout that displays links to the user's groups, Kindling and Sparks, and Saved items on the left, and the Hot List on the right. Kindling are the feeds that generally have a great deal of unique content, and that you enjoy reading on a regular basis. Sparks, on the other hand, can be feeds that display primarily links to other sites, or feeds that are high-volume but may not have must-read content with each post. 

Hot List items are displayed with the item's temperature in big, beautiful Helvetica Neue and a thermometer graphic indicating hot hot each item is. A link to the item is displayed in bold, with each feed that links to that item listed below so you can read not only the hot item, but also the commentary of others. 

The Hot List is a great solution to a number of problems. First, it is the best solution so far to the problem of news and information importance. Again, in most feed readers each news item is given the same visual priority. In Fever, the most talked about items are brought right to the forefront. This is perfect for those times when you only have a few minutes to spare and would rather spend it reading the most interesting stories rather than sifting through countless top 10 lists.

Second, the Hot List not only highlights the hot items, but the supplementary running commentaries as well. This is handy when you want to get a varied perspective on a particular piece of news. For instance, last week Google announced the release of their first operating system, Chrome OS. While it was interesting to read the news, the running commentary behind the news was staggering. [Jason Kottke](http://www.kottke.org/09/07/google-chrome-os-and-gooos) and [John Gruber](http://daringfireball.net/2009/07/chrome_os_context) both had incredibly interesting things to say about the Google news release, and I was able to access both commentaries directly from Fever's Hot List items. On a larger scale, this system could potentially replace the need for reading blog comments as commentary posted on the item's page, allowing the focus to be on well written, thoughtful commentary that doesn't dilute the conversation.

### Stay in Bed with a Fever?

Of course, no feed reader is complete without a mobile counterpart. Fever comes with a Mobile Safari-optimized version, complete with the appropriate iPhone icon. The mobile version of Fever looks beautiful, and the Hot List is the perfect companion for those quick fixes while on the go. 

### Meltdown

With all that is positive about Fever, there are a few minor things I hope will be addressed in future releases<sup><a href="#81311" id="fn1" title="see footnote 1">1</a></sup>

First, I wish there was a bit more documentation as to how the whole system works. Shaun did release a [demo video](http://feedafever.com/#demo) to explain many of the features, however I was still lost on some things. The main one was how Fever refreshes the feeds. At 248 feeds, Fever takes a few minutes to refresh them all. Initially I had Fever set to refresh when I went to the site, which meant I had to wait almost 5 minutes to start reading anything. It also meant that I had to load my feeds in my desktop browser before loading Fever on my iPod touch, otherwise the feeds wouldn't refresh.

This was very frustrating, until I dug a little deeper and found out about refreshing using cron. Even now I'm not entirely sure what cron is, other than knowing that it replays a certain code every 15 minutes to refresh my feeds. The code can be found under "Extras" in the main Fever menu.

Second, the iPhone app, while aesthetically beautiful, lags quite a bit in how it transitions from one section of the app to the other. While it looks like a native iPhone app, it doesn't function like one, and that is unfortunate. I don't know if there's a way for Shaun to create a native Fever app for the iPhone, but if there is, I'm sure there's a market for it. 

### Thirty Bones

Finally, the only major downside to Fever: the price. I am absolutely in favour of paying for quality products. I also have a passion for supporting the independent developer community. Where the issue arrises here, however, is that there are so many incredible feed readers available for free, it's hard to justify the $30 price tag for Fever. When [NetNewsWire][] and [NewsFire][], two incredibly beautiful and functional desktop apps, and Google Reader, a fully functional web-based reader are all free, $30 seems quite steep. The Hot List is a very unique feature in the feed reader world, but I'm not entirely sure it justifies the price. 

I am hoping that Shaun uses future versions of Fever to push the envelope of what a feed reader can be. I would love if there were some social aspect to it, where my Hot List is affected in some way by my friends' Host Lists. I suspect that future releases will also include some of the extensibility of the current version of Mint, including different themes and plugins. Perhaps Inman would be able to produce a hosted version, so that those not as technologically savvy could themselves catch a bit of the Fever. 

### Contagious

With Fever, Inman has at the very least produced a very unique feed reader, while at the same time has laid down the foundations for what is potentially the most promising solution to the problem of information overload.

<div id="footnote">
	<ol>
		<li id="81311">Which, by the way, are automatically downloaded and installed without any input from the user. That is slick. <a href="#fn1" title="return to article">↑</a></li>
	</ol>
</div>

[Shaun Inman]: http://shauninman.com/
[Fever]: http://feedafever.com/
[Mint]: http://haveamint.com/
[NetNewsWire]: http://www.newsgator.com/INDIVIDUALS/NETNEWSWIRE/
[NewsFire]: http://www.newsfirerss.com/