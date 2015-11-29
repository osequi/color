{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% include '__hierarchy/home__hierarchy.html.swig' %}
  {% include '__warm-and-cool/home__warm-and-cool.html.swig' %}
  {% include '__highlight-and-shade/home__highlight-and-shade.html.swig' %}

{% endblock %}
