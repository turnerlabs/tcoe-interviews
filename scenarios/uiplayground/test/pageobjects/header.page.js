class Header {

  get navContainer() {
    return $(".navbar");
  }

  get homeLink() {
    return $(".nav-link[href*='home']");
  }

  get resourcesLink() {
    return $(".nav-link[href*='resources']");
  }

  get businessLink() {
    return $(".nav-link[href*='business']");
  }

  async isCorrectlyDisplayed() {
    await expect(this.navContainer).toBeExisting();
  }

  /**
   * Navigate to home header link
   */
  async navigateToHomeHeaderLink() { 
    await this.homeLink.click();
  }

  /**
   * Navigate to resources header link
   */
  async navigateToResourcesHeaderLink() { 
    await this.resourcesLink.click();
  }

  /**
   * Navigate to business header link
   */
  async navigateToBusinessHeaderLink() { 
    await this.businessLink.click();
  }

}

module.exports = new Header();