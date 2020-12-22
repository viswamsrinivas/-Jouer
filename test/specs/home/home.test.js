const homePage = require("../../../pages/home.page")

describe("checking the primary content on home page", function(){

     it.skip("check the menu link options", function(){
         const expected_menu_items =['/Develop','/Web','/Mobile','/Train','/Projects','/About','/Contact']
         browser.url('/')
         homePage.clickMenuLink()
         const number_of_items = homePage.getMenuList()
         expect(expected_menu_items).to.deep.equal(number_of_items);
     })
})
