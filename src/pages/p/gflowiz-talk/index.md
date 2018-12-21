---
kind: post
title: "Scalable OD-data visualization talk"
date: "2018-12-20"
preview: "./gflowiz.jpg"
category: talk
---
I gave a talk 
at the <a href="https://gflowizworkshop.sciencesconf.org" target="_blank" rel="noopener">GFlowiz workshop</a>
at <a href="http://www.ifsttar.fr/en/welcome/" target="_blank" rel="noopener">IFSTTAR</a> 
about the  tools we build for exploring large OD-datasets containing hundreds of millions of records. 

![](./gflowiz.jpg)
Photo by [Laurent Jégou](https://twitter.com/ljegou).

Here's the abstract:

> Origin-destination (OD) data represent numbers of movements of people or goods between locations. The size of such data depends exponentially on the number of locations involved. It can quickly grow to hundreds of millions of rows when flow attributes like time, mode of transport, duration are added to the dataset. Such large datasets cannot be entirely visualized in one image. Their analysis requires the use of summarization or interactive exploration techniques.
>
> I will speak about the web applications we are building at Teralytics for the analysis of movement of people in cities and countries. Scalability to the always growing data is an important challenge we are facing. I will discuss how we are using geographic flow map visualizations and other representations in this context, how we support querying across space and time and how we apply techniques like cross-filtering and on-the-fly aggregation for slicing and dicing the data. I will elaborate on choosing the right tools and the system architecture to ensure smooth interactivity and short query response times necessary for such interactive analysis.


Check <a href="https://goo.gl/D36oSi" target="_blank" rel="noopener">the slides</a> of the presentation
and the video recording:

<iframe width="560" height="315" style="max-width: 500px" src="https://www.youtube.com/embed/WZpFXLhleEQ?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
