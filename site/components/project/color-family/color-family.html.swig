<article class="color-family">
  <h3>{{ title }}</h3>

  {% if title == 'secondary' %}
    {% include '__secondary/color-family__secondary.html.swig' %}
  {% endif %}

  {% if title == 'tertiary' %}
    {% include '__tertiary/color-family__tertiary.html.swig' %}
  {% endif %}
</article>
