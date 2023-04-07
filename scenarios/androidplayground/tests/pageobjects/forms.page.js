const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');
const fs = require('fs');
class FormsPage {
    formOption() {
        let element = {
            android: `//android.widget.Button[@content-desc="Forms"]`,
        };
        return $(element);
    }
    formScreen() {
        let element = {
            android: `~Forms-screen`,
        };
        return $(element);
    }
    formInput() {
        let element = {
            android: `~text-input`,
        };
        return $(element);
    }
    formInputResults() {
        let element = {
            android: `~input-text-result`,
        };
        return $(element);
    }
    formDropDown() {
        let element = {
            android: `~Dropdown`,
        };
        return $(element);
    }
    formDailog() {
        let element = {
            android: `//*[@resource-id="com.wdiodemoapp:id/select_dialog_listview"]`,
        };
        return $(element);
    }
    selectAnItem(){ 
        let element = {
        android: `//*[@resource-id="android:id/text1" and contains(@text,"Select an item...")]`,
    };
       return $(element);
    }
    formDropDownList() {
        let element = {
            android: `//*[@resource-id="android:id/text1" and contains(@text,"is awesome")]`,
        };
        return $$(element);
    }

    formDropDownSelectedValue() {
        let element = {
            android: `//android.view.ViewGroup[@content-desc="Dropdown"]//android.widget.EditText`,
        };
        return $(element);
    }

    alertPopup() {
        let element = {
            android: `//*[@resource-id="android:id/parentPanel"]`,
        };
        return $(element);
    }
    inactiveButton() {
        let element = {
            android: `~button-Inactive`,
        };
        return $(element);

    }
    activeButton() {
        let element = {
            android: `~button-Active`,
        };
        return $(element);
    }

    popupOptions(count) {
        let element = {
            android: `//*[@resource-id="android:id/button${count}"]`,
        };
        return $(element);
    }

    okButton() {
        let element = {
            android: `//*[@resource-id="android:id/button1"]`,
        };
        return $(element);
    }

    cancelButton() {
        let element = {
            android: `//*[@resource-id="android:id/button2"]`,
        };
        return $(element);
    }

    askMeLater() {
        let element = {
            android: `//*[@resource-id="android:id/button3"]`,
        };
        return $(element);
    }
    async imageComparasion(actualImage, expectedImage,diffirenceImage) {
        const img1 = PNG.sync.read(fs.readFileSync(actualImage));
        const img2 = PNG.sync.read(fs.readFileSync(expectedImage));
        const { width, height } = img1;
        const diff = new PNG({ width, height });
        const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });
        if (numDiffPixels > 0) {
            diff.pack().pipe(fs.createWriteStream(diffirenceImage));
        }
        return numDiffPixels;
    }
}
export default new FormsPage();