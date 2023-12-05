import React from 'react';
import styled from 'styled-components';

// ItemWrapper styled component
export const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 16px;
`;

// ItemImage styled component
export const ItemImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
`;

// ItemText styled component
export const ItemText = styled.div`
    flex: 1;
    margin-left: 16px;
`;

// ItemName styled component with props
export const ItemName = styled.h2`
    font-size: 18px;
    margin-bottom: 8px;
`;

// ItemDescr styled component with props
export const ItemDescr = styled.p`
    font-size: 14px;
    color: #555;
`;

// ItemPrice styled component with props
export const ItemPrice = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

// ViewMore styled component
export const ViewMore = styled.button`
    background-color: #3498db;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
`;