{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% include '../../project/color-wheel/color-wheel.html.swig' %}

  {% set tuners = tuners %}
  {% include '../../project/color-tune/color-tune.html.swig' %}

{% endblock %}
