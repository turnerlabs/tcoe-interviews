
class ClickPage  {
   

    get btnBadButton () {
        return $('#badButton');
    }

    get btnSuccess () {
        return $('//button[@class="btn btn-success"]');
    }

    async pageClick () {
        await this.btnBadButton.click();

    }

}

module.exports = new ClickPage();