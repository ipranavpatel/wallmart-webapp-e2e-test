const CommonPage = require('../../test/pageObjects/common.page.js');
const commonPage = new CommonPage();
var ItemPage = function(){
    var that = this;

    /**
     * define elements
     */
     var elementsMap = this.elementsMap =  {
        'item.identifiers.itemNum' : '//div[contains(@class,"product-identifiers-value")][1]', // XPath Selector
        // Ideally identifiers value's element should be searched based on key's text name. e.g. - Model #
        'item.identifiers.modelNum' : '//div[contains(@class,"product-identifiers-value")][2]' ,
        'item.identifiers.SKU' : '//div[contains(@class,"product-identifiers-value")][3]',
        'item.identifiers.UPC' : '//div[contains(@class,"product-identifiers-value")][4]',
     };

    /**
     * define or overwrite page methods
     */
     this.goToItemPage = function(path) {
         path = 'ip/' + path;
         commonPage.goToPage(path);
     };



};

module.exports = ItemPage;