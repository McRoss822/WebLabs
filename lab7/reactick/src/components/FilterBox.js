import React from "react";
import styled from "styled-components";
import { CaretDownOutlined } from "@ant-design/icons";

export const FilterBox = ({placeholder, disabled}) => {
    return(
        <FilterWrapp>
            <FilterInput placeholder={placeholder} disabled></FilterInput>
            <CaretIcon></CaretIcon>
        </FilterWrapp>
    )
}

const FilterWrapp = styled.div`
position:relative;
`
const FilterInput = styled.input`
width:200px;
height:40px;
border-radius:10px;
font-weight:balder;
`
const CaretIcon = styled(CaretDownOutlined)`
position:absolute;
left:180px;
bottom:20px;
height:7px;
width:7px;
cursor:pointer;
`