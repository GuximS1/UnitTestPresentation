import "@testing-library/jest-dom";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import React from "react";
import Buttons from "./Buttons";
import Modal from "./Modal";
describe("Component - ", () => {
  afterEach(cleanup);
  it("Buttons should swap whenever one is clicked.", () => {
    render(<Buttons />);
    expect(screen.getByTestId("button1")).toBeInTheDocument();
    expect(screen.queryByTestId("button2")).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("button1"));
    expect(screen.queryByTestId("button1")).not.toBeInTheDocument();
    expect(screen.getByTestId("button2")).toBeInTheDocument();
  });

  it("Modal should be opened when the plus button is clicked and should return the filled form when submit button is clicked.", () => {
    render(<Modal />);
    const button = screen.getByTestId("open-button");
    expect(button).toBeInTheDocument();
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
    expect(screen.getByTestId("company")).toBeEmptyDOMElement();
    fireEvent.click(screen.getByTestId("open-button"));
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("name"), {
      target: { value: "Barcelona" },
    });
    fireEvent.change(screen.getByTestId("field"), {
      target: { value: "Football club" },
    });
    fireEvent.change(screen.getByTestId("color"), {
      target: { value: "red" },
    });
    expect(screen.getByRole("button", { name: "Submit" }));
    expect(screen.getByTestId("company")).not.toBeEmptyDOMElement();
    expect(screen.getByTestId("company-info")).toHaveTextContent(
      "Barcelona - Football club"
    );
    expect(screen.getByTestId("company-info")).toHaveStyle({
      backgroundColor: "red",
    });
  });
});
