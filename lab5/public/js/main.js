import {
    EDIT_BUTTON_PREF,
    DELETE_BUTTON_PREF,
    clearInputs,
    renderItems,
    getInputValues,
    getEditValue
} from "./util.js";

import { getAllCars, postCar, deleteCar, editCar, deleteAllCars } from "./api.js"  

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortButton = document.getElementById("sort_by_button");
const sumButton = document.getElementById("sum_button");
const totalEngine = document.getElementById("totalEnginePower");
const deleteAll = document.getElementById("delete_button_all")

let cars = [];
let filteredCars = [];

export {cars, filteredCars}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { title, enginePower } = getInputValues();

    clearInputs();

    postCar({
    title,
    enginePower,
    }).then(refetchAllCars)
    .then(data => console.log("New car added", data))
    .catch(err => console.log(err));
});

cancelFindButton.addEventListener("click", () => { 
    refetchAllCars();
});

deleteAll.addEventListener("click", () => {
console.log("df")
deleteCars();
refetchAllCars();
});

findButton.addEventListener("click", () => {
    cars = cars.filter((car) => car.name.search(findInput.value) !== -1);

    renderItems(cars, onEdit, onDelete);
});

cancelFindButton.addEventListener("click", () => {
    filteredCars.length = 0;
    renderItems(cars);

    findInput.value = "";
});

  // sortButton.addEventListener("click", () => {
  //   if(filteredCars.length === 0){
  //     const sortedCars = cars.slice().sort(function(a,b){
  //       return a.enginePower - b.enginePower;
  //   });
  //   console.log(sortedCars);
  //   renderItems(sortedCars);
  //   }else{
  //     const sortedCars = filteredCars.slice().sort(function(a,b){
  //       return a.enginePower - b.enginePower;
  //   });
  //   console.log(sortedCars);
  //   renderItemsList(sortedCars);
  //   }
  // })

sortButton.addEventListener("click", () => {  
    const sorted_cars = cars.slice().sort((a, b) => a.engine_power - b.engine_power);
    renderItems(sorted_cars, onEdit, onDelete);
});    

sumButton.addEventListener("click", () => {
    const reducedCars = cars.reduce((acummulator, car) => {
        return acummulator + parseInt(car.engine_power, 10)},0)
    totalEngine.textContent = `${reducedCars}`  
})

const deleteCars = async () => {
    try {
        await deleteAllCars()
    } catch (error) {
        console.error("Error while deleting planes:", error);
    }
};

const refetchAllCars = async () => {
    console.log("doing")
    try {
        const fetchedCars = await getAllCars();
        cars = fetchedCars;
        renderItems(cars, onEdit, onDelete);
    } catch (error) {
        
        console.error("Error while fetching and rendering planes:", error);
    }
};

const onEdit = async (element) => {
    try {
        const id = element.target.id.replace(EDIT_BUTTON_PREF, "");
        await editCar(id, getEditValue(id));
        await refetchAllCars();
    } catch (err) {
        console.error(err);
    }
}

const onDelete = async (element) => {
    try {
        const id = element.target.id.replace(DELETE_BUTTON_PREF, "");
        await deleteCar(id);
        refetchAllCars();
    } catch (err) {
        console.error(err);
    }
}

refetchAllCars();
