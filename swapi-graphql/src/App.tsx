import React from "react";
import { useQuery } from "@apollo/client";
import { PEOPLE_QUERY } from "./components/query";
import type { Root } from "./gql/graphql";
import { PersonItem } from "./components/PersonItem";

export const App: React.FC = () => {
  const { data } = useQuery<Root>(PEOPLE_QUERY, {
    variables: { first: 10 },
  });

  return (
    <>
      {data?.allPeople?.people?.map(
        (el, i: number) => el != null && <PersonItem key={i} person={el} />,
      )}
    </>
  );
};
