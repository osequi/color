<article class="main-colors">
  <h3 class="title">Main colors</h3>

  {% for color in colors %}
    {% include '../../framework/design/decorations/color-swatch/color-swatch.html.swig' %}
  {% endfor %}
</article>
