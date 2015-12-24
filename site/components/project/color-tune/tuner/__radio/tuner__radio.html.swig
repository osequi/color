<aside class="tuner__radio">
  <h3>Radio input</h3>

  {% for item in tuner.radio %}
    {% if loop.index == 1 %}
      {% set checked = "checked" %}
    {% else %}
      {% set checked = "" %}
    {% endif %}
    <input class="radio" type="radio" name="{{ tuner.name | lower }}" value="{{ item }}" checked="{{ checked }}">{{ item }}
  {% endfor %}
</aside>
