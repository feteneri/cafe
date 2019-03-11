var element = document.getElementsByClassName('complex-types__rectangle');
function highliter(){
  element.ClassList.add("complex-types__rectangle_selected");
}
element.addEventListener("click", highliter);