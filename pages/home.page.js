class Home {

  get mainMenu() {return $('div.menu')}
  get mainMenuList() {return $$('.menu .main-nav li')}

  clickMenuLink() {
    this.mainMenu.click()
  }

  getMenuList(){
    let list = []
    this.mainMenuList.filter((option) =>{
      list.push(option.getText())
    })
    return list
  }

}
module.exports = new Home() //For this class is accessible from test
