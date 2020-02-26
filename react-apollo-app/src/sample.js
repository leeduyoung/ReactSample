// import React from 'react';
// import './index.css';
// import ApolloClient, { gql } from 'apollo-boost';
// import { useQuery } from '@apollo/react-hooks'
// import config from './configs/config'

// const client = new ApolloClient({
//     uri: "https://48p1r2roz4.sse.codesandbox.io/",
// });

// const EXCHANGE_RATES = gql`
//     {
//         rates(currency: "USD") {
//             currency
//             rate
//         }
//     }
// `
// function ExchangeRates() {
//     const { loading, error, data } = useQuery(EXCHANGE_RATES);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;

//     return data.rates.map(({ currency, rate }) => (
//         <div key={currency}>
//             <p>
//                 {currency}: {rate}
//             </p>
//         </div>
//     ))
// }