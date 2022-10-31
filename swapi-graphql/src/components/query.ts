import { gql } from "@apollo/client";

export const PEOPLE_QUERY = gql`
  query allPeopleQuery($first: Int!) {
    allPeople(first: $first) {
      people {
        id
        name
        skinColor
        homeworld {
          id
          name
        }
      }
    }
  }
`;
