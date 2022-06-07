import "@testing-library/jest-dom";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import React from "react";
import Buttons from "./Buttons";
import Modal from "./Modal";

describe("Component - ", () => {
  it("Buttons should swap whenever one is clicked.", () => {
    render(<Buttons />);
    expect(screen.getByTestId("button1")).toBeInTheDocument();
    expect(screen.queryByTestId("button2")).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("button1"));
    expect(screen.getByTestId("button2")).toBeInTheDocument();
    expect(screen.queryByTestId("button1")).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("button2"));
    expect(screen.getByTestId("button1")).toBeInTheDocument();
    expect(screen.queryByTestId("button2")).not.toBeInTheDocument();
  });

  it("Modal should be opened when the plus button is clicked and should return the filled form when submit button is clicked.", () => {
    render(<Modal />);
    expect(screen.getByTestId("open-button")).toBeInTheDocument();
    expect(screen.getByTestId("company")).toBeEmptyDOMElement();
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("open-button"));
    expect(screen.getByTestId("modal")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("name"), {
      target: { value: "Pabau" },
    });
    fireEvent.change(screen.getByTestId("field"), { target: { value: "IT" } });
    fireEvent.change(screen.getByTestId("color"), {
      target: { value: "red" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.queryByTestId("company")).not.toBeEmptyDOMElement();
    expect(screen.getByTestId("company-info")).toHaveTextContent("Pabau - IT");
    expect(screen.getByTestId("company-info")).toHaveStyle({
      backgroundColor: "red",
    });
  });
});
