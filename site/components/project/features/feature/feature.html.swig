<article class="feature">
  <h3 class="feature__title">{{ feature.title }}</h3>

  <aside class="feature__description">
    <h3>Description</h3>

    <div class="text">
      {% for p in feature.description %}
        <p>{{ p }}</p>
      {% endfor %}
    </div>
  </aside>
</article>
