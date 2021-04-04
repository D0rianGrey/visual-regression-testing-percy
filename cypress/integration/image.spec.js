/// <reference types="cypress" />

const pages = ["http://example.com"];

const sizes = ["iphone-6", "ipad-2", [1200, 800]];

describe("Visual Regression", () => {
  sizes.forEach((size) => {
    pages.forEach((page) => {
      it(`should match ${page} in resolution ${size}`, () => {
        let currentTime = new Date(Date.UTC(2021, 4, 4).getDate());
        cy.clock(currentTime);
        cy.setResolution(size);
        cy.visit(page);
        cy.matchImageSnapshot();
      });
    });
  });
});

describe.only("Single Element Snapshot", () => {
  it("Should match a single element on the page", () => {
    cy.visit("http://example.com/");
    cy.get("h1").matchImageSnapshot({
      failureThreshold: 10.0,
      failureThresholdType: "pixels",
    });
  });
});
