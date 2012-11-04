---
layout: page
title: 
tagline: Ilya Boyandin
---
{% include JB/setup %}





## Selection of works

<ul class="works">
  {% for post in site.posts %}
    {% if post.category == "works" %}
      <li><!--<span>{{ post.date | date_to_string }}</span> &raquo; -->

        <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>    <span class="date">{{ post.date | date_to_string }}</span>

        <div class="preview">
        {{ post.content | strip_html | truncatewords:33}}
        </div>


        {% for img in post.images limit:2 %}
        <a href="{{ BASE_PATH }}/assets/works/images/{{ img }}"><img class="work" src="{{ BASE_PATH }}/assets/works/thumbs/{{ img }}"></a>
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

       <div class="readmore"><a href="{{ post.url }}">Read more...</a></div>
              
      </li>
    {% endif %}
  {% endfor %}
</ul>








[me]: assets/images/myuserpic2-sm.jpg "Ilya Boyandin"





