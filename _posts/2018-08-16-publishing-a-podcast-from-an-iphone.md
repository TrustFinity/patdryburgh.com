---
title: Publishing a podcast from an iPhone using @Workflowhq, @WorkingCopyApp, @jekyllrb, and @github Pages
date: 2018-08-16 09:21:05 -0700
categories:
- blog
layout: post
---

Yesterday, [@roland](http://micro.blog/roland) sent me an audio message on [Micro.blog](http://micro.blog). He then [shared his process for recording, encoding, and publishing his audio](http://rolandtanglao.com/2018/08/15/p1-instamic-wave-instamic-microblog/).

I spent the next several hours working on my response. 

I knew in doing so, I needed to make one important improvement to the process: I wanted to do everything -- record, encode, and publish -- on my mobile device.

Before I dove too deep, I needed to prototype my idea. I had to answer 3 questions:

1. Can I record audio on my iOS device in a way that allows me to then encode it as an MP3?
2. Can I encode that MP3 as a base64 string?
3. Can I write the base64 encoded MP3 into the iOS Git client [Working Copy](https://workingcopyapp.com/) using the base64 encoded string?

I opened up [Workflow](http://workflow.is) (which is [being rebranded as Siri Shortcuts later this fall](https://developer.apple.com/videos/play/wwdc2018/211/)) and was pleased to discover the answers to questions 1 & 2 were a resounding "yes!" Workflow has a wonderful audio recording interface. Once I had the recording, I tested the base64 encoding by encoding, then decoding, then previewing the decoded audio file, proving that I was, in fact, able to record and encode an MP3 using Workflow.

Then came my first hurdle: trying to write the MP3 using [Working Copy's x-callback-url scheme](https://workingcopyapp.com/url-schemes.html#x-callback-url).

While I could pass the base64 encoded string to the x-callback-url that would open Working Copy, and I could see a properly-named file sitting in the path I had specified, I could not get the resulting MP3 to actually play.

However, there was a progress bar that moved and a track length displayed, so I knew something was up.

To test my hypothesis that Working Copy was somehow failing to play what appeared to be a properly encoded MP3, I saved the file to Dropbox for iOS and opened the file there.

It worked perfectly.

(Until writing this post, I assumed the issue was that Working Copy had a bug in its media player. Turns out, it's one of those apps that doesn't play audio if the silent switch is engaged. Not sure why some media players on iOS respect that switch and others do not, but it's a real pain in the ass to have to remember that when testing media on an iOS device.)

Once I had determined I would be able record the audio and write it to Working Copy, all that was left was to duplicate a Workflow I had created last year for posting to my Jekyll-powered blog and add the audio capturing, encoding, and writing actions to the top.

The result is the [first audio post ever published on patdryburgh.com](http://patdryburgh.com/micro/2018-08-15-21-16-57).

Of course, once I had done that, I knew I had almost everything I needed to publish a podcast from my phone.

So, I spent the next hour or so writing and [validating](http://castfeedvalidator.com/) and writing and [validating](https://podba.se/validate/) a [podcast.xml](https://github.com/patdryburgh/patdryburgh.com/blob/master/feed/podcast.xml) file that now lives at [http://patdryburgh.com/feed/podcast.xml](http://patdryburgh.com/feed/podcast.xml).

This morning, I received a confirmation email that my podcast has been added to the [iTunes Podcast directory](https://itunes.apple.com/ca/podcast/pat-dryburgh/id1428319053).

All of which is to say, I can now record and publish podcasts to my Jekyll-powered and Github Pages hosted blog and have it syndicated to Micro.blog, Twitter, and iTunes all from the comfort of my bed.

Now, to find something useful to do with all this magic.