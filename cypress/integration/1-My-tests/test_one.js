describe('Тестирование katakombas', function () {
    
    it('проверка успешного добавления товара в корзину', function () {
        cy.visit('https://katacombas.com/');
        cy.get(':nth-child(1) > .t692__linkwrapper > .t692__blockimg').click();
        cy.get('[data-product-lid="600640836201"] > a > .t-store__card__imgwrapper > .js-product-img').click();
        cy.get('.js-store-prod-popup-buy-btn-txt').click();
        cy.get('.t706__carticon-img').click();
        cy.contains('Ваш заказ:')
        })
})
