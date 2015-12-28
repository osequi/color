<aside class="models">
  <h3 class="models__title">Color model</h3>

  <select class="color-model">
    {% for model in color_models %}
      <option value="{{ model }}">{{ model }}</option>
    {% endfor %}
  </select>
</aside>
