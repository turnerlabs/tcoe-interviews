export class BaseActions{

    async getElement(str:string){
        return await $(str)
    }

    async elementShouldBeDisplayed(str:string){
        return (await this.getElement(str)).isDisplayed();
    }

    isElementWithinBounds = async (element:WebdriverIO.Element):Promise<boolean> => {

        const screen = await driver.getWindowRect();
        const eleBounds =await (element).getAttribute('bounds');
        const [x1,y1] = eleBounds.split('][')[0].replace('[','').split(',').map(x=>Number(x))
        const [x2,y2] =eleBounds.split('][')[1].replace(']','').split(',').map(x=>Number(x))
            
        if((x1 < screen.width && x2 < screen.width)&&(y1< screen.height && y2< screen.height)){
            console.log([x1,x2,y1,y2,screen])
            return true;
        }
        else
        {return false}
    }

    async compareElementImages(ele, ssName:string) {
        try {
            
            expect( (await driver.compareElement(ele, ssName,{})).misMatchPercentage).toEqual(0);
        } catch (error) {
            return false;
        }
    }
}