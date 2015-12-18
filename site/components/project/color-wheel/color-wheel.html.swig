<section class="color-wheel">
  <h3>Color wheel</h3>

  <div class="color-wheel__circles">
    {% set circles = [3, 3, 6, 12, 24, 48, 96] %}
    {% set circles = [3, 3, 6] %}
    {% for circle in circles %}
      {% set index = loop.index %}
      {% include 'color-circle/color-circle.html.swig' %}
    {% endfor %}
  </div>
</section>
