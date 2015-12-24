<div class="color-swatch__contrast">
  {% for c in colors.colors %}
    {% if c.name != color.name %}
      <p class="{{ c.name }}-on-{{ color.name }}"></p>
    {% endif %}
  {% endfor %}
</div>
