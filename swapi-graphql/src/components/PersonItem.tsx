import React from "react";
import type { FC } from "react";
import type { Person } from "../gql/graphql";

interface IProps {
  person?: Person;
}

export const PersonItem: FC<IProps> = ({ person }) => {
  return (
    <div>
      <h1>{person?.name}</h1>
      <p>Skin color: {person?.skinColor}</p>
      <p>Homeworld: {person?.homeworld?.name}</p>
    </div>
  );
};
