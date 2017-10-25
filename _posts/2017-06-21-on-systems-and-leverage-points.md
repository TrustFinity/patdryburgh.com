---
title: On systems and leverage points
date: 2017-06-22 17:43:06 +0300
categories:
- blog
layout: post
author: patdryburgh
---

<!-- Since coming to Uganda, I've been thinking a lot about systems. How they work, how they can improve, and — often times — why some of them exist. It takes years of careful study and research to even begin to grasp why something is the way is. I've been here for just over three months and every day I am scratching just a smidgen deeper into the surface. -->

My friend [Mark][mark] recently passed along some advice I've been taking to heart of late. Looking at the wide breadth of problems we're trying to solve at [Ensibuuko][ensi], I was finding it difficult to determine where to focus my time and attention. The product we're working on is a complex system that has to integrate into an even more complex financial system and be distributed using a network infrastructure that often fails to reach the customers of the product. None of the issues facing us are insurmountable, but each day we uncover more problems to be solved.

Mark heard the challenges we're facing and shared an insight he had learned reading the work of Andy Grove: when you are looking at an ever-growing list of things requiring your attention and deciding what to focus on right now, pick the thing where your input will have the greatest impact. Or, as Grove [puts it][andy],

>An activity with high leverage will generate a high level of output; an activity with low leverage, a low level of output.

## How to determine high-leverage activities

At this point, it becomes a matter of deciding what thing I can do now that will generate the highest level of output. In a talk given to the Mayor's Advisory Panel on Poverty in London, Ontario, [James Shelley][james] presented [an overview of Donella Meadows' thesis on 'leverage points'][video] and illustrated how to apply the framework to systems that impact the level of poverty in a given region. The framework Meadows provides is designed to help determine [where to intervene in a system][meadows], in increasing order of effectiveness and impact:

<ol reversed>
  <li>
    Constants, parameters, numbers (such as subsidies, taxes, standards).
  </li>
  <li>
    The sizes of buffers and other stabilizing stocks, relative to their flows.
  </li>
  <li>
    The structure of material stocks and flows (such as transport networks, population age
    structures).
  </li>
  <li>
    The lengths of delays, relative to the rate of system change.
  </li>
  <li>
    The strength of negative feedback loops, relative to the impacts they are trying to correct against.
  </li>
  <li>
    The gain around driving positive feedback loops.
  </li>
  <li>
    The structure of information flows (who does and does not have access to information).
  </li>
  <li>
    The rules of the system (such as incentives, punishments, constraints).
  </li>
  <li>
    The power to add, change, evolve, or self-organize system structure.
  </li>
  <li>
    The goals of the system.
  </li>
  <li>
    The mindset or paradigm out of which the system — its goals, structure, rules, delays,
    parameters — arises.
  </li>
  <li>
    The power to transcend paradigms.
  </li>
</ol>

Friend and designer, [Adam Saint][adam] illustrated Meadows' framework beautifully [when describing how to apply her framework to the field of design][points]:

{% include image.html src="/images/uploads/adam-saint-leverage-points.png" %}

The last item in Adam's condensed framework — principles and values of a greater context — feels like it deserves the bulk of my time and attention.

Spending time making a decision about fonts and colours will have a nearly imperceivable impact on the success of the product; scouting and recruiting a local product designer who can make those and similar decisions while building a design language for our developers to use in the product: _that's_ high impact. 

Trying to get a handful of network boosters shipped from China to be manually installed individually at each SACCO branch is going to have a linear impact based on the number of boosters we can order and install; building a tool that can influence where telecoms deploy network towers with location and population data: _that's_ high impact.

---

As someone who enjoys tinkering and making things look and work exactly how I envision them to, it's easy to get lost in [the weeds][weed]. I've long resonated with [the parable once relayed by Steve Jobs][jobs] about the carpenter who puts the same amount of care into the hidden parts of a drawer chest that will never been seen as the rest of her creation. That's [taking pride in your craft][craft].  The challenge I face now is not how to craft a drawer chest but rather a process for building and distributing drawer chests, all while involving a number of outside parties and systems outside of my control.

<div class="pull-out">
  <blockquote>
    <p>Where do you intervene? Where in this array of interrelated, interdependent, codependent variables do you choose to try and make a difference?</p>
    <cite>
      &mdash; <a href="https://www.youtube.com/watch?v=gnQma0e0JFE">James Shelley</a>
      <span class="title small">Writer &amp; Friend</span>
    </cite>
  </blockquote>
</div>

This framework is helping me prioritize the problems our company needs to solve while recognizing my time and attention can have drastically varying levels of impact depending on which lever I'm pulling.

[ensi]: http://ensibuuko.com
[mark]: https://twitter.com/markhazlett
[andy]: https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884
[james]: http://jamesshelley.com
[video]: https://www.youtube.com/watch?v=gnQma0e0JFE
[meadows]: http://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/
[adam]: http://adam.bio
[points]: https://ux.shopify.com/designing-at-leverage-points-cffa42462f73
[jobs]: https://www.quotation.al/quotes/6689454790
[craft]: http://patdryburgh.com/blog/take-pride-in-your-craft/
[weed]: http://patdryburgh.com/blog/tweeting-micro-posts/

*[SACCO]: Savings and Credit Cooperative