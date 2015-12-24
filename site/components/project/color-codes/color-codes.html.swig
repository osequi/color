<section class="color-codes">
  <h3>Color codes</h3>

  {% for color in colors.colors %}
    <span data-name="{{ color.name }}" data-value="{{ color.value }}"></span>
  {% endfor %}
</section>
