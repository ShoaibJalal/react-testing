import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if fetch request is successful", async () => {
    //Arrang
    render(<Async />);

    //Act
    //...nothing

    //Assert
    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});
