 class homepo{
    get oheaderclassattribute() {return $('//a[contains(text(),"Class Attribute")]');}
    get oheaderprogressheader() {return $('//a[contains(text(),"Progress Bar")]');}
}

export default new homepo();