<aside class="tuner__range {{ range_class }}" data-name="{{ tuner.name | lower }}" data-value="{{ tuner.start }}">
  <h3>Range for {{ tuner.name }}</h3>

  <span class="start">0</span>
  <input class="range" type="range" min="0" max="100" value="{{ tuner.start }}">
  <span class="end">100%</span>
</aside>
