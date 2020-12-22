const projectPage = require("../../../pages/project.page")

describe('Checking the content on project page' , function() {

    it('check the existence of tunecore project in view', function() {
      browser.url(`${browser.options.baseUrl}/projects`)
      assert.isTrue(projectPage.isTunecoreProjectOnView(),"Tunecore isnt listed as top project")
    })

    it('check the existence of modus project in view', function(){
      browser.url(`${browser.options.baseUrl}/projects`)
      expect(projectPage.isModusProjectExits()).to.be.true
      assert.isTrue(projectPage.isModusProjectOnView(),'Modus should not be in limelight') //Intentioanlly failing this one
    })

})
