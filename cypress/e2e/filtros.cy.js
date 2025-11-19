describe("Pruebas de Filtros en la Galería", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080/galeria.html");
  });

  it("Click en HTML muestra solo HTML", () => {
    cy.contains("HTML").click();
    cy.get(".gallery-item.html").should("be.visible");
    cy.get(".gallery-item.js").should("not.be.visible");
    cy.get(".gallery-item.python").should("not.be.visible");
  });

  it("Click en JavaScript muestra solo JS", () => {
    cy.contains("JavaScript").click();
    cy.get(".gallery-item.js").should("be.visible");
    cy.get(".gallery-item.html").should("not.be.visible");
    cy.get(".gallery-item.python").should("not.be.visible");
  });

  it("Click en Python muestra solo Python", () => {
    cy.contains("Python").click();
    cy.get(".gallery-item.python").should("be.visible");
  });

  it("Click en Todos muestra todas las tarjetas", () => {
    cy.contains("Todos").click();
    cy.get(".gallery-item").should("have.length", 3);
  });

});
