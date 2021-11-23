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
    Svg,
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
    TimerCallbackFunction,
    FetchRemoteCallback,
    GenericEventHandler,
    CommandHandler,
    BindKeyCallback,
    BindKeyCallbackVarArgs,
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../../structure';

/** @customConstructor GuiStaticImage */
export class GuiStaticImage extends GuiElement {
    /**
     * This function allows you to change the image in GUI static image element to another one.
     * Tip: If you set other images as children you will have to use
     * setElementCallPropagationEnabled to only affect the parent image.
     */
    image: boolean;

    /**
     * This function creates a static image using a .png image in the resource.
     * @see https://wiki.multitheftauto.com/wiki/GuiCreateStaticImage
     * @param x A float of the 2D x position of the image on a players screen. This is affected by the
     * relative argument.
     * @param y A float of the 2D y position of the image on a players screen. This is affected by the
     * relative argument.
     * @param width A float of the width of the image. This is affected by the relative argument.
     * @param height A float of the height of the image. This is affected by the relative argument.
     * @param path The filepath of the image file that is being loaded.
     * @param relative This is whether sizes and positioning are relative. If this is true, then all
     * x,y,width,height floats must be between 0 and 1, representing measures relative to the
     * parent.
     * @param parent This is the parent that the image is attached to. If the relative argument is true, sizes
     * and positioning will be made relative to this parent. If the relative argument is false,
     * positioning will be the number of offset pixels from the parents origin. If no parent is
     * passed, the parent will become the screen - causing positioning and sizing according to
     * screen positioning.
     * @return returns element if image was created successfully, false otherwise.
     */
    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        path: string,
        relative: boolean,
        parent?: Element,
    );

    /**
     * This function allows you to change the image in GUI static image element to another one.
     * Tip: If you set other images as children you will have to use
     * setElementCallPropagationEnabled to only affect the parent image.
     * @see https://wiki.multitheftauto.com/wiki/GuiStaticImageLoadImage
     * @param filename A string specifying the filepath of the image file being loaded in current resource.
     * @return returns true if the the image in the static image element was successfully changed, false
     * otherwise.
     */
    loadImage(filename: string): boolean;
}
