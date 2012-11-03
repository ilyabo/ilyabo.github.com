---
layout: page
title: 
tagline: Supporting tagline
---
{% include JB/setup %}


Howdy, stranger!

![Ilya Boyandin][me]


I am a Software Engineer and a researcher developing tools for Data Visualization
at the University of Fribourg, Switzerland.


## Works

## Unrelated stuff
Musical Experiments, Photography, More Photos, LinkedIn Profile, Facebook, LiveJournal (in Russian), Friendfeed.



[me]: assets/images/ilya-320px.jpg "Ilya Boyandin"





<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

