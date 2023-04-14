class shadowDom{
    //getters of all the elements
    get shadowDomPageTitle(){
        return $('//h3')
    }
    get parentElement(){
        return $('//guid-generator')
    }
    get editfield_tf(){
        return ('#editField')
    }
    get generate_btn(){
        return ('#buttonGenerate')
    }
    get copy_btn(){
        return ('#buttonCopy')
    }

}
export default new shadowDom()