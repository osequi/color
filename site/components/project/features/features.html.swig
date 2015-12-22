<section class="features">
  <h3 class="features__title">Features</h3>

  {% set image = { title: "Screenshot", "name": "screenshot-2", "onesize": "mobile" } %}
  {% include '../../framework/structure/figure/figure.html.swig' %}

  <div class="features__list">
    {% for feature in features %}
      {% include 'feature/feature.html.swig' %}
    {% endfor %}
  </div>
</section>
