import type { Context } from "../Context";
import { Item } from "../entities/Item";
import type { Resolvers } from "../schema/types";

export const Query: Resolvers<Context>["Query"] = {
  items: async (_, _args, { entityManager }) => {
    return entityManager.find(Item);
  },
  item: async (_, { id }, { entityManager }) => {
    return entityManager.findOneBy(Item, { id });
  },
};
