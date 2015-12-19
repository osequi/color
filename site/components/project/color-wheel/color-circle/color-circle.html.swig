<article class="color-circle color-circle--{{ index }}">
  <h3>Color circle {{ index }}</h3>

  <ul class="colors">
    {% set colors = Array.prototype.constructor.call(null, 200) %}
    {% for color in colors %}
      {% if loop.index <= circle %}
        <li class="color color-{{ index }}-{{ loop.index }}" data-class="color-{{ index }}-{{ loop.index }}"></li>
      {% endif %}
    {% endfor %}
  </ul>
</article>
