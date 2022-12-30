const Page = require('./page');
const data = require('./data').dynamicTable;

class dinamicTablePage extends Page {

    get dinamicDataTable() {
        return $("div[role='table']");
    }

    get columnheaders() {
        return $$("span[role='columnheader']")
    }

    get cells() {
        return $$("span[role]")
    }

    get rows() {
        return $$("div[role='row']");
    }

    get warnigLabel() {
        return $("p.bg-warning");
    }

    async isTableVisibility(){
        await this.dinamicDataTable.waitForDisplayed();
        return await this.dinamicDataTable.isDisplayed();
    }

    async getHeaders() {
        return (await (await this.getInfo()).table[0])
    }

    async getInfo() {
        var table = [],
            info = { cols: {}, rows: {} },
            i = 0;
        await this.dinamicDataTable.waitForDisplayed();

        for (let h = 0; h < await this.columnheaders.length; h++) {
            table[h] = [];
            info.rows[await this.cells[i].getText()] = [];
            for (let r = 0; r < await this.rows.length; r++) {
                let text = await this.cells[i].getText();
                table[h][r] = text;
                if (h == 0) {
                    info.cols[text] = [];
                    if (r > 0) {
                        info.rows[table[h][0]][r - 1] = text;
                    }
                } else {
                    info.cols[table[0][r]][h - 1] = text;
                    if (r > 0) {
                        info.rows[table[h][0]][r - 1] = text;
                    }
                }
                i++;
            }
        }
        info.table = table;
        return info;
    }

    async getWarningLabelColor() {
        await this.warnigLabel.isDisplayed();
        return (await this.warnigLabel.getCSSProperty(data.colorProperty)).parsed.hex
    }

    open() {
        return super.open(data.url);
    }
}

module.exports = new dinamicTablePage();

