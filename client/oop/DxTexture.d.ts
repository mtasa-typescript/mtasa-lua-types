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
    SvgCallback,
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
} from '../structure';

/** @customConstructor DxTexture */
export class DxTexture {
    /**
     * This function creates a texture element that can be used in the dxDraw functions.
     * It is possible to use dxCreateTexture to load cubemaps and volume textures, but these
     * will only be useable as inputs for a shader. The Microsoft utility
     * http://nightly.mtasa.com/files/shaders/DxTex.zip DxTex can view and change cubemaps and
     * volume textures. DxTex can also convert standard textures into DXT1/3/5 compressed .dds
     * which should reduce file sizes.
     * @see https://wiki.multitheftauto.com/wiki/DxCreateTexture
     * @param filepath The filepath of the image. (.bmp, .dds, .jpg, .png, and .tga images are supported). Image
     * files should ideally have dimensions that are a power of two, to prevent possible
     * blurring.
     * or
     * @param pixels Texture_pixels|Pixels containing image data. (plain, jpeg or png pixels can be used here)
     * or
     * @param width Desired width, preferably power of two (16, 32, 64 etc.), maximum is 16384
     * @param height Desired height, preferably power of two (16, 32, 64 etc.), maximum is 16384
     * @param textureFormat A string representing the desired texture format, which can be one of:
     * @param argb : ARGB uncompressed 32 bit color (default).
     * @param dxt1 : DXT1 compressed - Can take a fraction of a second longer to load (unless the file is
     * already a DXT1 .dds). Uses 8 times less video memory than ARGB and can speed up drawing.
     * Quality not as good as ARGB. It supports alpha blending, but it can only be on or off,
     * that is: either 0 or 255.
     * @param dxt3 : DXT3 compressed - Can take a fraction of a second longer to load (unless the file is
     * already a DXT3 .dds). Uses 4 times less video memory than ARGB and can speed up drawing.
     * Quality slightly better than DXT1 and supports crisp alpha blending.
     * @param dxt5 : DXT5 compressed - Can take a fraction of a second longer to load (unless the file is
     * already a DXT5 .dds). Uses 4 times less video memory than ARGB and can speed up drawing.
     * Quality slightly better than DXT1 and supports smooth alpha blending.
     * @param mipmaps True to create a mip-map chain so the texture looks good when drawn at various sizes.
     * @param textureEdge A string representing the desired texture edge handling, which can be one of:
     * @param wrap : Wrap the texture at the edges (default)
     * @param clamp : Clamp the texture at the edges. This may help avoid edge artifacts.
     * @param mirror : Mirror the texture at the edges.
     * @param textureType A string representing the desired texture type, which can be one of:
     * @param 2d : Standard texture (default)
     * @param 3d : Volume texture
     * @param cube : Cube map
     * @param depth Desired number of slices when creating a volume texture
     * @return returns a texture if successful, false if invalid arguments were passed to the function.
     */
    constructor(
        pixels: string | string,
        textureFormat?: string,
        mipmaps?: boolean,
        textureEdge?: string,
    );

    /**
     * @see https://wiki.multitheftauto.com/wiki/DxGetTexturePixels
     */
    getPixels(
        texture: Element,
        x?: number,
        y?: number,
        width?: number,
        height?: number,
    ): string;

    /**
     * This function fetches the Texture_pixels|pixels from a texture element. It can be used
     * with a standard texture, render target or screen source.
     * *This function is slow and not something you want to be doing once a frame.
     * *It is slower when reading pixels from a render target or screen source.
     * *And is very slow indeed if the texture format is not  argb .
     * @see https://wiki.multitheftauto.com/wiki/DxGetTexturePixels
     * @param texture The texture element to get the pixels from
     * @param surfaceIndex Desired slice to get if the texture is a volume texture, or desired face to get if the
     * texture is a cube map. <nowiki>(Cube map faces: 0=+X 1=-X 2=+Y 3=-Y 4=+Z 5=-Z)</nowiki>
     * By default the pixels from the whole texture is returned. To get only a portion of the
     * texture, define a rectangular area using all four of these optional arguments:
     * @param x Rectangle left position
     * @param y Rectangle top position
     * @param width Rectangle width
     * @param height Rectangle height
     * @return returns a plain format pixels string if successful, false if invalid arguments were
     * passed to the function.
     */
    getPixels(
        surfaceIndex: number,
        texture: Element,
        x?: number,
        y?: number,
        width?: number,
        height?: number,
    ): string;

    /**
     * This functions allows you to change the edge handling after creating the texture.
     * @see https://wiki.multitheftauto.com/wiki/DxSetTextureEdge
     * @param textureEdge The texture edge mode. Available modes are wrap, mirror, clamp, border, mirror-once
     * @param border-color If textureEdge is set to border, you are able to define a border color here
     */
    setEdge(textureEdge: string, border_color?: number): boolean;

    /**
     * @see https://wiki.multitheftauto.com/wiki/DxSetTexturePixels
     */
    setPixels(
        texture: Element,
        pixels: string,
        x?: number,
        y?: number,
        width?: number,
        height?: number,
    ): boolean;

    /**
     * This function sets the Texture_pixels|pixels of a texture element. It can be used with a
     * standard texture, render target or screen source. Only plain format pixels please.
     * * This function is slow and not something you want to be doing once a frame.
     * * It is very slow when setting pixels to a render target or screen source.
     * * And is very slow indeed if the texture format is not argb.
     * @see https://wiki.multitheftauto.com/wiki/DxSetTexturePixels
     * @param texture The texture element to set the pixels of
     * @param pixels The plain format pixels to use
     * @param surfaceIndex Desired slice to set if the texture is a volume texture, or desired face to set if the
     * texture is a cube map. <nowiki>(Cube map faces: 0=+X 1=-X 2=+Y 3=-Y 4=+Z 5=-Z)</nowiki>
     * By default the pixels are set starting at the top left corner of the texture. To set a
     * different region, define a rectangular area using all four of these optional arguments:
     * @param x Rectangle left position
     * @param y Rectangle top position
     * @param width Rectangle width
     * @param height Rectangle height
     * @return returns a string if successful, false if invalid arguments were passed to the function.
     */
    setPixels(
        surfaceIndex: number,
        texture: Element,
        pixels: string,
        x?: number,
        y?: number,
        width?: number,
        height?: number,
    ): boolean;
}
