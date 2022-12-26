const HomePage = require('../pageobjects/home.page');
cnnData = require('../testData/cnnData');
const fs = require('fs')

let dataset = JSON.parse(fs.readFileSync('scenarios/uiplayground/test/testData/cnnHome.json'));
describe('Should be validate cnn page to search something',()=>{

    beforeEach(async ()=>{
      await HomePage.open();
    })

    it('Validate site search functionality',async ()=>{
        await HomePage.searchSomething(cnnData.dataSearch);
        await HomePage.checkAllNews();
    })

    it('Validate site search not exist functionality',async ()=>{
      await HomePage.searchSomething(cnnData.dataIncorrectSearch);
      await HomePage.checkNotMatchResults();
    })

    dataset.forEach(({optionMenu , value}) =>{
    it(`Validate site search ${optionMenu} to compared with ${value}`, async ()=> {
      await HomePage.searchSomething(cnnData.dataSearch);
      await HomePage.selectoptionMenu(optionMenu);
      await HomePage.checkOptionMenu(value);
    })
  });

  it('Validate site clean search functionality',async ()=>{
    await HomePage.searchSomething(cnnData.dataSearch);
    await HomePage.validateClearSearchField();
    })
})