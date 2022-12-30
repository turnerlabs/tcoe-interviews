const Page = require('./page');
const data = require('./data').dynamicTable;

class dinamicTablePage extends Page {

    get dinamicTdataable() {
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

    async getData() {
        var table = [], i = 0;

        for (let h = 0; h < await this.columnheaders.length; h++) {
            table[h] = [];
            for (let r = 0; r < await this.rows.length; r++) {
                table[h][r] = await this.cells[i].getText();
                i++;
            }
        }
        return table;
    }

    async getHeaders() {
        return (await this.getData())[0]
    }

    async getRows() {
        let table = await this.getData();
        let res = [];
        for (let r = 0; r < table.length; r++) {
            res[r] = (table[r][0])
        }
        return res;
    }



    async getInfo() {
        var table = [],
            info = { cols: {}, rows: {} },
            i = 0;

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
        console.log(info);
        return info;
    }






    async getWarningLabelColor() {
        return (await this.warnigLabel.getCSSProperty(data.colorProperty)).parsed.hex
    }




    open() {
        return super.openPlayground(data.url);
    }
}

module.exports = new dinamicTablePage();

