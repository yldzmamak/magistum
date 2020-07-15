export function loadingScreen(status) {
  var containerElement = document.querySelector('body');
  if (status == 'show') {
    if (containerElement.getAttribute('loading-screen') == 'true') return;
    // create loading element
    var loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading-screen');
    containerElement.setAttribute('loading-screen', 'true');
    containerElement.appendChild(loadingDiv);
    loadingDiv.classList.add('show');
  } else if (status == 'hide') {
    var activeloadingDiv = document.querySelector('.loading-screen');
    if (activeloadingDiv) {
      activeloadingDiv.classList.remove('show');
      containerElement.setAttribute('loading-screen', 'false');
      setTimeout(function () {
        activeloadingDiv = document.querySelector('.loading-screen');
        if (activeloadingDiv) activeloadingDiv.remove();
      }, 300);
    }
  }
}
