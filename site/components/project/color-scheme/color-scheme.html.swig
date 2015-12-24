<section class="color-scheme">
  <h3>Color scheme</h3>

  {% for color in palette %}
    {% include 'color-swatch/color-swatch.html.swig' %}
  {% endfor %}
</section>
