class VisibilityPAge{
    //getters of all the elements
    get VisibilityPageTitle(){
        return $('//h3')
    }
    get hide_btn(){
        return $('#hideButton')
    }
    get unhide_btn(){
        return $('#unhideButton')
    }
    get removed_btn(){
        return $('button#removedButton')
    }
    get zeroWidth_btn(){
        return $('button#zeroWidthButton')
    }
    get overLap_btn(){
        return $('button#overlappedButton')
    }
    get otherOverLap_btn(){
        return $('div#hidingLayer')
    }
    get opacity_btn(){
        return $('button#transparentButton')
    }
    get visibilityHidden_btn(){
        return $('button#invisibleButton')
    }
    get display_btn(){
        return $('button#notdisplayedButton')
    }
    get offscreen(){
        return $('button#offscreenButton')
    }
    
}
export default new VisibilityPAge()