---
title: Adding a Custom DuckDuckGo Search Bar to Your Site
date: 2012-01-29 00:00:00 Z
categories:
- blog
layout: post
author: patdryburgh
url_title: adding-a-custom-duckduckgo-search-bar-to-your-site
old_entry_id: 398
---

My friend and colleague [Ben Brooks](http://brooksreview.net) is [tired of Google](http://brooksreview.net/2012/01/duckduckwin/), and I can't blame him. In an effort to reduce the number of Google services he's beholden to, Ben asked me to update his site's search with the [DuckDuckGo search service](http://duckduckgo.com).

Previous to this change, I'd used a simple form that pointed to google.com/search, with some additional parameters to limit the search to Ben's site. With this form, I was able to style it using CSS to make it match the site's design, as well as remove any Google branding.

To make the switch to DuckDuckGo, Ben first replaced the custom Google search form with a search box he made using [DuckDuckGo's Search Box Wizard](https://duckduckgo.com/search_box.html). While this provided the functionality Ben was looking for, it was a long way from the nice design I'd come up with for the former search bar.

I started digging into the old code I'd made for the Google search form, to see if I could simply replace a few parameters to make it work on DuckDuckGo. I got close, but wasn't able to pass both the search term and limit the search to Ben's site; I could only do one or the other.

A quick email to the support team at DuckDuckGo resulted in a small modification to my code to make it work, as well as an introduction to the other [custom URL parameters](http://duckduckgo.com/params.html) available to customize the search experience even further. Using a few of these parameters I was able to change the font to Helvetica, match the link colour on the search page to the links on Ben's site, and turn off their sidebar.

I've included some of these parameters in the code below, which you can modify and use to add a custom DuckDuckGo search to your own site. To see what the codes used in the "name" attribute, be sure to read through [DuckDuckGo's URL Parameters page](http://duckduckgo.com/params.html). 

<pre>
<code>
&lt;form method="get" id="search" action="http://duckduckgo.com/">
	&lt;input type="hidden" name="sites" value="YOURDOMAIN.COM"/>
	&lt;input type="hidden" name="k8" value="#444444"/>
	&lt;input type="hidden" name="k9" value="#D51920"/>
	&lt;input type="hidden" name="kt" value="h"/>
	&lt;input type="text" name="q" maxlength="255" placeholder="Search&amp;hellip;"/>
	&lt;input type="submit" value="DuckDuckGo Search" style="visibility: hidden;" />
&lt;/form>
</code>
</pre>