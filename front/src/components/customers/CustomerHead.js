import React from 'react';
import styled from 'styled-components';
import { useCustomerState } from '../../CustomerContext';

const CustomerHeadBlock = styled.div`
    padding: 32px 24px 24px 16px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 1.5em;
        color: #343a40;
    }

    .name {
        margin-top: 4px;
        color: white;
        font-size: 1.1empx;
    }
    .etcAll {
        color: #20c997;
        font-size: 1em;
        margin-top: 20px;
        font-weight: bold;
    }
`

function CustomerHead(){
    const customers = useCustomerState();
    console.log(customers);

    return(
        <CustomerHeadBlock>
            <h1>사용자 목록</h1>
            <div className="name">방 이름</div>
            <div className="etcAll">방 소개</div>
        </CustomerHeadBlock>
    )
}

export default CustomerHead;