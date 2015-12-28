<aside class="color-wheel__models">
  <h3>Select color model</h3>

  <select class="color-model">
    {% for model in color_models %}
      <option value="{{ model }}">{{ model }}</option>
    {% endfor %}
  </select>
</aside>
