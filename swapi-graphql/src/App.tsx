import React from "react";
import { PersonItem } from "./components/PersonItem";
import { useAllPeopleQuery } from "./generated-types";

export const App: React.FC = () => {
  const { data } = useAllPeopleQuery({ variables: { first: 10 } });

  return (
    <>
      {data?.allPeople?.people?.map(
        (el, i: number) => el != null && <PersonItem key={i} person={el} />,
      )}
    </>
  );
};
