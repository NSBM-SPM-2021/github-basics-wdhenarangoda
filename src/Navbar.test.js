import React from "react";
import { shallow } from "enzyme";
import Navbar from "./components/layout/Navbar";

describe("Navbar Header Text Testing", () => {
  var wrapper;
  wrapper = shallow(<Navbar />);
  test("Render the Header with text of `LYRICSEUM`", () => {
    expect(wrapper.find("span").text()).toBe("LYRICSEUM");
  });

  test("Render the Navar with className", () => {
    expect(wrapper.find("nav").prop("className")).toEqual(
      "navbar navbar-dark bg-dark mb-5"
    );
  });
});
