const assert = require('assert');

const CommonPage = require('../../test/pageObjects/common.page.js');
const commonPage = new CommonPage();

const ItemPage = require('../../test/pageObjects/item.page.js');
const itemPage = new ItemPage();

beforeEach(function(){
    // Navigate to given item web page
    // https://www.walmart.ca/en/ip/intex-metal-frame-pool/6000166640889
    itemPage.goToItemPage('intex-metal-frame-pool/6000166640889');
});

describe('Product identifiers should be displayed correctly', function() {

    // Assert each product identifiers value with database value
    it('Assert the product identifiers', function(){

        //  Assume database query / api returns an object
        const  resp = {
             'itemNum': '31321863, 30885665',
             'modelNum': '28211MW',
             'SKU' :  '10320406',
              'UPC' : '7825728211'
        };

        assert.strictEqual(commonPage.waitAndGetText(itemPage.elementsMap['item.identifiers.itemNum']), resp.itemNum);
        assert.strictEqual(commonPage.waitAndGetText(itemPage.elementsMap['item.identifiers.modelNum']), resp.modelNum);
        assert.strictEqual(commonPage.waitAndGetText(itemPage.elementsMap['item.identifiers.SKU']), resp.SKU);
        assert.strictEqual(commonPage.waitAndGetText(itemPage.elementsMap['item.identifiers.UPC']), resp.UPC);
    });
});

describe('Product specifications should be displayed correctly', function() {

    it('Assert the product specifications', function(){
        // Assert each product specification value with database value

        //  Assume database query / api returns an object
        //  resp = {
        //     'features': 'Pool Pump Included, Easy to Set Up',
        //     'material': 'PVC, PE, PET, PP, STEEL',
        //      ...
        //  };

        // elements Selector of Alert page are defined on ../test/pageObjects/alert.page.js => AlertPage

        // assert.strictEqual(AlertPage.specifications.fetaures, resp.fetaures);
        // assert.strictEqual(AlertPage.specifications.material, resp.material);
        // ..
    });
});

describe('User should able to write a review', function() {

    it('Click on Write a review', function(){
        // browser.cick(ItemPage.addReviewButton);
        // browser.waitForVisible(ItemPage.reviewWindowTitle);
    });

    it('Write a review', function(){

        // ItemPage.selectRating(4);
        // ItemPage.reviewTitle.sendKeys();
        // ItemPage.reviewDetails.sendKeys();
        // ItemPage['reviewRecommandTrue].click();
        // ItemPage.reviewAuthor.sendKeys();
        // ItemPage.reviewAuthorEmail.sendKeys();
        // ItemPage.selectValueFromDropBox(DropBoxSelector, 'value');
        // ItemPage.termsConditionTrue.click();
        // ItemPage.review.submit();

        // Assert page is redirected to item page

        // Assert values of the review
    });

    it('Assert value of a review', function(){
        // Assert values of the review
    });
});

//    Other test cases:
//    ----------------
//    describe('Product information should be displayed correctly', function(){});
//    describe('Product status (availability)/price should be displayed correctly (Assumption- Three status – Available, temporarily out of stock, no longer available)', function(){});
//    describe('Product fulfillment information should be displayed correctly based on user’s location', function(){});
//    describe('If product is available, user should be able to add the product in the cart with selective quantity', function(){});
//    describe('If product is out of stock/available, user should be able to add the product in the list', function(){});
//    describe('User should be able to see whether product is added on card (with quantities)', function(){});
//    describe('Product description & features should be displayed correctly', function(){});
//    describe('User should able to see existing reviews correctly', function(){});
//    describe('User should able to search a review from list of reviews ', function(){});
//    describe('User should be redirected to ask a question if not reviews are available based on user’s search query', function(){});
//    describe('User should able to give feedback to the review', function(){});
//    describe('User should able to post a question', function(){});
//    describe('User should able to answer the question', function(){});
//    describe('User should able to give feedback to the answer', function(){});