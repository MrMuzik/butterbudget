// sample.test.ts
import { assertEquals } from "https://deno.land/std@0.200.0/testing/asserts.ts";

Deno.test("simple test", () => {
  const result = 2 + 2;
  assertEquals(result, 4);
});
