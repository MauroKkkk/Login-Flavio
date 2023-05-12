
import React from "react";
import { test, expect } from "vitest";
import { HelloWorldApp } from "./index";
import * as renderer from "@testing-library/react-native";

test("Home", () => {
  const view = renderer.render(<Home/>);
  expect(view.getByText(/Sign/)).toBeTruthy();
})
