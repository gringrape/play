import { describe, expect, it, run } from "./deps.js";

import { add, multiply } from "./calculator.js";

describe("", () => {
  it("add", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("multiply", () => {
    expect(multiply(2, 5)).toBe(10);
  });
});

run();
