import gql from 'graphql-tag';

export const queries = {
    GET_RESERVATIONS: gql`
        reservations {
            id
            name
            hotelName
            arrivalDate
            departureDate
        }
    `
}
