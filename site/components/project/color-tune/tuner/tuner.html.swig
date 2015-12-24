<aside class="tuner" data-color="{{ tuner.value }}">
  <h3 class="tuner__title">{{ tuner.name }}</h3>

  <p class="tuner__description">{{ tuner.description }}</p>

  {% if !tuner.hidden %}
    {% set range_class = "tuner__range--with-margin" %}
    <input class="tuner__colorpicker tuner__colorpicker--{{ tuner.name | lower }}" type="text" value="{{ tuner.value }}">
  {% endif %}

  {% include '__range/tuner__range.html.swig' %}

  {% if tuner.radio %}
    {% include '__radio/tuner__radio.html.swig' %}
  {% endif %}
</aside>
