var elements = document.getElementsByClassName('complex-types__rectangle');
function clicker(element) {
  for (let i = 0; i < elements.length; i++)  {
    elements[i].classList.remove('complex-types__rectangle_selected');
  }
  element.classList.add('complex-types__rectangle_selected');
}
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function() {
    clicker(elements[i]);
  });
}
