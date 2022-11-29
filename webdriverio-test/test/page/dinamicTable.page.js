import Page from './page';

class DinamicTablePage extends Page{

    get tableDinamic(){
        return $('div[role="table"]');
    }

    open (){
        super.open(
        'http://uitestingplayground.com/dynamictable');
    }

    get columnsTable(){
        return $$('div[role= "row"] span[role*="columnheader"]'); // 5 elements
    }

    get rowTable(){
        return $$('div[role= "rowgroup"] span[role*="cell"]');
    }

    get rowTableChrome (){
        return $ ('//*[@role="row"]//span[text()="Chrome"]');
    }

    get rowTableFirefox (){
        return $ ('//*[@role="row"]//span[text()="Firefox"]');
    }

    get rowTableSystem (){
        return $ ('//*[@role="row"]//span[text()="System"]');
    }

    get rowTableInternetExplorer (){
        return $ ('//*[@role="row"]//span[text()="Internet Explorer"]');
    }

    get warningLabel(){
        return $ (".bg-warning");
    }

    getInfoListText(){
        const infoTextList = [];
        this.rowTable.flyMap((element) => 
        infoTextList.push(element.getText())
        );

        return infoTextList;
    }

    

}
 export default new DinamicTablePage();