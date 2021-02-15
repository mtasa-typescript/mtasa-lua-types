import {account, acl, aclgroup, player, table, ban, blip,colshape,element,ped,pickup,resource,team,textdisplay,vehicle,xmlnode,textitem,HandleFunction,file,marker,radararea,request,userdata,timer,water} from "mtasa/shared/structures";
declare module 'mtasa/shared/functions' {

    /**
     * This function plays a frontend sound for the specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/playSoundFrontEnd|MTASA Wiki}
     * @param thePlayer the player you want the sound to play for.
     * @param sound a whole int specifying the sound id to play. Valid values are:  {{Sounds}}
     * @return Returns ''true'' if the sound was successfully played, ''false'' otherwise.
     */
    export function playSoundFrontEnd(thePlayer: player, sound: number, ): boolean;

    /**
     * This function creates a [[blip]] [[element]], which is displayed as an icon on the client's radar.
     * @see {@link https://wiki.multitheftauto.com/wiki/createBlip|MTASA Wiki}
     * @return Returns an [[element]] of the [[blip]] if it was created successfully, ''false'' otherwise.
     */
    export function createBlip(x: number, y: number, z: number, icon?: number, size?: number, r?: number, g?: number, b?: number, a?: number, ordering?: number, visibleDistance?: number, visibleTo?: element, ): blip;

    /**
     * This function creates a [[blip]] that is attached to an [[element]]. This blip is displayed as an icon on the client's radar and will 'follow' the element that it is attached to around.
     * @see {@link https://wiki.multitheftauto.com/wiki/createBlipAttachedTo|MTASA Wiki}
     * @return Returns a [[blip]] if the blip was created succesfully, or ''false'' otherwise.
     */
    export function createBlipAttachedTo(elementToAttachTo: element, icon?: number, size?: number, r?: number, g?: number, b?: number, a?: number, ordering?: number, visibleDistance?: number, visibleTo?: element, ): blip;

    /**
     * This function will tell you what color a blip is. This color is only applicable to the default blip icon ([[Image:Blipid0s.png|12px]], [[Image:Blipid0u.png|12px]] or [[Image:Blipid0d.png|12px]]). All other icons will ignore this.
     * @see {@link https://wiki.multitheftauto.com/wiki/getBlipColor|MTASA Wiki}
     * @param theBlip The blip whose color you wish to get.
     * @return Returns four integers in RGBA format, with a maximum value of 255 for each. The values are, in order, ''red'', ''green'', ''blue'', and ''alpha''.  Alpha decides the transparancy where 255 is opaque and 0 is fully transparent. ''false'' is returned if the blip is invalid.
     */
    export function getBlipColor(theBlip: blip, ): LuaMultiReturn<[number,number,number,number]>;

    /**
     * This function returns the icon a [[blip]] currently has.
     * @see {@link https://wiki.multitheftauto.com/wiki/getBlipIcon|MTASA Wiki}
     * @param theBlip : the blip were getting the icon number of.
     * @return Returns an [[int]] indicating which icon the blip has. Valid values are listed on the [[Radar Blips]] page.
     */
    export function getBlipIcon(theBlip: blip, ): number;

    /**
     * This function gets the Z ordering value of a blip. The Z ordering determines if a blip appears on top of or below other blips. Blips with a higher Z ordering value appear on top of blips with a lower value. The default value for all blips is 0.
     * @see {@link https://wiki.multitheftauto.com/wiki/getBlipOrdering|MTASA Wiki}
     * @param theBlip the blip to retrieve the Z ordering value of.
     * @return Returns the Z ordering value of the blip if successful, ''false'' otherwise.
     */
    export function getBlipOrdering(theBlip: blip, ): number;

    /**
     * This function gets the size of a blip..
     * @see {@link https://wiki.multitheftauto.com/wiki/getBlipSize|MTASA Wiki}
     * @param theBlip The blip you wish to get the size of.
     * @return Returns an [[int]] indicating the size of the blip. The default value is 2. The maximum value is 25.
     */
    export function getBlipSize(theBlip: blip, ): number;

    /**
     * This function will tell you what visible distance a blip has. 
     * @see {@link https://wiki.multitheftauto.com/wiki/getBlipVisibleDistance|MTASA Wiki}
     * @param theBlip The blip whose visible distance you wish to get.
     * @return Returns one float with the blips visible distance, false if the blip is invalid.
     */
    export function getBlipVisibleDistance(theBlip: blip, ): number;

    /**
     * This function will let you change the color of a blip. This color is only applicable to the default blip icon ([[Image:Blipid0s.png|12px]], [[Image:Blipid0u.png|12px]] or [[Image:Blipid0d.png|12px]]). All other icons will ignore this.
     * @see {@link https://wiki.multitheftauto.com/wiki/setBlipColor|MTASA Wiki}
     * @param theBlip The blip whos color you wish to set.
     * @param red The amount of red in the blips color (0 - 255).
     * @param green The amount of green in the blips color (0 - 255).
     * @param blue The amount of blue in the blips color (0 - 255).
     * @param alpha The amount of alpha in the blips color (0 - 255).  Alpha decides transparancy where 255 is opaque and 0 is transparent.
     * @return Returns ''true'' if the blip's color was set successfully. Returns ''false'' if the blip passed to the function is invalid, or any of the colors are out of the valid range.
     */
    export function setBlipColor(theBlip: blip, red: number, green: number, blue: number, alpha: number, ): boolean;

    /**
     * This function sets the icon for an existing blip element.
     * @see {@link https://wiki.multitheftauto.com/wiki/setBlipIcon|MTASA Wiki}
     * @param theBlip The blip you wish to set the icon of.
     * @param icon A number indicating the icon you wish to change it do. Valid values are listed on the Radar Blips page.
     * @return Returns ''true'' if the icon was successfully set, ''false'' if the element passed was not a valid blip or the icon value was not a valid icon number.
     */
    export function setBlipIcon(theBlip: blip, icon: number, ): boolean;

    /**
     * This function sets the Z ordering of a blip. It allows you to make a blip appear on top of or below other blips.
     * @see {@link https://wiki.multitheftauto.com/wiki/setBlipOrdering|MTASA Wiki}
     * @param theBlip the blip whose Z ordering to change.
     * @param ordering the new Z ordering value. Blips with higher values will appear on top of blips with lower values. Possible range: -32767 to 32767. Default: 0.
     * @return Returns ''true'' if the blip ordering was changed successfully, ''false'' otherwise.
     */
    export function setBlipOrdering(theBlip: blip, ordering: number, ): boolean;

    /**
     * This function sets the size of a blip's icon.
     * @see {@link https://wiki.multitheftauto.com/wiki/setBlipSize|MTASA Wiki}
     * @param theBlip The blip you wish to get the size of.
     * @param iconSize The size you wish the icon to be. 2 is the default value. 25 is the maximum value. Value gets clamped between 0 and 25.
     * @return Returns an ''true'' if the blip's size was set successfully. Returns ''false'' if the [[element]] passed was not a [[blip]] or if the icon size passed was invalid.
     */
    export function setBlipSize(theBlip: blip, iconSize: number, ): boolean;

    /**
     * This function will set the visible distance of a blip.
     * @see {@link https://wiki.multitheftauto.com/wiki/setBlipVisibleDistance|MTASA Wiki}
     * @param theBlip The blip whose visible distance you wish to get.
     * @param theDistance The distance you want the blip to be visible for. Value gets clamped between 0 and 65535.
     * @return Returns true if successful, false otherwise.
     */
    export function setBlipVisibleDistance(theBlip: blip, theDistance: number, ): boolean;

    /**
     * This function will fade a player's camera to a color or back to normal over a specified time period. This will also affect the sound volume for the player (50% faded = 50% volume, full fade = no sound). For clientside scripts you can perform 2 fade ins or fade outs in a row, but for serverside scripts you must use one then the other.
     * @see {@link https://wiki.multitheftauto.com/wiki/fadeCamera|MTASA Wiki}
     * @param thePlayer The player whose camera you wish to fade.
     * @param fadeIn Should the camera be faded in or out? Pass true to fade the camera in, false to fade it out to a color.
     * @param timeToFade The number of seconds it should take to fade.
     * @default 1.0
     * @param red The amount of red in the color that the camera fades out to (0 - 255). Not required for fading in.
     * @default 0
     * @param green The amount of green in the color that the camera fades out to (0 - 255). Not required for fading in.
     * @default 0
     * @param blue The amount of blue in the color that the camera fades out to (0 - 255). Not required for fading in.
     * @default 0
     * @return Returns ''true'' if the camera was faded successfully, ''false'' if invalid arguments were passed to the function.
     */
    export function fadeCamera(thePlayer: player, fadeIn: boolean, timeToFade: number, red: number, green: number, blue: number, ): boolean;

    /**
     * Returns the interior of the local camera (independent of the interior of the local player).
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraInterior|MTASA Wiki}
     * @param thePlayer : The player whose camera interior you want to get.
     * @return Returns an ''integer'' indicating the camera's interior, ''false'' if the argument is invalid.
     */
    export function getCameraInterior(thePlayer: player, ): number;

    /**
     * This function gets the position of the camera and the position of the point it is facing.
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraMatrix|MTASA Wiki}
     * @param thePlayer The player whose camera matrix is to be returned.
     * @return This function returns 8 [[float|floats]] if the argument is valid (when applicable); the first three indicate the position of the camera, the next three indicate the position of the point it's facing, and the last two are the roll and field of view. Returns ''false'' if the argument is invalid.
     */
    export function getCameraMatrix(thePlayer: player, ): LuaMultiReturn<[number,number,number,number,number,number,number,number]>;

    /**
     * This function returns an [[element]] that corresponds to the current target of the specified player's camera (i.e. what it is following). 
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraTarget|MTASA Wiki}
     * @param thePlayer The player whose camera you wish to receive the target of.
     * @return * Returns an [[element]] of the target if the function was successful, or ''false'' if bad arguments were specified
     * * {{New feature|3|1.0|
     * * * Returns ''false'' if the camera is in Fixed mode and has no target.
     * * }}
     */
    export function getCameraTarget(thePlayer: player, ): element;

    /**
     * Sets the interior of the local camera. Only the interior of the camera is changed, the local player stays in the interior he was in.
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraInterior|MTASA Wiki}
     * @param thePlayer the player whose camera interior will be set.
     * @param interior the interior to place the camera in.
     * @return Returns ''true'' if the camera's interior was changed successfully, ''false'' otherwise.
     */
    export function setCameraInterior(thePlayer: player, interior: number, ): boolean;

    /**
     * This function sets the camera's position and direction. The first three arguments are the point at which the camera lies, the last three are the point the camera faces (or the point it "looks at").
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraMatrix|MTASA Wiki}
     * @param thePlayer The player whose camera is to be changed.
     * @param positionX The x coordinate of the cameras position.
     * @param positionY The y coordinate of the cameras position.
     * @param positionZ The z coordinate of the cameras position.
     * @param lookAtX The x coordinate of the point the camera faces.
     * @param lookAtY The y coordinate of the point the camera faces.
     * @param lookAtZ The z coordinate of the point the camera faces.
     * @param roll The camera roll angle, -180 to 180. A value of 0 means the camera sits straight, positive values will turn it counter-clockwise and negative values will turn it clockwise. -180 or 180 means the camera is upside down.
     * @default 0
     * @param fov the field of view angle, 0.01 to 180. The higher this value is, the more you will be able to see what is to your sides.
     * @default 70
     * @return Returns ''true'' if the arguments are valid, ''false'' otherwise.
     */
    export function setCameraMatrix(thePlayer: player, positionX: number, positionY: number, positionZ: number, lookAtX?: number, lookAtY?: number, lookAtZ?: number, roll?: number, fov?: number, ): boolean;

    /**
     * This function allows you to set a player's camera to follow other elements instead. Currently supported element type is:
     * *[[Player]]s
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraTarget|MTASA Wiki}
     * @param thePlayer The player whose camera you wish to modify.
     * @param target The player who you want the camera to follow. If none is specified, the camera will target the player.
     * @default nil
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     */
    export function setCameraTarget(thePlayer: player, target?: player, ): boolean;

    /**
     * This function is used to get the name of a body part on a player.
     * @see {@link https://wiki.multitheftauto.com/wiki/getBodyPartName|MTASA Wiki}
     * @param bodyPartID : An integer representing the body part ID you wish to retrieve the name of.  {{BodyParts}}
     * @return This function returns a string containing the body part name if the ID is valid, ''false'' otherwise.
     */
    export function getBodyPartName(bodyPartID: number, ): string;

    /**
     * This function is used to get the texture and model of clothes by the clothes type and index.
     * (Scans through the list of clothes for the specific type).
     * @see {@link https://wiki.multitheftauto.com/wiki/getClothesByTypeIndex|MTASA Wiki}
     * @param clothesType : An integer representing the clothes slot/type to scan through.  {{Clothes Textures}}
     * @param clothesIndex : An integer representing the index (0 based) set of clothes in the list you wish to retrieve. Each type has a different number of valid indexes.
     * @return This function returns 2 strings, a texture and model respectively, ''false'' if invalid arguments were passed to the function.
     */
    export function getClothesByTypeIndex(clothesType: number, clothesIndex: number, ): LuaMultiReturn<[string,string]>;

    /**
     * This function is used to get the name of a certain clothes type.
     * @see {@link https://wiki.multitheftauto.com/wiki/getClothesTypeName|MTASA Wiki}
     * @param clothesType : An integer determining the type of clothes you want to get the clothes of.  {{Clothes Textures}}
     * @return This function returns a string (the name of the clothes type) if found, ''false'' otherwise.
     */
    export function getClothesTypeName(clothesType: number, ): string;

    /**
     * This function is used to get the clothes type and index from the texture and model.
     * (Scans through the list of clothes for the specific type).
     * @see {@link https://wiki.multitheftauto.com/wiki/getTypeIndexFromClothes|MTASA Wiki}
     * @param clothesTexture : A string determining the clothes texture that you wish to retrieve the type and index from. See the CJ Clothes|clothes catalog.
     * @param clothesModel : A string determining the corresponding clothes model that you wish to retrieve the type and index from. See the CJ Clothes|clothes catalog.
     * @return This function returns two integers, type and index respectively, ''false'' if invalid arguments were passed to the function.
     */
    export function getTypeIndexFromClothes(clothesTexture: string, clothesModel: string, ): LuaMultiReturn<[number,number]>;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/addColPolygonPoint|MTASA Wiki}
     * @param shape The colshape polygon you wish add a point to.
     * @param fX The X position of the new bound point.
     * @param fY The Y position of the new bound point.  {{OptionalArg}}
     * @param index The index where the new point will be inserted in the polygon. The points are indexed in order, with 1 being the first bound point. Passing 0 will insert the point as the last one in the polygon.
     * @default 0
     * @return Returns ''true'' if the polygon was changed, ''false'' if invalid arguments were passed.
     */
    export function addColPolygonPoint(shape: colshape, fX: number, fY: number, index?: number, ): boolean;

    /**
     * This function creates a collision circle. This is a shape that has a position and a radius and infinite height that you can use to detect a player's presence. Events will be triggered when a player enters or leaves it.
     * @see {@link https://wiki.multitheftauto.com/wiki/createColCircle|MTASA Wiki}
     * @param fX The collision circles center points X axis position
     * @param fY The collision circles center points Y axis position
     * @param radius The radius of the collision circle. Can not be smaller than 0.1
     * @return Returns a [[colshape]] element if successful, ''false'' if invalid arguments were passed to the function.
     */
    export function createColCircle(fX: number, fY: number, radius: number, ): colshape;

    /**
     * This function creates a collision cuboid. This is a shape that has a position, width, depth and height. See [http://en.wikipedia.org/wiki/Cuboid Wikipedia] for a definition of a cuboid. The XYZ of the col starts at the southwest bottom corner of the shape.
     * @see {@link https://wiki.multitheftauto.com/wiki/createColCuboid|MTASA Wiki}
     * @param fX The X position of the collision cuboids western side
     * @param fY The Y position of the collision cuboids southern side
     * @param fZ The Z position of the collision cuboids lowest side
     * @param fWidth The collision cuboids width
     * @param fDepth The collision cuboids depth
     * @param fHeight The collision cuboids height
     * @return Returns a [[colshape]] element if successful, ''false'' if invalid arguments were passed to the function.
     */
    export function createColCuboid(fX: number, fY: number, fZ: number, fWidth: number, fDepth: number, fHeight: number, ): colshape;

    /**
     * This function creates a collision polygon. See [http://en.wikipedia.org/wiki/Polygon Wikipedia] for a definition of a polygon. The first set of X Y of this shape is not part of the colshape bounds, so can set anywhere in the game world, however for performance, place it as close to the centre of the polygon as you can. It should be noted this shape is '''2D'''. There should be at least 3 bound points set. 
     * @see {@link https://wiki.multitheftauto.com/wiki/createColPolygon|MTASA Wiki}
     * @param fCenterX The X position of the collision polygons position - the position that will be returned from getElementPosition.
     * @param fCenterY The Y position of the collision polygons position - the position that will be returned from getElementPosition.
     * @param fX1 The 1st X position of the collision polygons bound point
     * @param fY1 The 1st Y position of the collision polygons bound point
     * @param fX2 The 2nd X position of the collision polygons bound point
     * @param fY2 The 2nd Y position of the collision polygons bound point
     * @param fX3 The 3rd X position of the collision polygons bound point
     * @param fY3 The 3rd Y position of the collision polygons bound point
     * @return Returns a [[colshape]] element if successful, ''false'' if invalid arguments were passed to the function.
     */
    export function createColPolygon(fCenterX: number, fCenterY: number, fX1: number, fY1: number, fX2: number, fY2: number, fX3: number, fY3: number, ...args: any[], ): colshape;

    /**
     * This function creates a collision rectangle. This is a shape that has a position and a width and a depth. See [http://en.wikipedia.org/wiki/Rectangle Rectangle] for a definition of a rectangle. XY marks on the south west corner of the colshape.
     * @see {@link https://wiki.multitheftauto.com/wiki/createColRectangle|MTASA Wiki}
     * @param fX The X position of the collision rectangles west side
     * @param fY The Y position of the collision rectangles south side
     * @param fWidth The collision rectangles width
     * @param fHeight The collision rectangles height
     * @return Returns a [[colshape]] element if successful, ''false'' if invalid arguments were passed to the function.
     */
    export function createColRectangle(fX: number, fY: number, fWidth: number, fHeight: number, ): colshape;

    /**
     * This function creates a collision sphere. This is a shape that has a position and a radius. See [http://en.wikipedia.org/wiki/Sphere Wikipedia] for a definition of a sphere.
     * @see {@link https://wiki.multitheftauto.com/wiki/createColSphere|MTASA Wiki}
     * @param fX The collision spheres center points X axis position
     * @param fY The collision spheres center points Y axis position
     * @param fZ The collision spheres center points Z axis position
     * @param fRadius The collision spheres radius
     * @return Returns a [[colshape]] element if successful, ''false'' if invalid arguments were passed to the function.
     */
    export function createColSphere(fX: number, fY: number, fZ: number, fRadius: number, ): colshape;

    /**
     * This function creates a collision tube. This is a shape that has a position and a 2D (X/Y) radius and a height. See [http://en.wikipedia.org/wiki/Cylinder_(geometry) Cylinder] for a definition of a tube. A tube is similar to a colcircle, except that it has a limited height, this means you can limit the distance above the position defined by (fX, fY, fZ) that the collision is detected.
     * @see {@link https://wiki.multitheftauto.com/wiki/createColTube|MTASA Wiki}
     * @param fX The position of the base of the tubes center on the X axis
     * @param fY The position of the base of the tubes center on the Y axis
     * @param fZ The position of the base of the tubes center on the Z axis
     * @param fRadius The collision tubes radius
     * @param fHeight The collision tubes height
     * @return Returns a [[colshape]] element if successful, ''false'' if invalid arguments were passed to the function.
     */
    export function createColTube(fX: number, fY: number, fZ: number, fRadius: number, fHeight: number, ): colshape;

    /**
     * By default, a colshape polygon is infinitely tall.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/getColPolygonHeight|MTASA Wiki}
     * @param shape The colshape polygon
     * @return Returns two [[float]]s, indicating the floor and ceiling of the colshape height, ''false'' if invalid arguments were passed.
     */
    export function getColPolygonHeight(shape: colshape, ): LuaMultiReturn<[number,number]>;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/getColPolygonPoints|MTASA Wiki}
     * @param shape The colshape polygon you wish to get the points of.
     * @return Returns a [[table]] of coordinates, each coordinate being a [[table]] containing the x and y position of a bound point, ''false'' if invalid arguments were passed.
     */
    export function getColPolygonPoints(shape: colshape, ): table;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/getColPolygonPointPosition|MTASA Wiki}
     * @param shape The colshape polygon you wish to change.
     * @param index The index of the point you wish to retrieve. The points are indexed in order, with 1 being the first bound point.
     * @return Returns two [[float]]s, x and y, indicating the position of the point, ''false'' if invalid arguments were passed.
     */
    export function getColPolygonPointPosition(shape: colshape, index: number, ): LuaMultiReturn<[number,number]>;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/getColShapeType|MTASA Wiki}
     * @param shape The colshape you wish to get the type of.
     * @return Returns ''false'' if invalid arguments were passed, or an [[int]]eger of the type of the colshape, which include:
     * * *'''0:''' circle
     * * *'''1:''' cuboid
     * * *'''2:''' sphere
     * * *'''3:''' rectangle
     * * *'''4:''' polygon
     * * *'''5:''' tube
     */
    export function getColShapeType(shape: colshape, ): number;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/getColShapeRadius|MTASA Wiki}
     * @param shape The colshape you wish to get the radius of.
     * @return Returns a [[float]] containing the radius of the colshape, ''false'' if an invalid colshape was passed.
     */
    export function getColShapeRadius(shape: colshape, ): number;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/getColShapeSize|MTASA Wiki}
     * @param shape The colshape you wish to get the size of.
     * @return Returns up to 3 [[float]]s depending on the colshape type (see below), ''false'' if invalid arguments were passed.
     * * *''cuboid:'' width, depth, height.
     * * *''rectangle:'' width, height.
     * * *''tube:'' height.
     */
    export function getColShapeSize(shape: colshape, ): LuaMultiReturn<[number,number,number]>;

    /**
     * Some elements have an associated colshape, for example [[Marker]] and [[Pickup]]. This function is used to get the associated colshape.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementColShape|MTASA Wiki}
     * @param theElement The element you want to get the colshape of
     * @return Returns ''colshape'' of the element, ''false'' if not or an invalid argument was passed to the function.
     */
    export function getElementColShape(theElement: element, ): colshape;

    /**
     * This function is used to retrieve a list of all elements in a colshape, of the specified type.
     * * For legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move
     * * This function doesn't verify whether elements are in the same dimension and interior, additional checks could be implemented manually if they are needed
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementsWithinColShape|MTASA Wiki}
     * @param theShape The colshape you want to get the elements from.
     * @param elemType The type of element you want a list of. This can be any element type, the common ones being:
     * @default nil
     * @return Returns a [[table]] containing all the elements inside the colshape, of the specified type. Returns an empty [[table]] if there are no elements inside. Returns ''false'' if the colshape is invalid.
     */
    export function getElementsWithinColShape(theShape: colshape, elemType?: string, ): table;

    /**
     * This function is used to determine if an element is within a collision shape. Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move. Please also note that before 1.0.3, this did not function correctly when moving a colshape.
     * Please note that this function doesn't verify whether element is in the same dimension and interior, additional checks could be implemented manually if they are needed.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementWithinColShape|MTASA Wiki}
     * @param theElement The element youre checking.
     * @param theShape The colshape youre checking
     * @return Returns ''true'' if the element is within the colshape, ''false'' otherwise
     */
    export function isElementWithinColShape(theElement: element, theShape: colshape, ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/isInsideColShape|MTASA Wiki}
     * @param theShape The colshape youre checking the position against.
     * @param posX The X coordinate of the position youre checking.
     * @param posY The Y coordinate of the position youre checking.
     * @param posZ The Z coordinate of the position youre checking.
     * @return Returns ''true'' if the position is inside the colshape, ''false'' if it isn't or if any parameters are invalid.
     */
    export function isInsideColShape(theShape: colshape, posX: number, posY: number, posZ: number, ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/removeColPolygonPoint|MTASA Wiki}
     * @param shape The colshape polygon you wish to remove a point from.
     * @param index The index of the point you wish to remove. The points are indexed in order, with 1 being the first bound point. You cant remove the last 3 points.
     * @return Returns ''true'' if the polygon was changed, ''false'' if invalid arguments were passed.
     */
    export function removeColPolygonPoint(shape: colshape, index: number, ): boolean;

    /**
     * By default, a colshape polygon is infinitely tall.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/setColPolygonHeight|MTASA Wiki}
     * @param shape The colshape polygon
     * @param floor The polygon floor (lowest Z coordinate). Parse false to reset this value to 0.
     * @param ceil The polygon ceiling (highest Z coordinate). Parse false to reset this value to infinitely tall.
     * @return Returns ''true'' if the polygon was changed, ''false'' if invalid arguments were passed.
     */
    export function setColPolygonHeight(shape: colshape, floor: number, ceil: number, ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/setColPolygonPointPosition|MTASA Wiki}
     * @param shape The colshape polygon you wish to change.
     * @param index The index of the point you wish to change. The points are indexed in order, with 1 being the first bound point.
     * @param fX The new X position of the bound point.
     * @param fY The new Y position of the bound point.
     * @return Returns ''true'' if the polygon was changed, ''false'' if invalid arguments were passed.
     */
    export function setColPolygonPointPosition(shape: colshape, index: number, fX: number, fY: number, ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/setColShapeRadius|MTASA Wiki}
     * @param shape The colshape you wish to change the radius of.
     * @param radius The radius you want to set.
     * @return Returns ''true'' if the radius was changed, or ''false'' if invalid arguments were passed.
     */
    export function setColShapeRadius(shape: colshape, radius: number, ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/setColShapeSize|MTASA Wiki}
     * @param shape The colshape you wish to change the size of.
     * @param width The collision cuboids width.
     * @param depth The collision cuboids depth.
     * @param height The collision cuboids height.
     * @return Returns ''true'' if the size was changed, ''false'' if invalid arguments were passed.
     */
    export function setColShapeSize(shape: colshape, width: number, depth: number, height: number, ): boolean;

    /**
     * This function is used to determine whether or not a player's cursor is showing.
     * @see {@link https://wiki.multitheftauto.com/wiki/isCursorShowing|MTASA Wiki}
     * @param thePlayer The player you want to get cursor state of.
     * @return Returns ''true'' if the player's cursor is showing, ''false'' if it isn't or if invalid parameters were passed.
     */
    export function isCursorShowing(thePlayer: player, ): boolean;

    /**
     * This function is used to show or hide a [[player]]'s cursor.
     * @see {@link https://wiki.multitheftauto.com/wiki/showCursor|MTASA Wiki}
     * @param thePlayer The player you want to show or hide the cursor of.
     * @param show A boolean value determining whether to show (true) or hide (false) the cursor.  {{OptionalArg}} 
     * @param toggleControls A boolean value determining whether to disable controls whilst the cursor is showing.  true implies controls are disabled, false implies controls remain enabled.
     * @default true
     * @return Returns ''true'' if the player's cursor was shown or hidden successfully, ''false'' otherwise.
     */
    export function showCursor(thePlayer: player, show: boolean, toggleControls: boolean, ): boolean;

    /**
     * This function attaches one element to another, so that the first one follows the second whenever it moves. 
     * If an attempt is made to attach two elements that are already attached the opposite way (eg theElement becomes theAttachToElement and vice versa), the 1st attachment order is automatically detached in favor of the 2nd attachment order. For example, if carA was attached to carB, now carB is attached to carA. Also, an element cannot be attached to two separate elements at one time. For example, two cars can be attached to one single car, but one single car cannot be attached to two separate cars. If you attempt to do this, the existing attachment will automatically be dropped in favor of the new attachment. For example, if carA is asked to attached to carB then carC, it is only attached to carC.
     * This is not compatible with all elements.  The following elements are compatible:
     * * [[Ped]]s
     * * [[Player]]s
     * * [[Blip]]s
     * * [[Vehicle]]s
     * * [[Object]]s
     * * [[Marker]]s
     * * [[Pickup]]s
     * * [[Sound]]s
     * * [[Colshape]]s
     * * [[createWeapon|Weapons]]
     * * [[Camera]]s
     * *The offset coodinates reflect the object space, not the world space. This means that you cannot calculate the exact offsets between two objects by pre-positioning them in the map editor as a reference. Please see [[attachElementsOffsets]] for more details.
     * *Due to a limitation in GTA, unexpected attach rotations may occur if all rotation offsets are non-zero. (i.e. Try to ensure at least one of 'xRotOffset', 'yRotOffset' or 'zRotOffset' is zero).}}
     * @see {@link https://wiki.multitheftauto.com/wiki/attachElements|MTASA Wiki}
     * @param theElement The element to be attached.
     * @param theAttachToElement The element to attach the first to.  {{OptionalArg}} 
     * @param xPosOffset The x offset, if you want the elements to be a certain distance from one another (default 0).
     * @default 0
     * @param yPosOffset The y offset (default 0).
     * @default 0
     * @param zPosOffset The z offset (default 0).
     * @default 0
     * @param xRotOffset The x rotation offset (default 0).
     * @default 0
     * @param yRotOffset The y rotation offset (default 0).
     * @default 0
     * @param zRotOffset The z rotation offset (default 0).
     * @default 0
     * @return Returns ''true'' if the attaching process was successful, ''false'' otherwise.
     */
    export function attachElements(theElement: element, theAttachToElement: element, xPosOffset: number, yPosOffset: number, zPosOffset: number, xRotOffset: number, yRotOffset: number, zRotOffset: number, ): boolean;

    /**
     * This function is used to create a new dummy element in the [[element tree]] which do not necessarily represent an entity within the San Andreas world. A common use for this function is for creating custom elements, such as a Flag or a Base.
     * Elements created using this function are placed in the element tree with their parent as the 'dynamic' map element.
     * @see {@link https://wiki.multitheftauto.com/wiki/createElement|MTASA Wiki}
     * @param elementType The type of element being created.
     * @param elementID The ID of the element being created.
     * @default nil
     * @return Returns the element if it was successfully created. Returns ''false'' if the arguments are wrong.
     */
    export function createElement(elementType: string, elementID: string, ): element;

    /**
     * This function destroys an [[element]] and all elements within it in the hierarchy (its children, the children of those children etc). [[player|Player]] elements cannot be destroyed using this function. A player can only be removed from the hierarchy when they quit or are kicked. The root element also cannot be destroyed, however, passing the root as an argument will wipe all elements from the server, except for the players and clients, which will become direct descendants of the root node, and other elements that cannot be destroyed, such as resource root elements.
     * Players are not the only elements that cannot be deleted. This list also includes remote clients and console elements.
     * @see {@link https://wiki.multitheftauto.com/wiki/destroyElement|MTASA Wiki}
     * @param elementToDestroy The element you wish to destroy.
     * @return Returns ''true'' if the element was destroyed successfully, ''false'' if either the element passed to it was invalid or it could not be destroyed for some other reason (for example, clientside destroyElement can't destroy serverside elements).
     */
    export function destroyElement(elementToDestroy: element, ): boolean;

    /**
     * This function detaches attached elements from one another.
     * @see {@link https://wiki.multitheftauto.com/wiki/detachElements|MTASA Wiki}
     * @param theElement The element to be detached (the child)  {{OptionalArg}} 
     * @param theAttachToElement The element you wish to detach from, will detach from the attached element if this isnt specified.
     * @return Returns ''true'' if the detaching was successful, ''false'' otherwise.
     */
    export function detachElements(theElement: element, theAttachToElement: element, ): boolean;

    /**
     * This function returns a table of all the elements attached to the specified element
     * @see {@link https://wiki.multitheftauto.com/wiki/getAttachedElements|MTASA Wiki}
     * @param theElement : The element which you require the information from.
     * @return Returns a table of all the elements attached to the specified element.
     */
    export function getAttachedElements(theElement: element, ): table;

    /**
     * This function returns the alpha (transparency) value for the specified [[element]]. This can be a [[player]], [[ped]], [[object]], [[vehicle]] or [[Element/Weapon|weapon]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementAlpha|MTASA Wiki}
     * @param theElement The element whose alpha you want to retrieve.
     * @return Returns an integer (0-255; 0 = transparent) indicating the element's alpha, or ''false'' if invalid arguments were passed.
     */
    export function getElementAlpha(theElement: element, ): number;

    /**
     * This function returns the offsets of an element that has been attached to another element using [[attachElements]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementAttachedOffsets|MTASA Wiki}
     * @param theElement The attached element.
     * @return Returns 6 [[float|floats]], of which the first 3 indicate the position offset (x, y, z), and the last 3 indicate the rotation offset (x, y, z), if successful. ''false'' otherwise.
     */
    export function getElementAttachedOffsets(theElement: element, ): LuaMultiReturn<[number,number,number,number,number,number]>;

    /**
     * This function determines the element that the specified element is attached to.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementAttachedTo|MTASA Wiki}
     * @param theElement The element you require the information for.
     * @return Returns the element that the chosen element is attached to, or ''false'' if the element isn't attached to another element.
     */
    export function getElementAttachedTo(theElement: element, ): element;

    /**
     * This function indicates if a specific element is set to have collisions disabled. An element without collisions does not interact with the physical environment and remains static.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementCollisionsEnabled|MTASA Wiki}
     * @param theElement The element for which you want to check whether collisions are enabled
     * @return Returns ''true'' if the collisions are enabled, ''false'' otherwise.
     */
    export function getElementCollisionsEnabled(theElement: element, ): boolean;

    /**
     * This function returns an element from the specified ID. If more than one element with the same ID exists, only the first one in the order it appears in the XML tree will be returned by this function.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementByID|MTASA Wiki}
     * @param id The ID of the element as it appears in the XML file or as set by setElementID.  {{optionalArg}}
     * @param index If there are two or more elements of the same ID it will return the element with the specified index starting at 0.
     * @default 0
     * @return Returns the [[element]] with the given ID, or ''false'' if no such element exists.
     */
    export function getElementByID(id: string, index?: number, ): element;

    /**
     * This function returns one of the child elements of a given parent element. The child element is selected by its index (0 for the first child, 1 for the second and so on).
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementChild|MTASA Wiki}
     * @param parent the element above the one to be returned in the hierarchy.
     * @param index the elements index (0 for the first element, 1 for the second, etc).
     * @return Returns the requested element if it exists, or ''false'' if it doesn't.
     */
    export function getElementChild(parent: element, index: number, ): element;

    /**
     * This function is used to retrieve a list of the child elements of a given parent element. Note that it will only return direct children and not elements that are further down the [[element tree]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementChildren|MTASA Wiki}
     * @param parent Supply this argument with the parent of the children you want returned.
     * @param theType The type of element you want a list of. This is the same as the tag name in the .map file, so this can be used with a custom element type if desired. Built in types are:
     * @default nil
     * @return This function returns a ''table'' that contains a list of elements that the parent has. If the element has no children, it will return an empy ''table''. It will return ''false'' if the parent element does not exist.
     */
    export function getElementChildren(parent: element, theType?: string, ): table;

    /**
     * This function returns the number of children an element has. Note that only the direct children are counted and not elements that are further down the [[element tree]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementChildrenCount|MTASA Wiki}
     * @param parent the parent element
     * @return Returns an ''int'' with the number of child elements, or ''false'' if the parent element does not exist.
     */
    export function getElementChildrenCount(parent: element, ): number;

    /**
     * Some elements have an associated colshape, for example [[Marker]] and [[Pickup]]. This function is used to get the associated colshape.
     * @param theElement The element you want to get the colshape of
     * @return Returns ''colshape'' of the element, ''false'' if not or an invalid argument was passed to the function.
     */
    export function getElementColShape(theElement: element, ): colshape;

    /**
     * This function retrieves [[element data]] attached to an element under a certain key.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementData|MTASA Wiki}
     * @param theElement This is the element with data you want to retrieve.
     * @param key The name of the element data entry you want to retrieve. (Maximum 31 characters.)
     * @param inherit - toggles whether or not the function should go up the hierarchy to find the requested key in case the specified element doesnt have it.
     * @default true
     * @return This function returns a ''variable'' containing the requested element data, or ''false'' if the element or the element data does not exist. When getting data corresponding to a XML attribute, this is always a ''string''.
     */
    export function getElementData(theElement: element, key: string, inherit?: boolean, ): any;

    /**
     * This function allows you to retrieve the dimension of any element. The dimension determines what/who the element is visible to.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementDimension|MTASA Wiki}
     * @param theElement The element in which youd like to retrieve the dimension of.
     * @return Returns an integer for the dimension if '''theElement''' is valid, ''false'' otherwise.
     */
    export function getElementDimension(theElement: element, ): number;

    /**
     * This function returns the current health for the specified [[element]]. This can be a [[player]], a [[ped]], a [[vehicle]], or an [[object]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementHealth|MTASA Wiki}
     * @param theElement The player or vehicle whose health you want to check.
     * @return Returns a float indicating the element's health, or ''false'' if invalid arguments were passed.
     */
    export function getElementHealth(theElement: element, ): number;

    /**
     * This function gets the ID of an element. This is the "id" attribute of the element and is a string, NOT a number like a model ID, weapons ID or similar.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementID|MTASA Wiki}
     * @param theElement the element from which to retrieve the ID.
     * @return This returns a ''string'' containing the element ID. It will return an empty ''string'' if it has no ID. It will return ''false'' if the element is invalid.
     */
    export function getElementID(theElement: element, ): string;

    /**
     * This function allows you to retrieve the interior of any element. An interior is the current loaded place, 0 being outside.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementInterior|MTASA Wiki}
     * @param theElement The element of which youd like to retrieve the interior
     * @return Returns an [[int]] for the interior if '''theElement''' is valid, ''false'' otherwise.
     */
    export function getElementInterior(theElement: element, ): number;

    /**
     * This function gets an [[element]]'s transform [[matrix]]. This contains 16 float values that multiplied to a point will give you the point transformed. It is most useful for matrix calculations such as calculating offsets. For further information, please refer to a tutorial of matrices in computer graphics programming.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementMatrix|MTASA Wiki}
     * @param theElement The element which you wish to retrieve the matrix for.
     * @param legacy Set to false to return correctly setup matrix (i.e. Last column in the first 3 rows set to zero).
     * @default true
     * @return Returns a multi-dimensional array (which can be transformed into a proper [[matrix]] class using ''Matrix.create'' method) containing a 4x4 matrix. Returns ''false'' if the element is not streamed in, and not a [[vehicle]], [[ped]] or [[object]].
     */
    export function getElementMatrix(theElement: element, legacy?: boolean, ): table;

    /**
     * Returns the model ID of a given element. This can be a player/ped skin, a pickup model, an object model or a vehicle model.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementModel|MTASA Wiki}
     * @param theElement the element to retrieve the model ID of.
     * @return Returns the model ID if successful, ''false'' otherwise.
     * * * For players/peds: A GTASA player model (skin) ID. See [[Character Skins]].
     * * * For vehicles: The [[Vehicle IDs|vehicle ID]] of the vehicle.
     * * * For objects: An [[int]] specifying the model id.
     */
    export function getElementModel(theElement: element, ): number;

    /**
     * This function is used to determine the parent of an ''element''.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementParent|MTASA Wiki}
     * @param theElement The child of the parent element you want returned.
     * @return This returns the parent as an ''element''. It returns ''false'' if ''theElement'' is invalid, or is the root node.
     */
    export function getElementParent(theElement: element, ): element;

    /**
     * The getElementPosition function allows you to retrieve the position coordinates of an element.  This can be any real world element, including:
     * * [[Element/Player|Players]]
     * * [[Element/Vehicle|Vehicles]]
     * * [[Element/Object|Objects]]
     * * [[Element/Pickup|Pickups]]
     * * [[Element/Marker|Markers]]
     * * [[Element/Collision shape|Collision shapes]]
     * * [[Element/Blip|Blips]]
     * * [[Element/Radar area|Radar areas]]
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementPosition|MTASA Wiki}
     * @param theElement The element which youd like to retrieve the location of
     * @return Returns three ''float''s indicating the position of the element, ''x'', ''y'' and ''z'' respectively.
     */
    export function getElementPosition(theElement: element, ): LuaMultiReturn<[number,number,number]>;

    /**
     * Retrieve the rotation of elements.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementRotation|MTASA Wiki}
     * @param theElement The element whose rotation will be retrieved
     * @param rotOrder A string representing the rotation order desired when returning the http://en.wikipedia.org/wiki/Euler_angles euler angles. If omitted, default value is default. Allowed values are:
     * @default "default"
     * @return * ''rx, ry, rz'': 3 ''float''s representing the Euler rotation angles on the axis X, Y and Z (with the rotation order depending on the ''rotOrder'' argument) if ''element'' exists and is a valid element, ''false'' if it's invalid.
     */
    export function getElementRotation(theElement: element, rotOrder?: string, ): LuaMultiReturn<[number,number,number]>;

    /**
     * This function is used to retrieve the type of an element.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementType|MTASA Wiki}
     * @param theElement The element you wish to get the type of.
     * @return Returns a ''string'' containing the element type, ''false'' if invalid arguments were passed.
     */
    export function getElementType(theElement: element, ): string;

    /**
     * This function returns three floats containing the velocity (movement speeds) along the X, Y, and Z axis respectively. This means that velocity values can be positive and negative for each axis. 
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementVelocity|MTASA Wiki}
     * @param theElement : The element you wish to retrieve the velocity of.
     * @return If succesful, returns three ''float''s that represent the element's current velocity along the ''x'', ''y'', and ''z'' axis respectively. This function can fail if the element is a player in a car. Use the vehicle element in this case. It will also fail if the element specified does not have a velocity, or does not exist. In case of failure, the first return value will be ''false''.
     * * The returned values are expressed in GTA units per 1/50th of a second[http://forum.mtasa.com/viewtopic.php?f=91&t=31225]. A GTA Unit is equal to one metre[http://gta.wikia.com/Unit#GTA3.2C_GTAVC_.26_GTASA].
     */
    export function getElementVelocity(theElement: element, ): LuaMultiReturn<[number,number,number]>;

    /**
     * This function is used to retrieve a list of all elements of the specified type. This can be useful, as it disregards ''where'' in the element tree it is. It can be used with either the built in types (listed below) or with any custom type used in a .map file. For example, if there is an element of type "flag" (e.g. <flag />) in the .map file, the using "flag" as the type argument would find it.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementsByType|MTASA Wiki}
     * @return Returns a ''table'' containing all the elements of the specified type. Returns an empty ''table'' if there are no elements of the specified type. Returns ''false'' if the string specified is invalid (or not a string).
     */
    export function getElementsByType(theType: string, startat: element, ): table;

    /**
     * This function is used to retrieve a list of all elements in a colshape, of the specified type.
     * * For legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move
     * * This function doesn't verify whether elements are in the same dimension and interior, additional checks could be implemented manually if they are needed
     * }}
     * @param theShape The colshape you want to get the elements from.
     * @param elemType The type of element you want a list of. This can be any element type, the common ones being:
     * @default nil
     * @return Returns a [[table]] containing all the elements inside the colshape, of the specified type. Returns an empty [[table]] if there are no elements inside. Returns ''false'' if the colshape is invalid.
     */
    export function getElementsWithinColShape(theShape: colshape, elemType?: string, ): table;

    /**
     * This function return the low LOD element that an element is associated with.
     * @see {@link https://wiki.multitheftauto.com/wiki/getLowLODElement|MTASA Wiki}
     * @param theElement The element whose low LOD version we want to get.
     * @return Returns a low LOD element if successful, ''false'' otherwise.
     */
    export function getLowLODElement(theElement: element, ): element;

    /**
     * This function returns the root node of the [[element tree]], called ''root''. This node contains every other element: all resource root elements, players and remote clients. It is never destroyed and cannot be destroyed using [[destroyElement]].
     * It is often used to attach handler functions to events triggered for any element, or also to make a scripting function affect all elements.
     * @see {@link https://wiki.multitheftauto.com/wiki/getRootElement|MTASA Wiki}
     * @return Returns the root [[element]].
     */
    export function getRootElement(): element;

    /**
     * This function checks if an element has [[element data]] available under a certain key.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/hasElementData|MTASA Wiki}
     * @param theElement This is the element with data you want to check.
     * @param key The name of the element data entry you want to check for. (Maximum 31 characters.)
     * @param inherit - toggles whether or not the function should go up the hierarchy to find the requested key in case the specified element doesnt have it.
     * @default true
     * @return This function returns ''true'' if the element contains element data for ''key'', or ''false'' if the element doesn't exist or there is no data associated with the ''key''.
     */
    export function hasElementData(theElement: element, key: string, inherit?: boolean, ): boolean;

    /**
     * This function checks if a value is an [[element]] or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElement|MTASA Wiki}
     * @param theValue : The value that we want to check.
     * @return Returns ''true'' if the passed value is an element, ''false'' otherwise.
     */
    export function isElement(theValue: any, ): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This functions checks whether or not an element is attached to another element.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementAttached|MTASA Wiki}
     * @param theElement The element to check for attachment.
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the specified element is attached to another element, ''false'' if it is not attached or ''nil'' if an improper argument was passed.
     */
    export function isElementAttached(theElement: element, ): boolean;

    /**
     * This function checks whether an element is double-sided as set by [[setElementDoubleSided]] or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementDoubleSided|MTASA Wiki}
     * @param theElement The element in which youd like to check the double-sidedness of.
     * @return Returns ''true'' if the '''theElement''' is double-sided, ''false'' otherwise.
     */
    export function isElementDoubleSided(theElement: element, ): boolean;

    /**
     * This function checks if element has been frozen.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementFrozen|MTASA Wiki}
     * @param theElement the element whose freeze status we want to check.
     * @return *Returns ''true'' if the element is frozen, ''false'' if it isn't or if invalid arguments were passed.
     */
    export function isElementFrozen(theElement: element, ): boolean;

    /**
     * This function checks whether an [[element]] is submerged in water.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementInWater|MTASA Wiki}
     * @param theElement : The element to check.
     * @return Returns ''true'' if the passed element is in water, ''false'' if it isn't, or if the element is invalid.
     */
    export function isElementInWater(theElement: element, ): boolean;

    /**
     * This function reveals if an element is low LOD.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementLowLOD|MTASA Wiki}
     * @param theElement The element whose low LOD status we want to get.
     * @return Returns ''true'' if the element is low LOD, ''false'' otherwise.
     */
    export function isElementLowLOD(theElement: element, ): boolean;

    /**
     * This function is used to determine if an element is within a collision shape. Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move. Please also note that before 1.0.3, this did not function correctly when moving a colshape.
     * Please note that this function doesn't verify whether element is in the same dimension and interior, additional checks could be implemented manually if they are needed.
     * @param theElement The element youre checking.
     * @param theShape The colshape youre checking
     * @return Returns ''true'' if the element is within the colshape, ''false'' otherwise
     */
    export function isElementWithinColShape(theElement: element, theShape: colshape, ): boolean;

    /**
     * This function is used to determine if an [[element]] is within a [[marker]].
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementWithinMarker|MTASA Wiki}
     * @param theElement The element youre checking.
     * @param theMarker The marker youre checking.
     * @return Returns ''true'' if the element is within the marker, ''false'' otherwise
     */
    export function isElementWithinMarker(theElement: element, theMarker: marker, ): boolean;

    /**
     * [[file:SetElementAlpha.png|400px|thumb|right|Player ped alpha demonstration. Shown alpha levels are 255, 100 and 0 (left to right).]]
     * This function sets the alpha (transparency) value for the specified [[element]]. This can be a [[player]], [[ped]], [[object]], [[vehicle]] or [[Element/Weapon|weapon]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementAlpha|MTASA Wiki}
     * @param theElement The element whose alpha you want to set.
     * @param alpha The alpha value to set. Values are 0-255, where 255 is fully opaque and 0 is fully transparent.
     * @return Returns ''true'' or ''false'' if invalid arguments were passed.
     */
    export function setElementAlpha(theElement: element, alpha: number, ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementAngularVelocity|MTASA Wiki}
     * @param theElement The element to apply the spin to. Can be either a player, ped, object, vehicle or a Element/Weapon|custom weapon.
     * @param rx velocity around the X axis
     * @param ry velocity around the Y axis
     * @param rz velocity around the Z axis
     * @return Returns ''true'' if it was succesful, ''false'' otherwise.
     */
    export function setElementAngularVelocity(theElement: element, rx: number, ry: number, rz: number, ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementAngularVelocity|MTASA Wiki}
     * @param theElement The element to retrieve the angular velocity from. Can be either a player, ped, object, vehicle or a Element/Weapon|custom weapon. Server side supports only vehicles currently.
     * @return Returns three floats describing the x, y and z rotation
     */
    export function getElementAngularVelocity(theElement: element, ): LuaMultiReturn<[number,number,number]>;

    /**
     * This function updates the offsets of an element that has been attached to another element using [[attachElements]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementAttachedOffsets|MTASA Wiki}
     * @param theElement The attached element.  {{OptionalArg}} 
     * @param xPosOffset The x offset, if you want the elements to be a certain distance from one another (default 0).
     * @param yPosOffset The y offset (default 0).
     * @param zPosOffset The z offset (default 0).
     * @param xRotOffset The x rotation offset (default 0).
     * @param yRotOffset The y rotation offset (default 0).
     * @param zRotOffset The z rotation offset (default 0).
     * @return Returns ''true'' if the attaching process was successful, ''false'' otherwise.
     */
    export function setElementAttachedOffsets(theElement: element, xPosOffset: number, yPosOffset: number, zPosOffset: number, xRotOffset: number, yRotOffset: number, zRotOffset: number, ): boolean;

    /**
     * This function can disable or enable an element's collisions. An element without collisions does not interact with the physical environment and remains static.
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementCollisionsEnabled|MTASA Wiki}
     * @param theElement The element you wish to set the collisions of
     * @param enabled A boolean to indicate whether collisions are enabled (true) or disabled (false)
     * @return Returns ''true'' if the collisions were set succesfully, ''false'' otherwise.
     */
    export function setElementCollisionsEnabled(theElement: element, enabled: boolean, ): boolean;

    /**
     * This function stores [[element data]] under a certain key, attached to an element. Element data set using this is then synced with all clients and the server. The data can contain server created elements, but you should avoid passing data that is not able to be synced such as xmlnodes, acls, aclgroups etc.
     * As element data is synced to all clients, it can generate a lot of network traffic and be heavy on performance. Events are much more efficient for sending data from a client to the server only, or from the server to a specific client. <br/>
     * Usage of element data should be disencouraged where your goal can be achieved with events like above, and [[table|tables]] for storing and retrieving data.
     * Note this mode only works when setting element data serverside. Setting data clientside still sends the update to all clients if 'synchronize' is set to true.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementData|MTASA Wiki}
     * @param theElement The element you wish to attach the data to.
     * @param key The key you wish to store the data under. (Maximum 31 characters.)
     * @param value The value you wish to store. See element data for a list of acceptable datatypes.
     * @param syncMode Synchronisation mode.
     * @default "broadcast"
     * @return Returns ''true'' if the data was set succesfully, ''false'' otherwise.
     * * {{New items|5.0157|1.5.7-9.20477|
     */
    export function setElementData(theElement: element, key: string, value: any, syncMode?: any, ): boolean;

    /**
     * This function allows you to set the [[dimension]] of any element. The dimension determines what/who the element is visible to.
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementDimension|MTASA Wiki}
     * @param theElement The element in which youd like to set the dimension of.
     * @param dimension An integer representing the dimension ID. {{New feature/item|3.0154|1.5.3|11199|You can also use -1 to make the element visible in all dimensions (only valid to objects).}} Valid values are 0 to 65535.
     * @return Returns ''true'' if '''theElement''' and '''dimension''' are valid, ''false'' otherwise.
     * * Also returns false if '''theElement''' is a player and it's not alive.
     */
    export function setElementDimension(theElement: element, dimension: number, ): boolean;

    /**
     * This function allows you to set the double-sidedness of an element's model. When an element's model is double-sided, it's back facing triangles become visible.
     * Possible uses of double-sidedness are: Elimination of invisible walls, using buildings as enclosures, using inverted landmasses as large pits or to make cave networks. It can also remove the need to add extra triangles to custom models when trying to make them appear solid from all directions.
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementDoubleSided|MTASA Wiki}
     * @param theElement The element in which youd like to set the double-sidedness of.
     * @return Returns ''true'' if '''theElement''' is valid, ''false'' otherwise.
     */
    export function setElementDoubleSided(theElement: element, enable: boolean, ): boolean;

    /**
     * This function freezes an element (stops it in its position and disables movement) or unfreezes it.
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementFrozen|MTASA Wiki}
     * @param theElement The element whose freeze status we want to change.
     * @param freezeStatus A boolean denoting whether we want to freeze (true) or unfreeze (false) it.
     * @return Returns ''true'' if the element was frozen, ''false'' if it wasn't or if invalid arguments are passed.
     */
    export function setElementFrozen(theElement: element, freezeStatus: boolean, ): boolean;

    /**
     * This function sets the health for the specified [[element]]. This can be a [[ped]], [[object]] or a [[vehicle]].
     * *'''650:''' white steam 0%, black smoke 0%
     * *'''450:''' white steam 100%, black smoke 50%
     * *'''250:''' white steam 0%, black smoke 100%
     * *'''249:''' fire with big black smoke
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementHealth|MTASA Wiki}
     * @param theElement The ped, vehicle or object whose health you want to set.
     * @param newHealth A float indicating the new health to set for the element.
     * @return Returns ''true'' if the new health was set successfully, or ''false'' if invalid arguments were passed.
     */
    export function setElementHealth(theElement: element, newHealth: number, ): boolean;

    /**
     * This function sets the ID of an element to a string. This can be anything from an identifying number, to a name.
     * You can only change the ID of an element clientside if that element has been created clientside as well.
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementID|MTASA Wiki}
     * @param theElement The element you want to set the ID of.
     * @param name The new ID for theElement.
     * @return This returns ''true'' if successful. It will return ''false'' if '''theElement''' is invalid, or does not exist, or if '''name''' is invalid, or is not a string.
     */
    export function setElementID(theElement: element, name: string, ): boolean;

    /**
     * This function allows you to set the [[interior]] of any element. An interior is the current loaded place, 0 being outside.
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementInterior|MTASA Wiki}
     * @param theElement The element in which youd like to set the interior of.
     * @param interior The interior you want to set the element to. Valid values are 0 to 255.  {{OptionalArg}} 
     * @param x A floating point number representing the X coordinate on the map.
     * @param y A floating point number representing the Y coordinate on the map.
     * @param z A floating point number representing the Z coordinate on the map.
     * @return Returns ''true'' if '''theElement''' and '''interior''' are valid arguments, ''false'' otherwise.
     */
    export function setElementInterior(theElement: element, interior: number, x?: number, y?: number, z?: number, ): boolean;

    /**
     * Sets the model of a given element. This allows you to change the model of a player (or ped), a vehicle or an object.
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementModel|MTASA Wiki}
     * @param theElement the element you want to change.
     * @param model the model ID to set.  ** For players/peds: A GTASA player model (skin) ID. See [[Character Skins]].  ** For vehicles: The [[Vehicle IDs|vehicle ID]] of the vehicle being changed.  ** For objects/projectiles/weapons: An [[int]] specifying the model id.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setElementModel(theElement: element, model: number, ): boolean;

    /**
     * This function is used for setting an element as the parent of another element.
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementParent|MTASA Wiki}
     * @param theElement The element that you wish to set the parent of.
     * @param parent The element you wish to be the parent of theElement.
     * @return Returns ''true'' if both [[element]]s are valid, ''false'' otherwise.
     */
    export function setElementParent(theElement: element, parent: element, ): boolean;

    /**
     * This function sets the position of an element to the specified coordinates.
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementPosition|MTASA Wiki}
     * @param theElement A valid element to be moved.
     * @param x The x coordinate of the destination.
     * @param y The y coordinate of the destination.
     * @param z The z coordinate of the destination.
     * @param warp teleports players, resetting any animations they were doing. Setting this to false preserves the current animation.
     * @default true
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     */
    export function setElementPosition(theElement: element, x: number, y: number, z: number, warp?: boolean, ): boolean;

    /**
     * Sets the rotation of elements according to the world (does not work with players that are on the ground).
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementRotation|MTASA Wiki}
     * @param theElement The element whose rotation will be set
     * @param rotX The elements rotation around the x axis in degrees
     * @param rotY The elements rotation around the y axis in degrees
     * @param rotZ The elements rotation around the z axis in degrees  {{New feature|3.0110|1.1|
     * @param rotOrder A string representing the rotation order desired when interpreting the provided http://en.wikipedia.org/wiki/Euler_angles euler angles. If omitted, default value is default. Allowed values are:
     * @default "default"
     * @param conformPedRotation Relevant only for peds and will be ignored for other element types. A bool which should be set to true to ensure the ped rotation is correctly set in all circumstances. Failing to set this argument may result in the ped rotation being inverted whilst it is in the air and other inconsistencies. The default value of false is for backward compatibility with scripts which may depend upon the incorrect behaviour.  }}
     * @default false
     * @return Returns ''true'' if the element rotation was successfully set and ''false'' otherwise.
     */
    export function setElementRotation(theElement: element, rotX: number, rotY: number, rotZ: number, rotOrder?: string, conformPedRotation?: boolean, ): boolean;

    /**
     * This function sets the velocity (movement speeds) along each axis, for an element.
     * This is not compatible with all elements. Only the following elements are compatible:
     * * [[Ped]]s.
     * * [[Vehicle]]s.
     * * [[Object]]s.
     * * [[Projectile]]s.
     * Objects and projectiles velocity can only be set clientside.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementVelocity|MTASA Wiki}
     * @param theElement The element you wish to set the velocity of.
     * @param speedX A floating point value determining the speed along the X axis.
     * @param speedY A floating point value determining the speed along the Y axis.
     * @param speedZ A floating point value determining the speed along the Z axis.
     * @return Returns ''true'' if the speed was set successfully, ''false'' if a bad element was specified or other bad arguments.
     */
    export function setElementVelocity(theElement: element, speedX: number, speedY: number, speedZ: number, ): boolean;

    /**
     * This function assigns a low LOD element to an element. The low LOD element is displayed when its associated element is not fully visible. If a low LOD element is assigned to several elements, it will be displayed when any of these elements are not fully visible.
     * @see {@link https://wiki.multitheftauto.com/wiki/setLowLODElement|MTASA Wiki}
     * @param theElement The element whose low LOD version we want to change.
     * @return Returns ''true'' if the assignment was successful, ''false'' otherwise.
     */
    export function setLowLODElement(theElement: element, lowLODElement: element, ): boolean;

    /**
     * This function allows you to register a custom [[event]]. Custom events function exactly like the built-in events. See [[event system]] for more information on the event system.
     * @see {@link https://wiki.multitheftauto.com/wiki/addEvent|MTASA Wiki}
     * @param eventName The name of the event you wish to create.
     * @param allowRemoteTrigger A boolean specifying whether this event can be called remotely using triggerClientEvent / triggerServerEvent or not.
     * @default false
     * @return Returns ''true'' if the event was added successfully, ''false'' if the event was already added.
     */
    export function addEvent(eventName: string, allowRemoteTrigger?: boolean, ): boolean;

    /**
     * This function will add an [[event]] handler. An event handler is a function that will be called when the event it's attached to is triggered. See [[event system]] for more information on how the event system works.
     * Event handlers are functions that are called when a particular event happens. Each event specifies a specific set of variables that are passed to the event handler and can be read by your function. The following global variables are available for use in handler functions:
     * *'''source''': the element that triggered the event
     * *'''this''': the element that the event handler is attached to
     * *'''sourceResource''': the resource that triggered the event
     * *'''sourceResourceRoot''': the root element of the resource that triggered the event
     * *'''client''': the client that triggered the event using [[triggerServerEvent]]. Not set if the event was not triggered from a client.
     * *'''eventName''': the name of the event which triggered the handler function.
     * }}
     * It is important to remember that events pass up and down the [[element tree]]. An event triggered on the root element is triggered on every element in the tree. An event triggered on any other element is triggered on its ancestors (its parent element and its parent's parent etc) and its children, grandchildren and great-grandchildren. You can use the ''getPropagated'' argument to specify if you wish your handler to receive events that have propagated up or down the tree.
     * The order in which event handlers are triggered is undefined, you should not rely on one event handler being executed before another.
     * @see {@link https://wiki.multitheftauto.com/wiki/addEventHandler|MTASA Wiki}
     * @param eventName The name of the event you want to attach the handler function to. Note: The maximum allowed length is 100 ASCII characters (that is, English letters and numerals)```
     * @param attachedTo The element you wish to attach the handler to. The handler will only be called when the event it is attached to is triggered for this element, or one of its children. Often, this can be the root element (meaning the handler will be called when the event is triggered for any element).
     * @param handlerFunction The handler function you wish to call when the event is triggered. This function will be passed all of the events parameters as arguments, but it isnt required that it takes all of them.
     * @param propagate A boolean representing whether the handler will be triggered if the event was propagated down or up the element tree (starting from the source), and not triggered directly on attachedTo (that is, handlers attached with this argument set to false will only be triggered if source == this). In GUI events you will probably want to set this to false.  {{New_feature|3.0131|1.3.1|
     * @default true
     * @return Returns ''true'' if the event handler was attached successfully. Returns ''false'' if the specified event could not be found or any parameters were invalid.
     */
    export function addEventHandler(eventName: string, attachedTo: element, handlerFunction: HandleFunction, propagate?: boolean, priority?: string, ): boolean;

    /**
     * This function is used to stop the automatic internal handling of events, for example this can be used to prevent an item being given to a player when they walk over a pickup, by canceling the [[onPickupUse]] event. 
     * [[cancelEvent]] does not have an effect on all events, see the individual event's pages for information on what happens when the event is canceled. [[cancelEvent]] does not stop further event handlers from being called, as the order of event handlers being called is undefined in many cases. Instead, you can see if the currently active event has been cancelled using [[wasEventCancelled]].
     * The use of cancelEvent outside of an event handler has no effect.
     * If you implement your own custom events and want to handle them being cancelled, you should call [[wasEventCancelled]] to check after your call to [[triggerEvent]].
     * @see {@link https://wiki.multitheftauto.com/wiki/cancelEvent|MTASA Wiki}
     * @return Always returns ''true''.
     */
    export function cancelEvent(cancel: boolean, reason: string, ): boolean;

    /**
     * Stops a latent event from completing
     * @see {@link https://wiki.multitheftauto.com/wiki/cancelLatentEvent|MTASA Wiki}
     * @param thePlayer The player who is receiving the event.
     * @param handle A handle previous got from getLatentEventHandles.
     * @return Returns a true if the latent event was successfully cancelled, or false if it was not
     */
    export function cancelLatentEvent(thePlayer: player, handle: number, ): boolean;

    /**
     * This function gets the attached functions from the event and attached element from current lua script.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getEventHandlers|MTASA Wiki}
     * @param eventName The name of the event. For example ( onPlayerWasted ).
     * @param attachedTo The element attached to.
     * @return Returns table with attached functions, empty table otherwise.
     */
    export function getEventHandlers(eventName: string, attachedTo: element, ): table;

    /**
     * Gets the currently queued latent events. The last one in the table is always the latest event queued. Each returned handle can be used with [[getLatentEventStatus]] or [[cancelLatentEvent]]
     * @see {@link https://wiki.multitheftauto.com/wiki/getLatentEventHandles|MTASA Wiki}
     * @param thePlayer The player who is receiving the events.
     * @return Returns a table of handles or false if invalid arguments were passed.
     */
    export function getLatentEventHandles(thePlayer: player, ): table;

    /**
     * Gets the status of one queued latent event.
     * @see {@link https://wiki.multitheftauto.com/wiki/getLatentEventStatus|MTASA Wiki}
     * @param thePlayer The player who is receiving the event.
     * @param handle A handle previous got from getLatentEventHandles.
     * @return Returns a table with the following info or false if invalid arguments were passed:
     * * *'''tickStart:''' A number estimating how many ticks until the data transfer starts (Negative means the transfer has already started)
     * * *'''tickEnd:''' A number estimating how many ticks until the data transfer completes
     * * *'''totalSize:''' A number representing how many bytes in total this transfer will transfer
     * * *'''percentComplete:''' A number between 0-100 saying how much is done
     */
    export function getLatentEventStatus(thePlayer: player, handle: number, ): table;

    /**
     * This functions removes a handler function from an [[event]], so that the function is not called anymore when the event is triggered. See [[event system]] for more information on how the event system works.
     * @see {@link https://wiki.multitheftauto.com/wiki/removeEventHandler|MTASA Wiki}
     * @param eventName The name of the event you want to detach the handler function from.
     * @param attachedTo The element the handler was attached to.
     * @param functionVar The handler function that was attached.
     * @return Returns ''true'' if the event handler was removed successfully. Returns ''false'' if the specified event handler could not be found or invalid parameters were passed.
     */
    export function removeEventHandler(eventName: string, attachedTo: element, functionVar: HandleFunction, ): boolean;

    /**
     * This function will trigger a named [[event]] on a specific [[element]] in the [[element tree]]. See [[event system]] for more information on how the event system works.
     * You can use the value returned from this function to determine if the event was cancelled by one of the event handlers. You should determine what your response (if any) to this should be based on the event's purpose. Generally, cancelling an event should prevent any further code being run that is dependent on whatever triggered that event. For example, if you have an ''onFlagCapture'' event, cancelling it would be expected to prevent the flag being able to be captured. Similarly, if you have ''onPlayerKill'' as an event you trigger, canceling it would either be expected to prevent the player being killed from dying or at least prevent the player from getting a score for it.
     * @see {@link https://wiki.multitheftauto.com/wiki/triggerEvent|MTASA Wiki}
     * @param eventName The name of the event you wish to trigger
     * @param baseElement The element you wish to trigger the event on. See event system for information on how this works.  {{OptionalArg}} 
     * @param argument1 The first argument that the event handler expects should be added after the baseElement variable.
     * @return * Returns '''nil''' if the arguments are invalid or the event could not be found.  
     * * * Returns '''true''' if the event was triggered successfully, and ''was not'' cancelled using [[cancelEvent]].
     * * * Returns '''false''' if the event was triggered successfully, and ''was'' cancelled using [[cancelEvent]].
     */
    export function triggerEvent(eventName: string, baseElement: element, argument1: any, ...args: any[], ): boolean;

    /**
     * This function checks if the last completed event was cancelled. This is mainly useful for custom events created by scripts. 
     * Events can be cancelled using [[cancelEvent]], this indicates that the resource which triggered the event should do whatever it can to reverse any changes made by whatever caused the event. See [[triggerEvent]] for a more detailed explanation of this.
     * @see {@link https://wiki.multitheftauto.com/wiki/wasEventCancelled|MTASA Wiki}
     * @return Returns ''true'' if the event was cancelled, ''false'' if it wasn't or doesn't exist.
     */
    export function wasEventCancelled(): boolean;

    /**
     * Creates an explosion of a certain type at a specified point in the world. If creator is specified, the explosion will occur only in its dimension.
     * @see {@link https://wiki.multitheftauto.com/wiki/createExplosion|MTASA Wiki}
     * @param x a float value that specifies the X world coordinate where the explosion is created at.
     * @param y a float value that specifies the Y world coordinate where the explosion is created at.
     * @param z a float value that specifies the Z world coordinate where the explosion is created at.
     * @param theType an integer specifying the explosion type. Valid types are:  {{Explosions}}
     * @param creator the explosions simulated creator, the player responsible for it.
     * @default nil
     * @return *''true'' if the explosion was created.
     * * * ''false'' if invalid parameters were passed.
     */
    export function createExplosion(x: number, y: number, z: number, theType: number, creator?: player, ): boolean;

    /**
     * Closes a file handle obtained by [[fileCreate]] or [[fileOpen]].
     * @see {@link https://wiki.multitheftauto.com/wiki/fileClose|MTASA Wiki}
     * @param theFile The file handle to close.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function fileClose(theFile: file, ): boolean;

    /**
     * This function copies a file.{{Note|The file functions should not be used to implement configuration files. It is encouraged to use the XML functions for this instead.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/fileCopy|MTASA Wiki}
     * @param filePath : The path of the file you want to copy.
     * @param copyToFilePath : Where to copy the specified file to.
     * @param overwrite : If set to true it will overwrite a file that already exists at copyToFilePath.
     * @default false
     * @return Return true if the file was copied, else false if the 'filePath' doesn't exist.
     */
    export function fileCopy(filePath: string, copyToFilePath: string, overwrite?: boolean, ): boolean;

    /**
     * Creates a new file in a directory of a resource. If there already exists a file with the specified name, it is overwritten with an empty file.
     * @see {@link https://wiki.multitheftauto.com/wiki/fileCreate|MTASA Wiki}
     * @param filePath The filepath of the file to be created in the following format: :resourceName/path. resourceName is the name of the resource the file is in, and path is the path from the root directory of the resource to the file.  :For example, if you want to create a file named 'myfile.txt' in the resource 'mapcreator', it can be created from another resource this way: ''fileCreate(":mapcreator/myfile.txt")''.  :If the file is in the current resource, only the file path is necessary, e.g. ''fileCreate("myfile.txt")''.
     * @return If successful, returns a file handle which can be used with other file functions ([[fileWrite]], [[fileClose]]...). Returns ''false'' if an error occured.
     */
    export function fileCreate(filePath: string, ): file;

    /**
     * Deletes the specified file.
     * @see {@link https://wiki.multitheftauto.com/wiki/fileDelete|MTASA Wiki}
     * @param filePath The filepath of the file to delete in the following format: :resourceName/path. resourceName is the name of the resource the file is in, and path is the path from the root directory of the resource to the file.  :For example, if you want to delete a file name "myFile.txt" in the resource 'fileres', it can be deleted from another resource this way: ''fileDelete(":fileres/myFile.txt")''.  :If the file is in the current resource, only the file path is necessary, e.g. ''fileDelete("myFile.txt")''.
     * @return Returns ''true'' if successful, ''false'' otherwise (for example if there exists no file with the given name, or it does exist but is in use).
     */
    export function fileDelete(filePath: string, ): boolean;

    /**
     * This functions checks whether a specified file exists inside a resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/fileExists|MTASA Wiki}
     * @param filePath The filepath of the file, whose existence is going to be checked, in the following format: :resourceName/path. resourceName is the name of the resource the file is checked to be in, and path is the path from the root directory of the resource to the file.  :For example, if you want to check whether a file named 'myfile.txt' exists in the resource 'mapcreator', it can be done from another resource this way: ''fileExists(":mapcreator/myfile.txt")''.  :If the file, whose existence is going to be checked, is in the current resource, only the file path is necessary, e.g. ''fileExists("myfile.txt")''. Note that you must use forward slashes '/' for the folders, backslashes '\' will return false.
     * @return Returns ''true'' if the file exists, ''false'' otherwise.
     */
    export function fileExists(filePath: string, ): boolean;

    /**
     * Forces pending disk writes to be executed. [[fileWrite]] doesn't directly write to the hard disk but places the data in a temporary buffer; only when there is enough data in the buffer it is actually written to disk. Call this function if you need the data written right now without closing the file. This is useful for log files that might want to be read while the resource is still executing. [[fileFlush]] can be called after each log entry is written. Without this, the file may appear empty or outdated to the user.
     * @see {@link https://wiki.multitheftauto.com/wiki/fileFlush|MTASA Wiki}
     * @param theFile The file handle of the file you wish to flush.
     * @return Returns ''true'' if succeeded, ''false'' in case of failure (e.g. the file handle is invalid).
     */
    export function fileFlush(theFile: file, ): boolean;

    /**
     * This function retrieves the path of the given file.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/fileGetPath|MTASA Wiki}
     * @param theFile The file you want to get the path.
     * @return Returns a ''string'' representing the file path, ''false'' if invalid file was provided.
     */
    export function fileGetPath(theFile: file, ): string;

    /**
     * Returns the current read/write position in the given file.
     * @see {@link https://wiki.multitheftauto.com/wiki/fileGetPos|MTASA Wiki}
     * @param theFile the file handle you wish to get the position of.
     * @return Returns the file position if successful, or ''false'' if an error occured (e.g. an invalid handle was passed).
     */
    export function fileGetPos(theFile: file, ): number;

    /**
     * Returns the total size in bytes of the given file.
     * @see {@link https://wiki.multitheftauto.com/wiki/fileGetSize|MTASA Wiki}
     * @param theFile the file handle you wish to get the size of.
     * @return Returns the file size if successful, or ''false'' if an error occured (e.g. an invalid file handle was passed).
     */
    export function fileGetSize(theFile: file, ): number;

    /**
     * Checks if the file position is at the end of the file.
     * @see {@link https://wiki.multitheftauto.com/wiki/fileIsEOF|MTASA Wiki}
     * @param theFile A handle to the file you wish to check.
     * @return Returns ''true'' if the file position of the specified file is at the end of the file, ''false'' otherwise.
     */
    export function fileIsEOF(theFile: file, ): boolean;

    /**
     * Opens an existing file for reading and writing.
     * @see {@link https://wiki.multitheftauto.com/wiki/fileOpen|MTASA Wiki}
     * @param filePath The filepath of the file in the following format: :resourceName/path. resourceName is the name of the resource the file is in, and path is the path from the root directory of the resource to the file.  :For example, if there is a file named 'coolObjects.txt' in the resource 'objectSearch', it can be opened from another resource this way: ''fileOpen(":objectSearch/coolObjects.txt")''.  :If the file is in the current resource, only the file path is necessary, e.g. ''fileOpen("coolObjects.txt")''.
     * @param readOnly By default, the file is opened with reading and writing access. You can specify true for this parameter if you only need reading access.
     * @default false
     * @return If successful, returns a file handle for the file. Otherwise returns ''false'' (f.e. if the file doesn't exist).
     */
    export function fileOpen(filePath: string, readOnly?: boolean, ): file;

    /**
     * Reads the specified number of bytes from the given file starting at its current read/write position, and returns them as a string.
     * @see {@link https://wiki.multitheftauto.com/wiki/fileRead|MTASA Wiki}
     * @param theFile A handle to the file you wish to read from. Use fileOpen to obtain this handle.
     * @param count The number of bytes you wish to read.
     * @return Returns the bytes that were read in a string. Note that this string might not contain as many bytes as you specified if an error occured, i.e. end of file.
     */
    export function fileRead(theFile: file, count: number, ): string;

    /**
     * Renames the specified file.
     * @see {@link https://wiki.multitheftauto.com/wiki/fileRename|MTASA Wiki}
     * @param filePath The filepath of the source file in the following format: :resourceName/path. resourceName is the name of the resource the file is in, and path is the path from the root directory of the resource to the file. If the file is in the current resource, only the file path is necessary.
     * @param newFilePath Destination filepath for the specified source file in the same format.
     * @return If successful, returns ''true''. Otherwise returns ''false''.
     */
    export function fileRename(filePath: string, newFilePath: string, ): boolean;

    /**
     * Sets the current read/write position in the file.
     * @see {@link https://wiki.multitheftauto.com/wiki/fileSetPos|MTASA Wiki}
     * @param theFile The file handle of which you want to change the read/write position.
     * @param offset The new position. This is the number of bytes from the beginning of the file. If this value is larger than the file size, it is limited to 52,428,800 bytes (50 MB).
     * @return Returns where the offset was actually set at. I.e. if '''offset''' was past the end of the file, it will be set at the end of the file, and this position will be returned. Returns ''false'' in case of failure (e.g. the specified file handle is invalid).
     */
    export function fileSetPos(theFile: file, offset: number, ): number;

    /**
     * Writes one or more strings to a given file, starting at the current read/write position. Advances the position over the number of bytes that were written.
     * @see {@link https://wiki.multitheftauto.com/wiki/fileWrite|MTASA Wiki}
     * @param theFile A handle to the file you wish to write to. The file must have been opened with write access, i.e. the file handle must be a result of fileCreate or fileOpen with the readonly parameter set to false.
     * @param string1 The string to write.  *You can provide any number of additional strings to write after '''string1'''. These will be written in the order in which they are specified.
     * @return Returns the number of bytes successfully written to the file, returns ''false'' if invalid arguments were specified.
     */
    export function fileWrite(theFile: file, string1: string, string2?: string, ...args: any[], ): number;

    /**
     * This function will attach a scripting function (handler) to a console command, so that whenever a player or administrator uses the command the function is called.
     * Multiple command handlers can be attached to a single command, and they will be called in the order that the handlers were attached. Equally, multiple commands can be handled by a single function, and the ''commandName'' parameter used to decide the course of action.
     * For users, a command is in the format:
     * ''commandName'' ''argument1'' ''argument2''
     * This can be triggered from the player's console or directly from the chat box by prefixing the message with a forward slash (''/''). For server side handlers, the server admin is also able to trigger these directly from the server's console in the same way as they are triggered from a player's console.
     * @see {@link https://wiki.multitheftauto.com/wiki/addCommandHandler|MTASA Wiki}
     * @param commandName This is the name of the command you wish to attach a handler to. This is what must be typed into the console to trigger the function.
     * @param handlerFunction This is the function that you want the command to trigger, which has to be defined before you add the handler. This function can take two parameters, playerSource and commandName, followed by as many parameters as you expect after your command (see below). These are all optional.  {{OptionalArg}} 
     * @param restricted Specify whether or not this command should be restricted by default. Use this on commands that should be inaccessible to everyone as default except special users specified in the ACL (Access Control List). This is to make sure admin commands such as ie. punish wont be available to everyone if a server administrator forgets masking it in ACL. Make sure to add the command to your ACL under the proper group for it to be usefull (i.e <right name=command.killEveryone access=true></right>). This argument defaults to false if nothing is specified.  {{New feature|3|1.0|
     * @default false
     * @param caseSensitive Specifies if the command handler will ignore the case for this command name.  }}
     * @default true
     * @return Returns ''true'' if the command handler was added successfully, ''false'' otherwise.
     */
    export function addCommandHandler(commandName: string, handlerFunction: HandleFunction, restricted?: boolean, caseSensitive?: boolean, ): boolean;

    /**
     * Binds a player's key to a handler function or command, which will be called when the key is pressed. 
     * @see {@link https://wiki.multitheftauto.com/wiki/bindKey|MTASA Wiki}
     * @param thePlayer The player you wish to bind the key of.
     * @param key The key that was pressed
     * @param keyState The state of the key that was pressed, down if it was pressed, up if it was released.
     * @param handlerFunction The function that will be triggered when the players key is pressed. This function should have the form:  :<syntaxhighlight lang="lua">function functionName ( player keyPresser, string key, string keyState, [ var arguments, ... ] )</syntaxhighlight>  :The values passed to this function are:
     * @param arguments The optional arguments you specified when calling bindKey (see below).
     * @return Returns ''true'' if the key was bound, ''false'' otherwise.
     */
    export function bindKey(thePlayer: player, key: string, keyState: string, handlerFunction: HandleFunction, arguments: any, ...args: any[], ): boolean;

    /**
     * This function will call all the attached functions of an existing console command, for a specified player.
     *  
     * @see {@link https://wiki.multitheftauto.com/wiki/executeCommandHandler|MTASA Wiki}
     * @param commandName The name of the command you wish to execute. This is what must be typed into the console to trigger the function.
     * @param thePlayer The player that will be presented as executer of the command to the handler function(s) of the command.  {{OptionalArg}}
     * @param args Additional parameters that will be passed to the handler function(s) of the command that is called, separated by spaces.
     * @return Returns ''true'' if the command handler was called successfully, ''false'' otherwise.
     */
    export function executeCommandHandler(commandName: string, thePlayer: player, args: string, ): boolean;

    /**
     * This function is used to retrieve a list of all the registered command handlers of a given resource (or of all resources).
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getCommandHandlers|MTASA Wiki}
     * @param theResource The resource from which you wish to retrieve all command handlers. Or leave it empty to retrieve command handlers of all resources.
     * @return Returns a ''table'' containing all the commands of the given resource or a table with subtables containing the command and theResource pointer ( { "command", theResource } ). See examples below if you don't understand it.
     */
    export function getCommandHandlers(theResource: resource, ): table;

    /**
     * Gets the functions bound to a key. To bind a function to a key use the [[bindKey]] function
     * @see {@link https://wiki.multitheftauto.com/wiki/getFunctionsBoundToKey|MTASA Wiki}
     * @param thePlayer The player to get the functions from a key.
     * @param keyState A string that has one of the following values:
     * @return Returns a table of the key function(s).
     */
    export function getFunctionsBoundToKey(thePlayer: player, key: string, keyState: string, ): table;

    /**
     * getKeyBoundToFunction allows retrieval of the first key bound to a function.
     * @see {@link https://wiki.multitheftauto.com/wiki/getKeyBoundToFunction|MTASA Wiki}
     * @param thePlayer The player you are checking the function bound to a key
     * @param theFunction The function in which you would like to check the bound key
     * @return Returns a string of the first key the function was bound to.
     */
    export function getKeyBoundToFunction(thePlayer: player, theFunction: HandleFunction, ): string;

    /**
     * Checks whether a GTA control is enabled or disabled for a certain player.
     * @see {@link https://wiki.multitheftauto.com/wiki/isControlEnabled|MTASA Wiki}
     * @param thePlayer The player you wish the control status of.
     * @param control The control you wish to check. See control names for a list of possible controls.
     * @return Returns ''true'' if control is enabled, ''false'' otherwise.
     */
    export function isControlEnabled(thePlayer: player, control: string, ): boolean;

    /**
     * This function removes a command handler, that is one that has been added using [[addCommandHandler]]. This function can only remove command handlers that were added by the resource that it is called in.
     * @see {@link https://wiki.multitheftauto.com/wiki/removeCommandHandler|MTASA Wiki}
     * @param commandName the name of the command you wish to remove.
     * @param handler the specific handler function to remove. If not specified, all handler functions for the command (from the calling resource) will be removed. This argument is only available in the server.
     * @return Returns ''true'' if the command handler was removed successfully, ''false'' if the command doesn't exist.
     */
    export function removeCommandHandler(commandName: string, handler?: HandleFunction, ): boolean;

    /**
     * Enables or disables the use of all GTA controls for a specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/toggleAllControls|MTASA Wiki}
     * @param thePlayer The player you wish to toggle the control ability of.
     * @param enabled A boolean value representing whether or not the controls will be usable.  {{OptionalArg}}
     * @param gtaControls A boolean deciding whether the enabled parameter will affect GTAs internal controls.
     * @default true
     * @param mtaControls A boolean deciding whether the enabled parameter will affect MTAs own controls., e.g. chatbox.
     * @default true
     * @return This function returns ''true'' if controls were toggled successfully, false otherwise.
     */
    export function toggleAllControls(thePlayer: player, enabled: boolean, gtaControls: boolean, mtaControls: boolean, ): boolean;

    /**
     * Enables or disables the use of a GTA control for a specific player.
     * @see {@link https://wiki.multitheftauto.com/wiki/toggleControl|MTASA Wiki}
     * @param thePlayer The player you wish to toggle the control ability of.
     * @param control The control that you want to toggle the ability of. See control names for a list of possible controls.
     * @param enabled A boolean value representing whether or not the key will be usable or not.
     * @return This function ''true'' if the control was set successfully, ''false'' otherwise.
     */
    export function toggleControl(thePlayer: player, control: string, enabled: boolean, ): boolean;

    /**
     * Removes an existing key bind from the specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/unbindKey|MTASA Wiki}
     * @param thePlayer The player you wish to unbind the key of.
     * @param key The key you wish to unbind. See Key names for a list of valid key names.
     * @param keyState is optional in Syntax 2.
     * @return Returns '''true'' if the key was unbound, ''false'' if it was not previously bound or invalid arguments were passed to the function.
     */
    export function unbindKey(thePlayer: player, key: string, keyState: string, command: string, ): boolean;

    /**
     * [[Image:Mtasa_markers.png|thumb|337px|This image shows all the different marker types available using this function.]]
     * This function creates a marker. A marker is a 3D model in the world that can highlight a particular point or area, often used to instruct players where to go to perform actions such as entering buildings.
     * There are various limits that govern the maximum number of each type that can be visible at once. These are:
     * * Coronas: 32
     * * Checkpoints, Rings, Cylinders and Arrows combined: 32
     * You are able to create as many markers as you wish (memory and element limit permitting), but the player will only be able to see the nearest ones up to the limit.
     * <br><br><br><br>
     * @see {@link https://wiki.multitheftauto.com/wiki/createMarker|MTASA Wiki}
     * @param x : A floating point number representing the X coordinate on the map.
     * @param y : A floating point number representing the Y coordinate on the map.
     * @param z : A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
     * @param theType : The visual type of the marker to be created. Possible values:  {{Marker_types}}
     * @default "checkpoint"
     * @param size : The diameter of the marker to be created, in meters.
     * @default 4.0
     * @param r : An integer number representing the amount of red to use in the colouring of the marker (0 - 255).
     * @default 0
     * @param g : An integer number representing the amount of green to use in the colouring of the marker (0 - 255).
     * @default 0
     * @param b : An integer number representing the amount of blue to use in the colouring of the marker (0 - 255).
     * @default 255
     * @param a : An integer number representing the amount of alpha to use in the colouring of the marker (0 - 255 where 0 is transparent and 255 is opaque).
     * @default 255
     * @param visibleTo : This defines which elements can see the marker. Defaults to visible to everyone. See visibility.
     * @default getRootElement(
     * @return Returns the [[marker]] element that was created, or ''false'' if the arguments are incorrect.
     */
    export function createMarker(x: number, y: number, z: number, theType?: string, size?: number, r?: number, g?: number, b?: number, a?: number, visibleTo?: element, ): marker;

    /**
     * This function returns the color and transparency for a marker element. Not all marker types support transparency.
     * @see {@link https://wiki.multitheftauto.com/wiki/getMarkerColor|MTASA Wiki}
     * @param theMarker : The marker that you wish to retrieve the color of.
     * @return Returns four [[int]]s corresponding to the amount of ''red'', ''green'', ''blue'' and ''alpha'' (respectively) of the marker, ''false'' if invalid arguments were passed.
     */
    export function getMarkerColor(theMarker: marker, ): LuaMultiReturn<[number,number,number,number]>;

    /**
     * Returns the number of markers that currently exist in the world.
     * @see {@link https://wiki.multitheftauto.com/wiki/getMarkerCount|MTASA Wiki}
     * @return Returns the number of markers that currently exist.
     */
    export function getMarkerCount(): number;

    /**
     * This function returns the icon name for a marker.
     * @see {@link https://wiki.multitheftauto.com/wiki/getMarkerIcon|MTASA Wiki}
     * @param theMarker : A marker element referencing the specified marker.
     * @return Returns ''false'' if the marker passed is invalid or a string containing one of the following:
     * * * '''"none"''': No icon
     * * * '''"arrow"''': Arrow icon
     * * * '''"finish"''': Finish (end-race) icon
     */
    export function getMarkerIcon(theMarker: marker, ): string;

    /**
     * This function returns a [[float]] containing the size of the specified marker.
     * @see {@link https://wiki.multitheftauto.com/wiki/getMarkerSize|MTASA Wiki}
     * @param myMarker : The marker that you wish to retrieve the size of.
     * @return Returns a [[float]] containing the size of the specified marker.
     */
    export function getMarkerSize(myMarker: marker, ): number;

    /**
     * This function returns the position of the specified marker's target, the position it points to. This only works for checkpoint markers and ring markers. For checkpoints it returns the position the arrow is pointing to, for ring markers it returns the position the ring is facing. You can set this target with [[setMarkerTarget]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getMarkerTarget|MTASA Wiki}
     * @param theMarker The marker you wish to retrieve the target position of.
     * @return Returns three ''float''s if a target is set, or ''false'' in the first variable and ''nil'' in the two others if the marker is invalid or no target is set.
     */
    export function getMarkerTarget(theMarker: marker, ): LuaMultiReturn<[number,number,number]>;

    /**
     * This function returns a marker's type.
     * @see {@link https://wiki.multitheftauto.com/wiki/getMarkerType|MTASA Wiki}
     * @param theMarker : A marker element referencing the specified marker.
     * @return * Returns one of the following strings:
     * * {{Marker_types}}
     * * If an invalid marker is specified, ''false'' is returned.
     */
    export function getMarkerType(theMarker: marker, ): string;

    /**
     * This function sets the color of the specified marker by modifying the values for red, green, blue and alpha.
     * @see {@link https://wiki.multitheftauto.com/wiki/setMarkerColor|MTASA Wiki}
     * @param theMarker The marker that you wish to set the color of.
     * @param r The amount of red in the final color (0 to 255).
     * @param g The amount of green in the final color (0 to 255).
     * @param b The amount of blue in the final color (0 to 255).
     * @param a The amount of alpha in the final color (0 to 255).
     * @return 
     */
    export function setMarkerColor(theMarker: marker, r: number, g: number, b: number, a: number, ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/setMarkerIcon|MTASA Wiki}
     * @param theMarker The marker to change the visual style of
     * @param icon A string referring to the type of icon, acceptable values are:
     * @return 
     */
    export function setMarkerIcon(theMarker: marker, icon: string, ): boolean;

    /**
     * This function sets the size of the specified marker.
     * Setting negative value will "flip" the marker, do nothing or make it invisible: 
     * * '''cylinder''' or '''arrow''': upside down
     * * '''ring''': inside out
     * * '''checkpoint''': disappear
     * * '''corona''': bigger
     * @see {@link https://wiki.multitheftauto.com/wiki/setMarkerSize|MTASA Wiki}
     * @param theMarker The marker that you wish to set the size of.
     * @param size A float representing new size of the marker.
     * @return Returns ''true'' if successful, ''false'' if failed.
     */
    export function setMarkerSize(theMarker: marker, size: number, ): boolean;

    /**
     * This function sets the 'target' for a marker. Only the ''checkpoint'' and ''ring'' marker types can have a target.
     * For ''checkpoint'' markers, the target is shown as an arrow aiming at the point specified.
     * For ''ring'' markers, the target is shown by rotating the whole ring so that it faces the point specified.
     * This function is most useful for setting up markers for races, where each marker points to the next one's position.
     * (This is mostly used in races!)
     * @see {@link https://wiki.multitheftauto.com/wiki/setMarkerTarget|MTASA Wiki}
     * @param theMarker The marker to set the target of
     * @param x The x axis of the coordinate to target the marker at
     * @param y The y axis of the coordinate to target the marker at
     * @param z The z axis of the coordinate to target the marker at
     * @return Returns ''true'' if target was set, ''false'' otherwise.
     */
    export function setMarkerTarget(theMarker: marker, x: number, y: number, z: number, ): boolean;

    /**
     * This function changes a marker's type. The type controls how the marker is displayed in the game. It's important that you use marker types that users are used to from the single player game. For example, checkpoints are used in races, rings are used for aircraft races, arrows are used for entering buildings etc. 
     * @see {@link https://wiki.multitheftauto.com/wiki/setMarkerType|MTASA Wiki}
     * @param theMarker : A marker element referencing the specified marker.
     * @param markerType : A string denoting the marker type. Valid values are:  {{Marker types}}
     * @return Returns ''true'' if the marker type was changed, ''false'' if it wasn't or marker values were invalid.
     */
    export function setMarkerType(theMarker: marker, markerType: string, ): boolean;

    /**
     * Creates an [[object]] [[element]] at a given position and rotation.
     * @see {@link https://wiki.multitheftauto.com/wiki/createObject|MTASA Wiki}
     * @param modelId A whole integer specifying the GTA:SA object model ID.
     * @param x A floating point number representing the X coordinate on the map.
     * @param y A floating point number representing the Y coordinate on the map.
     * @param z A floating point number representing the Z coordinate on the map.  {{OptionalArg}} 
     * @param rx A floating point number representing the rotation about the X axis in degrees.
     * @param ry A floating point number representing the rotation about the Y axis in degrees.
     * @param rz A floating point number representing the rotation about the Z axis in degrees.  {{New items|3.0120|1.2|
     * @param isLowLOD A bool value specifying if the object will be low LOD. A low LOD object has no collision and a longer draw distance.  }}
     * @default false
     * @return * Returns the [[object]] element if the creation was successful, ''false'' otherwise.
     */
    export function createObject(modelId: number, x: number, y: number, z: number, rx: number, ry: number, rz: number, isLowLOD: boolean, ): object;

    /**
     * This function returns the visible size of an object.
     * @see {@link https://wiki.multitheftauto.com/wiki/getObjectScale|MTASA Wiki}
     * @param theObject : the object you wish to return the scale of.
     * @return * Three [[float]] values indicating the scale of the object on the x, y, and z axis if successful, ''false'' otherwise.
     */
    export function getObjectScale(theObject: object, ): LuaMultiReturn<[number,number,number]>;

    /**
     * This function will smoothly move an object from its current position to a specified rotation and position.
     * @see {@link https://wiki.multitheftauto.com/wiki/moveObject|MTASA Wiki}
     * @param theObject the object that will be moved.
     * @param time the time in milliseconds the object will arrive at the destination.
     * @param targetx the X value of the target position
     * @param targety the Y value of the target position
     * @param targetz the Z value of the target position
     * @param moverx the rotation along the X axis relative to its current rotation, which is its starting angle.
     * @param movery the rotation along the Y axis relative to its current rotation, which is its starting angle.
     * @param moverz the rotation along the Z axis relative to its current rotation, which is its starting angle.
     * @param strEasingType the Easing|easing function to use for the interpolation (default is Linear)
     * @param fEasingPeriod the period of the Easing|easing function (only some easing functions use this parameter)
     * @param fEasingAmplitude the amplitude of the Easing|easing function (only some easing functions use this parameter)
     * @param fEasingOvershoot the overshoot of the Easing|easing function (only some easing functions use this parameter)
     * @return * ''true'' if the function moved the object succesfully.
     * * * ''false'' otherwise.
     */
    export function moveObject(theObject: object, time: number, targetx: number, targety: number, targetz: number, moverx: number, movery: number, moverz: number, strEasingType: string, fEasingPeriod: number, fEasingAmplitude: number, fEasingOvershoot: number, ): boolean;

    /**
     * This function changes the visible size of an object.
     * @see {@link https://wiki.multitheftauto.com/wiki/setObjectScale|MTASA Wiki}
     * @param theObject : the object you wish to change the scale of.
     * @param scale : a float containing the new scale. 1.0 is the standard scale, with 0.5 being half the size and 2.0 being twice the size. If the scaleY is set, this will be scaleX.
     * @param scaleY : a float containing the new scale on the Y axis
     * @default scale
     * @param scaleZ : a float containing the new scale on the Z axis
     * @default scale
     * @return * ''true'' if the scale was set properly.
     * * * ''false'' otherwise.
     */
    export function setObjectScale(theObject: object, scale: number, scaleY?: number, scaleZ?: number, ): boolean;

    /**
     * This will allow you to stop an object that is currently moving.
     * @see {@link https://wiki.multitheftauto.com/wiki/stopObject|MTASA Wiki}
     * @param theobject the object whose movement you wish to stop
     * @return * ''true'' if successful.
     * * * ''false'' otherwise.
     */
    export function stopObject(theobject: object, ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/clearChatBox|MTASA Wiki}
     * @return Returns ''true'' if the player's chat was cleared successfully, ''false'' otherwise.
     */
    export function clearChatBox(clearFor: element, ): boolean;

    /**
     * This outputs the specified text string to the chatbox. It can be specified as a message to certain player(s) or all players.
     * It can optionally allow you to embed color changes into the string by setting the colorCoded boolean to true. This allows: 
     * <syntaxhighlight lang="lua">
     * outputChatBox ( "#FF0000Hello #00FF00World", root, 255, 255, 255, true )
     * </syntaxhighlight>
     * This will display as: '''<span style='color:red;'>Hello</span> <span style='color:green'>World</span> '''
     * @see {@link https://wiki.multitheftauto.com/wiki/outputChatBox|MTASA Wiki}
     * @param text The text string that you wish to send to the chat window. If more than 256 characters it will not be showed in chat.  {{OptionalArg}}
     * @param r The amount of red in the color of the text. Default value is 231.
     * @default 231
     * @param g The amount of green in the color of the text. Default value is 217.
     * @default 217
     * @param b The amount of blue in the color of the text. Default value is 176.
     * @default 176
     * @param colorCoded A boolean value determining whether or not #RRGGBB tags should be used.  Note: The #RRGGBB format must contain capital letters a-f is not acceptable but A-F is. Default RGB values in this format are: '#E7D9B0'.
     * @default false
     * @return Returns ''true'' if the message was displayed successfully. Returns ''false'' if invalid arguments are specified.
     */
    export function outputChatBox(text: string, element?: table, r?: number, g?: number, b?: number, colorCoded?: boolean, ): boolean;

    /**
     * This outputs the specified text string to the console window (accessed with F8 or ~ key). It can be specified as a message to certain player(s) or all players.
     * @see {@link https://wiki.multitheftauto.com/wiki/outputConsole|MTASA Wiki}
     * @param text The text string that you wish to send to the console window
     * @param visibleTo This specifies who the chat is visible to. Any players in this element will see the chat message. See visibility.  {{Note|'''visibleTo''' can also be a Team object, in this case, the text will be visible to all the players of that team.}}
     * @default getRootElement(
     * @return 
     */
    export function outputConsole(text: string, visibleTo: element, ): boolean;

    /**
     * This function outputs scripting debug messages, which can be read by enabling the debug textbox. The debug display level can then be set so that info or warning messages get filtered out.
     * @see {@link https://wiki.multitheftauto.com/wiki/outputDebugString|MTASA Wiki}
     * @param text the text to be output to the debug box.  {{OptionalArg}} 
     * @param level the debug message level. Possible values are:
     * @default 3
     * @param red The amount of red in the color of the text. Default value is 255.
     * @default 255
     * @param green The amount of green in the color of the text. Default value is 255.
     * @default 255
     * @param blue The amount of blue in the color of the text. Default value is 255.  {{Note|Color values are only applied when debug level is 0 or 4.}}
     * @default 255
     * @return Returns ''true'' if the debug message was successfully output, ''false'' if invalid arguments are specified.
     */
    export function outputDebugString(text: string, level: number, red: number, green: number, blue: number, ): boolean;

    /**
     * This function is used to show or hide the player's chat.
     * @see {@link https://wiki.multitheftauto.com/wiki/showChat|MTASA Wiki}
     * @param thePlayer The player whose chat is to be hidden or shown.
     * @param show A boolean value determining whether to show (true) or hide (false) the chat.
     * @return Returns ''true'' if the player's chat was shown or hidden successfully, ''false'' otherwise.
     */
    export function showChat(thePlayer: player, show: boolean, ): boolean;

    /**
     * This function is used to set the current clothes on a [[ped]]. 
     * @see {@link https://wiki.multitheftauto.com/wiki/addPedClothes|MTASA Wiki}
     * @param thePed : The ped whose clothes you want to change.
     * @param clothesTexture : A string determining the clothes texture that will be added. See the CJ Clothes|clothes catalog.
     * @param clothesModel : A string determining the clothes model that will be added. See the CJ Clothes|clothes catalog.
     * @param clothesType : A integer representing the clothes slot/type the clothes should be added to. See the CJ Clothes|clothes catalog.
     * @return This function returns ''true'' if the clothes were successfully added to the ped, ''false'' otherwise.
     */
    export function addPedClothes(thePed: ped, clothesTexture: string, clothesModel: string, clothesType: number, ): boolean;

    /**
     * Creates a Ped in the GTA world.
     * @see {@link https://wiki.multitheftauto.com/wiki/createPed|MTASA Wiki}
     * @param modelid A whole integer specifying the Character_Skins|GTASA skin ID.
     * @param x A floating point number representing the X coordinate on the map.
     * @param y A floating point number representing the Y coordinate on the map.
     * @param z A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
     * @param rot A floating point number representing the rotation in degrees.
     * @default 0.0
     * @param synced A boolean value representing whether or not the ped will be synced. Disabling the sync might be useful for frozen or static peds to increase the server performance.
     * @default true
     * @return Returns a ped element if it was successfully created.
     */
    export function createPed(modelid: number, x: number, y: number, z: number, rot?: number, synced?: boolean, ): ped;

    /**
     * This function returns an integer that contains the ammo in a specified [[ped]]'s weapon. See [[weapon|Weapon Info]]
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedAmmoInClip|MTASA Wiki}
     * @param thePed The ped whose ammo you want to check.
     * @param weaponSlot an integer representing the weapon slot (set to the peds currently selected slot if not specified).
     * @default current
     * @return Returns an [[int]] containing the amount of ammo in the specified ped's currently selected or specified clip, or 0 if the ped specified is invalid.
     */
    export function getPedAmmoInClip(thePed: ped, weaponSlot?: number, ): number;

    /**
     * This function returns the current armor of the specified [[ped]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedArmor|MTASA Wiki}
     * @param thePed The ped whose armor you want to check
     * @return A ''float'' with the armor, ''false'' if an invalid ped was given.
     */
    export function getPedArmor(thePed: ped, ): number;

    /**
     * This function is used to get the current clothes texture and model of a certain type on a [[ped]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedClothes|MTASA Wiki}
     * @param thePed The ped whose clothes you want to retrieve.
     * @param clothesType The type/slot of clothing you want to get.  {{Clothes Textures}}
     * @return This function returns 2 [[string|strings]], the clothes texture and model. The first return value will be ''false'' if this player's clothes type is empty or an invalid player was specified.
     */
    export function getPedClothes(thePed: ped, clothesType: number, ): LuaMultiReturn<[string,string]>;

    /**
     * This function detects the element a ped is standing on. This can be a vehicle or an object.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedContactElement|MTASA Wiki}
     * @param thePed The ped of which you want to get the element he is standing on.
     * @return Returns an [[object]] or a [[vehicle]] if the ped is standing on one, ''false'' if he is touching none or an invalid element was passed.
     */
    export function getPedContactElement(thePed: ped, ): element;

    /**
     * Retrieves the fighting style a player/ped is currently using.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedFightingStyle|MTASA Wiki}
     * @param thePed the ped whose current fighting style ID you wish to retrieve.
     * @return Returns the ped's current fighting style as an integer ID, ''false'' if it fails to retrieve a value.
     * * {{Fighting Styles}}
     */
    export function getPedFightingStyle(thePed: ped, ): number;

    /**
     * This function gets the [[vehicle]] that the ped is currently in or is trying to enter, if any.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedOccupiedVehicle|MTASA Wiki}
     * @param thePed : The ped whose vehicle youre looking up.
     * @return Returns the vehicle that the specified ped is in, or ''false'' if the ped is not in a vehicle or is an invalid ped.
     */
    export function getPedOccupiedVehicle(thePed: ped, ): vehicle;

    /**
     * This function gets the seat that a specific ped is sitting in in a vehicle.
     * [[File:vehicle seat ids.png|200px|thumb|right|Vehicle seat ids]] 
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedOccupiedVehicleSeat|MTASA Wiki}
     * @param thePed : The ped whose vehicle seat youre looking up.
     * @return * Returns an integer containing the number of the seat that the ped is currently in:
     * * ** '''0:''' Front-left
     * * ** '''1:''' Front-right
     * * ** '''2:''' Rear-left
     * * ** '''3:''' Rear-right
     * * Returns ''false'' if the ped is on foot, or the ped doesn't exist.
     */
    export function getPedOccupiedVehicleSeat(thePed: ped, ): number;

    /**
     * This function returns the value of the specified statistic of a specific [[ped]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedStat|MTASA Wiki}
     * @param thePed : The ped whose stat you want to retrieve.
     * @param stat : A whole number determining the stat ID.  {{Stats}}
     * @return Returns the value of the requested statistic.
     */
    export function getPedStat(thePed: ped, stat: number, ): number;

    /**
     * This function is used to get the element a [[ped]] is currently targeting.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedTarget|MTASA Wiki}
     * @param thePed The ped whose target you want to retrieve.
     * @return Returns the [[element]] that's being targeted, or ''false'' if there isn't one.
     * * This is only effective on physical GTA elements, namely:
     * * * Players
     * * * Peds
     * * * Vehicles
     * * * Objects
     */
    export function getPedTarget(thePed: ped, ): element;

    /**
     * This function returns an integer that contains the total ammo in a specified [[ped]]'s weapon. See [[weapon|Weapon Info]]
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedTotalAmmo|MTASA Wiki}
     * @param thePed : The ped whose ammo you want to check.
     * @param weaponSlot : an integer representing the weapon slot (set to the peds current slot if not given)
     * @default current
     * @return Returns an [[int]] containing the total amount of ammo for the specified ped's weapon, or 0 if the ped specified is invalid.
     */
    export function getPedTotalAmmo(thePed: ped, weaponSlot: number, ): number;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedWalkingStyle|MTASA Wiki}
     * @param thePed the ped whose walking style to retrieve.
     * @return Returns the walking style ID if successful, ''false'' otherwise. The possible walking styles are as follows:
     * * {{Ped walking styles}}
     */
    export function getPedWalkingStyle(thePed: ped, ): number;

    /**
     * This function tells you which weapon type is in a certain weapon slot of a ped. See [[weapon|Weapon Info]]
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedWeapon|MTASA Wiki}
     * @param thePed : the ped you want to get the weapon type from.
     * @param weaponSlot : an integer representing the weapon slot (set to the peds current slot if not given).
     * @default current
     * @return Returns an [[int]] indicating the type of the weapon the ped has in the specified slot. If the slot is empty, it returns 0.
     * * It should be noted that if a ped runs out of ammo for a weapon, it will still return the ID of that weapon in the slot (even if it appears as if the ped does not have a weapon at all), though [[getPedTotalAmmo]] will return '''0'''.  Therefore, [[getPedTotalAmmo]] should be used in conjunction with [[getPedWeapon]] in order to check if a ped has a weapon.
     */
    export function getPedWeapon(thePed: ped, weaponSlot: number, ): number;

    /**
     * This function gets a ped's selected weapon slot.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedWeaponSlot|MTASA Wiki}
     * @param thePed the ped to get the current weapon slot of.
     * @return Returns the selected weapon slot ID on success, ''false'' otherwise.
     * * {{Weapon_Slots}}
     */
    export function getPedWeaponSlot(thePed: ped, ): number;

    /**
     * This function returns all valid ped models.
     * @see {@link https://wiki.multitheftauto.com/wiki/getValidPedModels|MTASA Wiki}
     * @return Returns a [[table]] with all valid ped models.
     */
    export function getValidPedModels(): table;

    /**
     * This function checks if the specified [[ped]] is choking (coughing) or not. This happens as a result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can. 
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedChoking|MTASA Wiki}
     * @param thePed : The ped you wish to check
     * @return Returns ''true'' if the ped is choking, ''false'' otherwise.
     */
    export function isPedChoking(thePed: ped, ): boolean;

    /**
     * This function checks if the ped is in the driveby state.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedDoingGangDriveby|MTASA Wiki}
     * @param thePed The ped element whose state is to be checked.
     * @return Returns '''true''' if the driveby state is enabled, '''false''' otherwise.
     */
    export function isPedDoingGangDriveby(thePed: ped, ): boolean;

    /**
     * This function checks if the specified [[ped]] is ducked (crouched) or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedDucked|MTASA Wiki}
     * @param thePed : The ped to check.
     * @return Returns ''true'' if the ped is ducked, ''false'' otherwise.
     */
    export function isPedDucked(thePed: ped, ): boolean;

    /**
     * With this function, you can check if a ped has a head or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedHeadless|MTASA Wiki}
     * @param thePed : The ped to check.
     * @return Returns ''true'' if the ped is headless, ''false'' otherwise.
     */
    export function isPedHeadless(thePed: ped, ): boolean;

    /**
     * Checks whether or not a given ped is currently in a vehicle. This also returns true if they're trying to enter a vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedInVehicle|MTASA Wiki}
     * @param thePed the ped you want to check.
     * @return Returns ''true'' if the ped is in a vehicle, ''false'' if he is on foot or an invalid element was passed.
     */
    export function isPedInVehicle(thePed: ped, ): boolean;

    /**
     * This function checks if the specified [[ped]] is on fire or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedOnFire|MTASA Wiki}
     * @param thePed : The ped to check.
     * @return Returns ''true'' if the ped is on fire, ''false'' otherwise.
     */
    export function isPedOnFire(thePed: ped, ): boolean;

    /**
     * This function is used to determine whether or not a ped is on the ground. This is for on-foot usage only.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedOnGround|MTASA Wiki}
     * @param thePed The ped you are checking.
     * @return Returns ''true'' if the ped is on foot and on the ground, ''false'' otherwise, even if he is in a car that stands still or on object outside world map.
     */
    export function isPedOnGround(thePed: ped, ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedWearingJetpack|MTASA Wiki}
     * @param thePed the ped you want to check
     * @return Returns ''true'' if the ped is carrying a jetpack, ''false'' if he is not or an invalid element was passed.
     */
    export function isPedWearingJetpack(thePed: ped, ): boolean;

    /**
     * This function kills the specified ped.
     * From v1.5.3 onwards this function is now available client side. Only works on client side peds.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/killPed|MTASA Wiki}
     * @param thePed The ped to kill
     * @param theKiller The ped responsible for the kill
     * @default nil
     * @param weapon The ID of the weapon or Damage Types that should appear to have killed the ped (doesnt affect how they die)
     * @default 255
     * @param bodyPart The ID of the body part that should appear to have been hit by the weapon (doesnt affect how they die)  {{BodyParts}}
     * @default 255
     * @param stealth Boolean value, representing whether or not this a stealth kill
     * @default false
     * @return Returns ''true'' if the ped was killed, ''false'' if the ped specified could not be killed or is invalid.
     */
    export function killPed(thePed: ped, theKiller: ped, weapon: number, bodyPart: number, stealth: boolean, ): boolean;

    /**
     * This function is used to remove the current clothes of a certain type on a [[ped]]. It will remove them if the clothesTexture and clothesModel aren't specified, or if they match the current clothes on that slot.
     * @see {@link https://wiki.multitheftauto.com/wiki/removePedClothes|MTASA Wiki}
     * @param thePed : The ped you want to remove clothes from.
     * @param clothesType : the clothes slot/type to remove. See the CJ Clothes|clothes catalog.
     * @param clothesTexture : (Server only) A string determining the clothes texture that will be removed. See the CJ Clothes|clothes catalog.
     * @param clothesModel : (Server only) A string determining the clothes model that will be removed. See the CJ Clothes|clothes catalog.
     * @return This function returns ''true'' if the clothes were successfully removed from the ped, ''false'' otherwise.
     */
    export function removePedClothes(thePed: ped, clothesType: number, clothesTexture: string, clothesModel: string, ): boolean;

    /**
     * This function removes a ped from a vehicle immediately. This works for drivers and passengers. Note that this removes the ped from the vehicle and puts him in the exact position where the command was initiated.
     * '''Available client side from 1.3.1''' (It will only work with client side vehicles and peds)
     * @see {@link https://wiki.multitheftauto.com/wiki/removePedFromVehicle|MTASA Wiki}
     * @param thePed The ped you wish to remove from a vehicle
     * @return Returns ''true'' if the operation was successful, ''false'' if the specified ped is not valid or if it isn't in a vehicle.
     */
    export function removePedFromVehicle(thePed: ped, ): boolean;

    /**
     * Sets the current [[Animations|animation]] of a [[player]] or [[ped]]. Not specifying the type of animation will automatically cancel the current one.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedAnimation|MTASA Wiki}
     * @param thePed the player or ped you want to apply an Animations|animation to.  {{OptionalArg}}
     * @param block the Animations|animation blocks name.
     * @default nil
     * @param anim the name of the Animations|animation within the block.
     * @default nil
     * @param time how long the animation will run for in milliseconds.
     * @default -1
     * @param loop indicates whether or not the animation will loop.
     * @default true
     * @param updatePosition will change the actual coordinates of the ped according to the animation. Use this for e.g. walking animations.
     * @default true
     * @param interruptable if set to false other tasks wont be able to interupt the animation. Setting this to false also gives this function more power to override other animations that are running. For example, squatting after a jump can be terminated.
     * @default true
     * @param freezeLastFrame if set to true after animation the last frame will be frozen, otherwise the animation will end and controls will return.
     * @default true
     * @param blendTime how long the animation will mixed with the previous one in milliseconds.  {{New items|3.0157|1.5.7|
     * @default 250
     * @param retainPedState will restore the task which was playing before calling this function. Useful for restoring the crouch task after animation ends. This may be extended in the future to support other states/tasks.  |16632}}
     * @default false
     * @return Returns ''true'' if succesful, ''false'' otherwise.
     */
    export function setPedAnimation(thePed: ped, block?: string, anim?: string, time?: number, loop?: boolean, updatePosition?: boolean, interruptable?: boolean, freezeLastFrame?: boolean, blendTime?: number, retainPedState?: boolean, ): boolean;

    /**
     * Sets the current animation progress of a player or ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedAnimationProgress|MTASA Wiki}
     * @param thePed the player or ped you want to change animation progress.
     * @param anim the animation name currently applied to ped, if not supplied, the animation will stop
     * @param progress current animation progress you want to apply, value from 0.0 to 1.0, if not supplied will default to 0.0
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setPedAnimationProgress(thePed: ped, anim?: string, progress?: number, ): boolean;

    /**
     * Sets the speed of a currently running animation for a particular player or ped.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedAnimationSpeed|MTASA Wiki}
     * @param thePed the player or ped you want to change animation speed of.
     * @param anim the animation name it will affect.
     * @default ""
     * @param speed a float containing the speed between 0.0–1.0 you want to apply to the animation. This limitation may be adjusted in the future, so do not provide speeds outside this boundary. {{New feature/item|3.0160|1.5.7|20395|The limit is now 0.0 to 10.0.}} {{Warning|Setting speed higher than 1 can cause issues with some animations.}}
     * @default 1.0
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setPedAnimationSpeed(thePed: ped, anim?: string, speed?: number, ): boolean;

    /**
     * This function allows you to set the armor value of a [[ped]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedArmor|MTASA Wiki}
     * @param thePed : the ped whose armor you want to modify.
     * @param armor : the amount of armor you want to set on the ped. Valid values are from 0 to 100.
     * @return Returns ''true'' if the armor was changed succesfully. Returns ''false'' if an invalid ped was specified, or the armor value specified is out of acceptable range.
     */
    export function setPedArmor(thePed: ped, armor: number, ): boolean;

    /**
     * This function sets the driveby state of a ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedDoingGangDriveby|MTASA Wiki}
     * @param thePed The ped element whose state is to be changed.
     * @param state A boolean value representing the drive-by state, true meaning enabled and false disabled.
     * @return Returns ''true'' if the driveby state could be changed, ''false'' otherwise.
     */
    export function setPedDoingGangDriveby(thePed: ped, state: boolean, ): boolean;

    /**
     * Changes a ped's fighting style. Most styles only change the 'special attack' which is done using the Aim and Enter keys.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedFightingStyle|MTASA Wiki}
     * @param thePed The ped whose fighting style to change.
     * @param style The fighting style ID to apply.  {{Fighting Styles}}
     * @return Returns ''true'' in case of success, ''false'' otherwise.
     */
    export function setPedFightingStyle(thePed: ped, style: number, ): boolean;

    /**
     * With this function, you can set if a ped has a head or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedHeadless|MTASA Wiki}
     * @param thePed : The ped to check.
     * @param headState : head state, use true if you want the ped be headless, use false to give back the head.
     * @return Returns ''true'' if successful, ''false'' otherwise
     */
    export function setPedHeadless(thePed: ped, headState: boolean, ): boolean;

    /**
     * This function can be used to set a ped on fire or extinguish a fire on it.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedOnFire|MTASA Wiki}
     * @param thePed The ped that we want to set/unset
     * @param isOnFire true to set the ped on fire, false to extinguish any fire on him
     * @return Returns ''true'' if successful, ''false'' otherwise
     */
    export function setPedOnFire(thePed: ped, isOnFire: boolean, ): boolean;

    /**
     * *Things like infinite run, fire proof CJ, 150 armor have special activation flags. They need a way to be triggered on/off.
     * }}
     * This function allows you to set the value of a specific statistic for a [[ped]]. '''Visual stats (FAT and BODY_MUSCLE) can only be used on the CJ skin''', they have no effect on other skins.
     * When this function is used client side, it can only be used on client side created peds.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedStat|MTASA Wiki}
     * @param thePed : the ped whose statistic you want to modify.
     * @param stat : the stat ID.  {{Stats}}
     * @param value : the new value of the stat. It must be between 0 and 1000.
     * @return Returns ''true'' if the statistic was changed succesfully. Returns ''false'' if an invalid player is specified, if the stat-id/value is out of acceptable range or if the FAT or BODY_MUSCLE stats are used on non-CJ players.
     */
    export function setPedStat(thePed: ped, stat: number, value: number, ): boolean;

    /**
     * Sets the walking style of a ped. A walking style consists of a set of animations that are used for walking, running etc.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedWalkingStyle|MTASA Wiki}
     * @param thePed the ped whose walking style to change.
     * @param style the walking style to set.  The possible walking styles are:  {{Ped walking styles}}
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setPedWalkingStyle(thePed: ped, style: number, ): boolean;

    /**
     * This function changes the selected weapon slot of a [[ped]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedWeaponSlot|MTASA Wiki}
     * @param thePed the ped whose weapon slot you want to set. In a clientside script, this cannot be used on remote players.
     * @param weaponSlot the weapon slot to set.  {{Weapon_Slots}}
     * @return Returns ''true'' if successful in setting the ped's equipped weapon slot, ''false'' otherwise.
     */
    export function setPedWeaponSlot(thePed: ped, weaponSlot: number, ): boolean;

    /**
     * This function is used to warp or force a ped into a vehicle.  There are no animations involved when this happens.
     * [[File:vehicle seat ids.png|200px|thumb|right|Vehicle seat ids]] 
     * '''Available client side from 1.3.1''' (It will only work with client side vehicles and peds)
     * @see {@link https://wiki.multitheftauto.com/wiki/warpPedIntoVehicle|MTASA Wiki}
     * @param thePed The ped which you wish to force inside the vehicle
     * @param theVehicle The vehicle you wish to force the ped into  {{OptionalArg}} 
     * @param seat An integer representing the seat ID.
     * @default 0
     * @return Returns ''true'' if the operation is successful, ''false'' otherwise.
     */
    export function warpPedIntoVehicle(thePed: ped, theVehicle: vehicle, seat: number, ): boolean;

    /**
     * This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon. 
     * @see {@link https://wiki.multitheftauto.com/wiki/createPickup|MTASA Wiki}
     * @param x : A floating point number representing the X coordinate on the map.
     * @param y : A floating point number representing the Y coordinate on the map.
     * @param z : A floating point number representing the Z coordinate on the map.
     * @param theType : This is an integer representing the type of pickup, representing the following types:
     * @param amount : This is an integer representing the amount of Health points or Armour points a pickup has.  '''OR'''
     * @param respawnTime : How long before the pickup respawns in milliseconds (This parameter is ignored on the client!)
     * @default 30000
     * @param ammo : An integer representing the amount of ammo a pickup contains.  This is only valid when the pickup type is a weapon pickup.
     * @default 50
     * @return Returns [[pickup]] [[element]] if the pickup was created succesfully, otherwise returns ''false''.
     */
    export function createPickup(x: number, y: number, z: number, theType: number, amount: number, respawnTime: number, ammo: number, ): pickup;

    /**
     * This function retrieves the amount of ammo in a weapon pickup.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPickupAmmo|MTASA Wiki}
     * @param thePickup The pickup in which you wish to retrieve the ammo of
     * @return Returns an ''integer'' of the amount of ammo in the pickup, ''false'' if the pickup element is invalid, 0 if it's no weapon pickup.
     */
    export function getPickupAmmo(thePickup: pickup, ): number;

    /**
     * This function retrieves the amount of health or armor given from a pickup.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPickupAmount|MTASA Wiki}
     * @param thePickup The pickup you wish to retrieve the amount from.
     * @return Returns an ''integer'' of the amount the pickup is set to, ''false'' if it's invalid, 0 if it's no health or amor pickup.
     */
    export function getPickupAmount(thePickup: pickup, ): number;

    /**
     * This function retrieves the type of a pickup, either a health, armour or weapon pickup.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPickupType|MTASA Wiki}
     * @param thePickup The pickup you wish to retrieve the type of.
     * @return Returns ''false'' if the pickup is invalid, or an integer of the type of the pickup, which include:
     * * *'''0:''' Health pickup
     * * *'''1:''' Armour pickup
     * * *'''2:''' Weapon pickup
     * * *'''3:''' Custom Pickup
     */
    export function getPickupType(thePickup: pickup, ): number;

    /**
     * This function retrieves the weapon ID of a weapon pickup.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPickupWeapon|MTASA Wiki}
     * @param thePickup The pickup of which you wish to retrieve the weapon
     * @return Returns the [[Weapons|Weapon ID]] of the pickup, or ''false'' if the pickup is invalid.
     */
    export function getPickupWeapon(thePickup: pickup, ): number;

    /**
     * This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and allows you to set the health points '''or''' the weapon and ammo that the pickup will give.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPickupType|MTASA Wiki}
     * @param thePickup The pickup which you wish to change the settings of
     * @param theType : An integer representing the type of pickup. You can choose from:
     * @param amount : This is an integer representing the amount of Health points or Armour points a pickup has.  '''OR'''
     * @param ammo : An integer representing the amount of ammo a pickup contains. This argument is only valid when the pickup type is a Weapon Pickup, and must be specified in that case.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setPickupType(thePickup: pickup, theType: number, amount: number, ammo?: number, ): boolean;

    /**
     * This function is used to simulate the player using a pickup
     * @see {@link https://wiki.multitheftauto.com/wiki/usePickup|MTASA Wiki}
     * @param thePickup : The pickup element to be picked up/used.
     * @param thePlayer : The player to use the pickup.
     * @return 
     */
    export function usePickup(thePickup: pickup, thePlayer: player, ): boolean;

    /**
     * This function is used to forcefully show a player's radar map.
     * @see {@link https://wiki.multitheftauto.com/wiki/forcePlayerMap|MTASA Wiki}
     * @param thePlayer : A player object referencing the specified player
     * @param forceOn : A boolean value representing whether or not the players radar map will be forced on
     * @return Returns ''true'' if the player's radar map was forced on, ''false'' otherwise.
     */
    export function forcePlayerMap(thePlayer: player, forceOn: boolean, ): boolean;

    /**
     * This function allows you to check the current blur level of a specified [[player]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerBlurLevel|MTASA Wiki}
     * @param thePlayer The player whose blur level you want to check.
     * @return Returns the player's blur level if successful, ''false'' if an invalid player was given.
     */
    export function getPlayerBlurLevel(thePlayer: player, ): number;

    /**
     * This function returns a [[player]] [[element]] for the player with the name passed to the function.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerFromName|MTASA Wiki}
     * @param playerName : A string containing the name of the player you want to reference
     * @return Returns a [[player]] [[element]] for the player with the nickname provided. If there is no player with that name, ''false'' is returned.
     */
    export function getPlayerFromName(playerName: string, ): player;

    /**
     * Returns the amount of money a player currently has.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerMoney|MTASA Wiki}
     * @param thePlayer The player you wish the retrieve the amount of money from.
     * @return Returns an integer with the amount of money the specified player has, ''false'' if the player is invalid.
     */
    export function getPlayerMoney(thePlayer: player, ): number;

    /**
     * This function returns a string containing the name of the specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerName|MTASA Wiki}
     * @param thePlayer the player you want to get the name of
     * @return Returns a string containing the requested player's name, or ''false'' if the player passed to the function is invalid.
     */
    export function getPlayerName(thePlayer: player, ): string;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function gets the current color of a player's name tag as RGB values. These are in the range 0-255.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerNametagColor|MTASA Wiki}
     * @param thePlayer The player whose name tag RGB color values you wish to retrieve.
     * @return Returns ''red'', ''green'' and ''blue'' values if an existent player was specified, ''false'' otherwise.
     */
    export function getPlayerNametagColor(thePlayer: player, ): LuaMultiReturn<[number,number,number]>;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This will allow you to retrieve the name tag a player is currently using.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerNametagText|MTASA Wiki}
     * @param thePlayer The person whose name tag you want to retrieve
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns a ''string'' with the nametag text, ''false'' if the player is invalid.
     */
    export function getPlayerNametagText(thePlayer: player, ): string;

    /**
     * This function returns the ping of a specified [[player]]. The ping is the number of milliseconds that data takes to travel from the player's client to the server or vice versa.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerPing|MTASA Wiki}
     * @param thePlayer : The player whose ping you want to determine.
     * @return Returns the ping as an [[int]], or ''false'' if the player is invalid.
     */
    export function getPlayerPing(thePlayer: player, ): number;

    /**
     * This function gets the current [[team]] a [[player]] is on.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerTeam|MTASA Wiki}
     * @param thePlayer : The player whose team you want to find out.
     * @return Returns a ''team'' element representing the team the player is on, ''false'' if the player is not part of a team.
     */
    export function getPlayerTeam(thePlayer: player, ): team;

    /**
     * This function gets a player's current wanted level. The wanted level is indicated by the amount of stars a player has on the GTA HUD.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerWantedLevel|MTASA Wiki}
     * @param thePlayer The player whose wanted level you wish to get
     * @return Returns an ''int'' from 0 to 6 representing the player's wanted level, ''false'' if the player does not exist.
     */
    export function getPlayerWantedLevel(thePlayer: player, ): number;

    /**
     * This function adds money to a [[player]]'s current money amount.  To set absolute values, [[setPlayerMoney]] can be used.<br>
     * @see {@link https://wiki.multitheftauto.com/wiki/givePlayerMoney|MTASA Wiki}
     * @param thePlayer the player you are giving the money to.
     * @param amount a positive integer number specifying the amount of money to give to the player.
     * @return Returns ''true'' if the money was added, or ''false'' if invalid parameters were passed.
     */
    export function givePlayerMoney(thePlayer: player, amount: number, ): boolean;

    /**
     * This function checks if the specified player's radar map has been forced on or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerMapForced|MTASA Wiki}
     * @param thePlayer A player object referencing the specified player
     * @return Returns ''true'' if the player's radar map is forced on, ''false'' otherwise.
     */
    export function isPlayerMapForced(thePlayer: player, ): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function will allow you to determine if a player's name tag is currently showing.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerNametagShowing|MTASA Wiki}
     * @param thePlayer The player whose current name tag condition you want to check
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the player's name tag is being shown, ''false'' otherwise.
     */
    export function isPlayerNametagShowing(thePlayer: player, ): boolean;

    /**
     * Added to client side.
     * }}
     * This function allows you to make the server reveal whether or not voice is currently enabled.
     * @see {@link https://wiki.multitheftauto.com/wiki/isVoiceEnabled|MTASA Wiki}
     * @return Returns ''true'' if the voice is enabled on the server, ''false'' otherwise.
     */
    export function isVoiceEnabled(): boolean;

    /**
     * Sets the motion blur level on the clients screen. Accepts a value between 0 and 255.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerBlurLevel|MTASA Wiki}
     * @param thePlayer The player whose blur level will be changed.
     * @param level The level to set the blur to (default: 36)
     * @return 
     */
    export function setPlayerBlurLevel(thePlayer: player, level: number, ): boolean;

    /**
     * This function will show or hide a part of the player's HUD. 
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerHudComponentVisible|MTASA Wiki}
     * @param thePlayer The player element for which you wish to show/hide a HUD component
     * @param component The component you wish to show or hide. Valid values are:
     * @param show Specify if the component should be shown (true) or hidden (false)
     * @return Returns ''true'' if the component was shown or hidden succesfully, ''false'' if an invalid argument was specified.
     */
    export function setPlayerHudComponentVisible(thePlayer: player, component: string, show: boolean, ): boolean;

    /**
     * Sets a player's money to a certain value, regardless of current player money. It should be noted that setting negative values does not work and in fact gives the player large amounts of money.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerMoney|MTASA Wiki}
     * @param thePlayer Which player to set the money of.
     * @param amount A whole integer specifying the new amount of money the player will have.  {{OptionalArg}}  {{New items|3.0140|1.4|
     * @param instant If set to true money will be set instantly without counting up/down like in singleplayer.}}
     * @default false
     * @return Returns ''true'' if the money was added, or ''false'' if invalid parameters were passed.
     */
    export function setPlayerMoney(thePlayer: player, amount: number, instant?: boolean, ): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This allows you to change the RGB color mixture in the name tags of players.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerNametagColor|MTASA Wiki}
     * @param thePlayer The player whose name tag text you wish to change the color of
     * @param r The amount of red you want in the mixture of RGB (0-255 is valid)
     * @param g The amount of green you want in the mixture of RGB (0-255 is valid)
     * @param b The amount of blue you want in the mixture of RGB (0-255 is valid)  {{New feature|2|DP2|
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the function was successful, ''false'' otherwise.
     */
    export function setPlayerNametagColor(thePlayer: player, r: number, g: number, b: number, ): boolean;

    /**
     * Use this to define whether the player's name tag is visible or invisible.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerNametagShowing|MTASA Wiki}
     * @param thePlayer Define the player whos tag visiblity status you want to change
     * @param showing Use true or false to show/hide the tag
     * @return Returns ''true'' if successful, ''false'' otherwise
     */
    export function setPlayerNametagShowing(thePlayer: player, showing: boolean, ): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This will change the text of a player's nickname in the world to something besides the nickname he chose. This will not change the player's actual nickname, it only changes the visible aspect inside the world (you will see his original nickname in the scoreboard and will refer to his original name in scripts).
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerNametagText|MTASA Wiki}
     * @param thePlayer The player whose nickname text you wish to change
     * @param text The new nickname text that will be displayed
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setPlayerNametagText(thePlayer: player, text: string, ): boolean;

    /**
     * This function subtracts money from a [[player]]'s current money amount.
     * @see {@link https://wiki.multitheftauto.com/wiki/takePlayerMoney|MTASA Wiki}
     * @param thePlayer the player you are taking the money from.
     * @param amount an integer number specifying the amount of money to take from the player.
     * @return Returns ''true'' if the money was taken, or ''false'' if invalid parameters were passed.
     */
    export function takePlayerMoney(thePlayer: player, amount: number, ): boolean;

    /**
     * This function can be used to detonate a players satchels.
     * @see {@link https://wiki.multitheftauto.com/wiki/detonateSatchels|MTASA Wiki}
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function detonateSatchels(Player: player, ): boolean;

    /**
     * This function can be used to create custom radar areas on the radar.
     * @see {@link https://wiki.multitheftauto.com/wiki/createRadarArea|MTASA Wiki}
     * @param startPosX A float representing the origin x position of the radar area.
     * @param startPosY A float representing the origin y position of the radar area.
     * @param sizeX A float representing the width of the radar area.
     * @param sizeY A float representing the height of the radar area.  {{OptionalArg}} 
     * @param r An integer representing the amount of red in the color.  Maximum value is 255
     * @default 255
     * @param g An integer representing the amount of green in the color.  Maximum value is 255
     * @default 0
     * @param b An integer representing the amount of blue in the color.  Maximum value is 255
     * @default 0
     * @param a An integer representing the amount of alpha in the color.  This allows setting the transparency of the radar area.  255 is opaque and 0 is transparent.
     * @default 255
     * @param visibleTo An element that you wish to restrict the visibility of the radar area to. (Server function only)
     * @default root
     * @return 
     */
    export function createRadarArea(startPosX: number, startPosY: number, sizeX: number, sizeY: number, r: number, g: number, b: number, a: number, visibleTo: element, ): radararea;

    /**
     * This function can be used to retrieve the current color of a [[radararea|radar area]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getRadarAreaColor|MTASA Wiki}
     * @param theRadararea The radararea|radar area you wish to retrieve the colour of.
     * @return Returns four integers in RGBA format (''red'', ''green'', ''blue'', ''alpha''), with a maximum value of 255 for each.  Alpha decides transparency where 255 is opaque and 0 is transparent.  Returns ''false'' if the radararea is invalid.
     */
    export function getRadarAreaColor(theRadararea: radararea, ): LuaMultiReturn<[number,number,number,number]>;

    /**
     * This function is used for getting the X and Y size of an existing [[radararea|radar area]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getRadarAreaSize|MTASA Wiki}
     * @param theRadararea The radararea|radar area element whose size you wish to get.
     * @return Returns two ''floats'' indicating the X and Y length of the radar area respectively, ''false'' if the radar area is invalid.
     */
    export function getRadarAreaSize(theRadararea: radararea, ): LuaMultiReturn<[number,number]>;

    /**
     * This function checks if a 2D position is inside a [[radararea|radar area]] or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isInsideRadarArea|MTASA Wiki}
     * @param theArea The radararea|radar area youre checking the position against.
     * @param posX The X coordinate of the position youre checking.
     * @param posY The Y coordinate of the position youre checking.
     * @return Returns ''true'' if the position is inside the radar area, ''false'' if it isn't or if any parameters are invalid.
     */
    export function isInsideRadarArea(theArea: radararea, posX: number, posY: number, ): boolean;

    /**
     * This function allows detection of whether a radar area is flashing or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isRadarAreaFlashing|MTASA Wiki}
     * @param theRadararea The radar area you wish to check the state of flashing
     * @return Returns ''true'' if the radar area is flashing, ''false'' if it is not or if it doesn't exist.
     */
    export function isRadarAreaFlashing(theRadararea: radararea, ): boolean;

    /**
     * Sets the color of an existing radar area.
     * @see {@link https://wiki.multitheftauto.com/wiki/setRadarAreaColor|MTASA Wiki}
     * @param theRadarArea the radararea element whose color you wish to set.
     * @param r an integer representing the amount of red in the color (0 for no red, 255 for solid red)
     * @param g an integer representing the amount of green in the color (0 for no green, 255 for solid green)
     * @param b an integer representing the amount of blue in the color (0 for no blue, 255 for solid blue)
     * @param a an integer representing the colors alpha (0 for transparent, 255 for opaque)
     * @return Returns ''true'' if the color was set successfully, ''false'' if the radar area doesn't exist or the color arguments are improper.
     */
    export function setRadarAreaColor(theRadarArea: radararea, r: number, g: number, b: number, a: number, ): boolean;

    /**
     * This function makes an existing radar area flash in transparency.
     * @see {@link https://wiki.multitheftauto.com/wiki/setRadarAreaFlashing|MTASA Wiki}
     * @param theRadarArea the radararea element we want to change flashing state of.
     * @param flash a bool indicating whether the radar area should flash (true to flash, false to not flash).
     * @return Returns ''true'' if the new flash state was successfully set, ''false'' if the radar area doesn't exist or invalid arguments were passed.
     */
    export function setRadarAreaFlashing(theRadarArea: radararea, flash: boolean, ): boolean;

    /**
     * This function changes the size of an existing [[radararea|radar area]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setRadarAreaSize|MTASA Wiki}
     * @param theRadararea the radararea element whose size is to be changed.
     * @param x the x length of the radar area.
     * @param y the y length of the radar area.
     * @return Returns ''true'' if the size was set successfully, ''false'' if invalid arguments are passed.
     */
    export function setRadarAreaSize(theRadararea: radararea, x: number, y: number, ): boolean;

    /**
     * This function allows you to post and receive data from HTTP servers. The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the download completes.
     * In the case when the call fails, a string containing "ERROR" followed by an integer containing the error reason will be passed to the callback function. The reason for failure will be similar to errors found with websites - file not found, server not found and timeouts.
     * If you are using fetchRemote to connect to a PHP script, you can use ''file_get_contents("php://input")'' to read the '''postData''' sent from this function.
     * @see {@link https://wiki.multitheftauto.com/wiki/fetchRemote|MTASA Wiki}
     * @param URL A full URL in the format <nowiki>http://hostname/path/file.ext</nowiki>. A port can be specified with a colon followed by a port number appended to the hostname.
     * @param queueName Name of the queue to use. Any name can be used. If not set, the queue name is default. Requests in the same queue are processed in order, one at a time.  }}
     * @default "default"
     * @param connectionAttempts Number of times to retry if the remote host does not respond. In the case of a non-responding remote server, each connection attempt will timeout after 10 seconds. Therefore, the default setting of 10 connection attempts means it will be 100 seconds before your script gets a callback about the error. Reducing this value to 2 for example, will decrease that period to 20 seconds
     * @default 10
     * @param connectTimeout Number of milliseconds each connection attempt will take before timing out
     * @default 10000
     * @param callbackFunction This is the function that should receive the data returned from the remote server. The callback argument list should be:
     * @param postData A string specifying any data you want to send to the remote HTTP server.
     * @default ""
     * @return {{New items|5.0154|1.5.7-9.20307|
     * * Returns a '''''request''''' value which can be used with [[GetRemoteRequestInfo|getRemoteRequestInfo]] or [[AbortRemoteRequest|abortRemoteRequest]]
     * * }}
     */
    export function fetchRemote(URL: string, queueName: string, connectionAttempts: number, connectTimeout: number, callbackFunction: HandleFunction, postData: string, postIsBinary: boolean, ...args: any[], ): boolean;

    /**
     * This function is used to return the root node of a configuration file. Config files must be predefined in a resource's [[Meta.xml|meta file]].  An alternative way to load XML files is to use [[xmlLoadFile]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceConfig|MTASA Wiki}
     * @param filePath The filepath of the file in the following format: :resourceName/path. resourceName is the name of the resource the file is in, and path is the path from the root directory of the resource to the file.  :For example, if there is a file named 'settings.xml' in the resource 'ctf', it can be accessed from another resource this way: ''getResourceConfig(":ctf/settings.xml")''.  :If the file is in the current resource, only the file path is necessary, e.g. ''getResourceConfig("settings.xml")''.
     * @return Returns the root node of the specified configuration file. If the file is corrupted, not defined in the meta file or doesn't exist, returns false.
     */
    export function getResourceConfig(filePath: string, ): xmlnode;

    /**
     * This function retrieves the ''dynamic element root'' of a specified [[resource]]. The ''dynamic element root'' is the parent of elements that are created by scripts (e.g. with [[createObject]]) unless they specify a different parent.
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceDynamicElementRoot|MTASA Wiki}
     * @param theResource the resource of which dynamic element root we want.  {{OOP||[[resource]]:getDynamicElementRoot}}
     * @return Returns an [[element]] of the resource's dynamic element root if the resource specified was valid and active (currently running), ''false'' otherwise.
     */
    export function getResourceDynamicElementRoot(theResource: resource, ): element;

    /**
     * Returns a table containing the names of the functions that a resource exports. It will return the exports of the current resource if there is no argument passed in.
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceExportedFunctions|MTASA Wiki}
     * @param theResource the resource of which you want to know the call|exported functions.
     * @default getThisResource(
     * @return Returns a [[table]] of function names if successful, ''false'' otherwise.
     */
    export function getResourceExportedFunctions(theResource: resource, ): table;

    /**
     * This function is used to retrieve a resource from its name. A resource's name is the same as its folder or file archive name on the server (without the extension).
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceFromName|MTASA Wiki}
     * @param resourceName the name of the resource you wish to get.
     * @return Returns the [[resource]] with the specified name, or ''false'' if no resource of that name exists. Note that clientside this will also return ''false'' for resources that are in the ''loaded'' state, since the client is unaware of resources that have not been started.
     */
    export function getResourceFromName(resourceName: string, ): resource;

    /**
     * This function gets the name of the specified resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceName|MTASA Wiki}
     * @param res The resource you wish to get the name of.
     * @return Returns a string with the resource name in it, or ''false'' if the resource does not exist.
     */
    export function getResourceName(res: resource, ): string;

    /**
     * This function retrieves a resource's root element. The resource's root element is the element in the element tree which is the parent of all elements that belong to a particular resource (except for elements specifically created elsewhere). You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).
     * Note: every resource has a [[Predefined_variables_list|predefined global variable]] called ''resourceRoot'' whose value is the root element of that resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceRootElement|MTASA Wiki}
     * @param theResource the resource whose root element we are getting. If not specified, assumes the current resource. (the resource returned from getThisResource)
     * @default getThisResource(
     * @return Returns an ''element'' representing the resource's root, ''false'' if the specified resource doesn't exist.
     */
    export function getResourceRootElement(theResource: resource, ): element;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function returns the state of a given resource
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceState|MTASA Wiki}
     * @param theResource The resource you wish to get the state of.  {{OOP||[[resource]]:getState|state}}
     * @return If successful returns a string with the resource state in it, ''false'' otherwise.
     * * The state can be one of:
     * * *'''loaded'''
     * * *'''running'''
     * * {{New feature|3|1.0|
     * * *'''starting'''
     * * *'''stopping'''
     * * *'''failed to load''' - Use [[getResourceLoadFailureReason]] to find out why it failed.
     * * }}
     */
    export function getResourceState(theResource: resource, ): string;

    /**
     * This function retrieves the resource from which the function call was made.
     * @see {@link https://wiki.multitheftauto.com/wiki/getThisResource|MTASA Wiki}
     * @return Returns the resource in which the current script is.
     */
    export function getThisResource(): resource;

    /**
     * Gets all [[FetchRemote|fetchRemote]] and [[CallRemote|callRemote]] requests currently running.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getRemoteRequests|MTASA Wiki}
     * @param theResource : the resource to get all requests from
     * @default nil
     * @return Returns a table with all requests, false if an invalid resource was provided
     */
    export function getRemoteRequests(theResource: resource, ): table;

    /**
     * Gets informations of an [[FetchRemote|fetchRemote]] or [[CallRemote|callRemote]] request info.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getRemoteRequestInfo|MTASA Wiki}
     * @param theRequest : returned from FetchRemote|fetchRemote, CallRemote|callRemote or GetRemoteRequests|getRemoteRequests
     * @return Returns a table when valid, false otherwise
     * * The table contains:
     * * *'''bytesReceived:''' A number specifying the amount of data received so far. Zero means the download is queued
     * * *'''bytesTotal:''' A number specifying the final download size. Will be zero if the remote HTTP server has not set the 'Content-Length' header
     * * *'''currentAttempt:''' A number specifying the current connection attempt
     * * *'''type:''' A string specifying either "fetch" or "call"
     * * *'''url:''' A string specifying the URL
     * * *'''resource:''' The resource which started the request, or false if the resource has since been stopped/restarted
     * * *'''queue:''' A string specifying the queue name
     * * *'''method:''' A string specifying the HTTP method. e.g. "GET" or "POST"
     * * *'''connectionAttempts:''' A number specifying max number connection attempts as declared in the fetchRemote call
     * * *'''connectionTimeout:''' A number specifying connection attempt timeout as declared in the fetchRemote call
     * * *'''postData:''' A string containing the request post data as declared in the fetchRemote call
     * * *'''headers:''' A table containing the request HTTP headers as declared in the fetchRemote call
     */
    export function getRemoteRequestInfo(theRequest: request, postDataLength?: number, includeHeaders?: boolean, ): table;

    /**
     * Aborts a [[FetchRemote|fetchRemote]] or [[CallRemote|callRemote]] request.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/abortRemoteRequest|MTASA Wiki}
     * @param theRequest : returned from FetchRemote|fetchRemote, CallRemote|callRemote or GetRemoteRequests|getRemoteRequests
     * @return Returns true on success, false when invalid request was provided
     */
    export function abortRemoteRequest(theRequest: request, ): boolean;

    /**
     * This function retrieves the maximum [http://en.wikipedia.org/wiki/Frame_rate FPS (Frames per second)] that players on the server can run their game at.  
     * @see {@link https://wiki.multitheftauto.com/wiki/getFPSLimit|MTASA Wiki}
     * @return Returns an integer between '''25''' and '''100''' of the maximum FPS that players can run their game at.
     */
    export function getFPSLimit(): number;

    /**
     * This function gives you various version information about MTA and the operating system.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVersion|MTASA Wiki}
     * @return Returns a table with version information. Specifically these keys are present in the table:
     * * *'''number:''' the MTA server or client version (depending where the function was called) in pure numerical form, e.g. ''"256"''
     * * *'''mta:''' the MTA server or client version (depending where the function was called) in textual form, e.g. ''"1.0"''
     * * *'''name:''' the full MTA product name, either ''"MTA:SA Server"'' or ''"MTA:SA Client"''.
     * * *'''netcode:''' the netcode version number.
     * * *'''os:''' returns the operating system on which the server or client is running
     * * *'''type:''' the type of build.  can be:
     * * **'''"Nightly rX"''' - A nightly development build.  '''X''' represents the nightly build revision.
     * * **'''"Custom"''' - A build compiled manually
     * * **'''"Release"''' - A build that is publicly released (provisional).
     * * *'''tag:''' the build tag (from 1.0.3 onwards). Contains infomation about the underlying version used. i.e. The final version of 1.0.3 has the build tag of "1.0.3 rc-9". (This can be confirmed by using the console command 'ver'.)
     * * *'''sortable:''' a 15 character sortable version string (from 1.0.4 onwards). Format of the string is described in [[getPlayerVersion]].
     */
    export function getVersion(): table;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/isTransferBoxVisible|MTASA Wiki}
     * @return On '''server''' this returns a boolean, whether the transfer box should be visible during downloads or not.
     * * On '''client''' this returns a boolean, whether the transfer box should be visible or not at the time of invocation.
     */
    export function isTransferBoxVisible(): boolean;

    /**
     * This function sets the maximum [http://en.wikipedia.org/wiki/Frame_rate FPS (Frames per second)] that players on the server can run their game at.  
     * @see {@link https://wiki.multitheftauto.com/wiki/setFPSLimit|MTASA Wiki}
     * @param fpsLimit An integer value representing the maximum FPS. This value may be between 25 and 100 FPS. You can also pass 0 or false, in which case the FPS limit will be the one set in the client settings (by default, 100 FPS and the client fps limit should also be manually changed via fps_limit=0 in console or MTA San Andreas 1.5\MTA\config\coreconfig.xml).
     * @return Returns ''true'' if successful, or ''false'' if it was not possible to set the limit or an invalid value was passed.
     */
    export function setFPSLimit(fpsLimit: number, ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/setTransferBoxVisible|MTASA Wiki}
     * @param visible The new visibility state.
     * @return Returns ''true'' if the visibility was set successfully, ''false'' otherwise.
     */
    export function setTransferBoxVisible(visible: boolean, ): boolean;

    /**
     * This function is for returning the number of players in the specified team.
     * @see {@link https://wiki.multitheftauto.com/wiki/countPlayersInTeam|MTASA Wiki}
     * @param theTeam The team you wish to retrieve the player count of.
     * @return Returns an integer containing the number of players in the team, ''false'' if it could not be retrieved.
     */
    export function countPlayersInTeam(theTeam: team, ): number;

    /**
     * This function gets the current [[team]] a [[player]] is on.
     * @param thePlayer : The player whose team you want to find out.
     * @return Returns a ''team'' element representing the team the player is on, ''false'' if the player is not part of a team.
     */
    export function getPlayerTeam(thePlayer: player, ): team;

    /**
     * This function retrieves all the players of the specified team.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayersInTeam|MTASA Wiki}
     * @param theTeam The team you wish to retrieve all the players from.
     * @return Returns a [[table]] of all the players in the team, or an empty one if there are none else false if invalid arguments are passed.
     */
    export function getPlayersInTeam(theTeam: team, ): table;

    /**
     * This function retrieves the color of a team.
     * @see {@link https://wiki.multitheftauto.com/wiki/getTeamColor|MTASA Wiki}
     * @param theTeam The team you want to get the color of.
     * @return Returns 3 integers representing the red, green, and blue color components of the team if it's valid, ''false'' otherwise.
     */
    export function getTeamColor(theTeam: team, ): LuaMultiReturn<[number,number,number]>;

    /**
     * This function tells you if friendly fire is turned on for the specified team.
     * @see {@link https://wiki.multitheftauto.com/wiki/getTeamFriendlyFire|MTASA Wiki}
     * @param theTeam The team object that will be checked
     * @return Returns ''true'' if friendly fire is on for the specified team, ''false'' if it is turned off or if invalid arguments are specified.
     */
    export function getTeamFriendlyFire(theTeam: team, ): boolean;

    /**
     * This function finds a [[team]] element using the provided team name.
     * @see {@link https://wiki.multitheftauto.com/wiki/getTeamFromName|MTASA Wiki}
     * @param teamName A string determining the name of the team you wish to find.
     * @return Returns the [[team]] element if it was found, ''false'' otherwise.
     */
    export function getTeamFromName(teamName: string, ): team;

    /**
     * This function gets the team name of a team object.
     * @see {@link https://wiki.multitheftauto.com/wiki/getTeamName|MTASA Wiki}
     * @param theTeam The team you want to retrieve the name of.
     * @return Returns a string representing the team's name if the team object was valid, ''false'' otherwise.
     */
    export function getTeamName(theTeam: team, ): string;

    /**
     * This function allows tracing of MTA functions and events. It should only be used when debugging scripts as it may degrade script performance.
     * Debug hooks are not recursive, so functions and events triggered inside the hook callback will not be traced.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/addDebugHook|MTASA Wiki}
     * @param hookType The type of hook to add. This can be:  ** preEvent  ** postEvent  ** preFunction  ** postFunction  {{New feature/item|3.0158|1.5.5|11856|  * preEventFunction  * postEventFunction  }}
     * @param callbackFunction The function to call  ** Returning the string "skip" from the callback function will cause the original function/event to be skipped
     * @param nameList Table of strings for restricting which functions and events the hook will be triggered on  ** addDebugHook and removeDebugHook will only be hooked if they are specified in the name list
     * @return Returns ''true'' if the hook was successfully added, or ''false'' otherwise.
     */
    export function addDebugHook(hookType: string, callbackFunction: HandleFunction, nameList?: table, ): boolean;

    /**
     * This function returns the decrypted data from [https://en.wikipedia.org/wiki/Base64 base64] representation of the encrypted block
     * @see {@link https://wiki.multitheftauto.com/wiki/base64Decode|MTASA Wiki}
     * @param data The block of data you want to decrypt
     * @return Returns the decrypted data from [https://en.wikipedia.org/wiki/Base64 base64] representation of the encrypted block if the decryption process was successfully completed, ''false'' otherwise.
     */
    export function base64Decode(data: string, ): string;

    /**
     * This function returns the [https://en.wikipedia.org/wiki/Base64 base64] representation of the encoded block of data
     * @see {@link https://wiki.multitheftauto.com/wiki/base64Encode|MTASA Wiki}
     * @param data The block of data you want to encode
     * @return Returns the [https://en.wikipedia.org/wiki/Base64 base64] representation of the encoded data if the encoding process was successfully completed, ''false'' otherwise.
     */
    export function base64Encode(data: string, ): string;

    /**
     * This function performs a bitwise AND-conjunction on two or more (unsigned) 32-bit [[Int|integers]]. See [http://en.wikipedia.org/wiki/Bitwise_operation#AND Bitwise operation] for more details.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/bitAnd|MTASA Wiki}
     * @return Returns the conjuncted value.
     */
    export function bitAnd(var1: number, var2: number, ...args: any[], ): number;

    /**
     * This function performs a bitwise NOT on an (unsigned) 32-bit [[Int|integer]]. See [http://en.wikipedia.org/wiki/Bitwise_operation#NOT Bitwise operation] for more details.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/bitNot|MTASA Wiki}
     * @param var The value you want to perform a bitwise NOT on
     * @return Returns the value on which the operation has been performed.
     */
    export function bitNot(variableValue: number, ): number;

    /**
     * This function performs a bitwise OR-conjunction on two or more (unsigned) 32-bit [[Int|integers]]. See [http://en.wikipedia.org/wiki/Bitwise_operation#OR Bitwise operation] for more details.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/bitOr|MTASA Wiki}
     * @return Returns the conjuncted value.
     */
    export function bitOr(var1: number, var2: number, ...args: any[], ): number;

    /**
     * This function performs a bitwise XOR-conjunction (exclusive OR) on two or more (unsigned) 32-bit [[Int|integers]]. See [http://en.wikipedia.org/wiki/Bitwise_operation#XOR Bitwise operation] for more details.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/bitXor|MTASA Wiki}
     * @return Returns the conjuncted value.
     */
    export function bitXor(var1: number, var2: number, ...args: any[], ): number;

    /**
     * This function performs an AND-conjunction on two or more (unsigned) 32-bit [[Int|integers]] and checks, whether the conjuncted value is zero or not. See [http://en.wikipedia.org/wiki/Bitwise_operation#AND Bitwise operation] for more details.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/bitTest|MTASA Wiki}
     * @return Returns ''true'' if the conjuncted value is '''not''' zero, ''false'' otherwise. If a bad argument was passed to [[bitTest]], you'll get ''nil''.
     */
    export function bitTest(var1: number, var2: number, ...args: any[], ): boolean;

    /**
     * This functions performs a bitwise circular left-rotation on the integer '''value''' by integer '''n''' positions.
     * See [https://en.wikipedia.org/wiki/Bitwise_operation#Rotate_no_carry Bitwise operation] for more details.
     * @see {@link https://wiki.multitheftauto.com/wiki/bitLRotate|MTASA Wiki}
     * @param value The value you want to perform the rotation on.
     * @param n The amount of positions to rotate the value by.
     * @return Returns the circular left-rotated value as ''integer''.
     */
    export function bitLRotate(value: number, n: number, ): number;

    /**
     * This functions performs a bitwise circular right-rotation on the integer '''value''' by integer '''n''' positions.
     * See [https://en.wikipedia.org/wiki/Bitwise_operation#Rotate_no_carry Bitwise operation] for more details.
     * @see {@link https://wiki.multitheftauto.com/wiki/bitRRotate|MTASA Wiki}
     * @param value The value you want to perform the rotation on.
     * @param n The amount of positions to rotate the value by.
     * @return Returns the circular right-rotated value as ''integer''.
     */
    export function bitRRotate(value: number, n: number, ): number;

    /**
     * This functions performs a logical left shift on the integer '''value''' by integer '''n''' positions. In a ''logical shift'', zeros are shifted in to replace the discarded bits.
     * See [https://en.wikipedia.org/wiki/Bitwise_operation#Logical_shift Bitwise operation] for more details.
     * @see {@link https://wiki.multitheftauto.com/wiki/bitLShift|MTASA Wiki}
     * @param value The value you want to perform the shift on.
     * @param n The amount of positions to shift the value by.
     * @return Returns the logical left shifted value as ''integer''.
     */
    export function bitLShift(value: number, n: number, ): number;

    /**
     * This functions performs a logical right shift on the integer '''value''' by integer '''n''' positions. In a ''logical shift'', zeros are shifted in to replace the discarded bits.
     * See [https://en.wikipedia.org/wiki/Bitwise_operation#Logical_shift Bitwise operation] for more details.
     * @see {@link https://wiki.multitheftauto.com/wiki/bitRShift|MTASA Wiki}
     * @param value The value you want to perform the shift on.
     * @param n The amount of positions to shift the value by.
     * @return Returns the logical right shifted value as ''integer''.
     */
    export function bitRShift(value: number, n: number, ): number;

    /**
     * This functions performs an arithmetic shift on the integer '''value''' by integer '''n''' positions. In an ''arithmetic shift'', zeros are shifted in to replace the discarded bits. In a ''right arithmetic'' shift, the [https://en.wikipedia.org/wiki/Sign_bit sign bit] is shifted in on the left, thus preserving the sign of the operand.
     * See [https://en.wikipedia.org/wiki/Bitwise_operation#Arithmetic_shift Bitwise operation] for more details.
     * @see {@link https://wiki.multitheftauto.com/wiki/bitArShift|MTASA Wiki}
     * @param value The value you want to perform the arithmetic shift on.
     * @param n The amount of positions to shift the value by.
     * @return Returns the arithmetic shifted value as ''integer''.
     */
    export function bitArShift(value: number, n: number, ): number;

    /**
     * This function returns the unsigned number formed by the bits field to field + width - 1 (range: 0-31).
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/bitExtract|MTASA Wiki}
     * @param var The value
     * @param field The field number
     * @param width Number of bits to extract
     * @default 1
     * @return Returns the extracted value/bit sequence.
     */
    export function bitExtract(variableValue: number, field: number, width?: number, ): number;

    /**
     * This function returns the unsigned number formed by var value with replacement specified at bits field to field + width - 1
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/bitReplace|MTASA Wiki}
     * @param var The value
     * @param replaceValue The replaceValue
     * @param field The field number
     * @param width Number of bits to extract
     * @default 1
     * @return Returns the replaced value/bit sequence.
     */
    export function bitReplace(variableValue: number, replaceValue: number, field: number, width: number, ): number;

    /**
     * [[debugSleep]] freezes the client/server for the specified time. This means that all synchronization, rendering and script execution will stop except HTTP processing invoked by [[fetchRemote]]. This function only works, if development mode is enabled by [[setDevelopmentMode]] and can be utilised to build a debugger that communicates via HTTP requests with the editor/IDE.
     * @see {@link https://wiki.multitheftauto.com/wiki/debugSleep|MTASA Wiki}
     * @return Returns ''true'' if the development mode is enabled and arguments are correct, ''false'' otherwise.
     */
    export function debugSleep(sleep: number, ): boolean;

    /**
     * This function decodes an encoded [[string]] using the specified algorithm. The counterpart of this function is [[encodeString]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/decodeString|MTASA Wiki}
     * @param algorithm The algorithm to use.
     * @param input The input to decode.
     * @param options A table with options and other neccessary data for the algorithm, as detailed below.
     * @return Returns the decoded string if successful, ''false'' otherwise. If a callback was provided, the decoded string is argument to the callback.
     */
    export function decodeString(algorithm: string, input: string, options: table, callback?: HandleFunction, ): string;

    /**
     * This function will take a reference and returns its Lua element.
     * @see {@link https://wiki.multitheftauto.com/wiki/deref|MTASA Wiki}
     * @param reference The valid reference, which you want to dereference
     * @return Returns ''mixed'' if the reference were valid. Returns ''false'' if the reference were invalid.
     */
    export function deref(reference: number, ): string;

    /**
     * This function encodes a [[string]] using the specified algorithm. The counterpart of this function is [[decodeString]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/encodeString|MTASA Wiki}
     * @param algorithm The algorithm to use.
     * @param input The input to encode.
     * @param options A table with options and other neccessary data for the algorithm, as detailed below.
     * @return Returns the encoded string if successful, ''false'' otherwise. If a callback was provided, ''true'' is returned immediately, and the encoded string is passed as an argument to the callback.
     */
    export function encodeString(algorithm: string, input: string, options: table, callback?: HandleFunction, ): string;

    /**
     * This function parses a [[JSON]] formatted string into variables. You can use [[toJSON]] to encode variables into a JSON string that can be read by this function.
     * @see {@link https://wiki.multitheftauto.com/wiki/fromJSON|MTASA Wiki}
     * @param json A JSON formatted string
     * @return Returns variables read from the JSON string.
     * * '''Note:''' Indices of a JSON object such as "1": "cat" are being returned as [[string]], not as [[int]]eger.
     */
    export function fromJSON(json: string, ): any;

    /**
     * This function will extract Red, Green, Blue and Alpha values from a hex string you provide it. These strings follow the same format as used in HTML, with addition of the Alpha values.
     * @see {@link https://wiki.multitheftauto.com/wiki/getColorFromString|MTASA Wiki}
     * @param theColor A string containing a valid color code.  :Valid strings are:
     * @return Returns four integers in RGBA format, with a maximum value of 255 for each.  Each stands for ''red'', ''green'', ''blue'', and ''alpha''.  Alpha decides transparancy where 255 is opaque and 0 is transparent.  ''false'' is returned if the string passed is invalid (for example, is missing the preceeding # sign).
     */
    export function getColorFromString(theColor: string, ): LuaMultiReturn<[number,number,number,number]>;

    /**
     * This function is used to get the development mode of the client. For more information see [[setDevelopmentMode]]
     * @see {@link https://wiki.multitheftauto.com/wiki/getDevelopmentMode|MTASA Wiki}
     * @return Returns ''true'' if the development mode is on, ''false'' if off.
     */
    export function getDevelopmentMode(): boolean;

    /**
     * This function returns the distance between two 2 dimensional points using the pythagorean theorem.
     * @see {@link https://wiki.multitheftauto.com/wiki/getDistanceBetweenPoints2D|MTASA Wiki}
     * @param x1 : The X position of the first point
     * @param y1 : The Y position of the first point
     * @param x2 : The X position of the second point
     * @param y2 : The Y position of the second point
     * @return Returns a float containing the 2D distance between the two points. Returns ''false'' if invalid parameters are passed.
     */
    export function getDistanceBetweenPoints2D(x1: number, y1: number, x2: number, y2: number, ): number;

    /**
     * This function returns the distance between two 3 dimensional points using the pythagorean theorem.
     * @see {@link https://wiki.multitheftauto.com/wiki/getDistanceBetweenPoints3D|MTASA Wiki}
     * @param x1 : The X position of the first point
     * @param y1 : The Y position of the first point
     * @param z1 : The Z position of the first point
     * @param x2 : The X position of the second point
     * @param y2 : The Y position of the second point
     * @param z2 : The Z position of the second point
     * @return Returns a float containing the distance between the two points as a [[float]]. Returns ''false'' if an argument passed was invalid.
     */
    export function getDistanceBetweenPoints3D(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ): number;

    /**
     * Used for custom Lua based interpolation, returns the easing value (animation time to use in your custom interpolation) given a progress and an [[Easing|easing function]].
     * In most cases, either [[moveObject]] or [[interpolateBetween]] can do the job. getEasingValue is only provided in case you want to do your own custom interpolation based on easing.
     * @see {@link https://wiki.multitheftauto.com/wiki/getEasingValue|MTASA Wiki}
     * @param fProgress float between 0 and 1 indicating the interpolation progress (0 at the beginning of the interpolation, 1 at the end).
     * @param strEasingType the Easing|easing function to use for the interpolation
     * @param fEasingPeriod the period of the Easing|easing function (only some easing functions use this parameter)
     * @param fEasingAmplitude the amplitude of the Easing|easing function (only some easing functions use this parameter)
     * @param fEasingOvershoot the overshoot of the Easing|easing function (only some easing functions use this parameter)
     * @return Returns ''fAnimationTime '' the animation time given by the easing function (can be < 0 or > 1 since some [[Easing|easing functions]] have overshoot or bounce/spring effects, ''false'' otherwise (error in parameters).
     */
    export function getEasingValue(fProgress: number, strEasingType: string, fEasingPeriod?: number, fEasingAmplitude?: number, fEasingOvershoot?: number, ): number;

    /**
     * This function retrieves the maximum [http://en.wikipedia.org/wiki/Frame_rate FPS (Frames per second)] that players on the server can run their game at.  
     * @return Returns an integer between '''25''' and '''100''' of the maximum FPS that players can run their game at.
     */
    export function getFPSLimit(): number;

    /**
     * This function returns network status information.
     * @see {@link https://wiki.multitheftauto.com/wiki/getNetworkStats|MTASA Wiki}
     * @return Returns a table, the indexes in the table are the following:
     * * * '''bytesReceived''' - Total number of bytes received since the connection was started
     * * * '''bytesSent''' - Total number of bytes sent since the connection was started
     * * * '''packetsReceived''' - Total number of packets received since the connection was started
     * * * '''packetsSent''' - Total number of packets sent since the connection was started
     * * * '''packetlossTotal''' - (0-100) Total packet loss percentage of sent data, since the connection was started
     * * * '''packetlossLastSecond''' - (0-100) Packet loss percentage of sent data, during the previous second
     * * * '''messagesInSendBuffer'''
     * * * '''messagesInResendBuffer''' - Number of packets queued to be resent (due to packet loss)
     * * * '''isLimitedByCongestionControl'''
     * * * '''isLimitedByOutgoingBandwidthLimit'''
     * * * '''encryptionStatus'''
     */
    export function getNetworkStats(thePlayer: element, ): table;

    /**
     * This function returns a [[table]] containing network usage information about inbound and outbound packets.
     * @see {@link https://wiki.multitheftauto.com/wiki/getNetworkUsageData|MTASA Wiki}
     * @return Returns a [[table]] with two fields: "in" and "out". Each of these contain a table with two fields: "bits" and "count". Each of these contain a table with 256 numeric fields ranging from 0 to 255, containing the appropriate network usage data for such packet id.
     */
    export function getNetworkUsageData(): table;

    /**
     * This function returns performance information.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPerformanceStats|MTASA Wiki}
     * @param category Performance statistics category. If empty string is given, list of all categories is returned.See categories for more information.
     * @param options Category specific , separated options. All categories supports h option for help.
     * @default ""
     * @param filter Case-sensitive filter used to select returned rows. Only name column is filtered.
     * @default ""
     * @return Returns two tables. First contains column names. The second contains result rows. Each row is table of cells.
     */
    export function getPerformanceStats(category: string, options?: string, filter?: string, ): LuaMultiReturn<[table,table]>;

    /**
     * This function gets the server or client (if used client sided it returns time as set on client's computer) real time and returns it in a table. If you want to get the in-game time (shown on GTA's clock) use [[getTime]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getRealTime|MTASA Wiki}
     * @param seconds A count in seconds from the year 1970.  Useful for storing points in time, or for retrieving time information for getBanTime. The valid range of this argument is 0 to 32,000,000,000  {{New feature/item|3.0141|1.4.1|6976|
     * @default current
     * @param localTime Set to true to adjust for the locally set timezone.  }}
     * @default true
     * @return Returns a ''table'' of substrings with different time format or ''false'' if the '''seconds''' argument is out of range.
     * * {| border="2" cellpadding="2" cellspacing="0" style="margin: 1em 1em 1em 0; background: #f9f9f9; border: 1px #aaa solid; border-collapse: collapse; font-size: 95%;"
     * * |'''Member'''
     * * |'''Meaning'''
     * * |'''Range'''
     * * |-
     * * |second
     * * |seconds after the minute
     * * |0-61*
     * * |-
     * * |minute
     * * |minutes after the hour
     * * |0-59
     * * |-
     * * |hour
     * * |hours since midnight
     * * |0-23
     * * |-
     * * |monthday
     * * |day of the month
     * * |1-31
     * * |-
     * * |month
     * * |months since January
     * * |0-11
     * * |-
     * * |year
     * * |years since 1900
     * * |-
     * * |weekday
     * * |days since Sunday
     * * |0-6
     * * |-
     * * |yearday
     * * |days since January 1
     * * |0-365
     * * |-
     * * |isdst
     * * |Daylight Saving Time flag
     * * |-
     * * |timestamp
     * * |seconds since 1970 (Ignoring set timezone)
     * * |
     * * |}
     * * ''* second'' is generally 0-59. Extra range to accommodate for leap seconds in certain systems.
     */
    export function getRealTime(seconds: number, localTime: boolean, ): table;

    /**
     * This function returns amount of time that your system has been running in milliseconds. By comparing two values of [[getTickCount]], you can determine how much time has passed (in milliseconds) between two events. This could be used to determine how efficient your code is, or to time how long a player takes to complete a task.
     * @see {@link https://wiki.multitheftauto.com/wiki/getTickCount|MTASA Wiki}
     * @return Returns an integer containing the number of milliseconds since the system the server is running on started. This has the potential to wrap-around.
     */
    export function getTickCount(): number;

    /**
     * This function is for getting the details of a running timer.
     * @see {@link https://wiki.multitheftauto.com/wiki/getTimerDetails|MTASA Wiki}
     * @param theTimer A timer element.
     * @return * Integer one represents the time left in miliseconds (1000th of a second) of the current time left in the loop.
     * * * Integer two represents the amount of times the timer has left to execute.
     * * * Integer three represents the time interval of timer.
     * * * Returns false if the timer doesn't exist or stopped running. Also, debugscript will say "Bad Argument @ 'getTimerDetails'". To prevent this, you can check if the timer exists with [[isTimer]]().
     */
    export function getTimerDetails(theTimer: timer, ): LuaMultiReturn<[number,number,number]>;

    /**
     * This function returns a table of all active timers that the resource that calls it has created. Alternatively, only the timers with a remaining time less than or equal to a certain value can be retrieved.
     * @see {@link https://wiki.multitheftauto.com/wiki/getTimers|MTASA Wiki}
     * @param theTime The maximum time left (in milliseconds) on the timers you wish to retrieve.
     * @default nil
     * @return Returns a table of all the active timers.
     */
    export function getTimers(theTime: number, ): table;

    /**
     * This function splits a string using the given separating character and returns one specified substring.
     * @see {@link https://wiki.multitheftauto.com/wiki/gettok|MTASA Wiki}
     * @param text the string that should be split.
     * @param tokenNumber which token should be returned (1 for the first, 2 for the second, and so on).
     * @return Returns a [[string]] containing the token if it exists, ''false'' otherwise.
     */
    export function gettok(text: string, tokenNumber: number, int: string, ): string;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/getUserdataType|MTASA Wiki}
     * @param value : A userdata value to get the type of. Userdata types can be:
     * @return Returns a [[string]] containing the specified userdata's type, or ''false'' plus an error message if the given value is not userdata.
     */
    export function getUserdataType(value: userdata, ): string;

    /**
     * This function gives you various version information about MTA and the operating system.
     * @return Returns a table with version information. Specifically these keys are present in the table:
     * @return *'''number:''' the MTA server or client version (depending where the function was called) in pure numerical form, e.g. ''"256"''
     * @return *'''mta:''' the MTA server or client version (depending where the function was called) in textual form, e.g. ''"1.0"''
     * @return *'''name:''' the full MTA product name, either ''"MTA:SA Server"'' or ''"MTA:SA Client"''.
     * @return *'''netcode:''' the netcode version number.
     * @return *'''os:''' returns the operating system on which the server or client is running
     * @return *'''type:''' the type of build.  can be:
     * @return **'''"Nightly rX"''' - A nightly development build.  '''X''' represents the nightly build revision.
     * @return **'''"Custom"''' - A build compiled manually
     * @return **'''"Release"''' - A build that is publicly released (provisional).
     * @return *'''tag:''' the build tag (from 1.0.3 onwards). Contains infomation about the underlying version used. i.e. The final version of 1.0.3 has the build tag of "1.0.3 rc-9". (This can be confirmed by using the console command 'ver'.)
     * @return *'''sortable:''' a 15 character sortable version string (from 1.0.4 onwards). Format of the string is described in [[getPlayerVersion]].
     */
    export function getVersion(): table;

    /**
     * This function returns a hash of the specified string in the specified algorithm.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/hash|MTASA Wiki}
     * @param algorithm : A string which must be one of these: md5, sha1, sha224, sha256, sha384, sha512
     * @param dataToHash : A string of the data to hash.
     * @return Returns the hash of the data, false if an invalid argument was used.
     */
    export function hash(algorithm: string, dataToHash: string, ): string;

    /**
     * This function returns human-readable representations of tables and MTA datatypes as a string.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/inspect|MTASA Wiki}
     * @param var A variable of any datatype.
     * @param options A table of options. It is not mandatory, but when it is provided, it must be a table. For a list of options, see the https://github.com/kikito/inspect.lua#options Inspects GitHub page.
     * @return Always returns a string. The contents can change if we update the inspect library, so it is not expected to be consistent across Lua versions.
     */
    export function inspect(variableValue: string, options?: table, ): string;

    /**
     * Interpolates a 3D Vector between a source value and a target value using either linear interpolation or any other [[Easing|easing function]].
     * It can also be used to interpolate 2D vectors or scalars by only setting some of the x, y, z values and putting 0 to the others.
     * @see {@link https://wiki.multitheftauto.com/wiki/interpolateBetween|MTASA Wiki}
     * @param fProgress float between 0 and 1 indicating the interpolation progress (0 at the beginning of the interpolation, 1 at the end). If it is higher than 1, it will start from the beginning.
     * @param strEasingType the Easing|easing function to use for the interpolation
     * @param fEasingPeriod the period of the Easing|easing function (only some easing functions use this parameter)
     * @param fEasingAmplitude the amplitude of the Easing|easing function (only some easing functions use this parameter)
     * @param fEasingOvershoot the overshoot of the Easing|easing function (only some easing functions use this parameter)
     * @return Returns ''x, y, z'' the interpolated 3D vector/value if successful, ''false'' otherwise (error in parameters).
     * * As mentioned before, interpolateBetween can be used on 2D vectors or scalars in which case only some (x, y or just x) of the returned values are to be used (cf. alpha interpolation in marker example or size interpolation in window example).
     */
    export function interpolateBetween(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, fProgress: number, strEasingType: string, fEasingPeriod: number, fEasingAmplitude: number, fEasingOvershoot: number, ): LuaMultiReturn<[number,number,number]>;

    /**
     * This function intelligently outputs debug messages into the Debug Console.  It is similar to [[outputDebugString]], but outputs useful information for '''any''' variable type, and does not require use of Lua's tostring.  This includes information about element types, and table structures.  It is especially useful for quick debug tasks.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/iprint|MTASA Wiki}
     * @param var1 A variable of any type to print intelligent information for.  {{OptionalArg}} 
     * @return Always returns ''nil''.
     */
    export function iprint(var1: string, var2?: string, ...args: any[], ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/isOOPEnabled|MTASA Wiki}
     * @return Returns ''true'' or ''false'' if ''[[OOP]]'' is enabled or not. Returns ''nil'' if an error arised.
     */
    export function isOOPEnabled(): boolean;

    /**
     * This function checks if a variable is a [[timer]].
     * @see {@link https://wiki.multitheftauto.com/wiki/isTimer|MTASA Wiki}
     * @param theTimer : The variable that we want to check.
     * @return Returns ''true'' if the passed value is a timer, ''false'' otherwise.
     */
    export function isTimer(theTimer: timer, ): boolean;

    /**
     * This function allows you to kill/halt existing timers.
     * @see {@link https://wiki.multitheftauto.com/wiki/killTimer|MTASA Wiki}
     * @param theTimer The timer you wish to halt.
     * @return Returns ''true'' if the timer was successfully killed, ''false'' if no such timer existed.
     */
    export function killTimer(theTimer: timer, ): boolean;

    /**
     * Calculates the MD5 hash of the specified string and returns its hexadecimal representation.
     * @see {@link https://wiki.multitheftauto.com/wiki/md5|MTASA Wiki}
     * @param str the string to hash.
     * @return Returns the MD5 hash of the input string if successful, ''false'' otherwise.
     */
    export function md5(str: string, ): string;

    /**
     * This function creates a new password hash using a specified hashing algorithm.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/passwordHash|MTASA Wiki}
     * @param password The password to hash.
     * @param algorithm The algorithm to use:
     * @param options table with options for the hashing algorithm, as detailed below.  {{New feature/item|3.0154|1.5.4|11281|
     * @param callback providing a callback will run this function asynchronously, the arguments to the callback are the same as the returned values below.  }}
     * @return Returns the hash as a string if hashing was successful, ''false'' otherwise. If a callback was provided, the aforementioned values are arguments to the callback, and this function will always return ''true''.
     */
    export function passwordHash(password: string, algorithm: string, options: table, callback?: HandleFunction, ): string;

    /**
     * This function verifies whether a password matches a password hash.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/passwordVerify|MTASA Wiki}
     * @param password The password to check.
     * @param hash A supported hash (see passwordHash). <span style=color:red>Note that only the prefix $2y$ is supported for type bcrypt (older prefixes can cause security issues).</span>  {{New feature/item|3.0156|1.5.6||
     * @param options advanced options
     * @param callback providing a callback will run this function asynchronously, the arguments to the callback are the same as the returned values below.  }}
     * @return Returns true if the password matches the hash. Returns false if the password does not match, or if an unknown hash was passed. If a callback was provided, the aforementioned values are arguments to the callback, and this function will always return ''true''.
     */
    export function passwordVerify(password: string, hash: string, options?: table, callback?: HandleFunction, ): boolean;

    /**
     * This function stops at the first occurrence of the pattern in the input string and returns the result of the search.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/pregFind|MTASA Wiki}
     * @param subject The input string
     * @param pattern The pattern string to search for in the input string.
     * @return Returns ''true'' if the pattern was found in the input string, ''false'' otherwise.
     */
    export function pregFind(subject: string, pattern: string, string?: number, ): boolean;

    /**
     * This function returns all matches.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/pregMatch|MTASA Wiki}
     * @param base The base string for replace.
     * @param pattern The pattern for match in base string.
     * @param maxResults Maximum number of results to return
     * @default 100000
     * @return Returns a ''[[table]]'' if one or more match is found, ''false'' otherwise.
     */
    export function pregMatch(base: string, pattern: string, string?: number, maxResults?: number, ): table;

    /**
     * This function performs a regular expression search and replace and returns the replaced string.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/pregReplace|MTASA Wiki}
     * @param subject The input string.
     * @param pattern The pattern string to search for in the input string.
     * @param replacement The replacement string to replace all matches within the input string.
     * @return Returns the replaced ''[[string]]'', or [[bool]] ''false'' otherwise.
     */
    export function pregReplace(subject: string, pattern: string, replacement: string, string?: number, ): string;

    /**
     * This function removes hooks added by [[addDebugHook]]
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/removeDebugHook|MTASA Wiki}
     * @param hookType The type of hook to remove. This can be:  ** preEvent  ** postEvent  ** preFunction  ** postFunction
     * @return Returns ''true'' if the hook was successfully removed, or ''false'' otherwise.
     */
    export function removeDebugHook(hookType: string, callbackFunction: HandleFunction, ): boolean;

    /**
     * This function will create a reference to the given argument.
     * @see {@link https://wiki.multitheftauto.com/wiki/ref|MTASA Wiki}
     * @return Returns an ''int'' if the reference were successfully created. Returns ''false'' if the parameter were invalid.
     */
    export function ref(objectToReference: string, ): number;

    /**
     * This function allows you to reset the elapsed time in existing timers to zero. The function does not reset the 'times to execute' count on timers which have a limited amout of repetitions.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetTimer|MTASA Wiki}
     * @param theTimer The timer whose elapsed time you wish to reset.
     * @return Returns ''true'' if the timer was successfully reset, ''false'' otherwise.
     */
    export function resetTimer(theTimer: timer, ): boolean;

    /**
     * This function is used to set the development mode. Setting development mode allows access to special commands which can assist with script debugging.
     * '''Client-side''' development mode commands:
     * * '''[[Client_Commands#showcol|showcol]]''': Enables colshapes to be viewed as a wireframe object.
     * * '''[[Client_Commands#showsound|showsound]]''': Enables world sound ids to be printed in the debug output window.
     * '''Shared''' development mode functions:
     * * '''[[debugSleep]]''': Sets the freeze time for the client/server.
     * @see {@link https://wiki.multitheftauto.com/wiki/setDevelopmentMode|MTASA Wiki}
     * @param enable : A boolean to indicate whether development mode is on (true) or off (false)  {{New feature/item|3.0150|1.5||
     * @param enableWeb : A boolean to indicate whether browser debug messages will be filtered (false) or not (true)  }}
     * @default false
     * @return Returns ''true'' if the mode was set correctly, ''false'' otherwise.
     */
    export function setDevelopmentMode(enable: boolean, enableWeb?: boolean, ): boolean;

    /**
     * This function sets the maximum [http://en.wikipedia.org/wiki/Frame_rate FPS (Frames per second)] that players on the server can run their game at.  
     * @param fpsLimit An integer value representing the maximum FPS. This value may be between 25 and 100 FPS. You can also pass 0 or false, in which case the FPS limit will be the one set in the client settings (by default, 100 FPS and the client fps limit should also be manually changed via fps_limit=0 in console or MTA San Andreas 1.5\MTA\config\coreconfig.xml).
     * @return Returns ''true'' if successful, or ''false'' if it was not possible to set the limit or an invalid value was passed.
     */
    export function setFPSLimit(fpsLimit: number, ): boolean;

    /**
     * * The sha module and this function may conflict with eachother, if you use this function uninstall the module!
     * * This function returns an uppercase string, so make sure you string.upper() anything else you are checking against that has been sha256'd elsewhere.}}
     * Calculates the sha256 hash of the specified string.
     * @see {@link https://wiki.multitheftauto.com/wiki/sha256|MTASA Wiki}
     * @param str the string to hash.
     * @return Returns the sha256 hash of the input string if successful, ''false'' otherwise.
     */
    export function sha256(str: string, ): string;

    /**
     * This function splits a string into substrings. You specify a character that will act as a separating character; this will determine where to split the sub-strings. For example, it can split the string "Hello World" into two strings containing the two words, by spliting using a space as a separator.
     * '''Note:''' You can use the function [[gettok]] to retrieve a single token from the string at a specific index. This may be faster for one-off lookups, but considerably slower if you are going to check each token in a long string.
     * @see {@link https://wiki.multitheftauto.com/wiki/split|MTASA Wiki}
     * @param stringToSplit The string you wish to split into parts.
     * @return Returns a ''table'' of substrings split from the original string if successful, ''false'' otherwise.
     * * {{note|Unicode characters work but when combined with others do not. E.g: #split("a€cb†", "€") returns 3 but #split("a€cb", "€") returns 2.
     * * }}
     * * {{note|You can't use same char twice as a separator. Eg.:  ||, ||| are the same as |.
     * * }}
     */
    export function split(stringToSplit: string, int: string, ): table;

    /**
     * This function retrieves the hex number of a specified color, useful for the dx functions.
     * @see {@link https://wiki.multitheftauto.com/wiki/tocolor|MTASA Wiki}
     * @param red The amount of http://en.wikipedia.org/wiki/RGBA_color_space red in the color (0-255).
     * @param green The amount of http://en.wikipedia.org/wiki/RGBA_color_space green in the color (0-255).
     * @param blue The amount of http://en.wikipedia.org/wiki/RGBA_color_space blue in the color (0-255).
     * @param alpha The amount of http://en.wikipedia.org/wiki/RGBA_color_space alpha in the color (0-255).
     * @default 255
     * @return Returns a single value representing the color.
     */
    export function tocolor(red: number, green: number, blue: number, alpha?: number, ): number;

    /**
     * This function converts a '''single''' value (preferably a Lua table) into a [[JSON]] encoded string. You can use this to store the data and then load it again using [[fromJSON]].
     * @see {@link https://wiki.multitheftauto.com/wiki/toJSON|MTASA Wiki}
     * @param compact a boolean representing whether the string will contain whitespaces. To remove whitespaces from JSON string, use true. String will contain whitespaces per default.  }}  {{New feature/item|3.0154|1.5.3|8046|
     * @default false
     * @param prettyType a type string from below:  ** none  ** spaces  ** tabs  }}
     * @default "none"
     * @return Returns a JSON formatted string.
     */
    export function toJSON(value: any, compact?: boolean, prettyType?: string, ): string;

    /**
     * The function returns the string of the specified UTF code.
     * @see {@link https://wiki.multitheftauto.com/wiki/utfChar|MTASA Wiki}
     * @param characterCode The UTF code, to get the string of.
     * @return Returns a ''[[string]]'' if the function was successful, ''false'' otherwise.
     */
    export function utfChar(characterCode: number, ): string;

    /**
     * The function returns the UTF codes of the given string.
     * @see {@link https://wiki.multitheftauto.com/wiki/utfCode|MTASA Wiki}
     * @param theString The string to get the UTF code of.
     * @return Returns an ''[[int]]'' if the function was successful, ''false'' otherwise.
     */
    export function utfCode(theString: string, ): number;

    /**
     * The function gets the real length of a string, in characters.
     * @see {@link https://wiki.multitheftauto.com/wiki/utfLen|MTASA Wiki}
     * @param theString The string to get the length of.
     * @return Returns an ''[[int]]'' if the function was successful, ''false'' otherwise.
     */
    export function utfLen(theString: string, ): number;

    /**
     * The function returns the byte position at specified character position.
     * @see {@link https://wiki.multitheftauto.com/wiki/utfSeek|MTASA Wiki}
     * @param theString The string.
     * @param position An int with the specified charachter position.
     * @return Returns an ''[[int]]'' if the function was successful, ''false'' otherwise.
     */
    export function utfSeek(theString: string, position: number, ): number;

    /**
     * The function returns a sub string, from the specified positions on a character.
     * @see {@link https://wiki.multitheftauto.com/wiki/utfSub|MTASA Wiki}
     * @param theString The string.
     * @param Start An int with the start position.
     * @param End An int with the end position.
     * @return Returns a ''[[string]]'' if the function was successful, ''false'' otherwise.
     */
    export function utfSub(theString: string, Start: number, End: number, ): string;

    /**
     * This function adds an upgrade to a [[vehicle]], e.g. nitrous, hydraulics.
     * @see {@link https://wiki.multitheftauto.com/wiki/addVehicleUpgrade|MTASA Wiki}
     * @param theVehicle : The element representing the vehicle you wish to add the upgrade to.
     * @param upgrade : The id of the upgrade you wish to add. (1000 to 1193), see Vehicle Upgrades  '''Note:''' setCameraTarget will behave strangely if you use hydraulics (upgrade id: 1087) server sided and when your camera target is the player inside the vehicle with hydraulics and if the player is not you.
     * @return Returns ''true'' if the upgrade was successfully added to the vehicle, otherwise ''false''.
     */
    export function addVehicleUpgrade(theVehicle: vehicle, upgrade: number, ): boolean;

    /**
     * This function attaches a trailer type vehicle to a trailer-towing-type vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/attachTrailerToVehicle|MTASA Wiki}
     * @param theVehicle : the vehicle you wish to attach a trailer to.
     * @param theTrailer : the trailer you wish to be attached.
     * @return Returns ''true'' if the vehicle's were successfully attached, ''false'' otherwise.
     */
    export function attachTrailerToVehicle(theVehicle: vehicle, theTrailer: vehicle, ): boolean;

    /**
     * This function will blow up a vehicle. This will cause an explosion and will kill the driver and any passengers inside it.
     * @see {@link https://wiki.multitheftauto.com/wiki/blowVehicle|MTASA Wiki}
     * @param vehicleToBlow the vehicle that you wish to blow up.  {{OptionalArg}} 
     * @param explode if this argument is true then the vehicle will explode, otherwise it will just be blown up silently.
     * @default true
     * @return Returns ''true'' if the vehicle was blown up, ''false'' if invalid arguments were passed to the function.
     */
    export function blowVehicle(vehicleToBlow: vehicle, explode: boolean, ): boolean;

    /**
     * This function creates a vehicle at the specified location.
     * Its worth nothing that the position of the vehicle is the center point of the vehicle, not its base. As such, you need to ensure that the z value (vertical axis) is some height above the ground. You can find the exact height using the client side function [[getElementDistanceFromCentreOfMassToBaseOfModel]], or you can estimate it yourself and just spawn the vehicle so it drops to the ground.
     * @see {@link https://wiki.multitheftauto.com/wiki/createVehicle|MTASA Wiki}
     * @param model : The Vehicle IDs|vehicle ID of the vehicle being created.
     * @param x : A floating point number representing the X coordinate on the map.
     * @param y : A floating point number representing the Y coordinate on the map.
     * @param z : A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
     * @param rx : A floating point number representing the rotation about the X axis in degrees.
     * @param ry : A floating point number representing the rotation about the Y axis in degrees.
     * @param rz : A floating point number representing the rotation about the Z axis in degrees.
     * @param numberplate : A string that will go on the number plate of the vehicle (max 8 characters).
     * @param bDirection (serverside only): Placeholder boolean which provides backward compatibility with some scripts. It never had any effect, but it is read by the code. It is recommended to ignore this argument, passing false or the variant1 argument in its place.  {{New feature/item|3.0120|1.2|| 
     * @param variant1 : An integer for the first vehicle variant. See vehicle variants.
     * @param variant2 : An integer for the second vehicle variant. See vehicle variants.  }}
     * @return Returns the [[vehicle]] element that was created. Returns ''false'' if the arguments are incorrect, or if the vehicle limit of 65535 is exceeded.
     */
    export function createVehicle(model: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, numberplate?: string, bDirection?: boolean, variant1?: number, variant2?: number, ): vehicle;

    /**
     * This function detaches an already attached trailer from a vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/detachTrailerFromVehicle|MTASA Wiki}
     * @param theVehicle : The vehicle you wish to detach a trailer from.
     * @param theTrailer : The trailer you wish to be detached.  {{Note|If 'theTrailer' is specified, it will only detach if this matches. If it is not specified, any trailer attached to 'theVehicle' will be detached.}}
     * @default nil
     * @return Returns 'true' if the vehicle's were successfully detached, 'false' otherwise.
     */
    export function detachTrailerFromVehicle(theVehicle: vehicle, theTrailer?: vehicle, ): boolean;

    /**
     * This function will set a [[vehicle]]'s health to full and fix its damage model. If you wish to only change the vehicle's health, without affecting its damage model, use [[setElementHealth]].
     * @see {@link https://wiki.multitheftauto.com/wiki/fixVehicle|MTASA Wiki}
     * @param theVehicle the vehicle you wish to fix
     * @return Returns ''true'' if the vehicle was fixed, ''false'' if '''theVehicle''' is invalid.
     */
    export function fixVehicle(theVehicle: vehicle, ): boolean;

    /**
     * This function returns a table of the original vehicle handling. Use [[getVehicleHandling]] if you wish to get the current handling of a vehicle, or [[getModelHandling]] for a specific vehicle model.
     * @see {@link https://wiki.multitheftauto.com/wiki/getOriginalHandling|MTASA Wiki}
     * @param modelID The vehicle ID you wish to get the original handling from.
     * @return Returns a ''table'' containing all the handling data, ''false'' otherwise. Here a list of valid table properties and what they return:
     * * {{Handling Properties}}
     */
    export function getOriginalHandling(modelID: number, ): table;

    /**
     * Gets the direction in which a train is driving (clockwise or counterclockwise).
     * @see {@link https://wiki.multitheftauto.com/wiki/getTrainDirection|MTASA Wiki}
     * @param train the train of which to get the driving direction.
     * @return Returns ''true'' if the train is driving clockwise on the train track, ''false'' if it is going counterclockwise or a failure occured.
     */
    export function getTrainDirection(train: vehicle, ): boolean;

    /**
     * Gets the position the train is currently on the track
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getTrainPosition|MTASA Wiki}
     * @param train the train to get the position of
     * @return Returns a float that represents how along the track it is, ''false'' if there is problem with train element.
     */
    export function getTrainPosition(train: vehicle, ): number;

    /**
     * Gets the speed at which a train is traveling on the rails.
     * @see {@link https://wiki.multitheftauto.com/wiki/getTrainSpeed|MTASA Wiki}
     * @param train the train of which to retrieve the speed.
     * @return Returns the train's speed if successful, ''false'' otherwise.
     */
    export function getTrainSpeed(train: vehicle, ): number;

    /**
     * This function returns the color of the specified vehicle. A vehicle can have up to four colors.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleColor|MTASA Wiki}
     * @param theVehicle The vehicle that you wish to get the color of.
     * @return *Returns 12 [[int|ints]] (if bRGB is ''true'') indicating the red, green and blue components of each of the 4 vehicle colors.
     * * *Returns 4 [[int|ints]] (if bRGB is ''false'') indicating the color ids of each of the 4 vehicle colors.
     * * *Returns ''false'' if the vehicle doesn't exist.
     * * Valid color ids if bRGB is set to false:
     * * {{Vehicle_colors}}
     * * <br>
     */
    export function getVehicleColor(theVehicle: vehicle, bRGB: boolean, ): LuaMultiReturn<[number,number,number,number,number,number,number,number,number,number,number,number]>;

    /**
     * This function returns a table of all the compatible upgrades (or all for a specified slot, optionally) for a specified vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleCompatibleUpgrades|MTASA Wiki}
     * @param theVehicle the vehicle you wish to retrieve the list of compatible upgrades of.
     * @param slot the upgrade slot number for which youre getting the list (from 0 to 16). Compatible upgrades for all slots are listed if this is not specified.
     * @return Returns a ''table'' with all the compatible upgrades, or ''false'' if invalid arguments are passed.
     */
    export function getVehicleCompatibleUpgrades(theVehicle: vehicle, slot?: number, ): table;

    /**
     * This function is used to get the player in control of the specified vehicle which includes somebody who is trying to enter the drivers seat.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleController|MTASA Wiki}
     * @param theVehicle the vehicle you want to get the controller of.
     * @return Returns a [[player]] object, if there isn't a driver, it will search the 'trailer chain' for the front driver, ''false'' otherwise.
     */
    export function getVehicleController(theVehicle: vehicle, ): player;

    /**
     * This function tells you how open a door is (the 'open ratio'). Doors include boots/trunks and bonnets on vehicles that have them.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleDoorOpenRatio|MTASA Wiki}
     * @param theVehicle The vehicle that you wish to get the door open ratio of.
     * @param door A whole number, 0 (hood), 1 (trunk), 2 (front left), 3 (front right), 4 (rear left), 5 (rear right)
     * @return Returns a number between 0 and 1 that indicates how open the door is. 0 is closed, and 1 is fully open. Returns ''false'' if invalid arguments are passed.
     */
    export function getVehicleDoorOpenRatio(theVehicle: vehicle, door: number, ): number;

    /**
     * This function returns the current state of the specifed door on the vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleDoorState|MTASA Wiki}
     * @param theVehicle the vehicle you want to get the door status of.
     * @param door a whole number representing which door to get the status of. Valid values are:
     * @return If successful, one of the following integers will be returned:
     * * * '''0:''' Shut, intact (also returned if the door does not exist)
     * * * '''1:''' Ajar, intact
     * * * '''2:''' Shut, damaged
     * * * '''3:''' Ajar, damaged
     * * * '''4:''' Missing
     */
    export function getVehicleDoorState(theVehicle: vehicle, door: number, ): number;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleEngineState|MTASA Wiki}
     * @param theVehicle : the vehicle you wish to get the engine state of.
     * @return Returns '''true''' if the vehicle's engine is started, '''false''' otherwise.
     */
    export function getVehicleEngineState(theVehicle: vehicle, ): boolean;

    /**
     * This function returns a table of the current vehicle handling data.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleHandling|MTASA Wiki}
     * @param theVehicle the vehicle you wish to get the handling data of.
     * @return Returns a ''table'' containing all the handling data, ''false'' otherwise. Here's a list of valid table properties and what they return:
     * * {{Handling Properties}}
     */
    export function getVehicleHandling(theVehicle: element, ): table;

    /**
     * This function will get the headlight color of a vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleHeadLightColor|MTASA Wiki}
     * @param theVehicle The vehicle that you wish to set the headlight color of.
     * @return Returns three ''integers'' for the red, green and blue of the headlight color for the specified vehicle, ''false'' if an invalid vehicle was specified.
     */
    export function getVehicleHeadLightColor(theVehicle: vehicle, ): LuaMultiReturn<[number,number,number]>;

    /**
     * This function is used to check whether a vehicle's landing gear is down or not. Only planes can be used with this function.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleLandingGearDown|MTASA Wiki}
     * @param theVehicle the vehicle of which you wish to check the landing gear state.
     * @return Returns ''true'' if landing gear is down, ''false'' if the landing gear is up.<br />
     * * Returns ''nil'' if the vehicle has no landing gear, or is invalid.
     */
    export function getVehicleLandingGearDown(theVehicle: vehicle, ): boolean;

    /**
     * This function returns the current state of the specified light on the vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleLightState|MTASA Wiki}
     * @param theVehicle the vehicle that you wish to know the light state of.
     * @param light A whole number determining the individual light:
     * @return Returns 0 (working) or 1 (broken)
     */
    export function getVehicleLightState(theVehicle: vehicle, light: number, ): number;

    /**
     * This function returns the maximum number of passengers that a specified vehicle can hold. Only passenger seats are counted, the driver seat is excluded.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleMaxPassengers|MTASA Wiki}
     * @param theVehicle the vehicle that you wish to know the maximum capacity of.  OR
     * @return Returns an [[int]] indicating the maximum number of passengers that can enter a vehicle.
     */
    export function getVehicleMaxPassengers(theVehicle: vehicle, ): number;

    /**
     * This function retrieves the model ID of a vehicle as an [[int]]eger value from its name.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleModelFromName|MTASA Wiki}
     * @param name A string containing the name of the vehicle.  {{All Vehicle Types}}
     * @return Returns an [[int]]eger if the name exists, ''false'' otherwise.
     * * If you use this function on vehicles with shared names, such as "police", it will return the earliest occurrence of that vehicle's ID.
     */
    export function getVehicleModelFromName(name: string, ): number;

    /**
     * This function returns a string containing the name of the vehicle
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleName|MTASA Wiki}
     * @param theVehicle the vehicle you want to get the name of.
     * @return Returns a string containing the requested vehicle's name, or ''false'' if the vehicle passed to the function is invalid.
     */
    export function getVehicleName(theVehicle: vehicle, ): string;

    /**
     * Gets the name of a vehicle by its model ID.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleNameFromModel|MTASA Wiki}
     * @param model This is the vehicle model ID. See vehicle IDs to see what values will return names.
     * @return Returns the name of the vehicle if the model ID was valid, empty string otherwise<ref>https://bugs.multitheftauto.com/view.php?id=8523</ref>.
     */
    export function getVehicleNameFromModel(model: number, ): string;

    /**
     * This function gets the player sitting/trying to enter the specified vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleOccupant|MTASA Wiki}
     * @param theVehicle the vehicle of which you wish to retrieve the driver or a passenger.  {{OptionalArg}} 
     * @param seat the seat where the player is sitting (0 for driver, 1+ for passengers).
     * @default 0
     * @return Returns the [[player]] sitting in the vehicle, or ''false'' if the seat is unoccupied or doesn't exist.
     */
    export function getVehicleOccupant(theVehicle: vehicle, seat: number, ): player;

    /**
     * This function gets all peds sitting in the specified vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleOccupants|MTASA Wiki}
     * @param theVehicle the vehicle of which you wish to retrieve the occupants.
     * @return Returns a [[table]] with seat ID as an index and the occupant as an element like this: table[seat] = occupant
     * * Returns ''false'' if an invalid vehicle was passed or if the vehicle has no seats (like a trailer)
     * * <div style='font-weight: bold;background:blue;color:white;padding:2px; padding-left:8px;'>COUNTING PLAYERS IN A VEHICLE</div>
     * * <div style='border: 2px solid blue;padding: 5px;'>Don't use an ipairs loop with the table returned by this function. It will skip the driver, as ipairs starts at 1 and the driver seat is ID 0. And if there's an empty seat, ipairs will stop looping. You should use a pairs loop instead.
     * * <syntaxhighlight lang="lua">
     * * local counter = 0
     * * for seat, player in pairs(getVehicleOccupants(pseudoVehicle)) do
     * *     counter = counter + 1
     * * end
     * * outputDebugString("Players in your vehicle: ".. counter)
     * * </syntaxhighlight>
     * * </div>
     */
    export function getVehicleOccupants(theVehicle: vehicle, ): table;

    /**
     * This function is used to find out the current state of the override-lights setting of a vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleOverrideLights|MTASA Wiki}
     * @param theVehicle : the vehicle you wish to retrieve the override lights setting of.
     * @return Returns an integer value: 0 (No override), 1 (Force off) or 2 (Force on).
     */
    export function getVehicleOverrideLights(theVehicle: vehicle, ): number;

    /**
     * This function gets the current paintjob on the specified vehicle. <br />
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehiclePaintjob|MTASA Wiki}
     * @param theVehicle : the vehicle you wish to get the paintjob of.
     * @return Returns an integer representing the current paintjob on the vehicle. <br />
     * * * '''0''': The first paintjob
     * * * '''1''': The second paintjob
     * * * '''2''': The third paintjob
     * * * '''3''': Default paintjob (no paintjob)
     * * {{Note|Always returns 3 if paintjobs are not supported for the vehicle.}}
     */
    export function getVehiclePaintjob(theVehicle: vehicle, ): number;

    /**
     * This function returns the current state of a specifed panel on the vehicle. A vehicle can have up to 7 panels.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehiclePanelState|MTASA Wiki}
     * @param theVehicle the vehicle that you wish to know the panel state of.
     * @param panel an integer specifying the panel you want to know the state of. Not every vehicle has every panel. Possible values are:
     * @return Returns an [[int]] indicating the state of the specified the panel. This is a value between 0 and 3, with 0 indicating the panel is undamaged and 3 indicating it is very damaged.
     */
    export function getVehiclePanelState(theVehicle: vehicle, panel: number, ): number;

    /**
     * This function is used to retrieve the text on the number plate of a specified vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehiclePlateText|MTASA Wiki}
     * @param theVehicle the vehicle that you wish to retrieve the plate text from.
     * @return Returns a ''string'' that corresponds to the plate on the text, ''false'' if a bad argument was passed or if it is not a vehicle. Every vehicle (including planes, boats, etc.) has a numberplate, even if it's not visible.
     */
    export function getVehiclePlateText(theVehicle: vehicle, ): string;

    /**
     * This function get the parameters of a vehicles siren.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleSirenParams|MTASA Wiki}
     * @param theVehicle The vehicle to get the siren parameters of
     * @return Returns a ''table'' with the siren count, siren type and a sub table for the four flags. False otherwise.
     * * <syntaxhighlight lang="lua">
     * * [int]   SirenParams.SirenCount
     * * [int]   SirenParams.SirenType
     * * [table] SirenParams.Flags
     * *  [bool] SirenParams.Flags["360"]
     * *  [bool] SirenParams.Flags.DoLOSCheck
     * *  [bool] SirenParams.Flags.UseRandomiser
     * *  [bool] SirenParams.Flags.Silent
     * * </syntaxhighlight>
     */
    export function getVehicleSirenParams(theVehicle: vehicle, ): table;

    /**
     * This function gets the properties of a vehicle's sirens.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleSirens|MTASA Wiki}
     * @param theVehicle The vehicle to get siren information of.
     * @return If the vehicle is invalid, it returns ''false''. Otherwise, returns a ''table'' with sub tables containing the properties of each siren point in the following manner:
     * * <syntaxhighlight lang="lua">
     * * [float]   SirenData[sirenPoint].x
     * * [float]   SirenData[sirenPoint].y
     * * [float]   SirenData[sirenPoint].z
     * * [int]     SirenData[sirenPoint].Red
     * * [int]     SirenData[sirenPoint].Green
     * * [int]     SirenData[sirenPoint].Blue
     * * [int]     SirenData[sirenPoint].Alpha
     * * [int]     SirenData[sirenPoint].Min_Alpha
     * * </syntaxhighlight>
     */
    export function getVehicleSirens(theVehicle: vehicle, ): table;

    /**
     * This function returns whether the sirens are turned on for the specified vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleSirensOn|MTASA Wiki}
     * @param theVehicle The vehicle that will be checked.
     * @return Returns ''true'' if the sirens are turned on for the specified vehicle, ''false'' if the sirens are turned off for the specified vehicle, if the vehicle doesn't have sirens or if invalid arguments are specified.
     */
    export function getVehicleSirensOn(theVehicle: vehicle, ): boolean;

    /**
     * This function is used to get the vehicle being towed by another.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleTowedByVehicle|MTASA Wiki}
     * @param theVehicle : The vehicle you wish to get the towed vehicle from.
     * @return Returns the vehicle that ''theVehicle'' is towing, ''false'' if it isn't towing a vehicle.
     */
    export function getVehicleTowedByVehicle(theVehicle: vehicle, ): vehicle;

    /**
     * This function is used to get the vehicle that is towing another.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleTowingVehicle|MTASA Wiki}
     * @param theVehicle : the vehicle being towed.
     * @return * The vehicle that ''theVehicle'' is being towed by.
     * * * ''false'' if it isn't being towed.
     */
    export function getVehicleTowingVehicle(theVehicle: vehicle, ): vehicle;

    /**
     * This function gets the position of a vehicle's turret, if it has one. Vehicles with turrets include firetrucks and tanks.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleTurretPosition|MTASA Wiki}
     * @param turretVehicle : The vehicle whose turret position you want to retrieve. This should be a vehicle with a turret.
     * @return Returns two [[float]]s for the X (horizontal) and Y (vertical) axis rotation respectively. These values are in radians. The function will return ''0, 0'' if the vehicle is not a vehicle with a turret. 
     */
    export function getVehicleTurretPosition(turretVehicle: vehicle, ): LuaMultiReturn<[number,number]>;

    /**
     * This function retrieves the type of a vehicle (such as if it is a car or a boat).
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleType|MTASA Wiki}
     * @return Returns a ''string'' with vehicle type or ''false'' if an invalid modelID has been supplied, or an empty string if the vehicle is blocked internally (some trailers).
     * * Possible strings returned:
     * * {{VehicleTypes}}
     */
    export function getVehicleType(theVehicle: vehicle, ): string;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleUpgradeOnSlot|MTASA Wiki}
     * @param theVehicle : The vehicle whose upgrade you want to retrieve.
     * @param slot : The slot id of the upgrade. (Upgrade list ordered by slot number)
     * @return Returns an ''integer'' with the upgrade on the slot if correct arguments were passed, ''false'' otherwise.
     */
    export function getVehicleUpgradeOnSlot(theVehicle: vehicle, slot: number, ): number;

    /**
     * This function returns the name of an upgrade slot name (e.g. roof, spoiler).
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleUpgradeSlotName|MTASA Wiki}
     * @return Returns a ''string'' with the slot name if a valid slot or upgrade ID was given, ''false'' otherwise.
     */
    export function getVehicleUpgradeSlotName(slot: number, ): string;

    /**
     * This function returns a table of all the upgrades on a specifed vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleUpgrades|MTASA Wiki}
     * @param theVehicle The vehicle you wish to retrieve the upgrades of.
     * @return Returns a ''table'' of all the upgrades on each slot of a vehicle, which may be empty, or ''false'' if a valid vehicle is not passed.
     */
    export function getVehicleUpgrades(theVehicle: vehicle, ): table;

    /**
     * This function gets the variant of a specified vehicle. In GTA SA some vehicles are different for example the labelling on trucks or the contents of a pick-up truck and the varying types of a motor bike. For the default GTA SA variant list see: [[Vehicle variants]]
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleVariant|MTASA Wiki}
     * @param theVehicle A handle to the vehicle that you want to get the variant of.
     * @return On success:
     * * * '''int''': An integer for the first vehicle variant see [[Vehicle variants]]
     * * * '''int''': An integer for the second vehicle variant see [[Vehicle variants]]
     * * On failure:
     * * * '''bool''': False because the specified vehicle didn't exist
     */
    export function getVehicleVariant(theVehicle: vehicle, ): LuaMultiReturn<[number,number]>;

    /**
     * This function returns the current states of all the wheels on the vehicle.
     * No vehicles have more than 4 wheels, if they appear to they will be duplicating other wheels.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleWheelStates|MTASA Wiki}
     * @param theVehicle A handle to the vehicle that you wish to know the wheel states of.
     * @return Returns 4 [[int]]s indicating the states of the wheels (front left, rear left, front right, rear right). These values can be:
     * * * '''0:''' Inflated
     * * * '''1:''' Flat
     * * * '''2:''' Fallen off
     * * * '''3:''' Collisionless 
     */
    export function getVehicleWheelStates(theVehicle: vehicle, ): LuaMultiReturn<[number,number,number,number]>;

    /**
     * This function will check if a train or tram is derailable.
     * @see {@link https://wiki.multitheftauto.com/wiki/isTrainDerailable|MTASA Wiki}
     * @param vehicleToCheck The vehicle you wish to check.
     * @return Returns ''true'' if the train is derailable, ''false'' otherwise.
     */
    export function isTrainDerailable(vehicleToCheck: vehicle, ): boolean;

    /**
     * This function will check if a train or tram is derailed.
     * @see {@link https://wiki.multitheftauto.com/wiki/isTrainDerailed|MTASA Wiki}
     * @param vehicleToCheck the vehicle that you wish to check is derailed.
     * @return Returns ''true'' if the train is derailed, ''false'' if the train is still on the rails
     */
    export function isTrainDerailed(vehicleToCheck: vehicle, ): boolean;

    /**
     * This function allows you to determine whether a vehicle is blown or still intact.
     * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleBlown|MTASA Wiki}
     * @param theVehicle The vehicle that you want to obtain the blown status of.
     * @return Returns ''true'' if the vehicle specified has blown up, ''false'' if it is still intact or the vehicle specified is invalid.
     */
    export function isVehicleBlown(theVehicle: vehicle, ): boolean;

    /**
     * This function checks if a vehicle is damage proof (set with [[setVehicleDamageProof]]).
     * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleDamageProof|MTASA Wiki}
     * @param theVehicle the vehicle whose invincibility status we want to check.
     * @return Returns ''true'' if the vehicle is damage proof, ''false'' if it isn't or if invalid arguments were passed.
     */
    export function isVehicleDamageProof(theVehicle: vehicle, ): boolean;

    /**
     * This will tell you if a vehicle's petrol tank is explodable.
     * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleFuelTankExplodable|MTASA Wiki}
     * @param theVehicle The vehicle that you want to obtain the fuel tank status of.
     * @return Returns ''true'' if the specified vehicle is valid and its fuel tank is explodable, ''false'' otherwise.
     */
    export function isVehicleFuelTankExplodable(theVehicle: vehicle, ): boolean;

    /**
     * This will tell you if a vehicle is locked.
     * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleLocked|MTASA Wiki}
     * @param theVehicle The vehicle that you want to obtain the locked status of.
     * @return Returns ''true'' if the vehicle specified is locked, ''false'' if is unlocked or the vehicle specified is invalid.
     */
    export function isVehicleLocked(theVehicle: vehicle, ): boolean;

    /**
     * Checks to see if a vehicle has contact with the ground.
     * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleOnGround|MTASA Wiki}
     * @param theVehicle The vehicle you wish to check.
     * @return Returns ''true'' if vehicle is on the ground, ''false'' if it is not.
     */
    export function isVehicleOnGround(theVehicle: vehicle, ): boolean;

    /**
     * This function will get the taxi light state of a taxi (vehicle IDs 420 and 438)
     * @see {@link https://wiki.multitheftauto.com/wiki/isVehicleTaxiLightOn|MTASA Wiki}
     * @param taxi The vehicle element of the taxi that you wish to get the light state of.
     * @return Returns ''true'' if the light is on, ''false'' otherwise.
     */
    export function isVehicleTaxiLightOn(taxi: vehicle, ): boolean;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/removeVehicleUpgrade|MTASA Wiki}
     * @param theVehicle : The element representing the vehicle you wish to remove the upgrade from
     * @param upgrade : The ID of the upgrade you wish to remove.
     * @return Returns ''true'' if the upgrade was successfully removed from the vehicle, otherwise ''false''.
     */
    export function removeVehicleUpgrade(theVehicle: vehicle, upgrade: number, ): boolean;

    /**
     * This function will set a train or tram as derailable. This is, if it can derail when it goes above the maximum speed.
     * @see {@link https://wiki.multitheftauto.com/wiki/setTrainDerailable|MTASA Wiki}
     * @param derailableVehicle The vehicle that you wish to set derailable.
     * @param derailable whether the train or tram is derailable. True as derailable, False as non-derailable.
     * @return Returns ''true'' if the state was successfully set, ''false'' otherwise.
     */
    export function setTrainDerailable(derailableVehicle: vehicle, derailable: boolean, ): boolean;

    /**
     * This function will set a train or tram as derailed.
     * @see {@link https://wiki.multitheftauto.com/wiki/setTrainDerailed|MTASA Wiki}
     * @param vehicleToDerail The vehicle that you wish to derail.
     * @param derailed whether the train is derailed.
     * @return Returns ''true'' if the state was successfully set
     */
    export function setTrainDerailed(vehicleToDerail: vehicle, derailed: boolean, ): boolean;

    /**
     * Sets the direction in which a train or tram drives over the rails (clockwise or counterclockwise).
     * @see {@link https://wiki.multitheftauto.com/wiki/setTrainDirection|MTASA Wiki}
     * @param train the train whose direction to change.
     * @param clockwise if true, will make the train go clockwise. If false, makes it go counterclockwise.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setTrainDirection(train: vehicle, clockwise: boolean, ): boolean;

    /**
     * Sets the position the train is currently on the track
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setTrainPosition|MTASA Wiki}
     * @param train the train of which to set the track
     * @param position the position along the track (0 - 18107 a complete way round)
     * @return Returns ''true'' if the train position was set, ''false'' otherwise.
     */
    export function setTrainPosition(train: vehicle, position: number, ): boolean;

    /**
     * Sets the on-track speed of a train.
     * @see {@link https://wiki.multitheftauto.com/wiki/setTrainSpeed|MTASA Wiki}
     * @param train the train whose speed to change.
     * @param speed the new on-track speed of the train. A positive value will make it go clockwise, a negative value counter clockwise.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setTrainSpeed(train: vehicle, speed: number, ): boolean;

    /**
     * This function will set the color of a vehicle using either a RGB format, or the [[Vehicle Colors|standard San Andreas color IDs.]] Vehicles can have up to 4 colors, most of the vehicles have 2 colors only. 
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleColor|MTASA Wiki}
     * @return Returns ''true'' if vehicle's color was set, ''false'' if an invalid vehicle or invalid colors were specified.
     */
    export function setVehicleColor(veh: vehicle, r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, r3: number, g3: number, b3: number, r4: number, g4: number, b4: number, ): boolean;

    /**
     * This functions makes a vehicle damage proof, so it won't take damage from bullets, hits, explosions or fire. A damage proof's vehicle health can still be changed via script.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleDamageProof|MTASA Wiki}
     * @param theVehicle The vehicle you wish to make damage proof.
     * @param damageProof true is damage proof, false is damageable.
     * @return Returns ''true'' if the vehicle was set damage proof succesfully, ''false'' if the arguments are invalid or it failed.
     */
    export function setVehicleDamageProof(theVehicle: vehicle, damageProof: boolean, ): boolean;

    /**
     * This function sets how much a vehicle's door is open. Doors include the boot/trunk and the bonnet of the vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleDoorOpenRatio|MTASA Wiki}
     * @param theVehicle The vehicle that you wish to change the door open ratio of.
     * @param door A whole number, 0 (hood), 1 (trunk), 2 (front left), 3 (front right), 4 (rear left), 5 (rear right)
     * @param ratio The ratio value, ranging from 0 (fully closed) to 1 (fully open).  {{OptionalArg}} 
     * @param time The number of milliseconds the door should take to reach the value you have specified. A value of 0 will change the door open ratio instantly.
     * @default 0
     * @return Returns ''true'' if the door open ratio was successfully set, ''false'' if invalid arguments are passed.
     */
    export function setVehicleDoorOpenRatio(theVehicle: vehicle, door: number, ratio: number, time?: number, ): boolean;

    /**
     * This function sets the state of the specified door on a vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleDoorState|MTASA Wiki}
     * @param theVehicle The vehicle that you wish to change the door state of.
     * @param door An integer representing which door to set the state of. Valid values are:
     * @param state An integer representing the state to set the door to. Valid values are:
     * @return Returns ''true'' if the door state was successfully set, ''false'' otherwise.
     */
    export function setVehicleDoorState(theVehicle: vehicle, door: number, state: number, ): boolean;

    /**
     * This function makes a vehicle's doors undamageable, so they won't fall off when they're hit. Note that the vehicle '''has''' to be locked using [[setVehicleLocked]] for this setting to have any effect.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleDoorsUndamageable|MTASA Wiki}
     * @param theVehicle The vehicle of which you wish to set the car door damageability.
     * @param state A boolean denoting whether the vehicles doors are undamageable (true) or damageable (false).
     * @return Returns ''true'' if the damageability state was successfully changed, ''false'' if invalid arguments were passed.
     */
    export function setVehicleDoorsUndamageable(theVehicle: vehicle, state: boolean, ): boolean;

    /**
     * This function turns a vehicle's engine on or off. Note that the engine will always be turned on when someone enters the driver seat, unless you override that behaviour with scripts.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleEngineState|MTASA Wiki}
     * @param theVehicle : The vehicle you wish to change the engine state of.
     * @param engineState : A boolean value representing whether the engine will be turned on (true) or off (false).
     * @return Returns ''true'' if the vehicle's engine state was successfully changed, ''false'' otherwise.
     */
    export function setVehicleEngineState(theVehicle: vehicle, engineState: boolean, ): boolean;

    /**
     * This function changes the 'explodable state' of a vehicle's fuel tank, which toggles the ability to blow the vehicle up by shooting the tank. This function will have no effect on vehicles with tanks that cannot be shot in single player.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleFuelTankExplodable|MTASA Wiki}
     * @param theVehicle : The vehicle you wish to change the fuel tank explodable state of.
     * @param explodable : A boolean value representing whether or not the fuel tank will be explodable.
     * @return Returns ''true'' if the vehicle's fuel tank explodable state was successfully changed, ''false'' otherwise.
     */
    export function setVehicleFuelTankExplodable(theVehicle: vehicle, explodable: boolean, ): boolean;

    /**
     * This function is used to change the handling data of a vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleHandling|MTASA Wiki}
     * @param theVehicle The vehicle you wish to set the handling of.
     * @param property The property you wish to set the handling of the vehicle to.  {{Note|For functionality reasons suspension modification is disabled on monster trucks, trains, boats and trailers.}}  {{Handling Properties}}
     * @param value The value of the property you wish to set the handling of the vehicle to.
     * @return Returns ''true'' if the handling was set successfully, ''false'' otherwise. See below a list of valid properties and their required values:
     */
    export function setVehicleHandling(theVehicle: element, property: string, value: any, ): boolean;

    /**
     * This function will set the headlight color of a vehicle. valid Red Green and Blue arguments range from 0-255
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleHeadLightColor|MTASA Wiki}
     * @param theVehicle The vehicle that you wish to set the headlight color of.
     * @param red An integer indicating the amount of red for the vehicles headlights
     * @param green An integer indicating the amount of green for the vehicles headlights
     * @param blue An integer indicating the amount of blue for the vehicles headlights
     * @return Returns ''true'' if vehicle's headlight color was set, ''false'' if an invalid vehicle or invalid color ranges were specified for red,green or blue.
     */
    export function setVehicleHeadLightColor(theVehicle: vehicle, red: number, green: number, blue: number, ): boolean;

    /**
     * This function is used to set the landing gear state of certain vehicles.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleLandingGearDown|MTASA Wiki}
     * @param theVehicle The vehicle of which you wish to set the landing gear state.
     * @param gearState A bool representing the state of the landing gear.  true represents a collapsed landing gear, while false represents a disabled landing gear.
     * @return Returns ''true'' if the landing gear was set successfully, ''false'' otherwise.
     */
    export function setVehicleLandingGearDown(theVehicle: vehicle, gearState: boolean, ): boolean;

    /**
     * This function sets the state of the light on the vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleLightState|MTASA Wiki}
     * @param theVehicle A handle to the vehicle that you wish to change the light state of.
     * @param light A whole number determining the individual light:
     * @param state A whole number determining the new state of the light. 0 represents normal lights, and 1 represents broken lights.
     * @return Returns ''true'' if the light state was set successfully, ''false'' if invalid arguments were passed to the function.
     */
    export function setVehicleLightState(theVehicle: vehicle, light: number, state: number, ): boolean;

    /**
     * This function can be used to set the vehicle's doors to be locked or unlocked.  Locking a vehicle restricts access to the vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleLocked|MTASA Wiki}
     * @param theVehicle The vehicle which you wish to change the lock status of
     * @param locked Boolean for the status you wish to set. Set true to lock, false to unlock
     * @return Returns ''true'' if the operation was successful, ''false'' otherwise.
     */
    export function setVehicleLocked(theVehicle: vehicle, locked: boolean, ): boolean;

    /**
     * This function changes the light overriding setting on a vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleOverrideLights|MTASA Wiki}
     * @param theVehicle : The vehicle you wish to change the override lights setting of.
     * @param value : A whole number representing the state of the lights:
     * @return Returns ''true'' if the vehicle's lights setting was changed. Otherwise ''false''.
     */
    export function setVehicleOverrideLights(theVehicle: vehicle, value: number, ): boolean;

    /**
     * This function changes the paintjob on the specified vehicle. <br/>
     * See [[Paintjob|paintjob]] for list of supported vehicles.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehiclePaintjob|MTASA Wiki}
     * @param theVehicle : The vehicle you wish to change the paintjob of.
     * @param value : A whole number representing the new paintjob id. Ranges from 0 up to 3.
     * @return Returns ''true'' if the vehicle's paintjob was changed. Otherwise ''false''.
     */
    export function setVehiclePaintjob(theVehicle: vehicle, value: number, ): boolean;

    /**
     * This function allows you to change the state of one of the six panels vehicle's can have. When executed on the server-side resources, the damage will be synched for all players, whereas the change is only client-side if the function is used in a client resource. 
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehiclePanelState|MTASA Wiki}
     * @param theVehicle The vehicle you would like to modify the panel of.
     * @param panelID An ID specifying the part of the vehicle. Possible values are:
     * @param state How damaged the part is on the scale of 0 to 3, with 0 being undamaged and 3 being very damaged. How this is manifested depends on the panel and the vehicle.
     * @return Returns ''true'' if the panel state has been updated, ''false'' otherwise
     */
    export function setVehiclePanelState(theVehicle: vehicle, panelID: number, state: number, ): boolean;

    /**
     * This function can be used to set the numberplate text of a car.
     * }}
     * It now also changes the numberplate text of any vehicle that has visual numberplates.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehiclePlateText|MTASA Wiki}
     * @param theVehicle the vehicle whose numberplate you want to change.
     * @param numberplate a string that will go on the number plate of the car (max 8 characters).
     * @return Returns ''true'' if the numberplate was changed successfully, or ''false'' if invalid arguments were passed
     */
    export function setVehiclePlateText(theVehicle: element, numberplate: string, ): boolean;

    /**
     * This function changes the properties of a vehicles siren point.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleSirens|MTASA Wiki}
     * @param theVehicle The vehicle to modify
     * @param sirenPoint The siren point to modify
     * @param posX The x position of this siren point from the center of the vehicle
     * @param posY The y position of this siren point from the center of the vehicle
     * @param posZ The z position of this siren point from the center of the vehicle
     * @param red The amount of red from 0 to 255
     * @param green The amount of green from 0 to 255
     * @param blue The amount of blue from 0 to 255
     * @param alpha The alpha of the siren from 0 to 255
     * @default 255
     * @param minAlpha The minimum alpha of the light during day time
     * @default 0.0
     * @return Returns ''true'' if the siren point was successfully changed on the vehicle, ''false'' otherwise. 
     */
    export function setVehicleSirens(theVehicle: vehicle, sirenPoint: number, posX: number, posY: number, posZ: number, red: number, green: number, blue: number, alpha: number, minAlpha: number, ): boolean;

    /**
     * This function changes the state of the sirens on the specified vehicle.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleSirensOn|MTASA Wiki}
     * @param theVehicle The vehicle that will have the sirens set
     * @param sirensOn The state to set the sirens to
     * @return Returns ''true'' if the sirens are set for the specified vehicle, ''false'' if the sirens can't be set for the specified vehicle, if the vehicle doesn't have sirens or if invalid arguments are specified.
     */
    export function setVehicleSirensOn(theVehicle: vehicle, sirensOn: boolean, ): boolean;

    /**
     * This function will set the taxi light on in a taxi (vehicle ID's 420 and 438)
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleTaxiLightOn|MTASA Wiki}
     * @param taxi The vehicle element of the taxi that you wish to turn the light on.
     * @param LightState whether the light is on. True for on, False for off.
     * @return Returns ''true'' if the state was successfully set, ''false'' otherwise.
     */
    export function setVehicleTaxiLightOn(taxi: vehicle, LightState: boolean, ): boolean;

    /**
     * This function sets the position of a vehicle's turret, if it has one. This can be used to influence the turret's rotation, so it doesn't follow the camera. Vehicles with turrets include firetrucks and tanks.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleTurretPosition|MTASA Wiki}
     * @param turretVehicle : The vehicle whose turret position you want to retrieve. This should be a vehicle with a turret.
     * @param positionX : The horizontal position of the turret. In radians
     * @param positionY : The vertical position of the turret. In radians
     * @return Returns a ''true'' if a valid vehicle element and valid positions were passed, ''false'' otherwise.
     */
    export function setVehicleTurretPosition(turretVehicle: vehicle, positionX: number, positionY: number, ): boolean;

    /**
     * This function sets the variant of a specified vehicle. In GTA SA some vehicles are different for example the labelling on trucks or the contents of a pick-up truck and the varying types of a motor bike. For the default GTA SA variant list see: [[Vehicle variants]]
     *  {{Tip|Both variant arguments need to be supplied, otherwise random ones will be picked.}} 
     *  {{Tip|If you only want one variant, set ''''variant2'''' to ''255''. If you want no variants, then set both ''''variant1'''' and ''''variant2'''' to ''255''}} 
     *  {{Note|The fairings on the NRG-500 and BF-400 are both variants, so unless you explicitly ask for 3 or 4, your bike will have no fairings which some people may find offensive.
     * }} 
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleVariant|MTASA Wiki}
     * @param theVehicle A handle to the vehicle that you want to get the variant of.  Both arguments need to be supplied, otherwise random variants will be picked.
     * @param variant1 : An integer for the first variant see Vehicle variants
     * @param variant2 : An integer for the second variant see Vehicle variants
     * @return On success:
     * * * '''bool''': Returns true as the vehicle variants were successfully set.
     * * On failure:
     * * * '''bool''': False because the specified vehicle didn't exist or specified variants were invalid.
     */
    export function setVehicleVariant(theVehicle: vehicle, variant1?: number, variant2?: number, ): boolean;

    /**
     * This function sets the state of wheels on the vehicle.
     * Internally, no vehicles have more than 4 wheels. If they appear to, they will be duplicating other wheels.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleWheelStates|MTASA Wiki}
     * @param theVehicle A handle to the vehicle that you wish to change the wheel states of.
     * @param frontLeft A whole number representing the wheel state (-1 for no change)
     * @param rearLeft A whole number representing the wheel state (-1 for no change)
     * @default -1
     * @param frontRight A whole number representing the wheel state (-1 for no change)
     * @default -1
     * @param rearRight A whole number representing the wheel state (-1 for no change)
     * @default -1
     * @return Returns a boolean value ''true'' or ''false'' that tells you if it was successful or not.
     */
    export function setVehicleWheelStates(theVehicle: vehicle, frontLeft: number, rearLeft: number, frontRight: number, rearRight: number, ): boolean;

    /**
     * Creates an area of [[water]].
     * The largest possible size of a water area is 5996&#0215;5996. Also be aware that the function will change all x and y coordinates you specify into even integer numbers if necessary: this is because of a limitation of San Andreas.
     * You are able to give the water a shallow water effect, which practically changes the water invisible to the eye. However, all elements still work the same way as without the shallow effect - allowing swimming, diving, vehicles to sink, etc.
     * @see {@link https://wiki.multitheftauto.com/wiki/createWater|MTASA Wiki}
     * @param bShallow gives the water a shallow water effect.
     * @default false
     * @return Returns a water element if successful, ''false'' otherwise. The water element can be repositioned with [[setElementPosition]] and destroyed with [[destroyElement]].
     */
    export function createWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4?: number, y4?: number, z4?: number, bShallow?: boolean, ): water;

    /**
     * This function returns the water color of the GTA world.
     * '''Note:''' The server can only return the water color, if it has actually been set by script.
     * @see {@link https://wiki.multitheftauto.com/wiki/getWaterColor|MTASA Wiki}
     * @return Returns 4 [[int|ints]], indicating the color of the water. (RGBA)
     */
    export function getWaterColor(): LuaMultiReturn<[number,number,number,number]>;

    /**
     * Gets the world position of a vertex (i.e. corner) of a [[water]] area. Each water area is either a triangle or quad (rectangle) so each has 3 or 4 corners.
     * @see {@link https://wiki.multitheftauto.com/wiki/getWaterVertexPosition|MTASA Wiki}
     * @param theWater the water element to get the vertex of
     * @param vertexIndex the index of the vertex whose position to get. Values range from 1 to 4 for a water quad, or 1 to 3 for a triangle.
     * @return Returns the x, y and z coordinates of the specified vertex if successful, ''false'' otherwise.
     */
    export function getWaterVertexPosition(theWater: water, vertexIndex: number, ): LuaMultiReturn<[number,number,number]>;

    /**
     * This function returns the current wave height.
     * @see {@link https://wiki.multitheftauto.com/wiki/getWaveHeight|MTASA Wiki}
     * @return Returns the height as a [[float]], ''false'' otherwise.
     */
    export function getWaveHeight(): number;

    /**
     * This function reset the water color of the GTA world to default.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetWaterColor|MTASA Wiki}
     * @return Returns ''true'' if water color was reset correctly, ''false'' otherwise.
     */
    export function resetWaterColor(): boolean;

    /**
     * This function resets the water of the GTA world back to its default level. [[water|Water elements]] are not affected.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetWaterLevel|MTASA Wiki}
     * @return Returns ''true'' if water level was reset correctly, ''false'' otherwise.
     */
    export function resetWaterLevel(): boolean;

    /**
     * This function changes the water color of the GTA world.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWaterColor|MTASA Wiki}
     * @param red The red value of the water, from 0 to 255.
     * @param green The green value of the water, from 0 to 255.
     * @param blue The blue value of the water, from 0 to 255.  {{OptionalArg}} 
     * @param alpha The alpha (visibility) value of the water, from 0 to 255. Defaults to 200 if not declared.
     * @default 200
     * @return Returns ''true'' if water color was set correctly, ''false'' if invalid values were passed.
     */
    export function setWaterColor(red: number, green: number, blue: number, alpha: number, ): boolean;

    /**
     * Sets the world position of a corner point of a water area.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWaterVertexPosition|MTASA Wiki}
     * @param theWater the water element of which to change a vertex.
     * @param vertexIndex the index of the vertex to move. Values range from 1 to 4 for water quads, and 1 to 3 for triangles.
     * @param x the X coordinate to set for the vertex.
     * @param y the Y coordinate to set for the vertex.
     * @param z the Z coordinate to set for the vertex.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setWaterVertexPosition(theWater: water, vertexIndex: number, x: number, y: number, z: number, ): boolean;

    /**
     * This function sets the wave height to the desired value, the default is 0.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWaveHeight|MTASA Wiki}
     * @param height A float between 0 and 100.
     * @return Returns a boolean value ''true'' or ''false'' that tells you if it was successful or not.
     */
    export function setWaveHeight(height: number, ): boolean;

    /**
     * This function gets the original weapon property of the specified weapons specified weapon type.
     * @see {@link https://wiki.multitheftauto.com/wiki/getOriginalWeaponProperty|MTASA Wiki}
     * @param weaponSkill Either: pro, std or poor
     * @param property The property you want to get the value of:  {{Weapon Properties Writable}}  The following properties are get only:  {{Weapon Properties ReadOnly}}
     * @return On success:
     * * '''int:''' The weapon property
     * * On failure:
     * * '''bool:''' False if the passed arguments were invalid
     */
    export function getOriginalWeaponProperty(weaponID: number, weaponSkill: string, property: string, ): number;

    /**
     * This function allows you to identify the weapon slot that a weapon belongs to.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSlotFromWeapon|MTASA Wiki}
     * @param weaponid Weapon to find the weapon slot of.
     * @return Returns an integer representing the given weapon ID's associated weapon slot, ''false'' if the ID was invalid.
     */
    export function getSlotFromWeapon(weaponid: number, ): number;

    /**
     * This function will obtain the ID of a particular weapon from its name.
     * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponIDFromName|MTASA Wiki}
     * @param name A string containing the name of the weapon. Names can be: (Case is ignored)  {{All Weapon Types}}
     * @return Returns an [[int]] if the name matches that of a weapon, ''false'' otherwise.
     */
    export function getWeaponIDFromName(name: string, ): number;

    /**
     * This function allows you to retrieve the name of a weapon from an ID.
     * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponNameFromID|MTASA Wiki}
     * @param id The ID you wish to retrieve the name of
     * @return Returns a string of the name of the weapon or death type, ''false'' otherwise. Names will be like these: (Ignoring case)
     * * {{All Weapon Types}}
     */
    export function getWeaponNameFromID(id: number, ): string;

    /**
     * This function gets a weapon property of the specified [[Element/Weapon|custom weapon]] (clientside only) or specified [[Weapons|player-held weapon]] (both client and server).
     * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponProperty|MTASA Wiki}
     * @param weaponSkill Either: pro, std or poor
     * @param property The property you want to get the value of:  {{Weapon Properties Writable}}  The following properties are get only:  {{Weapon Properties ReadOnly}}
     * @return On success:
     * * '''int:''' The weapon property
     * * On failure:
     * * '''bool:''' False if the passed arguments were invalid
     */
    export function getWeaponProperty(weaponID: number, weaponSkill: string, property: string, ): number;

    /**
     * <section name="Server" class="server" show="true">
     * This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponProperty|MTASA Wiki}
     * @param weaponID The ID or name of the Weapons|weapon you want to set a property of. Names can be:  {{Some Weapon Types}}
     * @param weaponSkill Either: pro, std or poor. The player must have this skill level set to have the effect.
     * @param property The property you want to set the value of:  {{Weapon Properties Writable}}
     * @return On success:
     * * '''bool:''' Returns true if the weapon property was successfully set
     * * On failure:
     * * '''bool:''' Returns false if the weapon property was unable to be set
     */
    export function setWeaponProperty(weaponID: number, weaponSkill: string, property: string, float: number, ): boolean;

    /**
     * Gets whether the traffic lights are currently locked or not. If the lights are locked, it means they won't change unless you do [[setTrafficLightState]].
     * @see {@link https://wiki.multitheftauto.com/wiki/areTrafficLightsLocked|MTASA Wiki}
     * @return Returns ''true'' the traffic lights are currently locked, ''false'' otherwise.
     */
    export function areTrafficLightsLocked(): boolean;

    /**
     * This function returns the maximum velocity at which aircrafts could fly. Using this function server-side will return the server-side value, not necessarily the same that is set client-side.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getAircraftMaxVelocity|MTASA Wiki}
     * @return Returns a float being the max velocity that is currently set, depending on which side it is used.
     */
    export function getAircraftMaxVelocity(): number;

    /**
     * This function will tell you if clouds are enabled or disabled.
     * @see {@link https://wiki.multitheftauto.com/wiki/getCloudsEnabled|MTASA Wiki}
     * @return Returns ''true'' if the clouds are enabled or ''false'' if clouds are disabled.
     */
    export function getCloudsEnabled(): boolean;

    /**
     * This function will tell you what is the current render distance.
     * @see {@link https://wiki.multitheftauto.com/wiki/getFarClipDistance|MTASA Wiki}
     * @return Returns a ''float'' with the current render distance, ''false'' if the operation could not be completed.
     */
    export function getFarClipDistance(): number;

    /**
     * This function will tell you what is the current fog render distance.
     * @see {@link https://wiki.multitheftauto.com/wiki/getFogDistance|MTASA Wiki}
     * @return Returns a ''float'' with the current fog render distance, ''false'' if the operation could not be completed.
     */
    export function getFogDistance(): number;

    /**
     * This function gets the current game speed value.
     * @see {@link https://wiki.multitheftauto.com/wiki/getGameSpeed|MTASA Wiki}
     * @return Returns a ''float'' representing the speed of the game.
     */
    export function getGameSpeed(): number;

    /**
     * This function returns the current gravity level for the context in which it is called (server or client).
     * @see {@link https://wiki.multitheftauto.com/wiki/getGravity|MTASA Wiki}
     * @return Returns a float with the current server or client (depending on where you call the function) gravity level.
     */
    export function getGravity(): number;

    /**
     * This function will return the current heat haze effect settings.
     * '''Note:''' The server can only return the heat haze settings if it has actually been set by script.
     * @see {@link https://wiki.multitheftauto.com/wiki/getHeatHaze|MTASA Wiki}
     * @return Returns 9 values, which are the same used as arguments in [[SetHeatHaze]]:
     * * {{HeatHazeValues}}
     */
    export function getHeatHaze(): LuaMultiReturn<[number,number,number,number,number,number,number,number,boolean]>;

    /**
     * This function gets the maximum height at which your jetpack can fly without failing to go higher.
     * @see {@link https://wiki.multitheftauto.com/wiki/getJetpackMaxHeight|MTASA Wiki}
     * @return Returns a float containing the max jetpack height.
     */
    export function getJetpackMaxHeight(): number;

    /**
     * Tells you how long an ingame minute takes in real-world milliseconds. The default GTA value is 1000.
     * @see {@link https://wiki.multitheftauto.com/wiki/getMinuteDuration|MTASA Wiki}
     * @return Returns the number of real-world milliseconds that go in an ingame minute.
     */
    export function getMinuteDuration(): number;

    /**
     * This function returns the moon size.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getMoonSize|MTASA Wiki}
     * @return Returns a integer being the moon size that is currently set, depending on which side it is used.
     */
    export function getMoonSize(): number;

    /**
     * This function is used to get "occlusions enabled" state.
     * @see {@link https://wiki.multitheftauto.com/wiki/getOcclusionsEnabled|MTASA Wiki}
     * @return Returns ''true'' if occlusions are enabled, or ''false'' otherwise.
     */
    export function getOcclusionsEnabled(): boolean;

    /**
     * This function is used to get the current rain level.
     * @see {@link https://wiki.multitheftauto.com/wiki/getRainLevel|MTASA Wiki}
     * @return Returns the rain level as a number.
     */
    export function getRainLevel(): number;

    /**
     * This function will return the current sky color.
     * '''Note:''' The server can only return the sky color if it has actually been set by script.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSkyGradient|MTASA Wiki}
     * @return Returns 6 [[int|ints]], of which the first 3 represent the sky's "top" color, (in RGB) and the last 3 represent the bottom colors.
     */
    export function getSkyGradient(): LuaMultiReturn<[number,number,number,number,number,number]>;

    /**
     * This function is used to get the color of the sun.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSunColor|MTASA Wiki}
     * @return Returns the color of the sun as six numbers, false if its default.
     */
    export function getSunColor(): LuaMultiReturn<[number,number,number,number,number,number]>;

    /**
     * This function is used to get the size of the sun.
     * @see {@link https://wiki.multitheftauto.com/wiki/getSunSize|MTASA Wiki}
     * @return Returns the size of the sun as a number, false if the size of the sun is at its default.
     */
    export function getSunSize(): number;

    /**
     * This function is used to get the current time in the game. If you want to get the real server time, use [[getRealTime]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getTime|MTASA Wiki}
     * @return Returns two ''ints'' that represent hours and minutes.
     */
    export function getTime(): LuaMultiReturn<[number,number]>;

    /**
     * Gets the current traffic light state. This state controls the traffic light colors. For instance, state '''1''' will cause the north and south traffic lights to be amber, and the ones left and east will turn red.
     * @see {@link https://wiki.multitheftauto.com/wiki/getTrafficLightState|MTASA Wiki}
     * @return Returns the current [[Traffic_light_states|state]] of the traffic lights.
     */
    export function getTrafficLightState(): number;

    /**
     * This function returns the current [[Weather]] ID.
     * @see {@link https://wiki.multitheftauto.com/wiki/getWeather|MTASA Wiki}
     * @return Returns two integers indicating the weather type that is currently active. The first integer says what weather is currently considered to be active. The second integer is the weather id that is being blended into if any, otherwise it is ''nil''.
     */
    export function getWeather(): LuaMultiReturn<[number,number]>;

    /**
     * This function gets the wind velocity in San Andreas.
     * @see {@link https://wiki.multitheftauto.com/wiki/getWindVelocity|MTASA Wiki}
     * @return *'''velocityX''': The velocity on the x-coordinate or false if the wind velocity is default.
     * * *'''velocityY''': The velocity on the y-coordinate or nil if the wind velocity is default.
     * * *'''velocityZ''': The velocity on the z-coordinate or nil if the wind velocity is default.
     */
    export function getWindVelocity(): LuaMultiReturn<[number,number,number]>;

    /**
     * This function allows you to retrieve the zone name of a certain location.
     *  
     * @see {@link https://wiki.multitheftauto.com/wiki/getZoneName|MTASA Wiki}
     * @param x The X axis position
     * @param y The Y axis position
     * @param z The Z axis position  {{OptionalArg}}
     * @param citiesonly : An optional argument to choose if you want to return one of the following city names:  ** Tierra Robada  ** Bone County  ** Las Venturas  ** San Fierro  ** Red County  ** Whetstone  ** Flint County  ** Los Santos
     * @default false
     * @return Returns the string of the zone name
     */
    export function getZoneName(x: number, y: number, z: number, citiesonly: boolean, ): string;

    /**
     * This function checks whether or not a specific garage door is open.
     * @see {@link https://wiki.multitheftauto.com/wiki/isGarageOpen|MTASA Wiki}
     * @param garageID The Garage|garage ID that represents the garage door that is being checked.
     * @return Returns ''true'' if the garage is open, ''false'' if it is closed or an invalid garage ID was given.
     */
    export function isGarageOpen(garageID: number, ): boolean;

    /**
     * <!--
     * -->
     * This function is used to remove a world object.
     * <!--
     * -->
     * @see {@link https://wiki.multitheftauto.com/wiki/removeWorldModel|MTASA Wiki}
     * @param modelID A whole integer specifying the GTASA object model ID.
     * @param radius A floating point number representing the radius that will be eliminated.
     * @param x A floating point number representing the X coordinate on the map.
     * @param y A floating point number representing the Y coordinate on the map.
     * @param z A floating point number representing the Z coordinate on the map.  {{New items|3.0132|1.3.2|
     * @param interior The interior ID to apply the removal to. Some objects in interior 13 show in all interiors so if you want to remove everything in interior 0 also remove everything in interior 13. A value of -1 here will affect all interiors.}}
     * @default -1
     * @return Returns ''true'' if the [[object]] was removed, ''false'' if invalid arguments were passed.
     */
    export function removeWorldModel(modelID: number, radius: number, x: number, y: number, z: number, interior?: number, ): boolean;

    /**
     * This function resets the far clip distance to its default state.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetFarClipDistance|MTASA Wiki}
     * @return Returns ''true'' if operation was successful, ''false'' otherwise.
     */
    export function resetFarClipDistance(): boolean;

    /**
     * This function resets the fog render distance to its default state.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetFogDistance|MTASA Wiki}
     * @return Returns ''true'' if operation was successful, ''false'' otherwise.
     */
    export function resetFogDistance(): boolean;

    /**
     * This function restores the default heat haze.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetHeatHaze|MTASA Wiki}
     * @return Returns ''true'' if the heat haze was reset correctly, ''false'' otherwise.
     */
    export function resetHeatHaze(): boolean;

    /**
     * This function is used to reset the size of the moon to its normal size.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/resetMoonSize|MTASA Wiki}
     * @return Returns true if the size of the moon was reset, false otherwise.
     */
    export function resetMoonSize(): boolean;

    /**
     * This function resets the rain level of the current weather to its default.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetRainLevel|MTASA Wiki}
     * @return Returns true if the rain level was reset.
     */
    export function resetRainLevel(): boolean;

    /**
     * This function allows restoring of a changed sky gradient as a result of [[setSkyGradient]].
     * @see {@link https://wiki.multitheftauto.com/wiki/resetSkyGradient|MTASA Wiki}
     * @return Returns ''true'' if sky color was reset correctly, ''false'' otherwise.
     */
    export function resetSkyGradient(): boolean;

    /**
     * This function is used to reset the color of the sun to its normal color.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetSunColor|MTASA Wiki}
     * @return Returns true if the color of the sun was reset, false otherwise.
     */
    export function resetSunColor(): boolean;

    /**
     * This function is used to reset the size of the sun to its normal size.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetSunSize|MTASA Wiki}
     * @return Returns true if the size of the sun was reset, false otherwise.
     */
    export function resetSunSize(): boolean;

    /**
     * This function resets the wind velocity in San Andreas to its default state.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetWindVelocity|MTASA Wiki}
     * @return Returns true if successful, false otherwise.
     */
    export function resetWindVelocity(): boolean;

    /**
     * This function allows restoring of all world objects,which were removed with [[RemoveWorldModel]].
     * @see {@link https://wiki.multitheftauto.com/wiki/restoreAllWorldModels|MTASA Wiki}
     * @return Returns ''true'' if the world objects were restored, ''false'' otherwise.
     */
    export function restoreAllWorldModels(): boolean;

    /**
     * This function allows restoring of world object,which was removed with [[RemoveWorldModel]].
     * @see {@link https://wiki.multitheftauto.com/wiki/restoreWorldModel|MTASA Wiki}
     * @param modelID A whole integer specifying the GTASA object model ID.
     * @param radius A floating point number representing the radius that will be eliminated.
     * @param x A floating point number representing the X coordinate on the map.
     * @param y A floating point number representing the Y coordinate on the map.
     * @param z A floating point number representing the Z coordinate on the map.  {{New items|3.0132|1.3.2|
     * @param iInterior   }}
     * @default -1
     * @return Returns ''true'' if the world object was restored, ''false'' otherwise.
     */
    export function restoreWorldModel(modelID: number, radius: number, x: number, y: number, z: number, iInterior?: number, ): boolean;

    /**
     * This function sets the maximum velocity at which aircrafts could fly. Using this function server-side will overwrite the value that was previously set client-side.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setAircraftMaxVelocity|MTASA Wiki}
     * @param velocity The max velocity, can be 0 or any positive value. Default is 1.5.
     * @return Returns true if the max velocity was set correctly, false otherwise.
     */
    export function setAircraftMaxVelocity(velocity: number, ): boolean;

    /**
     * This function will enable or disable clouds. This is useful for race maps which are placed high up as clouds can cause low FPS.
     * @see {@link https://wiki.multitheftauto.com/wiki/setCloudsEnabled|MTASA Wiki}
     * @param enabled A boolean value determining if clouds should be shown. Use true to show clouds and false to hide them.
     * @return Returns ''true'' if the cloud state was changed succesfully, ''false'' if an invalid argument was specified.
     */
    export function setCloudsEnabled(enabled: boolean, ): boolean;

    /**
     * This function is used to set the distance of render. Areas beyond the specified distance will not be rendered.
     * @see {@link https://wiki.multitheftauto.com/wiki/setFarClipDistance|MTASA Wiki}
     * @param distance A float specifying the distance of render. Setting this less than 5 will cause problems to the client.
     * @return Returns ''true'' if the distance was set correctly, ''false'' if invalid arguments were passed.
     */
    export function setFarClipDistance(distance: number, ): boolean;

    /**
     * This function changes the distance at which fog appears. Keep in mind that this function doesn't change the distance of render.
     * @see {@link https://wiki.multitheftauto.com/wiki/setFogDistance|MTASA Wiki}
     * @param distance distance in GTA units at which fog will appear. Very short or negative distances will cause graphical bugs to the players.
     * @return Returns ''true'' if the distance changed successfully, ''false'' if bad arguments were passed.
     */
    export function setFogDistance(distance: number, ): boolean;

    /**
     * This function sets the game speed to the given value.
     * @see {@link https://wiki.multitheftauto.com/wiki/setGameSpeed|MTASA Wiki}
     * @param value : The float value of the game speed (Range 0 - 10)
     * @return Returns ''true'' if the gamespeed was set successfully, ''false'' otherwise.
     * * The normal game speed is '1'.
     */
    export function setGameSpeed(value: number, ): boolean;

    /**
     * This function opens or closes the specified garage door in the world.
     * @see {@link https://wiki.multitheftauto.com/wiki/setGarageOpen|MTASA Wiki}
     * @param garageID The Garage|garage ID that represents the garage door being opened or closed.
     * @return Returns ''true'' if successful, ''false'' if an invalid garage id was given.
     */
    export function setGarageOpen(garageID: number, open: boolean, ): boolean;

    /**
     * This function sets the server's gravity level.
     * *This will override [[setPedGravity]] applied to peds/players.
     * *Setting the gravity level to different values on clients can cause animation bugs (players floating across ground because players see different fall animation.)}}
     * @see {@link https://wiki.multitheftauto.com/wiki/setGravity|MTASA Wiki}
     * @param level : The level of gravity (default is 0.008).
     * @return Returns ''true'' if gravity was changed, ''false'' otherwise.
     */
    export function setGravity(level: number, ): boolean;

    /**
     * This function changes the heat haze effect.
     * @see {@link https://wiki.multitheftauto.com/wiki/setHeatHaze|MTASA Wiki}
     * @return Returns ''true'' if the heat haze effect was set correctly, ''false'' if invalid values were passed.
     */
    export function setHeatHaze(intensity: number, randomShift: number, speedMin: number, speedMax: number, scanSizeX: number, scanSizeY: number, renderSizeX: number, renderSizeY: number, bShowInside: boolean, ): boolean;

    /**
     * This function disables or enables the ambient sounds played by GTA in most interiors, like restaurants, casinos, clubs, houses, etc.
     * @see {@link https://wiki.multitheftauto.com/wiki/setInteriorSoundsEnabled|MTASA Wiki}
     * @return If a boolean was passed to the function, it always succeeds and returns ''true''.
     */
    export function setInteriorSoundsEnabled(enabled: boolean, ): boolean;

    /**
     * Sets the real-world duration of an ingame minute. The GTA default is 1000.
     * @see {@link https://wiki.multitheftauto.com/wiki/setMinuteDuration|MTASA Wiki}
     * @param milliseconds : the new duration of an ingame minute, accepted values 0 - 2147483647.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setMinuteDuration(milliseconds: number, ): boolean;

    /**
     * This function sets the moon size. Using this function server-side will overwrite the value that was previously set client-side.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setMoonSize|MTASA Wiki}
     * @param size The size, can be 0 or any positive value. Default is 3.
     * @return Returns true if the moon size was set correctly, false otherwise.
     */
    export function setMoonSize(size: number, ): boolean;

    /**
     * This function is used to enable or disable occlusions. Occlusions are used by GTA to enhance performance by hiding objects that are (normally) obscured by certain large buildings. However when [[removeWorldModel]] is used they may also have the undesired effect of making parts of the map disappear. Disabling occlusions will fix that.
     * @see {@link https://wiki.multitheftauto.com/wiki/setOcclusionsEnabled|MTASA Wiki}
     * @param enabled A bool specifying if GTA occlusions should be enabled
     * @return Returns ''true'' if the setting was set correctly, ''false'' if invalid arguments were passed.
     */
    export function setOcclusionsEnabled(enabled: boolean, ): boolean;

    /**
     * This function sets the rain level to any weather available in GTA. Use [[resetRainLevel]] to undo the changes.
     * @see {@link https://wiki.multitheftauto.com/wiki/setRainLevel|MTASA Wiki}
     * @param level A floating point number representing the rain level. 1 represents the maximum rain level usually available in GTA, but higher values are accepted.
     * @return Returns ''true'' if the rain level was set, ''false'' otherwise.
     */
    export function setRainLevel(level: number, ): boolean;

    /**
     * This function changes the sky color to a two-color gradient.
     * @see {@link https://wiki.multitheftauto.com/wiki/setSkyGradient|MTASA Wiki}
     * @param topRed The red value of the upper part of the sky, from 0 to 255.
     * @default 0
     * @param topGreen The green value of the upper part of the sky, from 0 to 255.
     * @default 0
     * @param topBlue The blue value of the upper part of the sky, from 0 to 255.
     * @default 0
     * @param bottomRed The red value of the lower part of the sky, from 0 to 255.
     * @default 0
     * @param bottomGreen The green value of the lower part of the sky, from 0 to 255.
     * @default 0
     * @param bottomBlue The blue value of the lower part of the sky, from 0 to 255.
     * @default 0
     * @return Returns ''true'' if sky color was set correctly, ''false'' if invalid values were passed.
     */
    export function setSkyGradient(topRed: number, topGreen: number, topBlue: number, bottomRed: number, bottomGreen: number, bottomBlue: number, ): boolean;

    /**
     * This function is used to set the color of the sun.
     * @see {@link https://wiki.multitheftauto.com/wiki/setSunColor|MTASA Wiki}
     * @param aRed The amount of red (0-255) you want the sun to be.
     * @param aGreen The amount of green (0-255) you want the sun to be.
     * @param aBlue The amount of blue (0-255) you want the sun to be.
     * @param bRed The amount of red (0-255) you want the sun to be.
     * @param bGreen The amount of green (0-255) you want the sun to be.
     * @param bBlue The amount of blue (0-255) you want the sun to be.
     * @return Returns true if the color of the sun was set, false otherwise.
     */
    export function setSunColor(aRed: number, aGreen: number, aBlue: number, bRed: number, bGreen: number, bBlue: number, ): boolean;

    /**
     * This function is used to set the size of the sun.
     * @see {@link https://wiki.multitheftauto.com/wiki/setSunSize|MTASA Wiki}
     * @param Size The size you want the sun to be in the sky.
     * @return Returns true if the size of the sun was set, false otherwise.
     */
    export function setSunSize(Size: number, ): boolean;

    /**
     * This function sets the current GTA time to the given time.
     * @see {@link https://wiki.multitheftauto.com/wiki/setTime|MTASA Wiki}
     * @param hour : The hour of the new time (range 0-23).
     * @param minute : The minute of the new time (range 0-59).
     * @return Returns ''true'' if the new time was successfully set, ''false'' otherwise.
     */
    export function setTime(hour: number, minute: number, ): boolean;

    /**
     * Sets the current traffic light state. This state controls the traffic light colors. For instance, state '''1''' will cause the north and south traffic lights to be amber, and the ones left and east will turn red.
     * @see {@link https://wiki.multitheftauto.com/wiki/setTrafficLightState|MTASA Wiki}
     * @param state : If an integer is provided, the Traffic_light_states|state you wish to use (possible values: 0-9). Else, one of the following strings:
     * @return Returns ''true'' if the state was successfully set, ''false'' otherwise.
     */
    export function setTrafficLightState(state: number, ): boolean;

    /**
     * Toggles whether you want the traffic lights to be locked. If the lights are locked, it means they won't change unless you do [[setTrafficLightState]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setTrafficLightsLocked|MTASA Wiki}
     * @param toggle : A bool indicating whether you want the traffic lights to change automatically, or not
     * @return Returns ''true'' if the successful, ''false'' otherwise.
     */
    export function setTrafficLightsLocked(toggle: boolean, ): boolean;

    /**
     * This function sets the current [[weather]] to the given valid value. To change the weather gradually, see [[setWeatherBlended]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setWeather|MTASA Wiki}
     * @param weatherID : The ID of new weather. Valid values are 0 to 255 inclusive.
     * @return Returns ''true'' if the weather was set succesfully, ''false'' if an invalid ''weatherID'' was specified.
     */
    export function setWeather(weatherID: number, ): boolean;

    /**
     * This function will change the current [[weather]] to another in a smooth manner, over the period of 1-2 in-game hours (unlike [[setWeather]], which sets a new weather instantly). To ensure this transition performs as expected, you should not call this function until [[getWeather]] indicates that no transition is already being done.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWeatherBlended|MTASA Wiki}
     * @param weatherID The ID of the weather state you wish to set. Valid values are 0 to 255 inclusive.
     * @return Returns ''true'' if successful, ''false'' if an invalid ''weatherID'' is passed.
     */
    export function setWeatherBlended(weatherID: number, ): boolean;

    /**
     * This function changes the wind velocity. The wind shakes the vegetation and makes particles fly in a direction. The intensity and direction of the effect deppends of the wind velocity in each axis.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWindVelocity|MTASA Wiki}
     * @param velocityX : The velocity of the wind along the x axis.
     * @param velocityY : The velocity of the wind along the y axis.
     * @param velocityZ : The velocity of the wind along the z axis.
     * @return Returns ''true'' if successful, ''false'' if bad arguments were passed.
     */
    export function setWindVelocity(velocityX: number, velocityY: number, velocityZ: number, ): boolean;

    /**
     * This function copies all contents of a certain node in a XML document to a new document file, so the copied node becomes the new file's root node.
     * The new file will not be saved to file system until [[xmlSaveFile]]() is called
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlCopyFile|MTASA Wiki}
     * @param nodeToCopy the xmlnode that is to be copied to a new document.
     * @param newFilePath the path of the file that is to be created, in the following format: :resourceName/path. resourceName is the name of the resource the file is in, and path is the path from the root directory of the resource to the file.  :For example, to create a file named 'newfile.xml' with myNode as the root node in the resource 'ctf', it can be done from another resource this way: ''xmlCopyFile(myNode, ":ctf/newfile.xml")''.  :If the file is to be in the current resource, only the file path is necessary, e.g. ''xmlCopyFile(myNode, "newfile.xml")''.
     * @return Returns the [[xmlnode]] of the copy if the node was successfully copied, ''false'' if invalid arguments were passed.
     */
    export function xmlCopyFile(nodeToCopy: xmlnode, newFilePath: string, ): xmlnode;

    /**
     * This function creates a new child node under an XML node.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlCreateChild|MTASA Wiki}
     * @param parentNode the xmlnode you want to create a new child node under.
     * @param tagName the type of the child node that will be created.
     * @return Returns the created [[xmlnode]] if successful, ''false'' otherwise.
     */
    export function xmlCreateChild(parentNode: xmlnode, tagName: string, ): xmlnode;

    /**
     * This function creates a new XML document, which can later be saved to a file by using [[xmlSaveFile]]. This function will overwrite the file specified if it already exists.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlCreateFile|MTASA Wiki}
     * @param filePath The filepath of the file in the following format: :resourceName/path. resourceName is the name of the resource the file will be in, and path is the path from the root directory of the resource to the file.  :For example, if you want to create a file named 'new.xml' in the resource 'ctf', it can be created from another resource this way: ''xmlCreateFile(":ctf/new.xml", "newroot")''.  :If the file is in the current resource, only the file path is necessary, e.g. ''xmlCreateFile("new.xml", "newroot")''.  :Note that if a different resource than default is being accessed, the caller resource needs access to general.ModifyOtherObjects in the [[ACL]].
     * @param rootNodeName the name of the root node in the XML document.
     * @return Returns the root [[xmlnode]] object of the new XML file if successful, or ''false'' otherwise.
     */
    export function xmlCreateFile(filePath: string, rootNodeName: string, ): xmlnode;

    /**
     * This function destroys a XML node from the XML node tree.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlDestroyNode|MTASA Wiki}
     * @param theXMLNode The xml node you want to destroy.
     * @return Returns ''true'' if the [[xml node]] was successfully destroyed, ''false'' otherwise.
     */
    export function xmlDestroyNode(theXMLNode: xmlnode, ): boolean;

    /**
     * This function returns a named child node of an XML node.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlFindChild|MTASA Wiki}
     * @param parent : This is an xmlnode that you want to find the child node under.
     * @param tagName : This is the name of the child node you wish to find (case-sensitive).
     * @param index : This is the 0-based index of the node you wish to find. For example, to find the 5th subnode with a particular name, you would use 4 as the index value. To find the first occurence, use 0.
     * @return Returns an [[xmlnode]] if the node was found, ''false'' otherwise.
     */
    export function xmlFindChild(parent: xmlnode, tagName: string, index: number, ): xmlnode;

    /**
     * This function provides an alternative way to load XML files to [[getResourceConfig]].
     * This function loads an XML file and returns the node by specifying a specific file path, while [[getResourceConfig]] allows for loading an XML file from a resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlLoadFile|MTASA Wiki}
     * @param filePath The filepath of the file in the following format: :resourceName/path. resourceName is the name of the resource the file is in, and path is the path from the root directory of the resource to the file.  :For example, if there is a file named 'settings.xml' in the resource 'ctf', it can be accessed from another resource this way: ''xmlLoadFile(":ctf/settings.xml")''.  :If the file is in the current resource, only the file path is necessary, e.g. ''xmlLoadFile("settings.xml")''.
     * @param readOnly By default, the XML file is opened with reading and writing access. You can specify true for this parameter if you only need reading access.
     * @default false
     * @return Returns the root [[xmlnode]] object of an xml file if successful, or ''false'' otherwise.
     * * {{New items|3.0152|1.5|
     * * Print error if something wrong with xml.
     * * |7485}}
     */
    export function xmlLoadFile(filePath: string, readOnly?: boolean, ): xmlnode;

    /**
     * 
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlLoadString|MTASA Wiki}
     * @param xmlString A string containing XML data
     * @return Returns the root [[xmlnode]] object of an xml string if successful, or ''false'' otherwise (invalid XML string).
     */
    export function xmlLoadString(xmlString: string, ): xmlnode;

    /**
     * This function is used to return an attribute of a node in a configuration file.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeGetAttribute|MTASA Wiki}
     * @param node The node from which you wish to return the attribute
     * @param name The name of the attribute.
     * @return Returns the attribute in string form or ''false'', if the attribute is not defined.
     */
    export function xmlNodeGetAttribute(node: xmlnode, name: string, ): string;

    /**
     * Returns all the attributes of a specific XML node.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeGetAttributes|MTASA Wiki}
     * @param node the XML node to get the attributes of.
     * @return If successful, returns a table with as keys the names of the attributes and as values the corresponding attribute values. If the node has no attributes, returns an empty table. In case of failure, returns ''false''.
     */
    export function xmlNodeGetAttributes(node: xmlnode, ): table;

    /**
     * This function returns all children of a particular XML node, or a particular child node.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeGetChildren|MTASA Wiki}
     * @param parent This is the xmlnode you want to retrieve one or all child nodes of.
     * @param index If you only want to retrieve one particular child node, specify its (0-based) index here. For example if you only want the first node, specify 0; the fifth node has index 4, etc.
     * @return If '''index''' isn't specified, returns a table containing all child nodes. If '''index''' is specified, returns the corresponding child node if it exists. If no nodes are found, it returns an empty table. Returns ''false'' in case of failure.
     */
    export function xmlNodeGetChildren(parent: xmlnode, index: number, ): table|xmlnode;

    /**
     * Gets the tag name of the specified XML node.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeGetName|MTASA Wiki}
     * @param node the node to get the tag name of.
     * @return Returns the tag name of the node if successful, ''false'' otherwise.
     */
    export function xmlNodeGetName(node: xmlnode, ): string;

    /**
     * Returns the parent node of an xml node.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeGetParent|MTASA Wiki}
     * @param node the node of which you want to know the parent.
     * @return Returns the parent node of the specified node if successful. Returns ''false'' if the specified node is the root node or an invalid node was passed.
     */
    export function xmlNodeGetParent(node: xmlnode, ): xmlnode;

    /**
     * This function is made to be able to read tag values in XML files (eg. <something>anything</something>).
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeGetValue|MTASA Wiki}
     * @param theXMLNode The xml node of which you need to know the value.
     * @return Returns the value of the node as a [[string]] if it was received successfully, ''false'' otherwise.
     */
    export function xmlNodeGetValue(theXMLNode: xmlnode, ): string;

    /**
     * This function is used to edit an attribute of a node in a configuration file.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeSetAttribute|MTASA Wiki}
     * @param node The node of which you wish to edit an attribute.
     * @param name The name of the attribute.
     * @return Returns ''true'' if the attribute was set successfully, ''false'' if the node and/or attribute do not exist, or if they're faulty.
     */
    export function xmlNodeSetAttribute(node: xmlnode, name: string, float: string, ): boolean;

    /**
     * Sets the tag name of the specified XML node.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeSetName|MTASA Wiki}
     * @param node the node to change the tag name of.
     * @param name the new tag name to set.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function xmlNodeSetName(node: xmlnode, name: string, ): boolean;

    /**
     * This function is made to be able to assign values to tags in XML files (eg. <something>anything</something>).
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeSetValue|MTASA Wiki}
     * @param theXMLNode The xml node you want to set the value of.
     * @param value The string value you want the node to have.  {{New feature/item|4.0140|1.4.0|6782|
     * @param setCDATA A boolean indicating if you want the value to be enclosed inside CDATA tags.  }}
     * @default false
     * @return Returns ''true'' if value was successfully set, ''false'' otherwise.
     */
    export function xmlNodeSetValue(theXMLNode: xmlnode, value: string, setCDATA?: boolean, ): boolean;

    /**
     * This function saves a loaded XML file.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlSaveFile|MTASA Wiki}
     * @param rootNode the root xmlnode of the loaded XML file.
     * @return Returns ''true'' if save was successful, ''false'' if the XML file does not exist.
     */
    export function xmlSaveFile(rootNode: xmlnode, ): boolean;

    /**
     * Unloads an XML document from memory.
     * @see {@link https://wiki.multitheftauto.com/wiki/xmlUnloadFile|MTASA Wiki}
     * @param node root of the XML document to unload
     * @return Returns ''true'' if the document was unloaded successfully, ''false'' otherwise.
     */
    export function xmlUnloadFile(node: xmlnode, ): boolean;

}