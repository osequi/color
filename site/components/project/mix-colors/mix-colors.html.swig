<article class="mix-colors mix-colors--{{ title }}">
  <h3 class="title">{{ title | capitalize }}</h3>

  {% set scale = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] %}
  {% set color_name = color.name %}
  {% for s in scale %}
    {% set color = { name: color_name + '-' + title + '-' + s, title: s + '%' } %}
    {% include '../../framework/design/decorations/color-swatch/--rectangle/color-swatch--rectangle.html.swig' %}
  {% endfor %}
</article>
