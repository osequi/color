{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% include '../../project/color-codes/color-codes.html.swig' %}
  {% include '__switcher/home__switcher.html.swig' %}
  {% include '__color-generator/home__color-generator.html.swig' %}
  {% include '__example/home__example.html.swig' %}

{% endblock %}
