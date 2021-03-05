import {gql} from "graphql-request";

export const queryRefreshRates = gql`
query {
  refreshRates {
    identifier
    rateSeconds
    description
  }
}`
export const queryLeftSides =gql`
query {
    leftSides {
        id_page
    }
}
`
export const queryStockModules = gql`
  query {
  stocksModules {
        ticker
    companyName
    logo
  }
}`

export const queryTextPages = gql`
  query {
  textPages {
 description
    identifier
    text
  }
}
`