const MAX_TIMEOUT = 30000;
var CommonPage = function(){
    var that = this;

    /**
     * define elements
     */
     var elementsMap = this.elementsMap =  {
        'search.input' : '#global-search'
     };

    /**
     * define or overwrite page methods
     */
     this.goToPage = function(path) {
         browser.url(path);
         // Assert the element which is available for all pages
         // Assuming search box will be there for all web pages
         that.waitForElementPresent(elementsMap['search.input']);
     };

     this.waitForElementPresent = function(selector,timeout) {
        var timeOut = timeout ? timeout : MAX_TIMEOUT;
        browser.waitForVisible(selector,timeOut);
     };

     this.waitAndGetText = function(selector, timeout) {
        var timeOut = timeout ? timeout : MAX_TIMEOUT;
        that.waitForElementPresent(selector, timeOut);
        return browser.getText(selector);
     };



};

module.exports = CommonPage;