class Project{

  get tunecoreProject() {return $('a[href="/works/tunecore"]')}
  get modusProject() {return $('a[href="/works/modus"]')}

  isTunecoreProjectOnView() {
    return this.tunecoreProject.isDisplayedInViewport()
  }

  isModusProjectExits() {
    return this.modusProject.isExisting()
  }

  isModusProjectOnView() {
    return this.modusProject.isDisplayedInViewport()
  }

}
module.exports = new Project()
