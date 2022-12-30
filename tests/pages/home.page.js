class HomePage {
  get mainTitle() {
    return $('//div[@class="col-sm"]/h1');
  }
}

module.exports = new HomePage();
