describe("Pruebas de Navegación del Menú", () => {

  it("Click menú Inicio", () => {
    cy.visit("http://localhost:8080/galeria.html");
    cy.contains("Inicio").click();
    cy.url().should("include", "index.html");
  });

  it("Click menú Cursos", () => {
    cy.visit("http://localhost:8080/index.html");
    cy.contains("Cursos").click();
    cy.url().should("include", "galeria.html");
  });

  it("Click menú Contacto", () => {
    cy.visit("http://localhost:8080/index.html");
    cy.contains("Contacto").click();
    cy.url().should("include", "contacto.html");
  });

});

describe("Pruebas de Botones", () => {

  it("Click 'Explorar Cursos’", () => {
    cy.visit("http://localhost:8080/index.html");
    cy.contains("Explorar Cursos").click();
    cy.location("hash").should("eq", "#cursos");
  });

});
