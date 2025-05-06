function changeText() {
    const textElement = document.getElementById("dynamicText");
    textElement.textContent = "Text has been changed dynamically!";
  }
  
  function changeColor() {
    const colorText = document.getElementById("colorText");
    colorText.style.color = "crimson";
    colorText.style.fontWeight = "bold";
  }
  
  function addItem() {
    const list = document.getElementById("itemList");
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
  }
  
  function removeItem() {
    const list = document.getElementById("itemList");
    if (list.children.length > 0) {
      list.removeChild(list.lastElementChild);
    }
  }
  