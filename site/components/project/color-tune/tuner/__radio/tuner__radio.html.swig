<aside class="tuner__radio">
  <h3>Radio input</h3>

  {% for item in tuner.radio %}
    <div class="container">
      <input class="radio" type="radio" name="{{ tuner.name | lower }}" value="{{ item }}" {% if loop.first %} checked="checked" {% endif %}>
      <span class="label">{{ item }}</span>
    </div>
  {% endfor %}
</aside>
