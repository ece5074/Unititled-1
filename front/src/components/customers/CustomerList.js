import React from "react";
import styled from "styled-components";
import CustomerItem from "./CustomerItem";

const CustomerListBlock = styled.div`
  fles: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: rgba(230, 230, 230, 0.9);
`;

function CustomerList() {
  return <CustomerListBlock>

      <CustomerItem text="Admin" done={true}/>
      <CustomerItem text="Guest" done={false}/>
      <CustomerItem text="Jack" done={false}/>
      <CustomerItem text="John" done={true}/>
  </CustomerListBlock>;
}

export default CustomerList;
