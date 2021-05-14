// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    ProgressBar,
    Gui,
    EngineTXD,
    EngineDFF,
    EngineCOL,
    EngineIFP,
    PrimitiveType,
    Texture,
    ObjectGroup,
    Matrix,
    Browser,
    Light,
    Effect,
    Searchlight,
    Weapon,
    GuiMemo,
    GuiElement,
    GuiEdit,
    GuiScrollBar,
    GuiWindow,
    Projectile,
    Material,
    Userdata,
    TextItem,
    Pickup,
    Request,
    Player,
    Blip,
    ColShape,
    Element,
    Ped,
    Resource,
    Team,
    Vehicle,
    XmlNode,
    File,
    Marker,
    MTASAObject,
    RadarArea,
    Water,
    Timer,
    HandleFunction
} from '../../structure';

/** @customConstructor GuiBrowser */
export class GuiBrowser extends GuiElement {
    /**
     * This function gets the browser element behind a gui-browser (a browser that has been
     * created via guiCreateBrowser).
     */
    browser: Browser;

    /**
     * This function creates a new CEGUI web Element/Browser|browser element.
     * <br>The difference between this, and createBrowser is that, this handles inputs
     * internally, and it can be attached to GUI windows. So this one is more suitable for
     * custom dx based interfaces.
     * You can learn more about the differences
     * https://forum.mtasa.com/topic/80422-dx-browser-vs-gui-browser/?do=findComment&comment=7373
     * 34 here.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiCreateBrowser Wiki, guiCreateBrowser }
     * @param width The browsers native width. This should be greater than or equal to 1.
     * @param height The browsers native height. This should be greater than or equal to 1.
     * @param isLocal Sets whether the browser can only show local content or content from the internet (see
     * examples over CreateBrowser|here for more information)
     * @param isTransparent true if you want the browser to support transparency, false otherwise
     * @param isRelative This is whether sizes and positioning are relative.  If this is true, then all
     * x,y,width,height floats must be between 0 and 1, representing sizes/positions as a
     * fraction of the screen size. If false, then the size and co-ordinates are based on
     * clients resolution, accessible using guiGetScreenSize.
     * @param parent This is the parent that the radio button is attached to. If the relative argument is
     * true, sizes and positioning will be made relative to this parent. If the relative
     * argument is false, positioning will be the number of offset pixels from the parents
     * origin. If no parent is passed, the parent will become the screen - causing positioning
     * and sizing according to screen positioning.
     * @return returns a gui-browser element if it was created successfully, false otherwise. returns
     * also false, if the user disabled remote pages and islocal was set to false.
     */
    constructor(
        width: number,
        height: number,
        isLocal: boolean,
        isTransparent: boolean,
        isRelative: boolean,
        parent?: Element
    );

    /**
     * This function gets the browser element behind a gui-browser (a browser that has been
     * created via guiCreateBrowser).
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGetBrowser Wiki, guiGetBrowser }
     * @return returns the element/browser|browser element if a correct element/gui-browser|gui-browser
     * has been passed, false otherwise.
     */
    getBrowser(): Browser;
}