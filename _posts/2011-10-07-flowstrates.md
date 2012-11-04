---
layout: post
title: "Flowstrates"
description: "An interactive technique for analyzing temporal changes in origin-destination data, that is, flows of entities between geographic locations."
category: works
tags: [ "Java", "Piccolo" ]
images: [ "flowstrates/Flowstrates-2012.png", "flowstrates/flowstrates2.png", "flowstrates/lasso.png", "flowstrates/flowline-coloring.png", "flowstrates/totals-in-maps4.png", "flowstrates/ethiopia-somalia-diff-staircase-full2--with-rect.png" ]
---
{% include JB/setup %}


Flowstrates extend the idea of a [flow map](http://en.wikipedia.org/wiki/Flow_map) (which are used for representing entities flowing between geographic locations) to the temporal dimension and allow to analyze the changes of the flow magnitudes over time. In Flowstrates the origins and the destinations of the flows are displayed in two separate maps, and the temporal changes of the flow magnitudes are displayed between the two maps in a heatmap in which the columns represent time periods.

<object width="560" height="315"><param name="movie" value="http://www.youtube.com/v/nij8OUyiaV0?version=3&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/nij8OUyiaV0?version=3&amp;hl=en_US" type="application/x-shockwave-flash" width="560" height="315" allowscriptaccess="always" allowfullscreen="true"></embed></object>

As in most flow maps which focus on representing the flow magnitudes, the exact routes of the flows are not accurately represented in Flowstrates. Instead, the flow lines are rerouted so that they connect the flow origins and destinations with the corresponding rows of the heatmap, as if the flows were going through it. The flow lines help to see in the geographic maps the origins and the destinations corresponding to each of the flows shown in the heatmap.

<object width="560" height="315"><param name="movie" value="http://www.youtube.com/v/UQPN7o6A3Cg?version=3&amp;hl=en_US&amp;rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/UQPN7o6A3Cg?version=3&amp;hl=en_US&amp;rel=0" type="application/x-shockwave-flash" width="560" height="315" allowscriptaccess="always" allowfullscreen="true"></embed></object>


Flowstrates are meant for interactive exploration. Unlike OD-matrices which represent exactly one flow in each matrix cell, in Flowstrates every flow occupies one whole row of the heatmap for showing how the flow changed over time. Hence, much more screen real estate is used to represent the same number of flows, and for many datasets it is impossible to display all the flows simultaneously on the screen without filtering or aggregating them. Therefore, to allow the users to explore the whole data in every bit of detail Flowstrates provide interactive support for performing spatial visual queries, focusing on different regions of interest for the origins and destinations, zooming and panning, sorting and aggregating the heatmap rows.

Try out a [demo](http://jflowmap.googlecode.com/svn/trunk/JFlowMap/demo/demo-applets.html?refugees-flowstrates) of Flowstrates representing refugee flows between the world's countries. You can also read our [paper on Flowstrates](http://diuf.unifr.ch/people/boyandii/papers/flowstrates-eurovis11.pdf) published in Computer Graphics Forum.

Flowstrates is a part of [JFlowMap](https://code.google.com/p/jflowmap/), an open-source tool for the analysis of spatial interactions. You can download it [here](https://code.google.com/p/jflowmap/downloads/list).


