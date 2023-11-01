import {
    EDIT_BUTTON_PREFIX,
    addItemToPage,
    clearInputs,
    renderItemsList,
    getInputValues,
  } from "./util.js";
  
  const submitButton = document.getElementById("submit_button");
  const findButton = document.getElementById("find_button");
  const cancelFindButton = document.getElementById("cancel_find_button");
  const findInput = document.getElementById("find_input");
  const sortButton = document.getElementById("sort_by_button");
  const sumButton = document.getElementById("sum_button");
  const totalEngine = document.getElementById("totalEnginePower");
  
  let cars = [];
  let filteredCars = [];

  export {cars, filteredCars}

  const addItem = ({title, enginePower}) =>{
    const generatedId = uuid.v1();
    let newItem = {
      id: generatedId,
      title,
      enginePower
    }
    if(newItem.enginePower>=0){
    cars.push(newItem);
    } else {
      alert("negative value");
    }
    addItemToPage(newItem)
  };  
  
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    const { title, enginePower } = getInputValues();
  
    clearInputs();
  
    addItem({
      title,
      enginePower,
    })

    renderItemsList(cars);
  });
  
  findButton.addEventListener("click", () => {
    const foundCars = cars.filter(
      (car) => car.title.search(findInput.value) !== -1
    );

    filteredCars = foundCars
  
    renderItemsList(filteredCars);
  });
  
  cancelFindButton.addEventListener("click", () => {
    filteredCars.length = 0;
    renderItemsList(cars);
  
    findInput.value = "";
  });
  
  sortButton.addEventListener("click", () => {
    if(filteredCars.length === 0){
      const sortedCars = cars.slice().sort(function(a,b){
        return a.enginePower - b.enginePower;
    });
    console.log(sortedCars);
    renderItemsList(sortedCars);
    }else{
      const sortedCars = filteredCars.slice().sort(function(a,b){
        return a.enginePower - b.enginePower;
    });
    console.log(sortedCars);
    renderItemsList(sortedCars);
    }
  })

  sumButton.addEventListener("click", () => {
    if(filteredCars.length === 0){
      const reducedCars = cars.slice().reduce((accumulator, car) => {
        const engine = parseInt(car.enginePower, 10);
        return accumulator + engine;
    }, 0);
    console.log(reducedCars);
    totalEngine.textContent = reducedCars;
    }else {
      const reducedCars = filteredCars.slice().reduce((accumulator, car) => {
        const engine = parseInt(car.enginePower, 10);
        return accumulator + engine;
    }, 0);
    totalEngine.textContent = reducedCars;
    }
  })