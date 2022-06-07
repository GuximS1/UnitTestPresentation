import { fibonacci, fibonacciNumbers } from "./fibonacci";

describe("This", () => {
  it("should calculate correctly", () => {
    expect(false).toBe(false);
    expect("This is a string").toBe("This is a string");

    expect({}).toMatchObject({});

    expect({
      key1: "value1",
      key2: "value2",
    }).toMatchObject({ key2: "value2", key1: "value1" });

    expect(+(0.1 + 0.2).toFixed(1)).toBe(0.3);

    expect(isNaN(1)).toBe(isNaN(3));
  });
  it("should return an array of numbers", () => {
    expect(fibonacci(10)).toEqual(fibonacciNumbers.slice(0, 10));
    console.log(fibonacci(10));
    //expect(fibonacci(-1)).toEqual([]);
    try {
      fibonacci(-1);
    } catch (error: any) {
      expect(error.message).toBe("Please provide a number >=2");
    }

    expect(() => fibonacci(-1)).toThrowError("Please provide a number >=2");
  });
});
