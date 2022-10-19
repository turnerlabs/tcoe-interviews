class progressbarpo {
  get obtnstart() {
    return $('//*[@id="startButton"]');
  }
  get oprogressbar() {
    return $('//*[@id="progressBar"]');
  }
  get obtnstop() {
    return $('//*[@id="stopButton"]');
  }
  get otextcontent() {
    return $('//li[contains(text(),"Create a test that clicks Start button")]');
  }
}
export default new progressbarpo();
