<article class="color-scheme__palette">
  <h3>Palette</h3>

  {% for color in palette %}
    {% include 'color-swatch/color-swatch.html.swig' %}
  {% endfor %}
</article>
