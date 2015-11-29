<article class="color-family">
  <h3>Color Family</h3>

  {% if title == 'primary' %}
    {% include '__primary/color-family__primary.html.swig' %}
  {% endif %}

  {% if title == 'secondary' %}
    {% include '__secondary/color-family__secondary.html.swig' %}
  {% endif %}

  {% if title == 'tertiary' %}
    {% include '__tertiary/color-family__tertiary.html.swig' %}
  {% endif %}
</article>
