import React from 'react';
import styled from 'styled-components'

const CustomerTempleateBlock = styled.div `
    width: 30%;

    position: relative;
    background: rgba(230, 230, 230, 0.9);
    border-radius: 16px;
    box-shadow 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto; /*가운데 정렬 */
    
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;

function CustomerTempleate({children}){
    return <CustomerTempleateBlock>{children}</CustomerTempleateBlock>
}

export default CustomerTempleate