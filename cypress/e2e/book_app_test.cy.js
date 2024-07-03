describe('Тест логина в bookApp', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Тест логина', () => {
    cy.login("bropet@mail.ru", "123")
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible")
  })

  it('Тест пустого имени пользователя', () => {    
    cy.login("", "123")
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('Тест пустого пароля', () => {
    cy.login("bropet@mail.ru", "")
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('Тест содержание в избранном', () => {
    cy.login("bropet@mail.ru", "123")
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible")
    cy.contains("Favorites").click
    cy.contains("Add new").should("be.visible")
  })

  it('Тест выхода из приложения', () => {
    cy.login("bropet@mail.ru", "123")
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible")
    cy.contains("Log out").click()
    cy.contains("Log in").should("be.visible")
  })

  it('Тест <добавить новое> в избранном приложения', () => {
    cy.login("bropet@mail.ru", "123")
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible")
    cy.contains("Add new").click()
    cy.contains("Book description").should("be.visible")
  })
})