describe("Testing Jorge's App", () => {
  it("Checks Workspace init state", () => {
    cy.visit("localhost:3000");
    cy.get("div[data-test=explorer-box]").should("be.visible");
    cy.get("div[data-test=editor-box]").should("be.visible");
    cy.get("div[data-test=editor-box]").children().should('have.length', 0);
    cy.get("div[data-test=directory]").should('have.length', 1);
    cy.get("div[data-test=file]").should("not.exist");

  });

  it("Checks Explorer management", () => {
    cy.visit("localhost:3000");
    cy.get("div[data-test=directory]").click();
    cy.get("div[data-test=directory]").should('have.length', 3);
    cy.get("div[data-test=file]").should('have.length', 2);
    cy.get("div[data-test=file]").first().should('contain', 'index');
    cy.get("div[data-test=directory]").first().click();
    cy.get("div[data-test=directory]").should('have.length', 1);
    cy.get("div[data-test=file]").should("not.exist");
    cy.get("div[data-test=directory]").click();
    cy.get("div[data-test=directory]").should('have.length', 3);
    cy.get("div[data-test=file]").should('have.length', 2);
    cy.get("div[data-test=directory]").eq(1).click();
    cy.get("div[data-test=directory]").should('have.length', 4);
    cy.get("div[data-test=file]").should('have.length', 3);
    cy.get("div[data-test=directory]").eq(2).click();
    cy.get("div[data-test=directory]").should('have.length', 4);
    cy.get("div[data-test=file]").should('have.length', 5);
    cy.get("div[data-test=directory]").eq(3).click();
    cy.get("div[data-test=directory]").should('have.length', 4);
    cy.get("div[data-test=file]").should('have.length', 8);
  });

  it("Checks Editor management and persistence", () => {
    const edit = "Hello World, this has been edited";

    cy.visit("localhost:3000");
    cy.get("div[data-test=directory]").click();
    cy.get("div[data-test=file]").first().click();
    cy.get("div[data-test=editor-box]").children().should('have.length', 1);
    cy.get("div[data-test=editor-box] textarea").should('contain', '<!DOCTYPE html>');
    cy.get("div[data-test=file]").eq(1).click();
    cy.get("div[data-test=editor-box] textarea").should('not.contain', '<!DOCTYPE html>');
    cy.get("div[data-test=editor-box] textarea").should('contain', 'body, html');
    cy.get("div[data-test=editor-box] textarea").type(edit);
    cy.get("div[data-test=editor-box] textarea").should('contain', edit);
    cy.get("div[data-test=file]").first().click();
    cy.get("div[data-test=editor-box] textarea").should('contain', '<!DOCTYPE html>');
    cy.get("div[data-test=editor-box] textarea").should('not.contain', edit);
    cy.get("div[data-test=file]").eq(1).click();
    cy.get("div[data-test=editor-box] textarea").should('contain', edit);
  });
});
