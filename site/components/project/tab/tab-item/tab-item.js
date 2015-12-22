var toggleTabItem = function(tabItemTriggersID) {
  var tabItemTriggers = document.querySelectorAll(tabItemTriggersID);
  console.log(tabItemTriggers.length);

  for (var i=0; i < tabItemTriggers.length; i++) {
    tabItemTriggers[i].addEventListener('click', clickOnTabTrigger, false);
  }

  function clickOnTabTrigger() {
    this.parentNode.parentNode.classList.toggle('tab-item--active');
  }
}

toggleTabItem('.tab .tab-item__title .trigger');
