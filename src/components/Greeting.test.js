import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders a Hello World Text", () => {
  //Arrang
  render(<Greeting />);

  //Act
  //...nothing

  //Assert
  const helloWorldElement = screen.getByText("Hello World");
  expect(helloWorldElement).toBeInTheDocument();
});
