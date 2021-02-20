/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, PrimitiveType, Table, Texture } from 'types/mtasa/client/structure';

/**
 * This function converts [[Texture_pixels|pixels]] from one format to another.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxConvertPixels|MTASA Wiki}
 * @return Returns a copy of the pixels in the new format, or ''false'' if invalid arguments were
 * passed to the function.
 */
export function dxConvertPixels(pixels: string, newFormat: string, quality?: number): string;

/**
 * <br/>
 * This function creates a [[DX font]] element that can be used in [[dxDrawText]]. Successful font
 * creation is not guaranteed, and may fail due to hardware or memory limitations.
 * To see if creation is likely to fail, use [[dxGetStatus]]. (When '''VideoMemoryFreeForMTA''' is
 * zero, failure ''is'' guaranteed.)
 * @see {@link https://wiki.multitheftauto.com/wiki/dxCreateFont|MTASA Wiki}
 * @param filepath the name of the file containing the font
 * @param size size of the font
 * @default 9
 * @param bold flag to indicate if the font should be bold
 * @default false
 * @param quality the font quality  ** "default": not the actual default  ** "draft"  ** "proof":
 * the default   ** "nonantialiased"  ** "antialiased"  ** "cleartype"  ** "cleartype_natural"
 * @default "proof"
 * @return Returns a [[DX font]] element if successful, ''false'' if invalid arguments were passed
 * to the function, or there is insufficient resources available.
 * * '''You should always check to see if this function has returned false.'''
 */
export function dxCreateFont(filepath: string, size?: number, bold?: boolean, quality?: string): Element;

/**
 * This function creates a render target element, which is a special type of [[texture]] that can
 * be drawn on with the dx functions. Successful render target creation is not guaranteed, and may fail
 * due to hardware or memory limitations.
 * To see if creation is likely to fail, use [[dxGetStatus]]. (When '''VideoMemoryFreeForMTA''' is
 * zero, failure ''is'' guaranteed.)
 * @see {@link https://wiki.multitheftauto.com/wiki/dxCreateRenderTarget|MTASA Wiki}
 * @param withAlpha The render target will be created with an alpha channel. false will turn images
 * alpha channels to black color
 * @default false
 * @return Returns a [[texture]] element if successful, ''false'' if the system is unable to create
 * a render target.
 * * '''You should always check to see if this function has returned false.'''
 */
export function dxCreateRenderTarget(width: number, height: number, withAlpha?: boolean): Element;

/**
 * This function creates a screen source, which is a special type of [[texture]] that contains the
 * screen as rendered by GTA
 * Note that successful screen source creation is not guaranteed, and may fail due to hardware or
 * memory limitations. You should always check to see if this function has returned false.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxCreateScreenSource|MTASA Wiki}
 * @return Returns a [[texture]] [[element]] if successful, ''false'' if invalid arguments were
 * passed to the function.
 */
export function dxCreateScreenSource(width: number, height: number): Element;

/**
 * This function creates a [[texture]] element that can be used in the dxDraw functions.
 * [[Image:Screenshot_27.png|frame|A speedtest showing the performance of a texture created with
 * various settings of textureFormat.[Mipmaps = true][textureEdge = "wrap"]]]
 * [[Image:DxCreateTexture_mipmaps_false.png |frame|A speedtest showing the performance of a
 * texture created with various settings of textureFormat.[Mipmaps = false][textureEdge = "wrap"]]]
 * It is possible to use dxCreateTexture to load cubemaps and volume textures, but these will only
 * be useable as inputs for a shader. The Microsoft utility
 * [http://nightly.mtasa.com/files/shaders/DxTex.zip DxTex] can view and change cubemaps and volume textures. DxTex can also convert standard
 * textures into DXT1/3/5 compressed .dds which should reduce file sizes.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxCreateTexture|MTASA Wiki}
 * @param pixels Texture_pixels|Pixels containing image data. (plain, jpeg or png pixels can be
 * used here)  or
 * @return Returns a [[texture]] if successful, ''false'' if invalid arguments were passed to the
 * function.
 */
export function dxCreateTexture(
    pixels: string,
    textureFormat?: string,
    mipmaps?: boolean,
    textureEdge?: string,
): Element;

/**
 * <lowercasetitle/>
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawCircle|MTASA Wiki}
 * @param posX : An integer representing the absolute X position of the circle center, represented
 * by pixels on the screen.
 * @param posY : An integer representing the absolute Y position of the circle center, represented
 * by pixels on the screen.
 * @param radius : An integer representing the radius scale of the circle that is being drawn.
 * {{OptionalArg}}
 * @param startAngle : An integer representing the angle of the first point of the circle.
 * @default 0.0
 * @param stopAngle : An integer representing the angle of the last point of the circle.
 * @default 360.0
 * @param theColor : An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha,
 * RR = red, GG = green, BB = blue).
 * @default white
 * @param theCenterColor : An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA =
 * alpha, RR = red, GG = green, BB = blue).
 * @default theColor
 * @param segments : An integer ranging from 3-1024 representing how many triangles are used to
 * form the circle, more segments = smoother circle. Note: using lots of segments may cause lag.
 * @default 32
 * @param ratio : Ratio between width and height, e.g: 2 would mean that the width of the circle is
 * 2 times the height.
 * @default 1
 * @param postGUI : A bool representing whether the circle should be drawn on top of or behind any
 * ingame GUI (rendered by CEGUI).
 * @default false
 * @return Returns ''true'' if the creation of the 2D circle was successful, ''false'' otherwise.
 */
export function dxDrawCircle(
    posX: number,
    posY: number,
    radius: number,
    startAngle?: number,
    stopAngle?: number,
    theColor?: number,
    theCenterColor?: number,
    segments?: number,
    ratio?: number,
    postGUI?: boolean,
): boolean;

/**
 * Differing from [[dxDrawImage]], this function only draws a part of an image on the screen for a
 * single frame. In order for the image to stay visible continuously, you need to call this function
 * with the same parameters on each frame update (see [[onClientRender]]).
 * Image files should ideally have dimensions that are a power of two, to prevent possible
 * blurring.<br/>
 * <b>Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...</b>
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawImageSection|MTASA Wiki}
 * @param posX the absolute X coordinate of the top left corner of the image
 * @param posY the absolute Y coordinate of the top left corner of the image
 * @param width the absolute width of the image
 * @param height the absolute height of the image
 * @param u the absolute X coordinate of the top left corner of the section which should be drawn
 * from image
 * @param v the absolute Y coordinate of the top left corner of the section which should be drawn
 * from image
 * @param usize the absolute width of the image section
 * @param vsize the absolute height of the image section
 * @param image Either a material element or a filepath of the image which is going to be drawn.
 * (.dds images are also supported). Image files should ideally have dimensions that are a power of two,
 * to prevent possible blurring. Use a texture created with dxCreateTexture to speed up drawing.
 * @param rotation the rotation, in degrees for the image.
 * @default 0
 * @param rotationCenterOffsetX the absolute X offset from the image center for which to rotate the
 * image from.
 * @default 0
 * @param rotationCenterOffsetY the absolute Y offset from the image center for which to rotate the
 * image from.
 * @default 0
 * @param color the color of the image, a value produced by tocolor or hexadecimal number in
 * format: 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @default white
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function dxDrawImageSection(
    posX: number,
    posY: number,
    width: number,
    height: number,
    u: number,
    v: number,
    usize: number,
    vsize: number,
    image: string,
    rotation: number,
    rotationCenterOffsetX: number,
    rotationCenterOffsetY: number,
    color: number,
    postGUI: boolean,
): boolean;

/**
 * This function draws a 2D line across the screen - rendered for '''one''' frame.  This should be
 * used in conjunction with [[onClientRender]] in order to display continuously.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawLine|MTASA Wiki}
 * @param startX An integer representing the absolute start X position of the line, represented by
 * pixels on the screen.
 * @param startY An integer representing the absolute start Y position of the line, represented by
 * pixels on the screen.
 * @param endX An integer representing the absolute end X position of the line, represented by
 * pixels on the screen.
 * @param endY An integer representing the absolute end Y position of the line, represented by
 * pixels on the screen.
 * @param color An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR =
 * red, GG = green, BB = blue).  {{OptionalArg}}
 * @param width The width/thickness of the line
 * @default 1.0
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any
 * ingame GUI (rendered by CEGUI).
 * @default false
 * @return Returns a true if the operation was successful, false otherwise.
 */
export function dxDrawLine(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    color: number,
    width?: number,
    postGUI?: boolean,
): boolean;

/**
 * This function draws a 3D line between two points in the 3D world - rendered for '''one''' frame.
 *  This should be used in conjunction with [[onClientRender]] in order to display continuously.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawLine3D|MTASA Wiki}
 * @param startX The start X position of the 3D line, representing a coordinate in the GTA world.
 * @param startY The start Y position of the 3D line, representing a coordinate in the GTA world.
 * @param startZ The start Z position of the 3D line, representing a coordinate in the GTA world.
 * @param endX The end X position of the 3D line, representing a coordinate in the GTA world.
 * @param endY The end Y position of the 3D line, representing a coordinate in the GTA world.
 * @param endZ The end Z position of the 3D line, representing a coordinate in the GTA world.
 * {{OptionalArg}}
 * @param color An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR =
 * red, GG = green, BB = blue).
 * @default 0xFFFFFFFF
 * @param width The width/thickness of the line
 * @default 1.0
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any
 * ingame GUI (rendered by CEGUI).
 * @default false
 * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
 */
export function dxDrawLine3D(
    startX: number,
    startY: number,
    startZ: number,
    endX: number,
    endY: number,
    endZ: number,
    color?: number,
    width?: number,
    postGUI?: boolean,
): boolean;

/**
 * This function draws a textured 3D line between two points in the 3D world - rendered for one
 * frame.  This should be used in conjunction with [[onClientPreRender]] in order to display continuously.
 * The 3D line with a large width value effectively becomes a rectangle, so it it possible to
 * construct basic shapes such as boxes with several large width lines and the appropriate values for
 * 'faceToward'.
 * 3D lines are drawn at a particular place in the [[Game_Processing_Order|game processing order]],
 * so use [[onClientPreRender]] for drawing if you are attaching them to world elements.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawMaterialLine3D|MTASA Wiki}
 * @param material A material to draw the line with.
 * @param width The width/thickness of the line in GTA world units. (This is 1/75th of the width
 * used in dxDrawLine3D)  {{OptionalArg}}
 * @param color An int|integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha,
 * RR = red, GG = green, BB = blue).  {{New items|3.0156|1.5.5|
 * @default white
 * @param postGUI : A bool representing whether the line should be drawn on top of or behind any
 * ingame GUI.  |11998}}
 * @default false
 * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
 */
export function dxDrawMaterialLine3D(
    startX: number,
    startY: number,
    startZ: number,
    endX: number,
    endY: number,
    endZ: number,
    material: Element,
    width: number,
    color: number,
    postGUI: boolean,
    faceTowardX: number,
    faceTowardY: number,
    faceTowardZ: number,
): boolean;

/**
 * If image file is used, it should ideally have dimensions that are a power of two, to prevent
 * possible blurring.
 * Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...}}
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawMaterialPrimitive|MTASA Wiki}
 * @param pType Type of primitive to be drawn.
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any
 * ingame GUI (rendered by CEGUI).
 * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
 */
export function dxDrawMaterialPrimitive(
    pType: PrimitiveType,
    material: string,
    postGUI: boolean,
    vertice1: Table,
    vertice2?: Table,
    ...args: any[]
): boolean;

/**
 * This function draws a 3D primitive shape with material applied to it in the 3D world - rendered
 * for one frame. This should be used in conjunction with [[onClientRender]] in order to display
 * continuously.
 * If image file is used, it should ideally have dimensions that are a power of two, to prevent
 * possible blurring.
 * Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawMaterialPrimitive3D|MTASA Wiki}
 * @param pType Type of primitive to be drawn.
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any
 * ingame GUI (rendered by CEGUI).
 * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
 */
export function dxDrawMaterialPrimitive3D(
    pType: PrimitiveType,
    material: string,
    postGUI: boolean,
    vertice1: Table,
    vertice2?: Table,
    ...args: any[]
): boolean;

/**
 * This function draws a textured 3D line between two points in the 3D world - rendered for one
 * frame.  This should be used in conjunction with [[onClientPreRender]] in order to display continuously.
 * The 3D line with a large width value effectively becomes a rectangle, so it it possible to
 * construct basic shapes such as boxes with several large width lines and the appropriate values for
 * 'faceToward'.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawMaterialSectionLine3D|MTASA Wiki}
 * @param u the absolute X coordinate of the top left corner of the section
 * @param v the absolute Y coordinate of the top left corner of the section
 * @param usize the absolute width of the section
 * @param vsize the absolute height of the section
 * @param material A material to draw the line with.
 * @param width The width/thickness of the line in GTA world units. (This is 1/75th of the width
 * used in dxDrawLine3D)
 * @param color An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR =
 * red, GG = green, BB = blue).  {{New items|5.0155|1.5.5-9.11998|
 * @default white
 * @param postGUI : A bool representing whether the line should be drawn on top of or behind any
 * ingame GUI.  }}
 * @default false
 * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
 */
export function dxDrawMaterialSectionLine3D(
    startX: number,
    startY: number,
    startZ: number,
    endX: number,
    endY: number,
    endZ: number,
    u: number,
    v: number,
    usize: number,
    vsize: number,
    material: Element,
    width: number,
    color: number,
    postGUI: boolean,
    faceTowardX: number,
    faceTowardY: number,
    faceTowardZ: number,
): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawPrimitive|MTASA Wiki}
 * @param pType Type of primitive to be drawn.
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any
 * ingame GUI (rendered by CEGUI).
 * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
 */
export function dxDrawPrimitive(
    pType: string,
    postGUI: boolean,
    vertice1: Table,
    vertice2?: Table,
    ...args: any[]
): boolean;

/**
 * This function draws a 3D primitive in the 3D world - rendered for '''one''' frame.  This should
 * be used in conjunction with [[onClientRender]] in order to display continuously.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawPrimitive3D|MTASA Wiki}
 * @param primitiveType The type of primitive to be drawn. This could be:      "pointlist"
 * "linelist"      "linestrip"      "trianglefan"      "trianglelist"      "trianglestrip"
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any
 * ingame GUI (rendered by CEGUI).
 * @param vertex1 A table with the coordinates of the vertex plus its color.
 * @param vertex2 A table with the coordinates of the vertex plus its color.
 * @param vertex3 A table with the coordinates of the vertex plus its color.  The vertex should be
 * passed like this:  <syntaxhighlight lang="lua">  {x, y, z, color}  </syntaxhighlight>
 * {{OptionalArg}}
 * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
 */
export function dxDrawPrimitive3D(
    primitiveType: string,
    postGUI: boolean,
    vertex1: Table,
    vertex2: Table,
    vertex3: Table,
    vertex4?: Table,
    ...args: any[]
): boolean;

/**
 * This function draws a 2D rectangle across the screen - rendered for '''one''' frame. This should
 * be used in conjunction with [[onClientRender]] in order to display continuously.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawRectangle|MTASA Wiki}
 * @param startX An float representing the absolute origin X position of the rectangle, represented
 * by pixels on the screen.
 * @param startY An float representing the absolute origin Y position of the rectangle, represented
 * by pixels on the screen.
 * @param width An float representing the width of the rectangle, drawn in a right direction from
 * the origin.
 * @param height An float representing the height of the rectangle, drawn in a downwards direction
 * from the origin.
 * @param color the hex color of the rectangle, produced using tocolor or 0xAARRGGBB (AA = alpha,
 * RR = red, GG = green, BB = blue).
 * @default white
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any
 * ingame GUI.  {{New feature/item|9.06931|1.4.0|6931|
 * @default false
 * @param subPixelPositioning A bool representing whether the rectangle can be positioned
 * sub-pixel-ly.  }}
 * @default false
 * @return Returns true if the operation was successful, false otherwise.
 */
export function dxDrawRectangle(
    startX: number,
    startY: number,
    width: number,
    height: number,
    color?: number,
    postGUI?: boolean,
    subPixelPositioning?: boolean,
): boolean;

/**
 * Draws a string of text on the screen for one frame. In order for the text to stay visible
 * continuously, you need to call this function with the same parameters on each frame update (see
 * [[onClientRender]]).
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawText|MTASA Wiki}
 * @param text the text to draw
 * @param leftX the absolute X coordinate of the top left corner of the text
 * @param topY the absolute Y coordinate of the top left corner of the text
 * @param rightX the absolute X coordinate of the right side of the text bounding box. Used for
 * text aligning, clipping and word breaking.
 * @default leftX
 * @param bottomY the absolute Y coordinate of the bottom side of the text bounding box. Used for
 * text aligning, clipping and word breaking.
 * @default topY
 * @param color the color of the text, a value produced by tocolor or 0xAARRGGBB (AA = alpha, RR =
 * red, GG = green, BB = blue).
 * @default white
 * @param font Either a custom DX font element or the name of a built-in DX font: Note: Some fonts
 * are incompatible with certain languages such as Arabic.  {{DxFonts}}
 * @default "default"
 * @param alignX horizontal alignment of the text within the bounding box. Can be left, center or
 * right.
 * @default "left"
 * @param alignY vertical alignment of the text within the bounding box. Can be top, center or
 * bottom.
 * @default "top"
 * @param clip if set to true, the parts of the text that dont fit within the bounding box will be
 * cut off.
 * @default false
 * @param wordBreak if set to true, the text will wrap to a new line whenever it reaches the right
 * side of the bounding box. If false, the text will always be completely on one line.
 * @default false
 * @param postGUI A bool representing whether the text should be drawn on top of or behind any
 * ingame GUI (rendered by CEGUI).  {{New feature/item|3.0130|1.3.0|3986|
 * @default false
 * @param colorCoded Set to true to enable embedded #FFFFFF color codes. Note: clip and wordBreak
 * are forced false if this is set.
 * @default false
 * @param subPixelPositioning A bool representing whether the text can be positioned sub-pixel-ly.
 * Looks nicer for moving/scaling animations.  }}  {{New feature/item|3.0135|1.3.5|6054|
 * @default false
 * @param fRotation Rotation
 * @default 0.0
 * @param fRotationCenterX Rotation Origin X
 * @default 0.0
 * @param fRotationCenterY Rotation Origin Y  }}
 * @default 0.0
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function dxDrawText(
    text: string,
    leftX: number,
    topY: number,
    rightX?: number,
    bottomY?: number,
    color?: number,
    scaleXY?: number,
    scaleY?: number,
    font?: string,
    alignX?: string,
    alignY?: string,
    clip?: boolean,
    wordBreak?: boolean,
    postGUI?: boolean,
    colorCoded?: boolean,
    subPixelPositioning?: boolean,
    fRotation?: number,
    fRotationCenterX?: number,
    fRotationCenterY?: number,
): boolean;

/**
 * This function drawn same sphere as /showcol. It provides 4 levels of iterations which mean
 * density of sphere. Adjust radius to iterations to get optimum density of mesh. About 50 spheres with
 * iterations = 4 can cause fps drop.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxDrawWiredSphere|MTASA Wiki}
 * @param radius A radius of sphere.
 * @param theColor A color of sphere from tocolor function.
 * @param fLineWidth A width of line
 * @return Returns a ''true'' if the operation was successful, ''false'' otherwise.
 */
export function dxDrawWiredSphere(
    x: number,
    y: number,
    z: number,
    radius: number,
    theColor: number,
    fLineWidth: number,
    iterations: number,
): boolean;

/**
 * This function returns the current blend mode for the dxDraw functions. The blend mode is set
 * using [[dxSetBlendMode]]
 * @see {@link https://wiki.multitheftauto.com/wiki/dxGetBlendMode|MTASA Wiki}
 * @return Returns the current blend mode, which can be one of:
 * * *'''blend'''
 * * *'''add'''
 * * *'''modulate_add'''
 * * *'''overwrite'''
 */
export function dxGetBlendMode(): string;

/**
 * This function retrieves the theoretical height of a certain piece of text, if it were to be
 * drawn using [[dxDrawText]].
 * @see {@link https://wiki.multitheftauto.com/wiki/dxGetFontHeight|MTASA Wiki}
 * @param scale The size of the text.
 * @default 1
 * @param font Either a custom DX font element or the name of a built-in dx font:  {{DxFonts}}
 * @default "default"
 * @return Returns an integer of the height of the text.
 */
export function dxGetFontHeight(scale: number, font: string): number;

/**
 * This gets the dimensions of the supplied [[material]] element.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxGetMaterialSize|MTASA Wiki}
 * @return Returns two ''ints'' representing the width and height in pixels of the material, or
 * false if an invalid parameter was passed to the function.
 * * If the material is a volume texture, this function will return three ''ints'' representing the
 * width, height and depth.
 */
export function dxGetMaterialSize(material: Element): LuaMultiReturn<[number, number, number?]>;

/**
 * This function gets the color of a single pixel from [[Texture_pixels|pixels]] contained in a
 * string. It only works with ''''plain'''' format pixels.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxGetPixelColor|MTASA Wiki}
 * @param x The X coordinate for the pixel
 * @param y The Y coordinate for the pixel
 * @return Returns 4 ''int''s representing the rgba color value of the pixel if succesful, or
 * ''false'' if invalid arguments were passed to the function.
 */
export function dxGetPixelColor(pixels: string, x: number, y: number): LuaMultiReturn<[number, number, number, number]>;

/**
 * This function gets the dimensions of [[Texture_pixels|pixels]] contained in a string. It works
 * with all pixel formats.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxGetPixelsSize|MTASA Wiki}
 * @param pixels The pixels to get the dimensions of
 * @return Returns width and height of the pixels if successful, ''false'' if invalid arguments
 * were passed to the function.
 */
export function dxGetPixelsSize(pixels: string): LuaMultiReturn<[number, number]>;

/**
 * This function returns the format of [[Texture_pixels|pixels]] contained in a string.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxGetPixelsFormat|MTASA Wiki}
 * @return Returns the format of the pixels if successful (''''plain'''' or ''''png'''' or
 * ''''jpeg''''), ''false'' if invalid arguments were passed to the function.
 */
export function dxGetPixelsFormat(pixels: string): string;

/**
 * This function gets information about various internal datum
 * @see {@link https://wiki.multitheftauto.com/wiki/dxGetStatus|MTASA Wiki}
 * @return Returns a table with the following entries:
 * * * '''TestMode :''' The current dx test mode. See [[dxSetTestMode]].
 * * *'''VideoCardName :''' The name of the graphics card.
 * * *'''VideoCardRAM :''' The installed memory in MB of the graphics card.
 * * *'''VideoCardPSVersion :''' The maximum pixel shader version of the graphics card.
 * * *'''VideoCardMaxAnisotropy:''' The maximum anisotropic filtering available. (0-4 which
 * respectively mean: off,2x,4x,8x,16x)
 * * *'''VideoCardNumRenderTargets:''' The maximum number of simultaneous render targets a shader
 * can use.
 * * *'''VideoMemoryFreeForMTA :''' The amount of memory in MB available for MTA to use. '''When
 * this gets to zero, [[guiCreateFont]], [[dxCreateFont]] and [[dxCreateRenderTarget]] will fail.'''
 * * *'''VideoMemoryUsedByFonts :''' The amount of graphic memory in MB used by custom fonts.
 * * *'''VideoMemoryUsedByTextures :''' The amount of graphic memory in MB used by textures.
 * * *'''VideoMemoryUsedByRenderTargets :''' The amount of graphic memory in MB used by render
 * targets.
 * * *'''SettingWindowed :''' The windowed setting. (true/false)
 * * *'''SettingFullScreenStyle :''' Display style when in full screen mode. (0-2 which
 * respectively mean: Standard, Borderless window, Borderless keep res)
 * * *'''SettingFXQuality :''' The FX Quality. (0-3)
 * * *'''SettingDrawDistance :''' The draw distance setting. (0-100)
 * * *'''SettingVolumetricShadows :''' The volumetric shadows setting. (true/false)
 * * *'''SettingStreamingVideoMemoryForGTA :''' The usable graphics memory setting. (64-256)
 * * *'''SettingAnisotropicFiltering:''' The anisotropic filtering setting. (0-4 which respectively
 * mean: off,2x,4x,8x,16x)
 * * *'''SettingAntiAliasing:''' The anti-aliasing setting. (0-3 which respectively mean:
 * off,1x,2x,3x)
 * * *'''SettingHeatHaze:''' The heat haze setting. (true/false)
 * * *'''SettingGrassEffect:''' The grass effect setting. (true/false)
 * * *'''Setting32BitColor:''' The color depth of the screen. (false is 16bit, true is 32bit)
 * * *'''SettingHUDMatchAspectRatio:''' The hud match aspect ratio setting (true/false)
 * * *'''SettingAspectRatio:''' The aspect ratio setting ("auto", "4:3", "16:10", "16:9")
 * * *'''SettingFOV:''' The FOV setting
 * * {{New feature/item|3.0154|1.5.3|11199|
 * * *'''SettingHighDetailVehicles:''' High detail vehicles setting (true/false).
 * * }}
 * * {{New feature/item|3.0160|1.5.8||
 * * *'''SettingHighDetailPeds:''' High detail peds setting (true/false).
 * * }}
 * * *'''AllowScreenUpload :''' The allows screen uploads setting. (true/false)
 * * *'''DepthBufferFormat:''' The format of the shader readable depth buffer, or 'unknown' if not
 * available
 * * *'''UsingDepthBuffer:''' ''true'' if the depth buffer is used, ''false'' otherwise
 */
export function dxGetStatus(): Table;

/**
 * '''NOTE:''' This function already takes the client's screen resolution into account.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxGetTextSize|MTASA Wiki}
 * @param text A string representing the text for which you wish to retrieve with width for.
 * {{OptionalArg}}
 * @param width The width of the text. Use with wordBreak = true.
 * @default 0
 * @param scaleX The scale of the text. Scale can also be inputted as a Vector2.
 * @default 1.0
 * @param scaleY The scale of the text.
 * @default 1.0
 * @param font Either a custom DX font element or the name of a built-in dx font:  {{DxFonts}}
 * @default "default"
 * @param wordBreak If set to true, the text will wrap to a new line whenever it reaches the right
 * side of the bounding box. If false, the text will always be completely on one line.
 * @default false
 * @param colorCoded Should we exclude color codes from the width? False will include the hex in
 * the length.
 * @default false
 * @return Returns two floats representing the width and height of the text in pixels.
 */
export function dxGetTextSize(
    text: string,
    width?: number,
    scaleX?: number,
    scaleY?: number,
    font?: string,
    wordBreak?: boolean,
    colorCoded?: boolean,
): LuaMultiReturn<[number, number]>;

/**
 * This function retrieves the theoretical width (in pixels) of a certain piece of text, if it were
 * to be drawn using [[dxDrawText]].
 * '''NOTE:''' This function already takes the client's screen resolution into account.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxGetTextWidth|MTASA Wiki}
 * @param text A string representing the text for which you wish to retrieve with width for.
 * {{OptionalArg}}
 * @param scale The size of the text.
 * @default 1
 * @param font Either a custom DX font element or the name of a built-in dx font:  {{DxFonts}}
 * @default "default"
 * @param bColorCoded Should we exclude color codes from the width? (false will include the hex in
 * the length)
 * @default false
 * @return Returns the float of the width of the text (in pixels).
 */
export function dxGetTextWidth(text: string, scale: number, font: string, bColorCoded: boolean): number;

/**
 * This function fetches the [[Texture_pixels|pixels]] from a [[texture]] element. It can be used
 * with a standard texture, render target or screen source.
 * *This function is slow and not something you want to be doing once a frame.
 * *It is slower when reading pixels from a render target or screen source.
 * *And is very slow indeed if the texture format is not ''' 'argb' '''.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/dxGetTexturePixels|MTASA Wiki}
 * @param surfaceIndex Desired slice to get if the texture is a volume texture, or desired face to
 * get if the texture is a cube map. <nowiki>(Cube map faces: 0=+X 1=-X 2=+Y 3=-Y 4=+Z 5=-Z)</nowiki>
 * By default the pixels from the whole texture is returned. To get only a portion of the texture,
 * define a rectangular area using all four of these optional arguments:
 * @default 0
 * @param x Rectangle left position
 * @default 0
 * @param y Rectangle top position
 * @default 0
 * @param width Rectangle width
 * @default 0
 * @return Returns a ''''plain'''' format pixels string if successful, ''false'' if invalid
 * arguments were passed to the function.
 */
export function dxGetTexturePixels(
    surfaceIndex: number,
    texture: Element,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
): string;

/**
 * This function gets the current aspect ratio set by [[dxSetAspectRatioAdjustmentEnabled]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/dxIsAspectRatioAdjustmentEnabled|MTASA Wiki}
 * @return *'''boolean:''' returns '''true''' when enabled by
 * [[dxSetAspectRatioAdjustmentEnabled]], '''false''' otherwise.
 * * *'''float:''' aspect ratio set by [[dxSetAspectRatioAdjustmentEnabled]]
 */
export function dxIsAspectRatioAdjustmentEnabled(): LuaMultiReturn<[boolean, number]>;

/**
 * This function allows for the positioning of dxDraw calls to be automatically adjusted according
 * to the client's aspect ratio setting.  This lasts for a single execution of an event handler for one
 * of the following events: [[onClientRender]], [[onClientPreRender]] and [[onClientHUDRender]]. So
 * the function has to be called every frame, just like dxDraws.
 * This is particularly useful for draws that must align with the GTA HUD, for which the sizing and
 * positioning can vary for different aspect ratios.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/dxSetAspectRatioAdjustmentEnabled|MTASA Wiki}
 * @param bEnabled : Should the adjustment be enabled or disabled.  {{OptionalArg}}
 * @return Returns ''true'' when it was changed successfully, or ''false'' otherwise.
 */
export function dxSetAspectRatioAdjustmentEnabled(bEnabled: boolean, sourceRatio?: number): boolean;

/**
 * This function sets the current blend mode for the dxDraw functions. Changing the blend mode can
 * increase the quality when drawing text or certain other images to a render target. As a general
 * guide use '''modulate_add''' when drawing text to a render target, and '''add''' when drawing the render
 * target to the screen. Don't forget to restore the default '''blend''' at the end - See the example
 * below.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxSetBlendMode|MTASA Wiki}
 * @return Returns true if successful, or ''false'' if invalid arguments were passed to the
 * function.
 */
export function dxSetBlendMode(blendMode: string): boolean;

/**
 * This function sets the color of a single pixel for [[Texture_pixels|pixels]] contained in a
 * string. It only works with ''''plain'''' format pixels.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxSetPixelColor|MTASA Wiki}
 * @param x The X coordinate for the pixel
 * @param y The Y coordinate for the pixel
 * @param r The red channel for the color (0-255)
 * @param g The green channel for the color (0-255)
 * @param b The blue channel for the color (0-255)
 * @param a The alpha channel for the color (0-255)
 * @default 255
 * @return Returns true if successful, or ''false'' if invalid arguments were passed to the
 * function.
 */
export function dxSetPixelColor(
    pixels: string,
    x: number,
    y: number,
    r: number,
    g: number,
    b: number,
    a?: number,
): boolean;

/**
 * This function changes the drawing destination for the dx functions. It can be used to select a
 * previously created render target, or if called with no arguments, restore drawing directly to the
 * screen.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxSetRenderTarget|MTASA Wiki}
 * @param renderTarget The render target element whose pixels we want to draw on.
 * @param clear If set to true, the render target will also be cleared.
 * @default false
 * @return Returns ''true'' if the render target was successfully changed, ''false'' otherwise.
 */
export function dxSetRenderTarget(renderTarget: Element, clear: boolean): boolean;

/**
 * This sets a named parameter for a [[shader]] element
 * @see {@link https://wiki.multitheftauto.com/wiki/dxSetShaderValue|MTASA Wiki}
 * @param theShader The shader element whose parameter is to be changed
 * @param parameterName The name of parameter
 * @param value The value to set, which can be a texture, a bool, a number or a list of numbers(max
 * 16 floats(numbers))
 * @return Returns ''true'' if the shader element's parameter was successfully changed, ''false''
 * otherwise.
 */
export function dxSetShaderValue(theShader: Element, parameterName: string, value: string): boolean;

/**
 * This function sets the amount of geometric sub-division to use when drawing a [[shader]] element
 * with [[dxDrawImage]].
 * Using tessellation allows a shader to manipulate the shape of the rendered image at each
 * sub-division boundary.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxSetShaderTessellation|MTASA Wiki}
 * @param theShader The shader element whose tessellation is to be changed
 * @param tessellationX The number of sub-division points along the X axis. Range is 1 to 500.
 * @param tessellationY The number of sub-division points along the Y axis. Range is 1 to 500.
 * @return Returns ''true'' if the shader element's tessellation was successfully changed,
 * ''false'' otherwise.
 */
export function dxSetShaderTessellation(theShader: Element, tessellationX: number, tessellationY: number): boolean;

/**
 * This function applies a 3D transformation to a [[shader]] element when it is drawn with
 * [[dxDrawImage]].
 * @see {@link https://wiki.multitheftauto.com/wiki/dxSetShaderTransform|MTASA Wiki}
 * @param theShader The shader element whose transformation is to be changed
 * @param rotationX Rotation angle in degrees around the X axis (Left,right). This will make the
 * shader rotate along its width.
 * @param rotationY Rotation angle in degrees around the Y axis (Up,down). This will make the
 * shader rotate along its height.
 * @param rotationZ Rotation angle in degrees around the Z axis (In,out). This will make the shader
 * rotate in a similar way to the rotation argument in dxDrawImage.  {{OptionalArg}}
 * @return Returns ''true'' if the shader element's transform was successfully changed, ''false''
 * otherwise.
 */
export function dxSetShaderTransform(
    theShader: Element,
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    rotationCenterOffsetX: number,
    rotationCenterOffsetY: number,
    rotationCenterOffsetZ: number,
    bRotationCenterOffsetOriginIsScreen: boolean,
    perspectiveCenterOffsetX: number,
    perspectiveCenterOffsetY: number,
    bPerspectiveCenterOffsetOriginIsScreen: boolean,
): boolean;

/**
 * This function is used for testing scripts written using [[guiCreateFont]], [[dxCreateFont]],
 * [[dxCreateShader]] and [[dxCreateRenderTarget]].
 * Each one of the 3 test modes should be used in turn to help highlight any potential problems.
 * @see {@link https://wiki.multitheftauto.com/wiki/dxSetTestMode|MTASA Wiki}
 * @return Returns ''true'' if the test mode was successfully set, ''false'' otherwise.
 */
export function dxSetTestMode(testMode: string): boolean;

/**
 * This functions allows you to change the edge handling after creating the texture.
 * }}
 * [[File:TextureEdges.jpg|600px]]
 * @see {@link https://wiki.multitheftauto.com/wiki/dxSetTextureEdge|MTASA Wiki}
 * @param theTexture The affected texture
 * @param textureEdge The texture edge mode. Available modes are wrap, mirror, clamp, border,
 * mirror-once
 * @return
 */
export function dxSetTextureEdge(theTexture: Texture, textureEdge: string, border?: number): boolean;

/**
 * This function sets the [[Texture_pixels|pixels]] of a [[texture]] element. It can be used with a
 * standard texture, render target or screen source. Only ''''plain'''' format pixels please.
 * * This function is slow and not something you want to be doing once a frame.
 * * It is very slow when setting pixels to a render target or screen source.
 * * And is very slow indeed if the texture format is not '''"argb"'''.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/dxSetTexturePixels|MTASA Wiki}
 * @param surfaceIndex Desired slice to set if the texture is a volume texture, or desired face to
 * set if the texture is a cube map. <nowiki>(Cube map faces: 0=+X 1=-X 2=+Y 3=-Y 4=+Z 5=-Z)</nowiki>
 * By default the pixels are set starting at the top left corner of the texture. To set a different
 * region, define a rectangular area using all four of these optional arguments:
 * @default 0
 * @param x Rectangle left position
 * @default 0
 * @param y Rectangle top position
 * @default 0
 * @param width Rectangle width
 * @default 0
 * @return Returns a string if successful, ''false'' if invalid arguments were passed to the
 * function.
 */
export function dxSetTexturePixels(
    surfaceIndex: number,
    texture: Element,
    pixels: string,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
): boolean;

/**
 * This function updates the contents of a screen source [[texture]] with the screen output from GTA
 * @see {@link https://wiki.multitheftauto.com/wiki/dxUpdateScreenSource|MTASA Wiki}
 * @param screenSource The screen source element whose pixels we want to fill with the screen
 * capture
 * @param resampleNow A bool to indicate if the screen should be captured immediately. The default
 * is false which means the screen from the end of the previous frame is used (better for performance
 * and consistency). Use true for layering fullscreen effects.
 * @default false
 * @return Returns ''true'' if the screen was successfully captured, ''false'' otherwise.
 */
export function dxUpdateScreenSource(screenSource: Element, resampleNow?: boolean): boolean;
