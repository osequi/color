var switchPanels = function(switcherID) {
  var switcher = document.querySelector(switcherID);
  var generator = document.querySelector('.home__color-generator');
  var example = document.querySelector('.home__example');

  switcher.addEventListener('click', switcherClick, false);

  function switcherClick() {
    var generatorActive = generator.classList.contains('home__color-generator--active');

    if (generatorActive) {
      generator.classList.remove('home__color-generator--active');
      example.classList.add('home__example--active');
    } else {
      generator.classList.add('home__color-generator--active');
      example.classList.remove('home__example--active');
    }

  }
}


switchPanels('.switcher');
