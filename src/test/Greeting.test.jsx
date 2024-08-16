import { render, screen } from "@testing-library/react";
import Greeting from "../components/Greeting";

test("", () => {
  //Arrange
  render(<Greeting />);
  //Act
  const linkElement = screen.getByText(/Welcome/i);
  //Assert
  expect(linkElement).toBeInTheDocument();
});
