import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const query = gql`
    reservations {
        id
        name
        hotelName
        arrivalDate
        departureDate
    }
`;

type Reservation = {
    id: Number
    name: String
    hotelName: String
    arrivalDate: Date
    departureDate: Date
}

export const withReservations = graphql<Reservation, {}>(query, {
    options: () => ({}),
    props: () => ({})
})