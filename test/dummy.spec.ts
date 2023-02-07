import { dummy } from "../src/Helpers.js";
import { describe, expect, it } from "vitest";

describe("test", () => {
  it("dummy test", () => {
    expect(dummy()).toBeTruthy();
  });
});
