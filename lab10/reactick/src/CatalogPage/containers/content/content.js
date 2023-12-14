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
import axios from 'axios'

export const CatalogContent = ({searchTerm}) => {

  const [search, setSearch] = useState('');
  const [filterValues, setFilterValues] = useState({
    availability: 'all',
    price: 'all',
    type: 'all',
  });

  const [filteredCars, setFilteredCars] = useState([]);
  const [cars, setCars] = useState([]);

  const filterItems = (searchTerm, cars) => {
    const filteredItems = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filteredItems);
  };
  
  useEffect(() => {
    filterItems(searchTerm, cars); 
  }, [searchTerm, cars]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await axios.get('http://localhost:5050/api/cars');
        const data = response.data;
        setCars(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchCars();
  }, []);

  const applyFilters = async () => {
    try {
      const response = await axios.get('http://localhost:5050/api/cars/filter', { params: filterValues });
      const data = response.data;
      console.log(data)
      setFilteredCars(data);
    } catch (error) {
      console.error('Error fetching filtered cars:', error);
    }
  };


  const handleApplyFilters = () => {
    applyFilters();
  };

  const handleFilterChange = (filterType, value) => {
    setFilterValues({
      ...filterValues,
      [filterType]: value,
    });
    
  };
    return (
        <ContentWrapper>
            <FilterDiv>
                <Filters>
                    <FilterBox 
                        filterValueSelected={(value) => handleFilterChange("availability", value)}
                        onFilterChange={handleFilterChange}
                        purpose="availability"
                    />
                    <FilterBox
                        filterValueSelected={(value) => handleFilterChange("price", value)}
                        onFilterChange={handleFilterChange}
                        purpose="price"
                    />
                    <FilterBox
                        filterValueSelected={(value) => handleFilterChange("type", value)}
                        onFilterChange={handleFilterChange}
                        purpose="type"
                    />
                </Filters>
                <ApplyButton onClick={handleApplyFilters}>Apply Filters</ApplyButton>
            </FilterDiv>
            <ItemsCatalog cars={filteredCars.length > 0 ? filteredCars : cars}/> 
        </ContentWrapper>
    );
};