<aside class="tuner" data-color="{{ tuner.value }}">
  <h3 class="tuner__title">{{ tuner.name }}</h3>

  {% set knob = tuner %}
  {% include '../../../framework/behavior/knob/knob.html.swig' %}

  {% if tuner.radio %}
    {% include '__radio/tuner__radio.html.swig' %}
  {% endif %}
</aside>
