
export const EDIT_BUTTON_PREFIX = 'edit-button-';


const titleInput = document.getElementById("title_input");
const engineInput = document.getElementById("engine_input");
const itemsContainer = document.getElementById("items_container");


const itemTemplate = ({ id, title, enginePower }) => `
<li id="${id}" class="card mb-3 item-card" draggable="true">
  <img
    src="./images/car.jpg"
    class="item-container__image card-img-top" alt="card">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${enginePower}</p>
    
  </div>
</li>`;

export const clearInputs = () => {
  titleInput.value = "";
  engineInput.value = "";
};

export const addItemToPage = ({ id, title, enginePower }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, enginePower })
  );

};

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    if(item.enginePower >=0 ){
    addItemToPage(item);
  } else{
    item.innerHTML = ""
  }
}
};

export const getInputValues = () => {
  return {
    title: titleInput.value,
    enginePower: engineInput.value,
  };
};
