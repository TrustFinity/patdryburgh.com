---
title: Descriptive Page Titles in Tumblr
date: 2010-08-07 00:00:00 Z
categories:
- blog
layout: post
author: patdryburgh
url_title: descriptive-page-titles-in-tumblr
old_entry_id: 80
---

<p>I hadn’t planned on writing so soon on another Tumblr theme development topic, but I have noticed a problem on several Tumblr sites that is really easy to fix and has benefits both for your readers and search engines as&nbsp;well.</p>

<h2>What’s In A&nbsp;Name?</h2>

<p>The manner in which Tumblr allows you to name your website pages in the <code>&lt;title&gt;</code> html tag is rather confusing. In the <a href="http://www.tumblr.com/docs/en/custom_themes">custom theme docs</a>, the only Tumblr code used to describe the page’s title is <code>{Title}</code> which only displays the blog’s title, not the title of the actual page your reader may be on.<sup><a href="#72196" id="fn1" title="see footnote 1">1</a></sup></p>

<p>This is how Tumblr indicates a page’s title in each of its examples in the custom theme&nbsp;docs:</p>

<pre>&lt;title&gt;{Title}&lt;/title&gt;
</pre>

<h2>A Little Bit&nbsp;Closer</h2>

<p>Later on in the theme docs, Tumblr indicates that in order to display a post’s title on a page, you use the combination of the <code>{block:PostTitle}</code> tag (to determine if there is in fact a post title) and the <code>{PostTitle}</code>&nbsp;tags.</p>

<pre>{block:PostTitle}
    &lt;h2&gt;{PostTitle}&lt;/h2&gt;
{/block:PostTitle}
</pre>

<p>What they don’t indicate is that this combination of tags can also be used in the <code>&lt;title&gt;</code> HTML tag, as&nbsp;follows:</p>

<pre>&lt;title&gt;{block:PostTitle}{PostTitle} | {/block:PostTitle}{Title}&lt;/title&gt;<sup><a href="#70835" id="fn2" title="see footnote 2">2</a></sup>
</pre>

<p>While this format is better than what we started with, it unfortunately only covers one specific type of Tumblr post: an article with a title. This means that the following still go without descriptive page&nbsp;titles:</p>

<ul>
<li>photo&nbsp;posts</li>
<li>quote&nbsp;posts</li>
<li>link&nbsp;posts</li>
<li>chat&nbsp;posts</li>
<li>audio&nbsp;posts</li>
<li>video&nbsp;posts</li>
</ul>

<h2>The&nbsp;Solution</h2>

<p>So what is the solution to this problem? You want a descriptive title for your blog, but the <code>{PostTitle}</code> tag isn’t cutting&nbsp;it.</p>

<h3>Enter:&nbsp;<code>{PostSummary}</code></h3>

<p>Somewhat ambiguously, Tumblr includes a tag that will generate a title if one exists, and will fall back on a short summary of the post’s content if a title does not exist. This is perfect for all of the post types listed above, as well as articles which do not have a specified&nbsp;title.</p>

<p>On my blog, my <code>&lt;title&gt;</code> tag looks like&nbsp;this:</p>

<pre>&lt;title&gt;{block:PostSummary}{PostSummary} | {/block:PostSummary}{Title}&lt;/title&gt;
</pre>

<p>If you look around my blog (which I hope you do!) you will see that every page on this blog has a descriptive title in the browser title bar. This also translates into more descriptive titles for Google and other search engines when they index my&nbsp;website.</p>

<p>I hope this post helps you create a more pleasing reading experience for your readers. If you have any questions or any other feedback don’t hesitate to hit me up on <a href="http://twitter.com/patdryburgh">Twitter</a> or via&nbsp;<a href="mailto:hello@patdryburgh.com">email</a>.</p>

<h2>Addendum</h2>

<p>I have written an <a href="http://patdryburgh.com/post/923532953/proper-pages-addendum">addendum to this post</a>, which includes Garrett Murray’s argument against using the method I’ve described above to title Tumblr pages. I have to say, it made me rethink using this method. I strongly suggest checking out the <a href="http://patdryburgh.com/post/923532953/proper-pages-addendum">addendum</a> and making your own informed decision from&nbsp;there.</p>

<div id="footnote">
    <ol>
        <li id="72196">A rather surprising and notable instance of this issue is on Garrett Murray’s <a href="http://log.maniacalrage.net ">Maniacal Rage</a> blog.&nbsp;<a href="#fn1" title="return to article">↑</a></li>
        <li id="70835"> Note that I put the vertical bar with surrounding spaces inside the <code>{block:PostTitle}</code> tags. This is so the vertical bar doesn’t display when on the home page of your blog. You are welcome to use whatever format you’d like to display your page’s title.&nbsp;<a href="#fn2" title="return to article">↑</a></li>
    </ol>
</div>