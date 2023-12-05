
const TITLE_INPUT_PREF_ = "edit_title_input_";
const POWER_INPUT_PREF = "edit_engine_input_";
export const EDIT_BUTTON_PREF = "edit_button_"
export const DELETE_BUTTON_PREF = "delete_button_";


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
    <input type="text" class="form-control" id="${TITLE_INPUT_PREF_}${id}" value="${title}" />
    <br>
    <input type="number" class="form-control" id="${POWER_INPUT_PREF}${id}" value="${enginePower}" />
    <button id="${EDIT_BUTTON_PREF}${id}" type="button" class="btn btn-info">Edit</button>
    <button id="${DELETE_BUTTON_PREF}${id}" type="button" class="btn btn-danger mt-4">Delete</button>
  </div>
</li>`;

export const clearInputs = () => {
  titleInput.value = "";
  engineInput.value = "";
};

export const addItemToPage = ({ id, title, enginePower }, onEdit, onDelete) => {

  if (title == "" || enginePower == "") {
    alert("Input can't be empty")
}

  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, enginePower })
  );

  const editButton = document.getElementById(`${EDIT_BUTTON_PREF}${id}`);
  const deleteButton = document.getElementById(`${DELETE_BUTTON_PREF}${id}`)

  editButton.addEventListener('click', onEdit)
  deleteButton.addEventListener('click', onDelete)
};

export const getEditValue = (id) => {
    
  const editTitle = document.getElementById(`${TITLE_INPUT_PREF_}${id}`)
  const editPower = document.getElementById(`${POWER_INPUT_PREF}${id}`)
  return {
      title: editTitle.value,
      enginePower: editPower.value
  };
}
export const renderItems = (items, onEdit, onDelete) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage({id: item.id, title: item.name, enginePower:item.engine_power}, onEdit, onDelete);
}
return items
};

export const getInputValues = () => {
  return {
    title: titleInput.value,
    enginePower: engineInput.value,
  };
};
