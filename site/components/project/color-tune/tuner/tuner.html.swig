<aside class="tuner" data-color="{{ tuner.value }}">
  <h3 class="tuner__title">{{ tuner.name }}</h3>

  {% set knob = tuner %}
  {% include '../../../framework/behavior/knob/knob.html.swig' %}

  {% if tuner.picker %}
    <input class="tuner__picker tuner__picker--{{ tuner.name | lower }}" type="text" value="{{ tuner.value }}">
  {% endif %}

  {% if tuner.modes %}
    {% include '__modes/tuner__modes.html.swig' %}
  {% endif %}
</aside>
