---
layout: page
title: 
tagline: Supporting tagline
---
{% include JB/setup %}


Hello, stranger!

![Ilya Boyandin][me]


I am a Software Engineer and a researcher developing tools for Data Visualization
at the University of Fribourg, Switzerland.


## Selection of works

<ul class="works">
  {% for post in site.posts %}
    {% if post.category == "works" %}
      <li><!--<span>{{ post.date | date_to_string }}</span> &raquo; -->

        <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>    <span class="date">{{ post.date | date_to_string }}</span>

        {% for img in post.images %}
        <a href="{{ BASE_PATH }}{{ post.url }}"><img class="work" src="{{ BASE_PATH }}/assets/works/{{ img }}"></a>
        {% endfor %}
              
      </li>
    {% endif %}
  {% endfor %}
</ul>








[me]: assets/images/myuserpic2-sm.jpg "Ilya Boyandin"





