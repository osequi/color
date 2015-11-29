{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set image = images[0] %}
  {% include '__hierarchy/home__hierarchy.html.swig' %}

  {% set image = images[1] %}
  {% include '__warm-and-cool/home__warm-and-cool.html.swig' %}

  {% include '__family/home__family.html.swig' %}

  {% include '__highlight-and-shade/home__highlight-and-shade.html.swig' %}

{% endblock %}
