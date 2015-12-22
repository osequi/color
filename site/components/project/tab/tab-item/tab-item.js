// It makes tabs behave like an accordion
// - since the trigger is visible only in portrait mode it doesn't affects landscape mode
var tabAccordion = function(tabItemTriggersID) {
  var tabItemTriggers = document.querySelectorAll(tabItemTriggersID);

  for (var i=0; i < tabItemTriggers.length; i++) {
    tabItemTriggers[i].addEventListener('click', clickOnTabTrigger, false);
  }

  function clickOnTabTrigger() {
    this.parentNode.parentNode.classList.toggle('tab-item--active');
  }
}

// portrait
tabAccordion('.tab .tab-item__title .trigger');



// Marks a tab active in landscape mode
// - The description + content of the active tab  will be populated into the `tab__content` area below the tabs
var toggleTabItem = function(tabItemsID, tabItemTitlesID, tabContentID) {
  var mediaQuery = "only screen and (orientation: landscape)";
  var tabItemTitles = document.querySelectorAll(tabItemTitlesID);
  var tabItems = document.querySelectorAll(tabItemsID);
  var tabContent = document.querySelector(tabContentID);

  if (matchMedia(mediaQuery).matches) {
    for (var i=0; i < tabItemTitles.length; i++) {
      tabItemTitles[i].addEventListener('click', clickOnTabTitle, false);
    }
  }

  function clickOnTabTitle() {
    for (var i=0; i < tabItems.length; i++) {
      tabItems[i].classList.remove('tab-item--visible');
    }

    this.parentNode.classList.add('tab-item--visible');
    populateTabContent(this.parentNode, tabContent)
  }

  function populateTabContent(tab, tabContent) {
    tabContent.innerHTML = '';
    var description = tab.querySelector('.tab-item__description');
    var content = tab.querySelector('.tab-item__content');

    tabContent.innerHTML = description.outerHTML + content.outerHTML;
  }
}

// landscape
toggleTabItem('.tab .tab-item', '.tab .tab-item__title', '.tab .tab__content .populated-by-javascript');
