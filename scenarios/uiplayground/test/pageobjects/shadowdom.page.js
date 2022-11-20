class Shadowdom {

        get guidGeneratorCont () {
            return $('guid-generator')
        }

        get editField () {
            return this.guidGeneratorCont.shadow$('#editField');
        }

        get buttonGenerate () {
            return this.guidGeneratorCont.shadow$('#buttonGenerate');
        }

        get buttonCopy () {
            return this.guidGeneratorCont.shadow$('#buttonCopy');
        }

        async generateGUID () {
            await this.buttonGenerate.click();
        }

        async copyGUID () {
            await this.buttonCopy.click();
        }

        async setEditField (value) {
            await this.editField.setValue(value);
        }
}
module.exports = new Shadowdom();