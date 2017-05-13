---
title: Quick and dirty method to observe and capture user tests
date: 2016-07-14 00:00:00 Z
categories:
- blog
layout: post
author: patdryburgh
url_title: observe-and-capture-user-tests
---

During the last phase of a [product design sprint](/design-sprints), or as part of any product design process, you will want to test and validate your assumptions and design solutions with real customers. Often, you will want to bring your customers into your office in order to perform these tests, but won't want everyone involved in the project to be physically present in the room while the test is taking place. Complex and expensive systems have been built to allow teams to observe a user test remotely in another office, but you can replicate this experience while also capturing the test to review at a later time with tools found in most modern offices.

<!-- break -->

This approach will work regardless of the device you are designing for and is made possible through the use of Lookback. With Lookback, you can record user tests of mobile and desktop apps and websites while also recording the user's facial expressions and eye movement as they use your prototype. These recordings can than be shared and discussed amongst your team and referred back to throughout the design and development of your product.

Though Lookback only supports native mobile testing of Invision and Marvel prototypes or native apps with the Lookback SDK installed, you can record tests of mobile websites or prototypes built with other tools. To do so, connect your device to your Mac via USB and with QuickTime or other screen mirroring application stream the view from your mobile device to your Mac. While you do lose the ability to do eye tracking, you can still record facial expressions using the FaceTime camera on the Mac.

## What you'll need

- [Lookback.io](http://lookback.io)
- A Mac
- An Apple TV
- A TV
- A test subject

## The setup

To start, download and install Lookback onto your Mac. If testing an Invision or Marvel prototype, connect either service to Lookback and download the appropriate prototype viewer onto your mobile device. If testing a native app, install the SDK.

If testing a mobile prototype or app, connect your device to your Mac via USB and use QuickTime or another app to mirror the stream on your Mac.

Open Lookback on your Mac and the app or prototype you wish to test. You should see a video stream of the user and either the desktop app or site or the stream of the mobile app.

<figure class="extra-wide">
  <img src="{{ site.url }}/images/uploads/testing-with-lookback.png" alt="Testing with Lookback">
</figure>

Then, turn on AirPlay on your Mac and select the Apple TV located in the office from which your colleagues will observe the test.

The video of your user and the product you are testing will both be streamed to the TV where your team is observing and taking notes. For bonus points, stick an earbud in your ear and have your team call you on speaker phone so they can prompt you with questions they would like you to ask your test subject (protip: if you're observing, try not to cause the person administering the test to break out in laughter over your fart jokes).

## That's it

There's not a whole lot more to say. With a clever application of Apple's AirPlay and the tremendously useful Lookback testing suite, you can easily observe and capture user tests at the same time.

If you have tips or tricks for capturing and observing user tests, please [let me know on Twitter](http://twitter.com/patdryburgh).