import { Api } from "../axios-config";
import type { Person } from "../../../models";

const PersonService = {
  getAll: async () => {
    const { data } = await Api.get<Person[]>("/person");
    return data;
  },

  getById: async (id: string) => {
    const { data } = await Api.get<Person>(`/person/${id}`);
    return data;
  },

  create: async (person: Person) => {
    const { data } = await Api.post<Person>("/person", person);
    return data;
  },

  update: async (id: string, person: Person) => {
    const { data } = await Api.put<Person>(`/person/${id}`, person);
    return data;
  },
};

export { PersonService };
