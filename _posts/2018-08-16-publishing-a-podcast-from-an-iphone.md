---
title: Publishing a podcast from an iPhone using @Workflowhq, @WorkingCopyApp, @jekyllrb, and @github Pages
date: 2018-08-16 09:21:05 -0700
categories:
- blog
layout: post
---

Yesterday, [@roland](http://micro.blog/roland) sent me an audio message on [Micro.blog](http://micro.blog). He then [shared his process for recording, encoding, and publishing his audio](http://rolandtanglao.com/2018/08/15/p1-instamic-wave-instamic-microblog/).

I spent the next several hours working on my response. 

I knew in doing so, I needed to make one important improvement to the process: I wanted to do everything — record, encode, and publish — on my mobile device.

Before I dove too deep, I needed to prototype my idea. I had to answer 3 questions:

1. Can I record audio on my iOS device in a way that allows me to then encode it as an MP3?
2. Can I encode that MP3 as a base64 string?
3. Can I write the base64 encoded MP3 into the iOS Git client [Working Copy](https://workingcopyapp.com/) using the base64 encoded string?

I opened up [Workflow](http://workflow.is) (which is [being rebranded as Siri Shortcuts later this fall](https://developer.apple.com/videos/play/wwdc2018/211/)) and was pleased to discover the answers to questions 1 