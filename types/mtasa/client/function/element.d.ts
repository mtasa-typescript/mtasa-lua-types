/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { ColShape, Element, Marker, Matrix, Table } from '../structure';

/**
 * * [[Element/Player|Player]]
 * * [[Element/Ped|Ped]]
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementBoneMatrix|MTASA Wiki}
 * @param theElement the element to get the bone matrix on.
 * @param bone the ID of the bone to get the matrix of. See Bone IDs
 * @return Returns a multi-dimensional array (which can be transformed into a proper [[matrix]]
 * class using ''Matrix.create'' method) containing a 4x4 matrix. Returns ''false'' if invalid arguments
 * were passed.
 */
export function getElementBoneMatrix(theElement: Element, bone: number): Table;

/**
 * * [[Element/Player|Player]]
 * * [[Element/Ped|Ped]]
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementBonePosition|MTASA Wiki}
 * @param theElement the element to get the bone position on.
 * @param bone the ID of the bone to get the position of. See Bone IDs
 * @return Returns the x, y, z world position of the bone.
 */
export function getElementBonePosition(theElement: Element, bone: number): LuaMultiReturn<[number, number, number]>;

/**
 * * [[Element/Player|Player]]
 * * [[Element/Ped|Ped]]
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementBoneRotation|MTASA Wiki}
 * @param theElement the element to get the bone rotation on.
 * @param bone the ID of the bone to get the rotation of. See Bone IDs
 * @return Returns the yaw, pitch, roll rotation values.
 */
export function getElementBoneRotation(theElement: Element, bone: number): LuaMultiReturn<[number, number, number]>;

/**
 * This function returns the minimum and maximum coordinates of an element's bounding box.
 * It should be noted that the values returned are relative to the position of the element, and as
 * such if you wish to get world coordinates for drawing, etc., you should retrieve the position of the
 * element and add the returned values onto that.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementBoundingBox|MTASA Wiki}
 * @return *Returns ''min x, min y, min z, max x, max y, max z'' if the passed element is valid and
 * streamed in, ''false'' otherwise.
 */
export function getElementBoundingBox(
    theElement: Element,
): LuaMultiReturn<[number, number, number, number, number, number]>;

/**
 * This function is used to retrieve the distance between a [[element]]'s centre of mass to the
 * base of the model. This can be used to calculate the position the [[element]] has to be set to, to have
 * it on ground level.
 * @see {@link
 * https://wiki.multitheftauto.com/wiki/getElementDistanceFromCentreOfMassToBaseOfModel|MTASA Wiki}
 * @return Returns a ''float'' with the distance, or ''false'' if the element is invalid.
 */
export function getElementDistanceFromCentreOfMassToBaseOfModel(theElement: Element): number;

/**
 * This function gets the radius of an [[element]]. Normally, sphere or circle-shaped elements tend
 * to return a more accurate and expected radius than others with another shapes.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementRadius|MTASA Wiki}
 * @param theElement The element to get the radius of. It can be any entity type, such as:
 * @return Returns a ''float'' containing the radius if the element is valid, ''false'' otherwise.
 */
export function getElementRadius(theElement: Element): number;

/**
 * This function can be used to check whether specified element is collidable with another
 * element.<br>
 * '''Note:''' You can only use this function with the element types listed below.
 * *[[Player]]
 * *[[Ped]]
 * *[[Vehicle]]
 * *[[Object]]
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementCollidableWith|MTASA Wiki}
 * @param theElement The element which colliding you want to get
 * @param withElement The other element which colliding with the first entity you want to get
 * @return Returns ''true'' if the elements collide with eachother, ''false'' otherwise.
 */
export function isElementCollidableWith(theElement: Element, withElement: Element): boolean;

/**
 * This function checks whether a clientside [[element]] is local to the client (doesn't exist in
 * the server) or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementLocal|MTASA Wiki}
 * @param theElement : The element that we want to check.
 * @return Returns ''true'' if the passed element is local, ''false'' if not or if invalid
 * parameters are passed.
 */
export function isElementLocal(theElement: Element): boolean;

/**
 * This function will check if an element is on the screen. Elements behind objects but still in
 * the camera view count as being on screen.
 * This function is particularly useful for detecting if dynamic objects are in "destroyed" state.
 * Destroyed objects will return false.
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementOnScreen|MTASA Wiki}
 * @param theElement The element of which you wish to check wether its being rendered on screen.
 * @return Returns ''true'' if element is on screen, ''false'' if not.
 */
export function isElementOnScreen(theElement: Element): boolean;

/**
 * This function checks whether an [[element]] is streamable as set by [[setElementStreamable]] or
 * not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementStreamable|MTASA Wiki}
 * @param theElement : The element to check the streamability of.
 * @return Returns ''true'' if the passed element is streamable like normal, ''false'' if this
 * element must always be streamed in.
 */
export function isElementStreamable(theElement: Element): boolean;

/**
 * This function checks whether an [[element]] is currently streamed in (not virtualized) and are
 * actual GTA objects in the world. You can force an element to be streamed in using
 * [[setElementStreamable]].<br>
 * DP2 can return true even if this element is not fully streamed in. This can happen during the
 * period when the vehicle/object model is loading while the element is not actually fully created yet.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementStreamedIn|MTASA Wiki}
 * @param theElement : The element to check whether is streamed in or not.
 * @return Returns ''true'' if the passed element is currently streamed in, ''false'' if it is
 * virtualized.
 */
export function isElementStreamedIn(theElement: Element): boolean;

/**
 * This function checks whether an [[element]] is synced by the local player or not. Accepted
 * elements are [[ped|peds]] and [[vehicle|vehicles]].
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementSyncer|MTASA Wiki}
 * @param theElement : The element to check.
 * @return Returns ''true'' if the passed element is synced by the local player, ''false''
 * otherwise.
 */
export function isElementSyncer(theElement: Element): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementWaitingForGroundToLoad|MTASA Wiki}
 * @param theElement the element to check its frozen waiting for custom map objects to load status.
 * It can be a vehicle, ped or player.
 * @return Returns ''true'' if the specified [[element]] is frozen waiting for collisions of custom
 * map objects to load. Returns ''false'' if it's not or if the specified [[element]] is invalid.
 */
export function isElementWaitingForGroundToLoad(theElement: Element): boolean;

/**
 * * [[Element/Player|Player]]
 * * [[Element/Ped|Ped]]
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementBoneMatrix|MTASA Wiki}
 * @param theElement the element to set the bone matrix on.
 * @param bone the ID of the bone. See Bone IDs
 * @param matrix the MTA matrix to set.
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 */
export function setElementBoneMatrix(theElement: Element, bone: number, matrix: Matrix): boolean;

/**
 * * [[Element/Player|Player]]
 * * [[Element/Ped|Ped]]
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementBonePosition|MTASA Wiki}
 * @param theElement the element to set the bone position on.
 * @param bone the ID of the bone to set the position of. See Bone IDs
 * @param x The x coordinate of the destination.
 * @param y The y coordinate of the destination.
 * @param z The z coordinate of the destination.
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 */
export function setElementBonePosition(theElement: Element, bone: number, x: number, y: number, z: number): boolean;

/**
 * * [[Element/Player|Player]]
 * * [[Element/Ped|Ped]]
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementBoneRotation|MTASA Wiki}
 * @param theElement the element to set the bone rotation on.
 * @param bone the ID of the bone to set the rotation of. See Bone IDs
 * @param yaw the yaw rotation value.
 * @param pitch the pitch rotation value.
 * @param roll the roll rotation value.
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 * * '''Note:''' [[updateElementRpHAnim]] must be called after this function to apply bone rotation.
 */
export function setElementBoneRotation(
    theElement: Element,
    bone: number,
    yaw: number,
    pitch: number,
    roll: number,
): boolean;

/**
 * This function can be used to set an element to collide with another element. An element with
 * collisions disabled does not interact physically with the other element.<br>
 * '''Note:''' You can only use this function with the element types listed below.
 * *[[Player]]
 * *[[Ped]]
 * *[[Vehicle]]
 * *[[Object]]
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementCollidableWith|MTASA Wiki}
 * @param theElement The element which colliding you want to change
 * @param withElement The other element you wish the first entity to collide with
 * @param enabled A boolean to indicate whether elements should be able to collide with eachother
 * (true) or not (false)
 * @return Returns ''true'' if the collisions were set succesfully, ''false'' otherwise.
 */
export function setElementCollidableWith(theElement: Element, withElement: Element, enabled: boolean): boolean;

/**
 * This function can be used to disable streaming for an element. This will make sure the element
 * is not virtualized (streamed out from GTA) when the player moves far away from it. This function only
 * works in elements with a physical representation in the world (entities), such as
 * [[player|players]], [[ped|peds]], [[vehicle|vehicles]] and [[object|objects]].
 * * There is a limit of elements that can be streamed in safely for every GTA entity type. If you
 * bypass said limit by using this function, the client can experience problems of disappearing objects
 * and unstability when trying to stream in new elements of that type.
 * * In general, if you disable too many elements (of the same type or not) to stream out, GTA will
 * always try to render them, so it can cause a noticeable FPS drop.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementStreamable|MTASA Wiki}
 * @param theElement The element you wish to set the streaming of
 * @param streamable true if this element should stream in/out like normal, false if it should
 * always be streamed in.
 * @return Returns whether the element could be set to be streamable.
 */
export function setElementStreamable(theElement: Element, streamable: boolean): boolean;

/**
 * * [[Element/Player|Player]]
 * * [[Element/Ped|Ped]]
 * This function must be called after [[setElementBoneRotation]] for changes to take effect. It
 * should only be called once per frame, after you are done rotating bones on that element, as it is quite
 * heavy.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/updateElementRpHAnim|MTASA Wiki}
 * @param theElement the element to update.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function updateElementRpHAnim(theElement: Element): boolean;

/**
 * This function attaches one element to another, so that the first one follows the second whenever
 * it moves.
 * If an attempt is made to attach two elements that are already attached the opposite way (eg
 * theElement becomes theAttachToElement and vice versa), the 1st attachment order is automatically
 * detached in favor of the 2nd attachment order. For example, if carA was attached to carB, now carB is
 * attached to carA. Also, an element cannot be attached to two separate elements at one time. For example,
 * two cars can be attached to one single car, but one single car cannot be attached to two separate
 * cars. If you attempt to do this, the existing attachment will automatically be dropped in favor of the
 * new attachment. For example, if carA is asked to attached to carB then carC, it is only attached to
 * carC.
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
 * *The offset coodinates reflect the object space, not the world space. This means that you cannot
 * calculate the exact offsets between two objects by pre-positioning them in the map editor as a
 * reference. Please see [[attachElementsOffsets]] for more details.
 * *Due to a limitation in GTA, unexpected attach rotations may occur if all rotation offsets are
 * non-zero. (i.e. Try to ensure at least one of 'xRotOffset', 'yRotOffset' or 'zRotOffset' is zero).}}
 * @see {@link https://wiki.multitheftauto.com/wiki/attachElements|MTASA Wiki}
 * @param theElement The element to be attached.
 * @param theAttachToElement The element to attach the first to.  {{OptionalArg}}
 * @param xPosOffset The x offset, if you want the elements to be a certain distance from one
 * another (default 0).
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
export function attachElements(
    theElement: Element,
    theAttachToElement: Element,
    xPosOffset: number,
    yPosOffset: number,
    zPosOffset: number,
    xRotOffset: number,
    yRotOffset: number,
    zRotOffset: number,
): boolean;

/**
 * This function is used to create a new dummy element in the [[element tree]] which do not
 * necessarily represent an entity within the San Andreas world. A common use for this function is for
 * creating custom elements, such as a Flag or a Base.
 * Elements created using this function are placed in the element tree with their parent as the
 * 'dynamic' map element.
 * @see {@link https://wiki.multitheftauto.com/wiki/createElement|MTASA Wiki}
 * @param elementType The type of element being created.
 * @param elementID The ID of the element being created.
 * @default nil
 * @return Returns the element if it was successfully created. Returns ''false'' if the arguments
 * are wrong.
 */
export function createElement(elementType: string, elementID: string): Element;

/**
 * This function destroys an [[element]] and all elements within it in the hierarchy (its children,
 * the children of those children etc). [[player|Player]] elements cannot be destroyed using this
 * function. A player can only be removed from the hierarchy when they quit or are kicked. The root element
 * also cannot be destroyed, however, passing the root as an argument will wipe all elements from the
 * server, except for the players and clients, which will become direct descendants of the root node,
 * and other elements that cannot be destroyed, such as resource root elements.
 * Players are not the only elements that cannot be deleted. This list also includes remote clients
 * and console elements.
 * @see {@link https://wiki.multitheftauto.com/wiki/destroyElement|MTASA Wiki}
 * @param elementToDestroy The element you wish to destroy.
 * @return Returns ''true'' if the element was destroyed successfully, ''false'' if either the
 * element passed to it was invalid or it could not be destroyed for some other reason (for example,
 * clientside destroyElement can't destroy serverside elements).
 */
export function destroyElement(elementToDestroy: Element): boolean;

/**
 * This function detaches attached elements from one another.
 * @see {@link https://wiki.multitheftauto.com/wiki/detachElements|MTASA Wiki}
 * @param theElement The element to be detached (the child)  {{OptionalArg}}
 * @param theAttachToElement The element you wish to detach from, will detach from the attached
 * element if this isnt specified.
 * @return Returns ''true'' if the detaching was successful, ''false'' otherwise.
 */
export function detachElements(theElement: Element, theAttachToElement: Element): boolean;

/**
 * This function returns a table of all the elements attached to the specified element
 * @see {@link https://wiki.multitheftauto.com/wiki/getAttachedElements|MTASA Wiki}
 * @param theElement : The element which you require the information from.
 * @return Returns a table of all the elements attached to the specified element.
 */
export function getAttachedElements(theElement: Element): Table;

/**
 * This function returns the alpha (transparency) value for the specified [[element]]. This can be
 * a [[player]], [[ped]], [[object]], [[vehicle]] or [[Element/Weapon|weapon]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementAlpha|MTASA Wiki}
 * @param theElement The element whose alpha you want to retrieve.
 * @return Returns an integer (0-255; 0 = transparent) indicating the element's alpha, or ''false''
 * if invalid arguments were passed.
 */
export function getElementAlpha(theElement: Element): number;

/**
 * This function returns the offsets of an element that has been attached to another element using
 * [[attachElements]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementAttachedOffsets|MTASA Wiki}
 * @param theElement The attached element.
 * @return Returns 6 [[float|floats]], of which the first 3 indicate the position offset (x, y, z),
 * and the last 3 indicate the rotation offset (x, y, z), if successful. ''false'' otherwise.
 */
export function getElementAttachedOffsets(
    theElement: Element,
): LuaMultiReturn<[number, number, number, number, number, number]>;

/**
 * This function determines the element that the specified element is attached to.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementAttachedTo|MTASA Wiki}
 * @param theElement The element you require the information for.
 * @return Returns the element that the chosen element is attached to, or ''false'' if the element
 * isn't attached to another element.
 */
export function getElementAttachedTo(theElement: Element): Element;

/**
 * This function indicates if a specific element is set to have collisions disabled. An element
 * without collisions does not interact with the physical environment and remains static.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementCollisionsEnabled|MTASA Wiki}
 * @param theElement The element for which you want to check whether collisions are enabled
 * @return Returns ''true'' if the collisions are enabled, ''false'' otherwise.
 */
export function getElementCollisionsEnabled(theElement: Element): boolean;

/**
 * This function returns an element from the specified ID. If more than one element with the same
 * ID exists, only the first one in the order it appears in the XML tree will be returned by this
 * function.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementByID|MTASA Wiki}
 * @param id The ID of the element as it appears in the XML file or as set by setElementID.
 * {{optionalArg}}
 * @param index If there are two or more elements of the same ID it will return the element with
 * the specified index starting at 0.
 * @default 0
 * @return Returns the [[element]] with the given ID, or ''false'' if no such element exists.
 */
export function getElementByID(id: string, index?: number): Element;

/**
 * This function returns one of the child elements of a given parent element. The child element is
 * selected by its index (0 for the first child, 1 for the second and so on).
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementChild|MTASA Wiki}
 * @param parent the element above the one to be returned in the hierarchy.
 * @param index the elements index (0 for the first element, 1 for the second, etc).
 * @return Returns the requested element if it exists, or ''false'' if it doesn't.
 */
export function getElementChild(parent: Element, index: number): Element;

/**
 * This function is used to retrieve a list of the child elements of a given parent element. Note
 * that it will only return direct children and not elements that are further down the [[element tree]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementChildren|MTASA Wiki}
 * @param parent Supply this argument with the parent of the children you want returned.
 * @param theType The type of element you want a list of. This is the same as the tag name in the
 * .map file, so this can be used with a custom element type if desired. Built in types are:
 * @default nil
 * @return This function returns a ''table'' that contains a list of elements that the parent has.
 * If the element has no children, it will return an empy ''table''. It will return ''false'' if the
 * parent element does not exist.
 */
export function getElementChildren(parent: Element, theType?: string): Table;

/**
 * This function returns the number of children an element has. Note that only the direct children
 * are counted and not elements that are further down the [[element tree]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementChildrenCount|MTASA Wiki}
 * @param parent the parent element
 * @return Returns an ''int'' with the number of child elements, or ''false'' if the parent element
 * does not exist.
 */
export function getElementChildrenCount(parent: Element): number;

/**
 * Some elements have an associated colshape, for example [[Marker]] and [[Pickup]]. This function
 * is used to get the associated colshape.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementColShape|MTASA Wiki}
 * @param theElement The element you want to get the colshape of
 * @return Returns ''colshape'' of the element, ''false'' if not or an invalid argument was passed
 * to the function.
 */
export function getElementColShape(theElement: Element): ColShape;

/**
 * This function retrieves [[element data]] attached to an element under a certain key.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementData|MTASA Wiki}
 * @param theElement This is the element with data you want to retrieve.
 * @param key The name of the element data entry you want to retrieve. (Maximum 31 characters.)
 * @param inherit - toggles whether or not the function should go up the hierarchy to find the
 * requested key in case the specified element doesnt have it.
 * @default true
 * @return This function returns a ''variable'' containing the requested element data, or ''false''
 * if the element or the element data does not exist. When getting data corresponding to a XML
 * attribute, this is always a ''string''.
 */
export function getElementData(theElement: Element, key: string, inherit?: boolean): any;

/**
 * This function allows you to retrieve the dimension of any element. The dimension determines
 * what/who the element is visible to.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementDimension|MTASA Wiki}
 * @param theElement The element in which youd like to retrieve the dimension of.
 * @return Returns an integer for the dimension if '''theElement''' is valid, ''false'' otherwise.
 */
export function getElementDimension(theElement: Element): number;

/**
 * This function returns the current health for the specified [[element]]. This can be a
 * [[player]], a [[ped]], a [[vehicle]], or an [[object]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementHealth|MTASA Wiki}
 * @param theElement The player or vehicle whose health you want to check.
 * @return Returns a float indicating the element's health, or ''false'' if invalid arguments were
 * passed.
 */
export function getElementHealth(theElement: Element): number;

/**
 * This function gets the ID of an element. This is the "id" attribute of the element and is a
 * string, NOT a number like a model ID, weapons ID or similar.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementID|MTASA Wiki}
 * @param theElement the element from which to retrieve the ID.
 * @return This returns a ''string'' containing the element ID. It will return an empty ''string''
 * if it has no ID. It will return ''false'' if the element is invalid.
 */
export function getElementID(theElement: Element): string;

/**
 * This function allows you to retrieve the interior of any element. An interior is the current
 * loaded place, 0 being outside.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementInterior|MTASA Wiki}
 * @param theElement The element of which youd like to retrieve the interior
 * @return Returns an [[int]] for the interior if '''theElement''' is valid, ''false'' otherwise.
 */
export function getElementInterior(theElement: Element): number;

/**
 * This function gets an [[element]]'s transform [[matrix]]. This contains 16 float values that
 * multiplied to a point will give you the point transformed. It is most useful for matrix calculations
 * such as calculating offsets. For further information, please refer to a tutorial of matrices in
 * computer graphics programming.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementMatrix|MTASA Wiki}
 * @param theElement The element which you wish to retrieve the matrix for.
 * @param legacy Set to false to return correctly setup matrix (i.e. Last column in the first 3
 * rows set to zero).
 * @default true
 * @return Returns a multi-dimensional array (which can be transformed into a proper [[matrix]]
 * class using ''Matrix.create'' method) containing a 4x4 matrix. Returns ''false'' if the element is not
 * streamed in, and not a [[vehicle]], [[ped]] or [[object]].
 */
export function getElementMatrix(theElement: Element, legacy?: boolean): Table;

/**
 * Returns the model ID of a given element. This can be a player/ped skin, a pickup model, an
 * object model or a vehicle model.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementModel|MTASA Wiki}
 * @param theElement the element to retrieve the model ID of.
 * @return Returns the model ID if successful, ''false'' otherwise.
 * * * For players/peds: A GTASA player model (skin) ID. See [[Character Skins]].
 * * * For vehicles: The [[Vehicle IDs|vehicle ID]] of the vehicle.
 * * * For objects: An [[int]] specifying the model id.
 */
export function getElementModel(theElement: Element): number;

/**
 * This function is used to determine the parent of an ''element''.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementParent|MTASA Wiki}
 * @param theElement The child of the parent element you want returned.
 * @return This returns the parent as an ''element''. It returns ''false'' if ''theElement'' is
 * invalid, or is the root node.
 */
export function getElementParent(theElement: Element): Element;

/**
 * The getElementPosition function allows you to retrieve the position coordinates of an element.
 * This can be any real world element, including:
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
 * @return Returns three ''float''s indicating the position of the element, ''x'', ''y'' and ''z''
 * respectively.
 */
export function getElementPosition(theElement: Element): LuaMultiReturn<[number, number, number]>;

/**
 * Retrieve the rotation of elements.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementRotation|MTASA Wiki}
 * @param theElement The element whose rotation will be retrieved
 * @param rotOrder A string representing the rotation order desired when returning the
 * http://en.wikipedia.org/wiki/Euler_angles euler angles. If omitted, default value is default. Allowed values are:
 * @default "default"
 * @return * ''rx, ry, rz'': 3 ''float''s representing the Euler rotation angles on the axis X, Y
 * and Z (with the rotation order depending on the ''rotOrder'' argument) if ''element'' exists and is a
 * valid element, ''false'' if it's invalid.
 */
export function getElementRotation(theElement: Element, rotOrder?: string): LuaMultiReturn<[number, number, number]>;

/**
 * This function is used to retrieve the type of an element.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementType|MTASA Wiki}
 * @param theElement The element you wish to get the type of.
 * @return Returns a ''string'' containing the element type, ''false'' if invalid arguments were
 * passed.
 */
export function getElementType(theElement: Element): string;

/**
 * This function returns three floats containing the velocity (movement speeds) along the X, Y, and
 * Z axis respectively. This means that velocity values can be positive and negative for each axis.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementVelocity|MTASA Wiki}
 * @param theElement : The element you wish to retrieve the velocity of.
 * @return If succesful, returns three ''float''s that represent the element's current velocity
 * along the ''x'', ''y'', and ''z'' axis respectively. This function can fail if the element is a player
 * in a car. Use the vehicle element in this case. It will also fail if the element specified does not
 * have a velocity, or does not exist. In case of failure, the first return value will be ''false''.
 * * The returned values are expressed in GTA units per 1/50th of a
 * second[http://forum.mtasa.com/viewtopic.php?f=91&t=31225]. A GTA Unit is equal to one
 * metre[http://gta.wikia.com/Unit#GTA3.2C_GTAVC_.26_GTASA].
 */
export function getElementVelocity(theElement: Element): LuaMultiReturn<[number, number, number]>;

/**
 * This function is used to retrieve a list of all elements of the specified type. This can be
 * useful, as it disregards ''where'' in the element tree it is. It can be used with either the built in
 * types (listed below) or with any custom type used in a .map file. For example, if there is an element
 * of type "flag" (e.g. <flag />) in the .map file, the using "flag" as the type argument would find it.
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementsByType|MTASA Wiki}
 * @return Returns a ''table'' containing all the elements of the specified type. Returns an empty
 * ''table'' if there are no elements of the specified type. Returns ''false'' if the string specified
 * is invalid (or not a string).
 */
export function getElementsByType(theType: string, startat: Element, streamedIn: boolean): Table;

/**
 * This function return the low LOD element that an element is associated with.
 * @see {@link https://wiki.multitheftauto.com/wiki/getLowLODElement|MTASA Wiki}
 * @param theElement The element whose low LOD version we want to get.
 * @return Returns a low LOD element if successful, ''false'' otherwise.
 */
export function getLowLODElement(theElement: Element): Element;

/**
 * This function returns the root node of the [[element tree]], called ''root''. This node contains
 * every other element: all resource root elements, players and remote clients. It is never destroyed
 * and cannot be destroyed using [[destroyElement]].
 * It is often used to attach handler functions to events triggered for any element, or also to
 * make a scripting function affect all elements.
 * @see {@link https://wiki.multitheftauto.com/wiki/getRootElement|MTASA Wiki}
 * @return Returns the root [[element]].
 */
export function getRootElement(): Element;

/**
 * This function checks if an element has [[element data]] available under a certain key.}}
 * @see {@link https://wiki.multitheftauto.com/wiki/hasElementData|MTASA Wiki}
 * @param theElement This is the element with data you want to check.
 * @param key The name of the element data entry you want to check for. (Maximum 31 characters.)
 * @param inherit - toggles whether or not the function should go up the hierarchy to find the
 * requested key in case the specified element doesnt have it.
 * @default true
 * @return This function returns ''true'' if the element contains element data for ''key'', or
 * ''false'' if the element doesn't exist or there is no data associated with the ''key''.
 */
export function hasElementData(theElement: Element, key: string, inherit?: boolean): boolean;

/**
 * This function checks if a value is an [[element]] or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isElement|MTASA Wiki}
 * @param theValue : The value that we want to check.
 * @return Returns ''true'' if the passed value is an element, ''false'' otherwise.
 */
export function isElement(theValue: any): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This functions checks whether or not an element is attached to another element.
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementAttached|MTASA Wiki}
 * @param theElement The element to check for attachment.
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the specified element is attached to another element, ''false'' if it is
 * not attached or ''nil'' if an improper argument was passed.
 */
export function isElementAttached(theElement: Element): boolean;

/**
 * This functions checks if certain element has call propagation enabled.
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementCallPropagationEnabled|MTASA Wiki}
 * @param theElement The element to check
 * @return Returns ''true'' if the propagation is enabled, ''false'' if disabled or invalid
 * arguments have been passed.
 */
export function isElementCallPropagationEnabled(theElement: Element): boolean;

/**
 * This function checks whether an element is double-sided as set by [[setElementDoubleSided]] or
 * not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementDoubleSided|MTASA Wiki}
 * @param theElement The element in which youd like to check the double-sidedness of.
 * @return Returns ''true'' if the '''theElement''' is double-sided, ''false'' otherwise.
 */
export function isElementDoubleSided(theElement: Element): boolean;

/**
 * This function checks if element has been frozen.
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementFrozen|MTASA Wiki}
 * @param theElement the element whose freeze status we want to check.
 * @return *Returns ''true'' if the element is frozen, ''false'' if it isn't or if invalid
 * arguments were passed.
 */
export function isElementFrozen(theElement: Element): boolean;

/**
 * This function checks whether an [[element]] is submerged in water.
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementInWater|MTASA Wiki}
 * @param theElement : The element to check.
 * @return Returns ''true'' if the passed element is in water, ''false'' if it isn't, or if the
 * element is invalid.
 */
export function isElementInWater(theElement: Element): boolean;

/**
 * This function reveals if an element is low LOD.
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementLowLOD|MTASA Wiki}
 * @param theElement The element whose low LOD status we want to get.
 * @return Returns ''true'' if the element is low LOD, ''false'' otherwise.
 */
export function isElementLowLOD(theElement: Element): boolean;

/**
 * This function is used to determine if an [[element]] is within a [[marker]].
 * @see {@link https://wiki.multitheftauto.com/wiki/isElementWithinMarker|MTASA Wiki}
 * @param theElement The element youre checking.
 * @param theMarker The marker youre checking.
 * @return Returns ''true'' if the element is within the marker, ''false'' otherwise
 */
export function isElementWithinMarker(theElement: Element, theMarker: Marker): boolean;

/**
 * [[file:SetElementAlpha.png|400px|thumb|right|Player ped alpha demonstration. Shown alpha levels
 * are 255, 100 and 0 (left to right).]]
 * This function sets the alpha (transparency) value for the specified [[element]]. This can be a
 * [[player]], [[ped]], [[object]], [[vehicle]] or [[Element/Weapon|weapon]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementAlpha|MTASA Wiki}
 * @param theElement The element whose alpha you want to set.
 * @param alpha The alpha value to set. Values are 0-255, where 255 is fully opaque and 0 is fully
 * transparent.
 * @return Returns ''true'' or ''false'' if invalid arguments were passed.
 */
export function setElementAlpha(theElement: Element, alpha: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementAngularVelocity|MTASA Wiki}
 * @param theElement The element to apply the spin to. Can be either a player, ped, object, vehicle
 * or a Element/Weapon|custom weapon.
 * @param rx velocity around the X axis
 * @param ry velocity around the Y axis
 * @param rz velocity around the Z axis
 * @return Returns ''true'' if it was succesful, ''false'' otherwise.
 */
export function setElementAngularVelocity(theElement: Element, rx: number, ry: number, rz: number): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getElementAngularVelocity|MTASA Wiki}
 * @param theElement The element to retrieve the angular velocity from. Can be either a player,
 * ped, object, vehicle or a Element/Weapon|custom weapon. Server side supports only vehicles currently.
 * @return Returns three floats describing the x, y and z rotation
 */
export function getElementAngularVelocity(theElement: Element): LuaMultiReturn<[number, number, number]>;

/**
 * This function updates the offsets of an element that has been attached to another element using
 * [[attachElements]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementAttachedOffsets|MTASA Wiki}
 * @param theElement The attached element.  {{OptionalArg}}
 * @param xPosOffset The x offset, if you want the elements to be a certain distance from one
 * another (default 0).
 * @param yPosOffset The y offset (default 0).
 * @param zPosOffset The z offset (default 0).
 * @param xRotOffset The x rotation offset (default 0).
 * @param yRotOffset The y rotation offset (default 0).
 * @param zRotOffset The z rotation offset (default 0).
 * @return Returns ''true'' if the attaching process was successful, ''false'' otherwise.
 */
export function setElementAttachedOffsets(
    theElement: Element,
    xPosOffset: number,
    yPosOffset: number,
    zPosOffset: number,
    xRotOffset: number,
    yRotOffset: number,
    zRotOffset: number,
): boolean;

/**
 * This function enables/disables call propagation on a certain element. Look at the example for a
 * practical application.
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementCallPropagationEnabled|MTASA Wiki}
 * @param theElement The element whose propagation behaviour youd like to change
 * @param enabled Whether propagation should be enabled or not
 * @return Returns ''true'', if the propagation behaviour has been changed successfully, ''false''
 * otherwise.
 */
export function setElementCallPropagationEnabled(theElement: Element, enabled: boolean): boolean;

/**
 * This function can disable or enable an element's collisions. An element without collisions does
 * not interact with the physical environment and remains static.
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementCollisionsEnabled|MTASA Wiki}
 * @param theElement The element you wish to set the collisions of
 * @param enabled A boolean to indicate whether collisions are enabled (true) or disabled (false)
 * @return Returns ''true'' if the collisions were set succesfully, ''false'' otherwise.
 */
export function setElementCollisionsEnabled(theElement: Element, enabled: boolean): boolean;

/**
 * This function stores [[element data]] under a certain key, attached to an element. Element data
 * set using this is then synced with all clients and the server. The data can contain server created
 * elements, but you should avoid passing data that is not able to be synced such as xmlnodes, acls,
 * aclgroups etc.
 * As element data is synced to all clients, it can generate a lot of network traffic and be heavy
 * on performance. Events are much more efficient for sending data from a client to the server only, or
 * from the server to a specific client. <br/>
 * Usage of element data should be disencouraged where your goal can be achieved with events like
 * above, and [[table|tables]] for storing and retrieving data.
 * Note this mode only works when setting element data serverside. Setting data clientside still
 * sends the update to all clients if 'synchronize' is set to true.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementData|MTASA Wiki}
 * @param theElement The element you wish to attach the data to.
 * @param key The key you wish to store the data under. (Maximum 31 characters.)
 * @param value The value you wish to store. See element data for a list of acceptable datatypes.
 * @param synchronize Determines whether or not the data will be synchronized with the server.
 * @default true
 * @return Returns ''true'' if the data was set succesfully, ''false'' otherwise.
 * * {{New items|5.0157|1.5.7-9.20477|
 */
export function setElementData(theElement: Element, key: string, value: any, synchronize?: boolean): boolean;

/**
 * This function allows you to set the [[dimension]] of any element. The dimension determines
 * what/who the element is visible to.
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementDimension|MTASA Wiki}
 * @param theElement The element in which youd like to set the dimension of.
 * @param dimension An integer representing the dimension ID. {{New
 * feature/item|3.0154|1.5.3|11199|You can also use -1 to make the element visible in all dimensions (only valid to objects).}} Valid
 * values are 0 to 65535.
 * @return Returns ''true'' if '''theElement''' and '''dimension''' are valid, ''false'' otherwise.
 * * Also returns false if '''theElement''' is a player and it's not alive.
 */
export function setElementDimension(theElement: Element, dimension: number): boolean;

/**
 * This function allows you to set the double-sidedness of an element's model. When an element's
 * model is double-sided, it's back facing triangles become visible.
 * Possible uses of double-sidedness are: Elimination of invisible walls, using buildings as
 * enclosures, using inverted landmasses as large pits or to make cave networks. It can also remove the need
 * to add extra triangles to custom models when trying to make them appear solid from all directions.
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementDoubleSided|MTASA Wiki}
 * @param theElement The element in which youd like to set the double-sidedness of.
 * @return Returns ''true'' if '''theElement''' is valid, ''false'' otherwise.
 */
export function setElementDoubleSided(theElement: Element, enable: boolean): boolean;

/**
 * This function freezes an element (stops it in its position and disables movement) or unfreezes
 * it.
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementFrozen|MTASA Wiki}
 * @param theElement The element whose freeze status we want to change.
 * @param freezeStatus A boolean denoting whether we want to freeze (true) or unfreeze (false) it.
 * @return Returns ''true'' if the element was frozen, ''false'' if it wasn't or if invalid
 * arguments are passed.
 */
export function setElementFrozen(theElement: Element, freezeStatus: boolean): boolean;

/**
 * This function sets the health for the specified [[element]]. This can be a [[ped]], [[object]]
 * or a [[vehicle]].
 * *'''650:''' white steam 0%, black smoke 0%
 * *'''450:''' white steam 100%, black smoke 50%
 * *'''250:''' white steam 0%, black smoke 100%
 * *'''249:''' fire with big black smoke
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementHealth|MTASA Wiki}
 * @param theElement The ped, vehicle or object whose health you want to set.
 * @param newHealth A float indicating the new health to set for the element.
 * @return Returns ''true'' if the new health was set successfully, or ''false'' if invalid
 * arguments were passed.
 */
export function setElementHealth(theElement: Element, newHealth: number): boolean;

/**
 * This function sets the ID of an element to a string. This can be anything from an identifying
 * number, to a name.
 * You can only change the ID of an element clientside if that element has been created clientside
 * as well.
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementID|MTASA Wiki}
 * @param theElement The element you want to set the ID of.
 * @param name The new ID for theElement.
 * @return This returns ''true'' if successful. It will return ''false'' if '''theElement''' is
 * invalid, or does not exist, or if '''name''' is invalid, or is not a string.
 */
export function setElementID(theElement: Element, name: string): boolean;

/**
 * This function allows you to set the [[interior]] of any element. An interior is the current
 * loaded place, 0 being outside.
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementInterior|MTASA Wiki}
 * @param theElement The element in which youd like to set the interior of.
 * @param interior The interior you want to set the element to. Valid values are 0 to 255.
 * {{OptionalArg}}
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @return Returns ''true'' if '''theElement''' and '''interior''' are valid arguments, ''false''
 * otherwise.
 */
export function setElementInterior(theElement: Element, interior: number, x?: number, y?: number, z?: number): boolean;

/**
 * Sets the model of a given element. This allows you to change the model of a player (or ped), a
 * vehicle or an object.
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementModel|MTASA Wiki}
 * @param theElement the element you want to change.
 * @param model the model ID to set.  ** For players/peds: A GTASA player model (skin) ID. See
 * [[Character Skins]].  ** For vehicles: The [[Vehicle IDs|vehicle ID]] of the vehicle being changed.  **
 * For objects/projectiles/weapons: An [[int]] specifying the model id.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setElementModel(theElement: Element, model: number): boolean;

/**
 * This function is used for setting an element as the parent of another element.
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementParent|MTASA Wiki}
 * @param theElement The element that you wish to set the parent of.
 * @param parent The element you wish to be the parent of theElement.
 * @return Returns ''true'' if both [[element]]s are valid, ''false'' otherwise.
 */
export function setElementParent(theElement: Element, parent: Element): boolean;

/**
 * This function sets the position of an element to the specified coordinates.
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementPosition|MTASA Wiki}
 * @param theElement A valid element to be moved.
 * @param x The x coordinate of the destination.
 * @param y The y coordinate of the destination.
 * @param z The z coordinate of the destination.
 * @param warp teleports players, resetting any animations they were doing. Setting this to false
 * preserves the current animation.
 * @default true
 * @return Returns ''true'' if the function was successful, ''false'' otherwise.
 */
export function setElementPosition(theElement: Element, x: number, y: number, z: number, warp?: boolean): boolean;

/**
 * Sets the rotation of elements according to the world (does not work with players that are on the
 * ground).
 * @see {@link https://wiki.multitheftauto.com/wiki/setElementRotation|MTASA Wiki}
 * @param theElement The element whose rotation will be set
 * @param rotX The elements rotation around the x axis in degrees
 * @param rotY The elements rotation around the y axis in degrees
 * @param rotZ The elements rotation around the z axis in degrees  {{New feature|3.0110|1.1|
 * @param rotOrder A string representing the rotation order desired when interpreting the provided
 * http://en.wikipedia.org/wiki/Euler_angles euler angles. If omitted, default value is default.
 * Allowed values are:
 * @default "default"
 * @param conformPedRotation Relevant only for peds and will be ignored for other element types. A
 * bool which should be set to true to ensure the ped rotation is correctly set in all circumstances.
 * Failing to set this argument may result in the ped rotation being inverted whilst it is in the air
 * and other inconsistencies. The default value of false is for backward compatibility with scripts which
 * may depend upon the incorrect behaviour.  }}
 * @default false
 * @return Returns ''true'' if the element rotation was successfully set and ''false'' otherwise.
 */
export function setElementRotation(
    theElement: Element,
    rotX: number,
    rotY: number,
    rotZ: number,
    rotOrder?: string,
    conformPedRotation?: boolean,
): boolean;

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
 * @return Returns ''true'' if the speed was set successfully, ''false'' if a bad element was
 * specified or other bad arguments.
 */
export function setElementVelocity(theElement: Element, speedX: number, speedY: number, speedZ: number): boolean;

/**
 * This function assigns a low LOD element to an element. The low LOD element is displayed when its
 * associated element is not fully visible. If a low LOD element is assigned to several elements, it
 * will be displayed when any of these elements are not fully visible.
 * @see {@link https://wiki.multitheftauto.com/wiki/setLowLODElement|MTASA Wiki}
 * @param theElement The element whose low LOD version we want to change.
 * @return Returns ''true'' if the assignment was successful, ''false'' otherwise.
 */
export function setLowLODElement(theElement: Element, lowLODElement: Element): boolean;
