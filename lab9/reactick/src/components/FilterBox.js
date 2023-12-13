import React from "react";
import styled from "styled-components";
import { CaretDownOutlined } from "@ant-design/icons";

export const FilterBox = ({purpose, placeholder, filterValueSelected}) => {

    function onFilterChanged(event) {
        filterValueSelected(event.target.value);
        // applyFilters(); // Trigger the filtering when a filter value changes
      }
    if(purpose==="availability"){
    return(
        <FilterWrapp>
            <FilterSelect placeholder={placeholder} onChange={onFilterChanged}>
               <option value="all">All</option>
               <option value="available">Available</option>
               <option value="unavailable">Unvailable</option>
            </FilterSelect>
        </FilterWrapp>
    )} else if (purpose==="price"){
        return( <FilterWrapp>
            <FilterSelect placeholder={placeholder} onChange={onFilterChanged}>
               <option value="all">All</option>
               <option value="20000">More Than 20000$</option>
               <option value="40000">More Than 40000$</option>
               <option value="80000">More than 80000$</option>
            </FilterSelect>
        </FilterWrapp>)
    }
    else{
        return(
            <FilterWrapp>
        <FilterSelect placeholder={placeholder} onChange={onFilterChanged}>
            <option value="all">All</option>
            <option value="electric">Electric</option>
            <option value="sedan">Sedan</option>
            <option value="sports">Sport</option>
            <option value="suv">SUV</option>
            <option value="supercar">Supercar</option>
         </FilterSelect>
     </FilterWrapp>
     )
    }
    
}

const FilterWrapp = styled.div`
`
const FilterSelect = styled.select`
    width:200px;
    height:40px;
    border-radius:5px;
    font-weight:balder;
    border:1px solid #00000
    select:focus {
        outline: none;
`
// const CaretSelect = styled.select`
//     position:absolute;
//     left:180px;
//     bottom:20px;
//     height:20px;
//     width:117px;
//     cursor:pointer;

// const CaretIcon = styled(CaretDownOutlined)`
// position:absolute;
// left:180px;
// bottom:20px;
// height:7px;
// width:7px;
// cursor:pointer;
// `