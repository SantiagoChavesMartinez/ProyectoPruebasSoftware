describe("Prueba de inicio", () => {
  it("Carga la página principal", () => {
    cy.visit("http://localhost:8080/index.html");
    cy.contains("Programación Fácil"); 
  });
});
