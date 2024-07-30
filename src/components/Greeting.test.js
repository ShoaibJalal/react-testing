import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component Feature", () => {
  test("renders a [Hello World] Text", () => {
    //Arrang
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Greetings Testers");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders [Unit Test Paragraph] when Button is not clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...pending

    //Assert
    const paragraphElement = screen.getByText("Welcome to Unit Testing", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders [changed] text if button is clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const paragraphElement = screen.getByText("Text has Changed", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("should not render [Welcome to Unit Testing] text if button is clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const paragraphElement = screen.queryByText("Welcome to Unit Testing", { exact: false });
    //expect(paragraphElement).not.toBeInTheDocument();
    expect(paragraphElement).toBeNull();
  });
});
