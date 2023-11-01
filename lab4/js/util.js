import {cars, filteredCars} from "./main.js"
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
    <input type="text" class="form-control" id="edit_title_input" value="${title}" />
    <br>
    <input type="number" class="form-control" id="edit_engine_input" value="${enginePower}" />
    <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="btn btn-info">
      Edit
    </button>
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

  const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
  const editTitle = document.getElementById("edit_title_input");
  const editEngine = document.getElementById("edit_engine_input");

  const getEditValues = () => {
    return {
      id,
      title: editTitle.value,
      enginePower: editEngine.value
    }
  }

  editButton.addEventListener("click", () => {
    const editedValues = getEditValues();
    const index = cars.findIndex(car => car.id === editedValues.id);

    if (index !== -1) {
      cars[index].title = editedValues.title;
      cars[index].enginePower = editedValues.enginePower;
    if(editedValues.enginePower >= 0){
      if(filteredCars.length === 0){
        renderItemsList(cars);
      }else {
          renderItemsList(filteredCars);
        } 
    } else {
      alert("Boo")
    }
  }
  });

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
