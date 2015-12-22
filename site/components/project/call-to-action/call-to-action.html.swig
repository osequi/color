<section class="call-to-action">
  <h3>Call to action</h3>

  <aside class="call-to-action__text">
    <h3>Call to action text</h3>

    {% set link = { title: "Try it for yourself" } %}
    {% include '../../framework/design/decorations/button/button.html.swig' %}
  </aside>

  {% set image = { title: "Screenshot", "name": "screenshot-1" } %}
  {% include '../../framework/structure/figure/figure.html.swig' %}
</section>
