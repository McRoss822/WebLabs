import React from 'react';
import styled from 'styled-components';

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction:column;
    width:300px;
    height:380px;
    border:1px solid #888;
    border-radius:15px;
`;

export const ItemImage = styled.img`
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
`;

export const ItemText = styled.div`
    flex: 1;
    margin-left: 16px;
    text-align:center;
`;

export const ItemName = styled.h2`
    font-size: 18px;
    margin-bottom: 8px;
`;

export const ItemDescr = styled.p`
    font-size: 14px;
    color: #555;
`;


export const ItemPrice = styled.p`
    font-size: 16px;
    font-weight: bold;
`;


export const ViewMore = styled.button`
    background-color: #666666;
    padding: 8px 16px;
    align-self:center;
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 10%;
    width:200px;
    height:40px;
    font-weight:bolder;
    color:white;
`;