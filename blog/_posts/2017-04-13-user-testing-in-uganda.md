---
layout: post
author: patdryburgh
title: Considerations for user testing in Uganda
url_title: user-testing-in-uganda
date: 2017-04-13
---

While designing and developing a new product, your team is making a number of assumptions about the people who will use the product, their skill level and understanding of how technology works, and how they conceptualize the task they need to accomplish. The number of assumptions made is multiplied by the cultural differences between yourself, your team, and the end user.

Over the past couple of months, the development team at [Ensibuuko][en] has been working on a complete rewrite of the platform they've created to help microfinancing organizations in Africa bring a higher level of accountability and security to their record keeping. The goals of this project are to improve the stability, performance, and usability of the product.

To address the performance and usability of the product, our team has embarked on implementing user testing as a means of validating our assumptions and ensuring that the feedback loop between making a decision and validating it is as short as possible.

As we begin to implement this process in our organization, it's important to consider some of the differences between my experience in North America and the realities of designing and testing products in Africa.

## If you build it, they might not be able to come

When I first proposed the idea of testing our nascent product with users, the first assumption I made was thinking we could invite 5–6 participants to visit our office. This is how we ran user tests at [Brewhouse][bh] and is the method recommended by most practitioners of [design sprints][ds].

A benefit of performing the tests in your office is setting up an [observation room][or] for your team members. This allows the test facilitator to focus on providing clear instruction and guidance to the participant, while observers can take notes and keep track of how long each task takes using a tool like [The Rainbow Spreadsheet][rs].

One of my colleagues wisely suggested offering the people we hoped to invite some money to help with the cost of transportation. With our new allowance in hand, we started calling customers we hoped could help us test the new product.

What we found was that while the cost of transportation was certainly an issue, the crux of the matter was people simply couldn't afford the time it would take to travel to our office and back.

Our solution: if they can't come to us, we'll go to them.

## Use the technology the user is most familiar with

Inherent in a user's ability to use your product is their familiarity with the device with which they interact. Most people who have a computer in Uganda have Windows PCs because that's what they can afford. I knew tossing a Macbook in front of our users would not only be intimidating, it could also have been offensive.

Another key difference between these two platforms is the keyboard. The average typing speed of the people I've observed is approximately &frac14; the speed of my Canadian compatriots. Putting an unfamiliar keyboard layout in front of someone can dramatically reduce their typing speed even further. It was important that we try to maximize the familiarity with the input device as much as possible.

Even then, having a similar keyboard might not be enough. Our first test participant, who normally uses a USB keyboard and mouse hooked up to a tower PC, struggled to avoid touching the Windows laptop's trackpad while typing. Since we were testing product in his office, we were able to circumvent this by connecting his own keyboard and mouse.

It's also important to note here that most people I've observed using computers in Uganda use the pointer to click from field to field. This isn't always the case, but is definitely a consideration to keep in mind when designing form fields. Fields should be obvious and large enough to make it easy to click from one to the next.

## Record locally 'cause you can't trust the cloud

There are many options for recording each test session. While working in North America, I've found [Lookback][lb] to be extremely simple to use and generally very reliable.

One of the downsides to not testing with my Mac is the lack of a native Windows app for recording and uploading videos to Lookback. The Lookback app for Mac records the videos locally and then uploads them in the background. On countless occasions the upload has been disrupted due to an interruption in the network connection. Each time, the upload continued as soon as the connection was reestablished.

Lookback suggests using their Chrome extension and self-test links to record tests on a PC. While this is a reasonable approach, the videos *must* be uploaded immediately. Otherwise, you'll lose them. I learned this the hard way.

In Uganda, Internet connections are generally unreliable. So much so that [Ensibuuko][en] has established a relationship with [Airtel][at] allowing them to provide customers with a dedicated [APN][apn] (Access Point Name). The APN connects the customer's computer directly to the Ensibuuko server at Airtel. While this provides a more reliable connection, it also limits the connection to the single server. This means the client device can't connect to other servers such as Lookback's.

Our solution to this was to tether our client's device to my iPhone which has a 4G connection through MTN. While this allowed us to perform the test, the connection was still far too slow for the upload to finish in a reasonable time. The instructions provided by Lookback state that uploads will resume if a connection is lost. Evidently, this does not include lost connections caused by putting the device to sleep.

Unfortunately, we lost one of the two user tests we performed yesterday. Next time, we will record the test locally using the [Windows 10 screen recording tool][rt]. While we will certainly miss many of Lookback's features such as syncing the screen recording with a video of the user captured through the webcam, it will ensure we never lose another recording again.

## Be Prepared

All of this has caused me to remember the motto I learned as a young Boy Scout: Be Prepared. From having fake profiles prepared ahead of time to ensuring Webpack was running to having a backup recording solution saving our test sessions on the local machine, there are so many ways in which our user tests could have been performed better. Thankfully, we'll have plenty of time to further improve our process over the next few months of the project.

[bh]: http://brewhouse.io
[ds]: /design-sprints/
[or]: /blog/observe-and-capture-user-tests
[rs]: https://www.smashingmagazine.com/2013/04/rainbow-spreadsheet-collaborative-ux-research-tool/
[lb]: http://lookback.io
[en]: http://ensibuuko.com
[at]: http://www.africa.airtel.com/uganda/
[rt]: https://betanews.com/2015/07/19/windows-10-secret-screen-recording-tool/
[apn]: http://airtelbusiness.com.ng/business-apn/