---
kind: project
title: "flowmap.blue"
description: ""
category: works
preview: commuters-in-netherlands.png
date: 2019-02-05
---

*NEWS:* The project [won bronze](https://twitter.com/kachkaev/status/1197262339935997952) 
in the "Visualization & Information Design" category of the 
[Information is Beautiful Awards](https://www.informationisbeautifulawards.com/showcase/3815-flowmap-blue).  


[Flowmap.blue](https://flowmap.blue) is a free and open source flow map visualization tool.
It is designed for representing aggregated numbers of movements between geographic locations. 
Until recently making flow maps has involved manual drawing, knowledge of programming or 
specialised software. 
 I had learned from my experience developing
 [flow](https://github.com/ilyabo/jflowmap)
 [mapping](https://github.com/ilyabo/jflowmap.js)
 [libraries](https://github.com/teralytics/flowmap.gl)
 that there was a need for an *easy-to-use* tool with which people without special 
knowledge could make flow maps. 
This is why I decided to develop flowmap.blue. 
The tool makes it possible to publish interactive flow maps from data uploaded to Google Sheets.
 It's free, it requires no installation and allows anyone to create a flow map in no time.

Since the tool has been released, people from different parts of the world have been using 
it to visualize various datasets and are sharing some of them online. 
It has been used to represent data on urban mobility 
(commuting behavior, bus and subway travels, bicycle and scooter sharing), 
human and bird migration, trade, freight transportation, epidemiology, 
human trafficking, fishery, scientific collaboration, sewer systems,
historical data and other topics.



[![](commuters-in-netherlands.png)](https://flowmap.blue/1Oe3zM219uSfJ3sjdRT90SAK2kU3xIvzdcCW6cwTsAuc)
<img src=nyc_citibike.png>
[![](color-schemes.png)](https://flowmap.blue/1Aum0anWxPx6bHyfcFXWCCTE8u0xtfenIls_kPAJEDIA)
[![](nl.png)](https://flowmap.blue/1Oe3zM219uSfJ3sjdRT90SAK2kU3xIvzdcCW6cwTsAuc)
[![](london.png)](https://flowmap.blue/1Z6dVVFFrdooHIs8xnJ_O7eM5bhS5KscCi7G_k0jUNDI)

flowmap.blue supports automatic clustering of the locations
based on the zoom level. It's very useful for dense or messy datasets where some locations
are very close to each other and others are farther away:
<div style="text-align: center">
<a href="https://flowmap.blue/1MQK6xs-lS82crlfubyAzSXRQDiWTUrIgNuvkXhUKjUs" target="_blank" rel="noopener">
  <img src="Australia-zoom-480.gif"/>
 </a>
</div>


