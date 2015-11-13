---
layout: page
title: 
tagline: Ilya Boyandin
---
{% include JB/setup %}


<!--## Posts-->

<!--<ul class="posts">-->
  <!--{% for post in site.posts %}-->
    <!--{% if post.category == "blog" %}-->
      <!--<li><!--<span>{{ post.date | date_to_string }}</span> &raquo; -->-->

        <!--<a href="{{ BASE_PATH }}{{ post.url }}" class="postTitle">{{ post.title }}</a>    <span class="date">{{ post.date | date_to_string }}</span>-->

        <!--<div class="preview">-->
        <!--{% if post.description != "" %}-->
          <!--{{ post.description }}-->
        <!--{% else %}-->
          <!--<!--  post.content | strip_html | truncatewords:33 -->-->
          <!--{{ post.content | truncatewords:100 }}-->
        <!--{% endif %}-->
        <!--</div>-->


        <!--<article class="post">-->
          <!--<footer>-->
            <!--<section class="tags">-->
            <!--{% unless post.tags == empty %}-->
              <!--<h1>Tags:</h1>-->
              <!--<ul>-->
              <!--{% assign tags_list = post.tags %}-->
              <!--{% include JB/tags_list %}-->
              <!--</ul>-->
            <!--{% endunless %}-->
            <!--</section>-->
          <!--</footer>-->
        <!--</article>-->

      <!--</li>-->
    <!--{% endif %}-->
  <!--{% endfor %}-->
<!--</ul>-->




## Selected works

<ul class="works">
  {% for post in site.posts %}
    {% if post.category == "works" %}
      <li><!--<span>{{ post.date | date_to_string }}</span> &raquo; -->

        <a href="{{ BASE_PATH }}{{ post.url }}" class="postTitle">{{ post.title }}</a>    <span class="date">{{ post.date | date_to_string }}</span>

        <div class="preview">
        {% if post.description != "" %}
          {{ post.description }}
        {% else %}
          <!--  post.content | strip_html | truncatewords:33 -->
          {{ post.content | truncatewords:100 }}
        {% endif %}
        </div>


        {% for img in post.images limit:2 %}
        <a href="{{ BASE_PATH }}/assets/works/images/{{ img }}" target="_blank"><img class="work" src="{{ BASE_PATH }}/assets/works/thumbs/{{ img }}"></a>
        {% endfor %}

        <article class="post">
          <footer>
            <section class="tags">
            {% unless post.tags == empty %}
              <h1>Tags:</h1>
              <ul>
              {% assign tags_list = post.tags %}
              {% include JB/tags_list %}
              </ul>
            {% endunless %}
            </section>
          </footer>
        </article>

       {% if post.images.size > 2 %}
       <div class="readmore"><a href="{{ post.url }}">Show more images...</a></div>
       {% endif %}

      </li>
    {% endif %}
  {% endfor %}
</ul>








[me]: assets/images/myuserpic2-sm.jpg "Ilya Boyandin"





