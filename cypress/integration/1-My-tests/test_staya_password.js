describe('Тестирование staya', function () {
    
    it('Проверка фразы Мои заказы после входа в личный кабинет', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('ayaxx@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('97739Stayka');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        })
})
