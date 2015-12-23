<article class="feature">
  <h3 class="feature__title">{{ feature.title }}</h3>

  <div class="feature__description">
    {% for p in feature.description %}
      <p>{{ p }}</p>
    {% endfor %}
  </div>
</article>
