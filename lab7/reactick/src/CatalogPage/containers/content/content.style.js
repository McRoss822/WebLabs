import React from 'react';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:10%;
`;

export const FilterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #666666
`;

export const Filters = styled.ul`
  /* Styles for Filters component */
  display:flex;
  gap:20px;
`;

export const ApplyButton = styled.button`
    padding: 8px;
    border: 1px solid #888888;
    border-radius: 10px;
    font-size:14px;
    width: 160px;
    height:45px;
    background-color:white;
    outline: none;
    margin-right:2%;
  /* You can add more styles for the SearchBar component */
`;

export const ItemsCatalog = styled.div`
  /* Styles for ItemsCatalog component */

`;