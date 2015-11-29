{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set colors = colors %}
  {% include '../../project/main-colors/main-colors.html.swig' %}

  {% set color = colors[2] %}
  {% set title = 'tint' %}
  {% include '../../project/mix-colors/mix-colors.html.swig' %}

  {% set title = 'shade' %}
  {% include '../../project/mix-colors/mix-colors.html.swig' %}

{% endblock %}
