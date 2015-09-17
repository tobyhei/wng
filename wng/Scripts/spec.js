describe('Wng Demo App', function () {
    beforeEach(function () {
        browser.get('http://localhost:29650/');
    })

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Numeric Sequence Calculator');
    });

    it('should take a positive integer', function () {
        // Find our number input and put in valid data
        element(by.id('numberInput')).sendKeys('15');

        // Find the submit button and click it
        element(by.id('submitButton')).submit();
    });
});