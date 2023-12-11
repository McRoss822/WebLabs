import React from "react";
import {
    ContentWrapper,
    FilterDiv,
    Filters,
    ApplyButton,
} from './content.style'
import { ItemsCatalog } from './items_catalog_list';
import {FilterBox} from '../../../components/FilterBox'
import { useState, useContext, useEffect } from "react";
import { CarsContext } from "../../../App";

export const CatalogContent = ({searchTerm}) => {
    const cars = useContext(CarsContext);
    const [filterValues, setFilterValues] = useState({
    availability: "all",
    price: "",
    type: ""
  });
    const [search, setSearch] = useState("");
    const [filteredCars, setFilteredCars] = useState(cars);

    const applyFilters = () => {
        let filteredList = cars.filter((car) => {
          let passAvailability = true;
          let passPrice = true;
          let passType = true;
    
          if (filterValues.availability === "available") {
            passAvailability = car.available === true;
          } else if (filterValues.availability === "unavailable") {
            passAvailability = car.available === false;
          }
    
          if (filterValues.price === "20000") {
            passPrice = car.price > 20000;
          } else if (filterValues.price === "40000") {
            passPrice = car.price > 40000;
          } else if (filterValues.price === "80000") {
            passPrice = car.price > 80000;
          }
    
          if (filterValues.type !== "all") {
            passType = car.type === filterValues.type;
          }
    
          return passAvailability && passPrice && passType;
          // Include other filters as needed
        });
    
        setFilteredCars(filteredList);
      };
    
      const handleFilterChange = (purpose, value) => {
        setFilterValues({
          ...filterValues,
          [purpose]: value
        });
      };

      const filterItems = (searchTerm, carsToFilter) => {
        const filteredItems = carsToFilter.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCars(filteredItems);
    };

    useEffect(() => {
        applyFilters(); // Apply existing filters
        filterItems(searchTerm, cars); // Apply search filter
    }, [searchTerm, cars]); // 

    return (
        <ContentWrapper>
            <FilterDiv>
                <Filters>
                    <FilterBox
                        filterValueSelected={(value) => handleFilterChange("availability", value)} 
                        purpose="availability"
                        placeholder="Filter by Name"
                    />
                    <FilterBox
                        filterValueSelected={(value) => handleFilterChange("price", value)}   
                        purpose="price"
                        placeholder="Filter by Price"
                        // onChange={(value) => handleFilterChange('price', value)}
                    />
                    <FilterBox
                        filterValueSelected={(value) => handleFilterChange("type", value)} 
                        purpose="type"
                        placeholder="Filter by Type"
                        // onChange={(value) => handleFilterChange('type', value)}
                    />
                </Filters>
                <ApplyButton onClick={applyFilters}>Apply Filters</ApplyButton>
            </FilterDiv>
            <ItemsCatalog cars ={filteredCars}/>
        </ContentWrapper>
    );
};