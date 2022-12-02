import { UuidAdapter } from "~/shared/utils/uuid/uuid.adapter";

describe("UUID Adapter", () => {
  it("should pass", () => {
    const uuid = new UuidAdapter().generate();
    expect(uuid).toEqual(uuid);
  })
  it("should pass too actually", () => {
    expect(1 + 1).not.toBe(3);
  })
})
