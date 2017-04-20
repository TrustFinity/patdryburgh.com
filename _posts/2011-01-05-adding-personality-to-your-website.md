---
title: Adding Personality to Your Website
date: 2011-01-05 00:00:00 Z
categories:
- blog
layout: post
author: patdryburgh
url_title: adding-personality-to-your-website
old_entry_id: 98
---

When I was working on the design of my site, I knew that I wanted to add a flair of personality to the copy of the site. Because my design style is generally pretty minimal, I wanted the copy to show that I wasn't some boring guy stuck behind his grids and his white backgrounds and black type.

There were a few places I had in mind where just the right amount of personalized copy would increase the quality of the interactions visitors would have with the site. Those areas are: 

1. the [About](http://patdryburgh.com/about/) page.
2. the [Comments](#comments) section.
3. the [Contact](http://patdryburgh.com/contact/) form.

In this article I'm going to share how I used thoughtful copy to communicate personality to those interacting with my site.

## A Personal Biography

I was nervous about the [biography](http://patdryburgh.com/about/) I wrote for myself when I first launched the site. Nervous because it was long and it was personal. A mix of professional and personal information is included in the About section, including info about my family, my reasons for getting into design, information about my music career, etc.

I made the decision to include personal information because I want potential clients to feel comfortable not only about what I can do, but also about who I am. I want them to know my story, with the hopes that they can see themselves in that story and want to move ahead to hire me for their project.

The same goes for those interested in my blog. When I read a blog that interests me I want to find out who the author behind the writing is. Who they are influences what they write, and I want to be able to make that connection.

## Urging You to Comment

When I [made the decision to add comments](http://patdryburgh.com/blog/redesign-highlights/) to my site, I knew it could be an opportunity to add some personalization to a common user interaction.

Using a mix of ExpressionEngine's [Conditional Global Variables](http://expressionengine.com/user_guide/templates/globals/conditionals.html) and [Channel Entries Conditional Variables](http://expressionengine.com/user_guide/modules/channel/conditional_variables.html) to determine whether comments were open for an entry and how many comments there were, I was able to serve up either a more personalized invitation to leave a comment, or a kind indication that comments were no longer open.

<pre>
&#123;exp:channel:entries channel="blog" limit="1" disable="trackbacks|member_data|pagination"}
&#123;if allow_comments == FALSE}

I'm sorry. Commenting is closed on this entry, either because it is more than 30 days old, or simply because I have turned comments off. If you'd like to continue the conversation, please feel free to <a href="http://patdryburgh.com/contact/">contact me directly</a> or strike up a conversation on <a href="http://twitter.com/patdryburgh">Twitter</a>!

&#123;if:elseif comment_total == 1}

There is 1 lonely comment. Feel free to leave another!

&#123;/if}
&#123;if:elseif comment_total == "0"}

No one's left a comment. You should get the ball rolling!

&#123;/if}
&#123;if:elseif comment_total > 1}

There are &#123;comment_total} comments. Why not add one more?

&#123;/if} 
&#123;/exp:channel:entries}
</pre>

First, I determine if comments are allowed. I have my site set to close comments on entries once they are 30 days old. This may seem confusing to some users, so I make sure to apologize and clarify. I then offer other methods of continuing the conversation beyond the comment thread. This is much more user-friendly than ExpressionEngine's default "Commenting is not available in this section entry."

Next I determine how many comments there are and based on that information, I serve up one of three different phrases. For entries with no comments: *"No one's left a comment. You should get the ball rolling!"* For entries with one comment: *"There is 1 lonely comment. Feel free to leave another!"* And finally, for entries with more than one comment: *"There are &#123;comment_total} comments. Why not add one more?"*

The key to this is the invitation to continue the conversation. Using directives like "get the ball rolling," "leave another," and "why not add one more?" engages users in the conversation. Starting a conversation is always difficult. Being prompted into a conversation is much easier. These directives are my way of asking the user "so, what do you think?"

## Thanking You For Connecting

One of my proudest examples of adding a personal touch to user interaction is on the Contact page. Everyone has seen a page like this before: a big, scary form that may or may not end up in the recipient's inbox. I've had too many conversations with people who feel uncomfortable when the only feedback they get from submitting a contact form is a "Message Sent" warning to not take this interaction seriously.

On my form, there are three types of inquiries available to choose: 

1. Request for a Quote
2. Request for Information
3. Say Hi!

There are several reasons why I've divided the nature of a user's inquiry into one of these three types. The main reason is that I want to provide *contextual feedback* based on the type of inquiry they are making once they submit the form.

Here are the three feedback statements I give, based on the nature of the user's inquiry: 

### Request for a Quote

>Thank you very much for your request for a quote, <strong>&#123;name}</strong>! I will be taking a look at the information you provided regarding the <strong>&#123;project_type}</strong> project you have requested a quote for, and I will be in touch in the next 48 hours. Have a great day!

### Request for Information

>Thank you very much for your request, <strong>&#123;name}</strong>! I will try to get back to you with the requested information in the next 48 hours. Have a great day!

### Say Hi!

>Thank you very much for getting in touch, <strong>&#123;name}</strong>! It is very kind of you to say hello. I will do my best to be in touch within the next 48 hours. Have a great day!

The reason each type of inquiry generates a different message is so the user knows interaction has occurred. When the only feedback they receive is "Message Sent," how does a user know that's actually the case? With these feedback statements, the user knows at the very least that some form of interaction has happened, and that the type of information they input into the form has produced a result **specific to their inquiry**.

You'll notice a couple variables in each of these feedback statements. 

**&#123;name}** - This field pulls the "Name" field from the contact form, so that the feedback statement can address the user directly. This type of interaction ensures that user that at least *something* happened, so they can probably rest assured that the form did in fact get their message to me.

**&#123;project_type}** - In the "Request for a Quote" statement, I've included their selected Project Type in their feedback statement. This gives the user assurance that the form successfully gathered more than just their personal information, but also specific information about their specific inquiry.

##Creating Delight

Every interaction on your website is an opportunity to create delight. You have an opportunity to use your own voice to directly impact the interactions your users have with your site. Whether your site is a personal site, a corporate site, or even a web application, your users will benefit from hearing your voice direct them, guide them, welcome them and thank them.