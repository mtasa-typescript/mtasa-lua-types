type Material = object;
type Color = number;
type Font = object;
type element = object;

/**
 * This function retrieves the hex number of a specified color, useful for the dx functions. 
 * 
 * @param red The amount of red in the color (0-255).
 * @param green The amount of green in the color (0-255).
 * @param blue The amount of blue in the color (0-255).
 * @param alpha The amount of alpha in the color (0-255).
 * @returns Returns a single value representing the color.
 */
declare function tocolor(red: number, green: number, blue: number, alpha?: number): Color

/**
 * Draws an image on the screen for a single frame. In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).
 * Image files should ideally have dimensions that are a power of two, to prevent possible blurring.
 * Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...
 * @param posX the absolute X coordinate of the top left corner of the image
 * @param posY the absolute Y coordinate of the top left corner of the image
 * @param width the absolute width of the image
 * @param height the absolute height of the image
 * @param image Either a material element or a filepath of the image which is going to be drawn. (.dds images are also supported).Image files should ideally have dimensions that are a power of two, to prevent possible blurring.
 * @param rotation the rotation, in degrees for the image.
 * @param rotationCenterOffsetX the absolute X offset from the image center for which to rotate the image from.
 * @param rotationCenterOffsetY the absolute Y offset from the image center for which to rotate the image from.
 * @param color Tints the image with a value produced by tocolor or hexadecimal number in format: 0xAARRGGBB(RR = red, GG = green, BB = blue, AA = alpha).
 * @param postGUI A bool representing whether the image should be drawn on top of or behind any ingame GUI(rendered by CEGUI).
 * @returns Returns true if successful, false otherwise.
 */
declare function dxDrawImage(posX: number, posY: number, width: number, height: number, image: string, rotation?: 0, rotationCenterOffsetX?: 0, rotationCenterOffsetY?: 0, color?: 0, postGUI?: false): boolean

/**
 * Draws an image on the screen for a single frame. In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).
 * Image files should ideally have dimensions that are a power of two, to prevent possible blurring.
 * Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...
 * @param posX the absolute X coordinate of the top left corner of the image
 * @param posY the absolute Y coordinate of the top left corner of the image
 * @param width the absolute width of the image
 * @param height the absolute height of the image
 * @param image Either a material element or a filepath of the image which is going to be drawn. (.dds images are also supported).Image files should ideally have dimensions that are a power of two, to prevent possible blurring.
 * @param rotation the rotation, in degrees for the image.
 * @param rotationCenterOffsetX the absolute X offset from the image center for which to rotate the image from.
 * @param rotationCenterOffsetY the absolute Y offset from the image center for which to rotate the image from.
 * @param color Tints the image with a value produced by tocolor or hexadecimal number in format: 0xAARRGGBB(RR = red, GG = green, BB = blue, AA = alpha).
 * @param postGUI A bool representing whether the image should be drawn on top of or behind any ingame GUI(rendered by CEGUI).
 * @returns Returns true if successful, false otherwise.
 */
declare function dxDrawImage(posX: number, posY: number, width: number, height: number, image: Material, rotation?: 0, rotationCenterOffsetX?: 0, rotationCenterOffsetY?: 0, color?: 0, postGUI?: false): boolean

/**
 * Differing from dxDrawImage, this function only draws a part of an image on the screen for a single frame. In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender). 
 * @param posX the absolute X coordinate of the top left corner of the image
 * @param posY the absolute Y coordinate of the top left corner of the image
 * @param width the absolute width of the image
 * @param height the absolute height of the image
 * @param u the absolute X coordinate of the top left corner of the section which should be drawn from image
 * @param v the absolute Y coordinate of the top left corner of the section which should be drawn from image
 * @param usize the absolute width of the image section
 * @param vsize the absolute height of the image section
 * @param image Either a material element or a filepath of the image which is going to be drawn. (.dds images are also supported). Image files should ideally have dimensions that are a power of two, to prevent possible blurring.
 * @param rotation the rotation, in degrees for the image.
 * @param rotationCenterOffsetX the absolute X offset from the image center for which to rotate the image from.
 * @param rotationCenterOffsetY the absolute Y offset from the image center for which to rotate the image from.
 * @param color the color of the image, a value produced by tocolor or hexadecimal number in format: 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param postGUI A bool representing whether the image should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @returns Returns true if successful, false otherwise. 
 */
declare function dxDrawImageSection(posX: number, posY: number, width: number, height: number, u: number, v: number, usize: number, vsize: number, image: string, rotation?: 0, rotationCenterOffsetX?: 0, rotationCenterOffsetY?: 0, color?: 0, postGUI?: false): boolean

/**
 * Differing from dxDrawImage, this function only draws a part of an image on the screen for a single frame. In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender). 
 * @param posX the absolute X coordinate of the top left corner of the image
 * @param posY the absolute Y coordinate of the top left corner of the image
 * @param width the absolute width of the image
 * @param height the absolute height of the image
 * @param u the absolute X coordinate of the top left corner of the section which should be drawn from image
 * @param v the absolute Y coordinate of the top left corner of the section which should be drawn from image
 * @param usize the absolute width of the image section
 * @param vsize the absolute height of the image section
 * @param image Either a material element or a filepath of the image which is going to be drawn. (.dds images are also supported). Image files should ideally have dimensions that are a power of two, to prevent possible blurring.
 * @param rotation the rotation, in degrees for the image.
 * @param rotationCenterOffsetX the absolute X offset from the image center for which to rotate the image from.
 * @param rotationCenterOffsetY the absolute Y offset from the image center for which to rotate the image from.
 * @param color the color of the image, a value produced by tocolor or hexadecimal number in format: 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param postGUI A bool representing whether the image should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @returns Returns true if successful, false otherwise. 
 */
declare function dxDrawImageSection(posX: number, posY: number, width: number, height: number, u: number, v: number, usize: number, vsize: number, image: Material, rotation?: 0, rotationCenterOffsetX?: 0, rotationCenterOffsetY?: 0, color?: 0, postGUI?: false): boolean

/**
 * This function draws a 2D line across the screen - rendered for one frame. This should be used in conjunction with onClientRender in order to display continuously. 
 * @param startX An integer representing the absolute start X position of the line, represented by pixels on the screen.
 * @param startY An integer representing the absolute start Y position of the line, represented by pixels on the screen.
 * @param endX An integer representing the absolute end X position of the line, represented by pixels on the screen.
 * @param endY An integer representing the absolute end Y position of the line, represented by pixels on the screen.
 * @param color An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param width The width/thickness of the line
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @returns Returns a true if the operation was successful, false otherwise. 
 */
declare function dxDrawLine(startX: number, startY: number, endX: number, endY: number, color: Color, width?: 1, postGUI?: false): boolean

/**
 * This function draws a 3D line between two points in the 3D world - rendered for one frame. This should be used in conjunction with onClientRender in order to display continuously. 
 * @param startX The start X position of the 3D line, representing a coordinate in the GTA world.
 * @param startY The start Y position of the 3D line, representing a coordinate in the GTA world.
 * @param startZ The start Z position of the 3D line, representing a coordinate in the GTA world.
 * @param endX The end X position of the 3D line, representing a coordinate in the GTA world.
 * @param endY The end Y position of the 3D line, representing a coordinate in the GTA world.
 * @param endZ The end Z position of the 3D line, representing a coordinate in the GTA world.
 * @param color An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param width The width/thickness of the line
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @returns Returns a true if the operation was successful, false otherwise. 
 */
declare function dxDrawLine3D(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, color?: 0, width?: 1, postGUI?: false): boolean

/**
 * This function draws a 2D rectangle across the screen - rendered for one frame. This should be used in conjunction with onClientRender in order to display continuously. 
 * @param startX An float representing the absolute origin X position of the rectangle, represented by pixels on the screen.
 * @param startY An float representing the absolute origin Y position of the rectangle, represented by pixels on the screen.
 * @param width An float representing the width of the rectangle, drawn in a right direction from the origin.
 * @param height An float representing the height of the rectangle, drawn in a downwards direction from the origin.
 * @param color the hex color of the rectangle, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI.
 * @param subPixelPositioning subPixelPositioning A bool representing whether the rectangle can be positioned sub-pixel-ly. (FROM VERSION 1.4.0 r6931 ONWARDS)
 * @returns Returns true if the operation was successful, false otherwise.
 */
declare function dxDrawRectangle(startX: number, startY: number, width: number, height: number, color?: Color, postGUI?: false, subPixelPositioning?: boolean): boolean;

/*
"default": Tahoma
"default-bold": Tahoma Bold
"clear": Verdana
"arial": Arial
"sans": Microsoft Sans Serif
"pricedown": Pricedown (GTA's theme text)
"bankgothic": Bank Gothic Medium
"diploma": Diploma Regular
"beckett": Beckett Regular
*/
/**
 * Draws a string of text on the screen for one frame. In order for the text to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender). 
 * @param text the text to draw
 * @param left the absolute X coordinate of the top left corner of the text
 * @param top the absolute Y coordinate of the top left corner of the text
 * @param right the absolute X coordinate of the right side of the text bounding box. Used for text aligning, clipping and word breaking.
 * @param bottom the absolute Y coordinate of the bottom side of the text bounding box. Used for text aligning, clipping and word breaking.
 * @param color the color of the text, a value produced by tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param scale the size of the text.scale: can (optionally) be specified as two floats. i.e. scaleX, scaleY
 * @param font Either a custom DX font element or the name of a built-in DX font: Note: Some fonts are incompatible with certain languages such as Arabic.
 * @param alignX horizontal alignment of the text within the bounding box. Can be "left", "center" or "right".
 * @param alignY vertical alignment of the text within the bounding box. Can be "top", "center" or "bottom".
 * @param clip if set to true, the parts of the text that don't fit within the bounding box will be cut off.
 * @param wordBreak if set to true, the text will wrap to a new line whenever it reaches the right side of the bounding box. If false, the text will always be completely on one line.
 * @param postGUI A bool representing whether the text should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @param colorCoded Set to true to enable embedded #FFFFFF color codes. Note: clip and wordBreak are forced false if this is set.
 * @param subPixelPositioning A bool representing whether the text can be positioned sub-pixel-ly. Looks nicer for moving/scaling animations.
 * @param fRotation Rotation
 * @param fRotationCenterX Rotation Origin X
 * @param fRotationCenterY Rotation Origin Y
 * @returns Returns true if successful, false otherwise.
 */
declare function dxDrawText(text: string, left: number, top: number, right?: 0, bottom?: 0, color?: 0, scale?: 1, font?: Font, alignX?: "left", alignY?: "top", clip?: false, wordBreak?: false, postGUI?: false, colorCoded?: false, subPixelPositioning?: false, fRotation?: 0, fRotationCenterX?: 0, fRotationCenterY?: 0): boolean;

/**
 * This function retrieves the theoretical height of a certain piece of text, if it were to be drawn using dxDrawText. 
 * Note: The returned height will be in logical units which are 1.75 times the actual pixel height. 
 * @param scale The size of the text.
 * @param font Either a custom DX font element or the name of a built-in dx font: 
 * @returns Returns an integer of the height of the text.
 */
declare function dxGetFontHeight(scale?: 1, font?: Font): number

/**
 * This function retrieves the theoretical width of a certain piece of text, if it were to be drawn using dxDrawText.
 * NOTE: This function is relative to the client's screen resolution. 
 * @param text A string representing the text for which you wish to retrieve with width for.
 * @param scale The size of the text.
 * @param font Either a custom DX font element or the name of a built-in dx font:
 * @param bColorCoded Should we exclude color codes from the width? (false will include the hex in the length)
 */
declare function dxGetTextWidth(text: string, scale?: 1, font?: Font, bColorCoded?: false): number

/**
 * This function creates a DX font element that can be used in dxDrawText. Successful font creation is not guaranteed, and may fail due to hardware or memory limitations.
 * To see if creation is likely to fail, use dxGetStatus. (When VideoMemoryFreeForMTA is zero, failure is guaranteed.)
 * **It is highly recommended that dxSetTestMode is used when writing and testing scripts using dxCreateFont.**
 */
declare function dxCreateFont(filepath: string, size?: 9, bold?: false, quality?: "proof"): element

declare function dxCreateTexture(filepath: string, textureFormat?: "argb", mipmaps?: true, textureEdge?: "wrap"): element
declare function dxCreateTexture(pixels: string, textureFormat?: "argb", mipmaps?: true, textureEdge?: "wrap"): element
declare function dxCreateTexture(width: number, height: number, textureFormat?: "argb", mipmaps?: true, textureEdge?: "wrap"): element

declare function dxCreateShader(filepath: string, priority?: 0, maxDistance?: 0, layered?: false, elementTypes?: "world,vehicle,object,other"): [element, string]

declare function dxCreateRenderTarget(width: number, height: number, withAlpha: false): element

declare function dxCreateScreenSource(width: number, height: number): element

declare function dxGetMaterialSize(material: element): [number, number, number]

declare function dxSetShaderValue(theShader: element, parameterName: string, value: object): boolean