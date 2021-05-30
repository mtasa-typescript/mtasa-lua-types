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
    DxTexture,
    ObjectGroup,
    Matrix,
    Browser,
    Light,
    Effect,
    Searchlight,
    Weapon,
    GuiBrowser,
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
    HandleFunction,
    FetchRemoteCallback
} from '../../structure';

/** @customConstructor GuiTabPanel */
export class GuiTabPanel extends GuiElement {
    /**
     * This function returns the currently selected tab in the specified Element/GUI/Tab
     * panel|tab panel.
     */
    selectedTab: Element;

    /**
     * This function creates a Tab Panel, which acts as a template to create Tabs upon.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiCreateTabPanel Wiki, guiCreateTabPanel }
     * @param x A float of the 2D x position of the GUI tab panel on a players screen.  This is affected
     * by the relative argument.
     * @param y A float of the 2D y position of the GUI tab panel on a players screen. This is affected
     * by the relative argument.
     * @param width A float of the width of the GUI tab panel. This is affected by the relative argument.
     * @param height A float of the height of the GUI tab panel. This is affected by the relative argument.
     * @param relative This is whether sizes and positioning are relative.  If this is true, then all
     * x,y,width,height floats must be between 0 and 1, representing sizes relative to the
     * parent.
     * @param parent This is the parent that the tab panel is attached to.  If the relative argument is true,
     * sizes and positioning will be made relative to this parent. If the relative argument is
     * false, positioning will be the number of offset pixels from the parents origin. If no
     * parent is passed, the parent will become the screen - causing positioning and sizing
     * according to screen positioning.
     * @return returns a gui tab panel element if successful, false otherwise.
     */
    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        relative: boolean,
        parent?: Element
    );

    /**
     * This function returns the currently selected tab in the specified Element/GUI/Tab
     * panel|tab panel.
     * @see {@link https://wiki.multitheftauto.com/wiki/GuiGetSelectedTab Wiki, guiGetSelectedTab }
     * @return returns an element of the element/gui/tab|tab if a tab was selected or nil if no tab was
     * selected. if passed arguments were invalid or something went wrong, the function will
     * return false.
     */
    getSelectedTab(): Element;
}
