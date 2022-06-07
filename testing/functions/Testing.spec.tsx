import { fibonacci } from "./fibonacci";
describe("Simple testing", () => {
  it("..", () => {
    expect(false).toBe(false);
    expect("This is a string").toBe("This is a string");
    expect({}).toMatchObject({});
    expect({
      key1: "value1",
      key2: "value2",
    }).toMatchObject({ key1: "value1", key2: "value2" });
    expect(5 + 5).toBe(10);
    expect(+(0.1 + 0.2).toFixed(1)).toBe(0.3);
    expect(isNaN(4)).toBe(isNaN(5));
  });
  it("fibonacci", () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    console.log(fibonacci(10));
    try {
      fibonacci(-1);
    } catch (error: any) {
      expect(error.message).toBe("Please provide a number >=2");
    }
    expect(() => fibonacci(-1)).toThrowError("Please provide a number >=2");
  });
});
