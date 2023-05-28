function displayList(){
  const fruits = document.getElementById("fruits");
  const list = document.createElement("ul");
  list.id = "fruitsList";
  const element = document.getElementsByTagName("p");
  const elementLength = element.length;
  for(let i = 0; i < elementLength ; i++){
    let li = document.createElement("li");
    li.innerHTML = element[0].innerHTML;
    list.appendChild(li);
    fruits.removeChild(element[0]);
  };
  fruits.appendChild(list);
}