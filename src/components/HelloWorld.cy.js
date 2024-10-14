/* eslint-disable no-undef */
import HelloWorld from "./HelloWorld.vue";

describe("<HelloWorld />", () => {
  it("render a message", () => {
    // see: https://on.cypress.io/mounting-vue
    const msg = "Hello Cypress Component Testing!";

    // 设置视图的尺寸
    cy.viewport(800, 600);
    cy.mount(HelloWorld, {
      props: {
        msg,
      },
    });

    cy.get("h1").should("have.text", msg);
  });
});
