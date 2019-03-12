var element = document.getElementsByClassName("complex-types__rectangle");
function highliter(){
  element.сlassList.add("complex-types__rectangle_selected");
} 
for (let i=0; i<=element.length-1; i++){
element[i].addEventListener("click", highliter);
} 