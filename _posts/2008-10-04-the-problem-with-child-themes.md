---
title: The Problem With Child Themes
date: 2008-10-04 00:00:00 Z
categories:
- blog
layout: post
author: patdryburgh
url_title: the-problem-with-child-themes
old_entry_id: 64
---

There's <a title="Ian Stewart on Child Themes" href="http://weblogtoolscollection.com/archives/2008/10/04/ian-stewart-on-child-themes-part-1/">a lot</a> <a title="Darren Hoyt on Child Themes" href="http://www.darrenhoyt.com/2008/09/18/exploring-wordpress-frameworks-and-child-themes/">of talk</a> about <a title="ThemeShaper.com - How to redesign with Child Themes" href="http://themeshaper.com/functions-php-wordpress-child-themes/">child themes</a> these days. As the designer of two <a title="Shameless Plug for Junction" href="http://patdryburgh.com/junction/">child</a> <a title="Shameless Plug for BLAMatic" href="http://patdryburgh.com/blamatic/">themes</a> for the Thematic theme framework, I have fallen in love with the power and simplicity of using child themes to create something fresh and new. As a young designer and programmer, sometimes developing a <a title="WordPress is Hot" href="http://wordpress.org">WordPress</a> theme from scratch can be a daunting task. If I'm interested in experimenting with design while not having to worry too much about code, a child theme is the perfect option. 

However, there are some drawbacks to child themes which hinder public acceptance and experimentation. I want to outline a few drawbacks I've experienced working with Thematic. 

<!--more-->
<ol>
	<li><strong>You cannot submit child themes to the theme directory. </strong>Unfortunately at this time <a href="http://wordpress.org">WordPress.org</a> is not accepting Child Themes to the theme directory. It's a shame, because if Child Themes were more widely accepted, they would be perfect for use in <a title="WordPress.com" href="http://wordpress.com">WordPress.com</a> sites as well (WordPress.com could provide the theme framework, designers could offer their child themes).</li>
	<li><strong>There are limits to what you can do in functions.php.</strong> Want to add or remove a widget area from your child theme? At the moment this is impossible. The theme framework you choose determines how many widget areas you can have and where they are located. It is impossible to override this. There are other functions that you cannot override as well—how comment areas are arranged, adding additional classes to widget areas, etc—that I'm sure will come to the light soon as more designers begin working with child themes. </li>
	<li><strong>Where do you go for support?</strong> On numerous occasions I have had people emailing me about a problem they are having with one of my child themes. Unfortunately, because there are two themes at work (theme framework + child theme), nailing down the problem is a lot tougher. Also, for many non-tech savvy people, the process of downloading and installing two themes to get one theme for their blog is not the easiest task to process. </li>
</ol>
These are the main issues I've experienced while designing themes for Thematic. I want to make clear that none of these issues are due to the work that Ian has done with Thematic. It is still an incredibly powerful theme framework. These are simply issues that I think need to be thought through as the WordPress community begins to adopt child themes.

What are your thoughts on these issues? Have you experienced any other issues while working with Child Themes? <a href="http://patdryburgh.com/design/the-problem-with-child-themes/#respond">Let us know!</a>