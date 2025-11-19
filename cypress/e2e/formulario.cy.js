describe("Pruebas del Formulario de Contacto", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080/contacto.html");
  });

  it("Enviar sin correo muestra error claro", () => {
    cy.get("button[type='submit']").click();
    cy.get(".error").should("contain", "El correo es obligatorio.");
  });

  it("Ingresar correo inválido muestra error", () => {
    cy.get("#email").type("hola");
    cy.get("button[type='submit']").click();
    cy.get(".error").should("contain", "El correo es obligatorio.");
  });

  it("Correo válido no debe mostrar error", () => {
    cy.get("#email").type("usuario@mail.com");
    cy.get("button[type='submit']").click();
    cy.get(".error").should("not.contain", "El correo es obligatorio.");
  });

});

