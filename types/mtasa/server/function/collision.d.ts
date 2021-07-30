// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    TextDisplay,
    Account,
    ACL,
    ACLGroup,
    Ban,
    XML,
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
    CommandHandler
} from '../structure';

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/AddColPolygonPoint Wiki, addColPolygonPoint }
 * @param shape The colshape polygon you wish add a point to.
 * @param fX The X position of the new bound point.
 * @param fY The Y position of the new bound point.
 * @param index The index where the new point will be inserted in the polygon. The points are indexed in
 * order, with 1 being the first bound point. Passing 0 will insert the point as the last
 * one in the polygon.
 * Returns ''true'' if the polygon was changed, ''false'' if invalid arguments were passed.
 * @return returns true if the polygon was changed, false if invalid arguments were passed.
 * @noSelf
 */
export declare function addColPolygonPoint(
    shape: ColShape,
    fX: number,
    fY: number,
    index?: number
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/GetColPolygonPointPosition Wiki, getColPolygonPointPosition }
 * @param shape The colshape polygon you wish to change.
 * @param index The index of the point you wish to retrieve. The points are indexed in order, with 1
 * being the first bound point.
 * @return returns two floats, x and y, indicating the position of the point, false if invalid
 * arguments were passed.
 * @noSelf
 */
export declare function getColPolygonPointPosition(
    shape: ColShape,
    index: number
): LuaMultiReturn<[
    number,
    number
]>;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/GetColPolygonPoints Wiki, getColPolygonPoints }
 * @param shape The colshape polygon you wish to get the points of.
 * @return returns a table of coordinates, each coordinate being a table containing the x and y
 * position of a bound point, false if invalid arguments were passed.
 * @noSelf
 */
export declare function getColPolygonPoints(
    shape: ColShape
): LuaTable;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/GetColShapeRadius Wiki, getColShapeRadius }
 * @param shape The colshape you wish to get the radius of.
 * @return returns a float containing the radius of the colshape, false if an invalid colshape was
 * passed.
 * @noSelf
 */
export declare function getColShapeRadius(
    shape: ColShape
): number;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/GetColShapeSize Wiki, getColShapeSize }
 * @param shape The colshape you wish to get the size of.
 * @return returns up to 3 floats depending on the colshape type (see below), false if invalid
 * arguments were passed.
 * *cuboid: width, depth, height.
 * *rectangle: width, height.
 * *tube: height.
 * @noSelf
 */
export declare function getColShapeSize(
    shape: ColShape
): LuaMultiReturn<[
    number,
    number,
    number
]>;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/GetColShapeType Wiki, getColShapeType }
 * @param shape The colshape you wish to get the type of.
 * @return returns false if invalid arguments were passed, or an integer of the type of the
 * colshape, which include:
 * *0: circle
 * *1: cuboid
 * *2: sphere
 * *3: rectangle
 * *4: polygon
 * *5: tube
 * @noSelf
 */
export declare function getColShapeType(
    shape: ColShape
): number;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/IsInsideColShape Wiki, isInsideColShape }
 * @param theShape The colshape youre checking the position against.
 * @param posX The X coordinate of the position youre checking.
 * @param posY The Y coordinate of the position youre checking.
 * @param posZ The Z coordinate of the position youre checking.
 * @return returns true if the position is inside the colshape, false if it isnt or if any
 * parameters are invalid.
 * @noSelf
 */
export declare function isInsideColShape(
    theShape: ColShape,
    posX: number,
    posY: number,
    posZ: number
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/RemoveColPolygonPoint Wiki, removeColPolygonPoint }
 * @param shape The colshape polygon you wish to remove a point from.
 * @param index The index of the point you wish to remove. The points are indexed in order, with 1 being
 * the first bound point. You cant remove the last 3 points.
 * @return returns true if the polygon was changed, false if invalid arguments were passed.
 * @noSelf
 */
export declare function removeColPolygonPoint(
    shape: ColShape,
    index: number
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/SetColPolygonPointPosition Wiki, setColPolygonPointPosition }
 * @param shape The colshape polygon you wish to change.
 * @param index The index of the point you wish to change. The points are indexed in order, with 1 being
 * the first bound point.
 * @param fX The new X position of the bound point.
 * @param fY The new Y position of the bound point.
 * @return returns true if the polygon was changed, false if invalid arguments were passed.
 * @noSelf
 */
export declare function setColPolygonPointPosition(
    shape: ColShape,
    index: number,
    fX: number,
    fY: number
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/SetColShapeRadius Wiki, setColShapeRadius }
 * @param shape The colshape you wish to change the radius of.
 * @param radius The radius you want to set.
 * @return returns true if the radius was changed, or false if invalid arguments were passed.
 * @noSelf
 */
export declare function setColShapeRadius(
    shape: ColShape,
    radius: number
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/SetColShapeSize Wiki, setColShapeSize }
 * @param shape The colshape you wish to change the size of.
 * @param width The collision rectangles width.
 * @param depth The collision cuboids depth.
 * @param height The collision tubess height.
 * @return returns true if the size was changed, false if invalid arguments were passed.
 * @noSelf
 */
export declare function setColShapeSize(
    shape: ColShape,
    width: number,
    depth: number,
    height: number
): boolean;

/**
 * By default, a colshape polygon is infinitely tall.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/GetColPolygonHeight Wiki, getColPolygonHeight }
 * @param shape The colshape polygon
 * @return returns two floats, indicating the floor and ceiling of the colshape height, false if
 * invalid arguments were passed.
 * @noSelf
 */
export declare function getColPolygonHeight(
    shape: ColShape
): LuaMultiReturn<[
    number,
    number
]>;

/**
 * By default, a colshape polygon is infinitely tall.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/SetColPolygonHeight Wiki, setColPolygonHeight }
 * @param shape The colshape polygon
 * @param floor The polygon floor (lowest Z coordinate). Parse false to reset this value to 0.
 * @param ceil The polygon ceiling (highest Z coordinate). Parse false to reset this value to infinitely
 * tall.
 * @return returns true if the polygon was changed, false if invalid arguments were passed.
 * @noSelf
 */
export declare function setColPolygonHeight(
    shape: ColShape,
    floor: number,
    ceil: number
): boolean;

/**
 * This function creates a collision circle. This is a shape that has a position and a
 * radius and infinite height that you can use to detect a players presence. Events will be
 * triggered when a player enters or leaves it.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreateColCircle Wiki, createColCircle }
 * @param fX The collision circles center points X axis position
 * @param fY The collision circles center points Y axis position
 * @param radius The radius of the collision circle. Can not be smaller than 0.1
 * @return returns a colshape element if successful, false if invalid arguments were passed to the
 * function.
 * @noSelf
 */
export declare function createColCircle(
    fX: number,
    fY: number,
    radius: number
): ColShape;

/**
 * This function creates a collision cuboid. This is a shape that has a position, width,
 * depth and height. See http://en.wikipedia.org/wiki/Cuboid Wikipedia for a definition of a
 * cuboid. The XYZ of the col starts at the southwest bottom corner of the shape.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreateColCuboid Wiki, createColCuboid }
 * @param fX The X position of the collision cuboids western side
 * @param fY The Y position of the collision cuboids southern side
 * @param fZ The Z position of the collision cuboids lowest side
 * @param fWidth The collision cuboids width
 * @param fDepth The collision cuboids depth
 * @param fHeight The collision cuboids height
 * @return returns a colshape element if successful, false if invalid arguments were passed to the
 * function.
 * @noSelf
 */
export declare function createColCuboid(
    fX: number,
    fY: number,
    fZ: number,
    fWidth: number,
    fDepth: number,
    fHeight: number
): ColShape;

/**
 * This function creates a collision polygon. See http://en.wikipedia.org/wiki/Polygon
 * Wikipedia for a definition of a polygon. The first set of X Y of this shape is not part
 * of the colshape bounds, so can set anywhere in the game world, however for performance,
 * place it as close to the centre of the polygon as you can. It should be noted this shape
 * is 2D. There should be at least 3 bound points set.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreateColPolygon Wiki, createColPolygon }
 * @param fCenterX The X position of the collision polygons position - the position that will be returned
 * from getElementPosition.
 * @param fCenterY The Y position of the collision polygons position - the position that will be returned
 * from getElementPosition.
 * @param fX1 The 1st X position of the collision polygons bound point
 * @param fY1 The 1st Y position of the collision polygons bound point
 * @param fX2 The 2nd X position of the collision polygons bound point
 * @param fY2 The 2nd Y position of the collision polygons bound point
 * @param fX3 The 3rd X position of the collision polygons bound point
 * @param fY3 The 3rd Y position of the collision polygons bound point
 * @param ... From the 3rd position you can have as many points as you require to create the colshape.
 * @return returns a colshape element if successful, false if invalid arguments were passed to the
 * function.
 * @noSelf
 */
export declare function createColPolygon(
    fCenterX: number,
    fCenterY: number,
    fX1: number,
    fY1: number,
    fX2: number,
    fY2: number,
    fX3: number,
    fY3: number,
    ...varargs: any[]
): ColShape;

/**
 * This function creates a collision rectangle. This is a shape that has a position and a
 * width and a depth. See http://en.wikipedia.org/wiki/Rectangle Rectangle for a definition
 * of a rectangle. XY marks on the south west corner of the colshape.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreateColRectangle Wiki, createColRectangle }
 * @param fX The X position of the collision rectangles west side
 * @param fY The Y position of the collision rectangles south side
 * @param fWidth The collision rectangles width
 * @param fHeight The collision rectangles height
 * @return returns a colshape element if successful, false if invalid arguments were passed to the
 * function.
 * @noSelf
 */
export declare function createColRectangle(
    fX: number,
    fY: number,
    fWidth: number,
    fHeight: number
): ColShape;

/**
 * This function creates a collision sphere. This is a shape that has a position and a
 * radius. See http://en.wikipedia.org/wiki/Sphere Wikipedia for a definition of a sphere.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreateColSphere Wiki, createColSphere }
 * @param fX The collision spheres center points X axis position
 * @param fY The collision spheres center points Y axis position
 * @param fZ The collision spheres center points Z axis position
 * @param fRadius The collision spheres radius
 * @return returns a colshape element if successful, false if invalid arguments were passed to the
 * function.
 * @noSelf
 */
export declare function createColSphere(
    fX: number,
    fY: number,
    fZ: number,
    fRadius: number
): ColShape;

/**
 * This function creates a collision tube. This is a shape that has a position and a 2D
 * (X/Y) radius and a height. See http://en.wikipedia.org/wiki/Cylinder_(geometry) Cylinder
 * for a definition of a tube. A tube is similar to a colcircle, except that it has a
 * limited height, this means you can limit the distance above the position defined by (fX,
 * fY, fZ) that the collision is detected.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreateColTube Wiki, createColTube }
 * @param fX The position of the base of the tubes center on the X axis
 * @param fY The position of the base of the tubes center on the Y axis
 * @param fZ The position of the base of the tubes center on the Z axis
 * @param fRadius The collision tubes radius
 * @param fHeight The collision tubes height
 * @return returns a colshape element if successful, false if invalid arguments were passed to the
 * function.
 * @noSelf
 */
export declare function createColTube(
    fX: number,
    fY: number,
    fZ: number,
    fRadius: number,
    fHeight: number
): ColShape;
