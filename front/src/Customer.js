import React from 'react'
import CustomerTempleate from "./components/customers/CustomerTempleate";
import CustomerHead from "./components/customers/CustomerHead";
import CustomerList from "./components/customers/CustomerList";
import CustomerCreate from "./components/customers/CustomerCreate";
import { CustomerProvider } from "./CustomerContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: rgba(30, 30, 30, 0.2);
  }
`;

export default function Customer(){
    return (
        <CustomerProvider>
          <CustomerTempleate>
            <CustomerHead />
            <GlobalStyle/>
            <CustomerList />
            <CustomerCreate />
          </CustomerTempleate>
        </CustomerProvider>
      );
}