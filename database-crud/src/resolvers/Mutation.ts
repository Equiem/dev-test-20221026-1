import type { Context } from "../Context";
import { Item } from "../entities/Item";
import type { Resolvers } from "../schema/types";

export const Mutation: Resolvers<Context>["Mutation"] = {
  // @ts-ignore
  addItem: async (_, {item}, {entityManager}) => {
    const saved = await entityManager.insert(Item, item);
    const res = await entityManager.findOneBy(Item, {id: saved.generatedMaps[0].id})
    return res
  },
  // @ts-ignore
  updateItem: async (_, {id, item}, {entityManager}) => {
    await entityManager.update(Item, {id}, item)
    const res = await entityManager.findOneBy(Item, {id})
    return res;
  },
  deleteItem: async (_, {id}, {entityManager}) => {
    await entityManager.delete(Item, {id})
    return true
  }
};
