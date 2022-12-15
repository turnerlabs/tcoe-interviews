const Page = require('./page');

class HomePage extends Page {
  get title() {
    return $('#title');
  }
  get cubeImage() {
    return $('img[src="/static/cube.png"]');
  }
  get linkToAjax() {
    return $('a[href="/ajax"]');
  }
  get linkToClick() {
    return $('a[href="/click"]');
  }
  get linkToVisibility() {
    return $('a[href="/visibility"]');
  }
  get linkToShadowDom() {
    return $('a[href="/shadowdom"]');
  }
  get linkToProgressBar() {
    return $('a[href="/progressbar"]');
  }

  open() {
    return super.open('');
  }
}

module.exports = new HomePage();
