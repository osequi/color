<aside class="tuner">
  <h3 class="tuner__title">{{ tuner.name }}</h3>

  <p class="tuner__description">{{ tuner.description }}</p>

  <input class="tuner__colorpicker tuner__colorpicker--{{ tuner.name | lower }}" type="text" value="{{ tuner.value }}">
</aside>
