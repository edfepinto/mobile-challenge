import mock from "~/assets/api.json";
import { UuidAdapter } from "../uuid/uuid.adapter";

const uuidGenerator = new UuidAdapter().generate;

export const mockDataService = {
  getEvents() {
    return mock.map(data => ({ ...data, id: uuidGenerator() }));
  },
};
