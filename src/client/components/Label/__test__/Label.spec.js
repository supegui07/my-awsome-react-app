import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";
import Label from "../Label";

describe("<Label />", () => {
  it("render the component correctly just jest", () => {
    const container = document.createElement("div");
    const fakeLabelText = "User Name:";
    ReactDOM.render(<Label text={fakeLabelText} />, container);

    const span = container.querySelector("span");
    const labelText = span.textContent;

    expect(labelText).toBe(fakeLabelText);
  });

  it("render the component correctly react-testing-library", () => {
    const fakeLabelText = "User Name:";

    const { getByText } = render(<Label text={fakeLabelText} />);

    const textLabel = getByText(fakeLabelText).textContent;
    expect(textLabel).toBe(fakeLabelText);
  });

  it("snapshot component", () => {
    const labelText = "User Name:";
    const tree = create(<Label text={labelText} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
