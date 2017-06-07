---
title: Tweeting micro posts with Jekyll and IFTTT
date: 2017-06-07 00:47:40 +0300
categories:
- blog
layout: post
author: patdryburgh
---

With the recent addition of the [micro posts][mp] I'm now posting on this site, I wanted to see if it was possible to syndicate the microblog to Twitter.

As I was not a Kickstarter supporter of [Manton Reece's][mr] [Micro.blog][mb] service, I won't be granted access until its public launch. Micro.blog does exactly what I'm describing in this post, but since I'm impatient I figured this would be a fun thing to figure out on my own.

My first [experiment][ex] involved using [FeedPress][fp] to publish feed updates directly to Twitter. I connected my [microblog RSS feed in FeedPress][rf] with my Twitter account and used the following format:

    ${text}  
    ${link}

Though my first post failed to get syndicated, FeedPress successfully tweeted [the micro post I published earlier today][first]. Instantly I realized the format I was using wasn't going to be optimal. Because FeedPress added the link to the tweet, it appeared as though there was more to read when in fact everything I had to say fit in the tweet.

Of course, there may be times when the micro post is longer than 140 characters. In this case, it would make sense for the tweet to include a link to read the rest of the post. Unfortunately, FeedPress has no way to include conditional statements to only show the link when it's necessary.

The solution I came up with was to create and connect another RSS feed to FeedPress that was tailored specifically for posting micro posts to Twitter. Thanks to Jekyll, adding new feeds is as simple as creating a new XML file.

## Determining when to add a link

In order to determine whether or not to include the link, first I need to determine how many characters are in each micro post. This can be done by running a `size` filter on a liquid variable, like so:

{% raw %}
    {% assign size = post.content | size %}
{% endraw %}

This will get you the number of characters in the `post.content` variable. While this is a good start, it fails to account for characters which are used in the post's HTML tags and special character entities. As such, you will want to strip the HTML from the `post.content` variable and then escape any special characters for XML. I decided to store the cleaned up content in its own variable.

{% raw %}
    {% assign content = post.content | strip_html | xml_escape %}
    {% assign size = content | size %}
{% endraw %}

Next, I need to set a condition that determines when a link should be included. Twitter allows 140 characters in a tweet, so if my micro post is ≤140 characters, no link is required.

{% raw %}
    {% if size > 140 %}
        link needed
    {% else %}
        // no link needed
    {% endif %}
{% endraw %}

## Truncating longer posts

Now that I know which micro posts require a link, I need to know how many characters I can include before I truncate the post and tack on the link. Links posted to Twitter are shortened using their [t.co service][tco] which means [all links are shortened to exactly 23 characters][23]. This leaves me with 117 characters for my post content. I'll want to include an ellipses and a space between my content and the link, so I'm left with 115 characters.

Truncating Jekyll posts is as easy as adding `truncate: 115` to the `post.content` variable. Unfortunately, someone at Jekyll thinks three periods is the same as an ellipsis so I had to manually add my own ellipsis.

In the end, the variable I'm passing when `size > 140` looks like this:

{% raw %}
    {{ content | truncate: 115, '…' }}
{% endraw %}

The resulting code looks like this:

{% raw %}
    {% if size > 140 %}
      <description>
        {{ content | truncate: 115, '…' }}
        {{ post.url | absolute_url }}
      </description>
    {% else %}
      <description>
        {{ content }}
      </description>
    {% endif %}
{% endraw %}

## Connecting the pipes

Easily the most frustrating part of this process has been figuring out the best way to actually syndicate the feed to my Twitter account. I had hoped to continue using FeedPress, but for some reason links were being converted into an ellipsis.

After testing a couple of services, I eventually landed on using IFTTT to pull the latest RSS items and publish them to Twitter. It seemed during my testing that [it was taking its time][time] to poll the feed and push the update. However, when I tried Zapier I found the fact that it promised to check the feed every 15 min and then failed to do so was even more frustrating.

So for now, I think my best option is to continue using IFTTT which has been reliable if not particularly punctual.

## What about JSON?

When I first started thinking about this problem, I was immediately excited about getting to play more with [my new JSON feeds][feeds]. Unfortunately, none of the existing services I could find would accept JSON feed as a source. Admittedly, it's still [very early days for JSON feed][ed] so it's to be expected. It does, however, cause me to wonder just how long it might take to build a simple service around the idea…

But we'll save that for another time.

## See it in action

If you'd like to see this in action, [you should follow me on Twitter][tw]. If you're interested in seeing the final code for conditionally including a link in the item description, [check out the code on Github][gh].

***

_Edit: I made an error when I posted the original version of this article. I had failed to realize I was calculating the size of the `post.content` variable before stripping out the HTML tags and special character entities. The article has been [updated][up] to reflect this change._

[mp]: http://patdryburgh.com/micro/2017-06-01-20-35-06
[mr]: http://manton.org
[mb]: http://micro.blog
[ex]: http://patdryburgh.com/micro/2017-06-03-08-45-00
[fp]: http://feed.press
[rf]: http://feed.patdryburgh.com/micro
[tco]: https://support.twitter.com/articles/109623
[23]: https://support.twitter.com/articles/78124
[time]: http://patdryburgh.com/micro/2017-06-07-00-00-58
[feeds]: http://patdryburgh.com/subscribe/
[tw]: http://twitter.com/patdryburgh
[gh]: https://github.com/patdryburgh/patdryburgh.com/blob/master/feed/twitter.xml
[first]: http://patdryburgh.com/micro/2017-06-06-11-55-26
[ed]: https://jsonfeed.org/2017/05/17/announcing_json_feed
[up]: /#determining-when-to-add-a-link