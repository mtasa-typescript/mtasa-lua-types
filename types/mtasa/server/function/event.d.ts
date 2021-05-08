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
    Object as MTASAObject,
    RadarArea,
    Water,
    Timer,
    HandleFunction
} from '../structure';

/**
 * This function allows you to register a custom event. Custom events function exactly like
 * the built-in events. See event system for more information on the event system.
 * @see {@link https://wiki.multitheftauto.com/wiki/AddEvent Wiki, addEvent }
 * @param eventName The name of the event you wish to create.
 * @param allowRemoteTrigger A boolean specifying whether this event can be called remotely using triggerClientEvent /
 * triggerServerEvent or not.
 * @return returns true if the event was added successfully, false if the event was already added.
 */
export function addEvent(
    eventName: string,
    allowRemoteTrigger?: boolean
): boolean;

/**
 * This function will add an event handler. An event handler is a function that will be
 * called when the event its attached to is triggered. See event system for more information
 * on how the event system works.
 * Event handlers are functions that are called when a particular event happens. Each event
 * specifies a specific set of variables that are passed to the event handler and can be
 * read by your function. The following global variables are available for use in handler
 * functions:
 * *source: the element that triggered the event
 * *this: the element that the event handler is attached to
 * *sourceResource: the resource that triggered the event
 * *sourceResourceRoot: the root element of the resource that triggered the event
 * *client: the client that triggered the event using triggerServerEvent. Not set if the
 * event was not triggered from a client.
 * *eventName: the name of the event which triggered the handler function.
 * It is important to remember that events pass up and down the element tree. An event
 * triggered on the root element is triggered on every element in the tree. An event
 * triggered on any other element is triggered on its ancestors (its parent element and its
 * parents parent etc) and its children, grandchildren and great-grandchildren. You can use
 * the getPropagated argument to specify if you wish your handler to receive events that
 * have propagated up or down the tree.
 * The order in which event handlers are triggered is undefined, you should not rely on one
 * event handler being executed before another.
 * @see {@link https://wiki.multitheftauto.com/wiki/AddEventHandler Wiki, addEventHandler }
 * @param eventName The name of the event you want to attach the handler function to. Note: The maximum
 * allowed length is 100 ASCII characters (that is, English letters and numerals)```
 * @param attachedTo The element you wish to attach the handler to. The handler will only be called when the
 * event it is attached to is triggered for this element, or one of its children. Often,
 * this can be the root element (meaning the handler will be called when the event is
 * triggered for any element).
 * @param handlerFunction The handler function you wish to call when the event is triggered. This function will be
 * passed all of the events parameters as arguments, but it isnt required that it takes all
 * of them.
 * @param propagate A boolean representing whether the handler will be triggered if the event was propagated
 * down or up the element tree (starting from the source), and not triggered directly on
 * attachedTo (that is, handlers attached with this argument set to false will only be
 * triggered if source == this). In GUI events you will probably want to set this to false.
 * @param priority A string representing the trigger order priority relative to other event handlers of the
 * same name. Possible values are:
 * @param high
 * @param normal
 * @param low ''It is also possible to add finer priority control by appending a positive or negative
 * number to the priority string. For example (in priority order for reference): "high+4"
 * "high" "high-1" "normal-6" "normal-7" "low+1" "low" "low-1"''
 * @return returns true if the event handler was attached successfully. returns false if the
 * specified event could not be found or any parameters were invalid.
 */
export function addEventHandler(
    eventName: string,
    attachedTo: Element,
    handlerFunction: HandleFunction,
    propagate?: boolean,
    priority?: string
): boolean;

/**
 * This function is used to stop the automatic internal handling of events, for example this
 * can be used to prevent an item being given to a player when they walk over a pickup, by
 * canceling the onPickupUse event.
 * cancelEvent does not have an effect on all events, see the individual events pages for
 * information on what happens when the event is canceled. cancelEvent does not stop further
 * event handlers from being called, as the order of event handlers being called is
 * undefined in many cases. Instead, you can see if the currently active event has been
 * cancelled using wasEventCancelled.
 * The use of cancelEvent outside of an event handler has no effect.
 * If you implement your own custom events and want to handle them being cancelled, you
 * should call wasEventCancelled to check after your call to triggerEvent.
 * @see {@link https://wiki.multitheftauto.com/wiki/CancelEvent Wiki, cancelEvent }
 */
export function cancelEvent(
    cancel?: boolean,
    reason?: string
): boolean;

/**
 * Stops a latent event from completing
 * @see {@link https://wiki.multitheftauto.com/wiki/CancelLatentEvent Wiki, cancelLatentEvent }
 * @param thePlayer The player who is receiving the event.
 * @param handle A handle previous got from getLatentEventHandles.
 */
export function cancelLatentEvent(
    thePlayer: Player,
    handle: number
): boolean;

/**
 * Gets the reason for cancelling an event.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetCancelReason Wiki, getCancelReason }
 * @return returns the reason that was given with cancelevent
 */
export function getCancelReason(): string;

/**
 * This function gets the attached functions from the event and attached element from
 * current lua script.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetEventHandlers Wiki, getEventHandlers }
 * @param eventName The name of the event. For example ( onPlayerWasted ).
 * @param attachedTo The element attached to.
 * @return returns table with attached functions, empty table otherwise.
 */
export function getEventHandlers(
    eventName: string,
    attachedTo: Element
): LuaTable;

/**
 * Gets the currently queued latent events. The last one in the table is always the latest
 * event queued. Each returned handle can be used with getLatentEventStatus or
 * cancelLatentEvent
 * @see {@link https://wiki.multitheftauto.com/wiki/GetLatentEventHandles Wiki, getLatentEventHandles }
 * @param thePlayer The player who is receiving the events.
 */
export function getLatentEventHandles(
    thePlayer: Player
): LuaTable;

/**
 * Gets the status of one queued latent event.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetLatentEventStatus Wiki, getLatentEventStatus }
 * @param thePlayer The player who is receiving the event.
 * @param handle A handle previous got from getLatentEventHandles.
 */
export function getLatentEventStatus(
    thePlayer: Player,
    handle: number
): LuaTable;

/**
 * This functions removes a handler function from an event, so that the function is not
 * called anymore when the event is triggered. See event system for more information on how
 * the event system works.
 * @see {@link https://wiki.multitheftauto.com/wiki/RemoveEventHandler Wiki, removeEventHandler }
 * @param eventName The name of the event you want to detach the handler function from.
 * @param attachedTo The element the handler was attached to.
 * @param functionVar The handler function that was attached.
 * @return returns true if the event handler was removed successfully. returns false if the
 * specified event handler could not be found or invalid parameters were passed.
 */
export function removeEventHandler(
    eventName: string,
    attachedTo: Element,
    functionVar: HandleFunction
): boolean;

/**
 * This function triggers an event previously registered on a client. This is the primary
 * means of passing information between the server and the client. Clients have a similar
 * triggerServerEvent function that can do the reverse. You can treat this function as if it
 * was an asynchronous function call, using triggerServerEvent to pass back any returned
 * information if necessary.
 * Almost any data types can be passed as expected, including elements and complex nested
 * tables. Non-element MTA data types like xmlNodes or resource pointers will not be able to
 * be passed as they do not necessarily have a valid representation on the client.
 * Events are sent reliably, so clients will receive them, but there may be (but shouldnt
 * be) a significant delay before they are received. You should take this into account when
 * using them.
 * Keep in mind the bandwidth issues when using events - dont pass a large list of arguments
 * unless you really need to. It is marginally more efficient to pass one large event than
 * two smaller ones.
 * @see {@link https://wiki.multitheftauto.com/wiki/TriggerClientEvent Wiki, triggerClientEvent }
 * @param name The name of the event to trigger client side. You should register this event with
 * addEvent and add at least one event handler using addEventHandler.
 * @param sourceElement The element that is the Event system#Event handlers|source of the event.
 * @param sendTo The event will be sent to all players that are children of the specified element. By
 * default this is the root element, and hence the event is sent to all players. If you
 * specify a single player it will just be sent to that player. This argument can also be a
 * table of player elements.
 * @param arguments... A list of arguments to trigger with the event. You can pass any lua data type (except
 * functions). You can also pass elements.
 * @return returns true if the event trigger has been sent, false if invalid arguments were
 * specified.
 */
export function triggerClientEvent(
    sendTo: LuaTable | Element,
    name: string,
    sourceElement: Element,
    ...varargs: any[]
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/TriggerClientEvent Wiki, triggerClientEvent }
 */
export function triggerClientEvent(
    name: string,
    sourceElement: Element,
    ...varargs: any[]
): boolean;

/**
 * This function will trigger a named event on a specific element in the element tree. See
 * event system for more information on how the event system works.
 * You can use the value returned from this function to determine if the event was cancelled
 * by one of the event handlers. You should determine what your response (if any) to this
 * should be based on the events purpose. Generally, cancelling an event should prevent any
 * further code being run that is dependent on whatever triggered that event. For example,
 * if you have an onFlagCapture event, cancelling it would be expected to prevent the flag
 * being able to be captured. Similarly, if you have onPlayerKill as an event you trigger,
 * canceling it would either be expected to prevent the player being killed from dying or at
 * least prevent the player from getting a score for it.
 * @see {@link https://wiki.multitheftauto.com/wiki/TriggerEvent Wiki, triggerEvent }
 * @param eventName The name of the event you wish to trigger
 * @param baseElement The element you wish to trigger the event on. See event system for information on how
 * this works.
 * @param argument1 The first argument that the event handler expects should be added after the baseElement
 * variable.
 * @param NOTE This function can have more than one of these arguments specified, once for each argument
 * the event handler is expecting.
 * @return * returns nil if the arguments are invalid or the event could not be found.
 * * returns true if the event was triggered successfully, and was not cancelled using
 * cancelevent.
 * * returns false if the event was triggered successfully, and was cancelled using
 * cancelevent.
 */
export function triggerEvent(
    eventName: string,
    baseElement: Element,
    ...varargs: any[]
): boolean;

/**
 * This function is the same as triggerClientEvent  except the transmission rate of the data
 * contained in the arguments can be limited
 * and other network traffic is not blocked while the data is being transferred.
 * @see {@link https://wiki.multitheftauto.com/wiki/TriggerLatentClientEvent Wiki, triggerLatentClientEvent }
 * @param name The name of the event to trigger client side. You should register this event with
 * addEvent and add at least one event handler using addEventHandler.
 * @param theElement The element that is the Event system#Event handlers|source of the event. This could be
 * another player, or if this isnt relevant, use the root element.
 * @param sendTo The event will be sent to all players that are children of the specified element. By
 * default this is the root element, and hence the event is sent to all players. If you
 * specify a single player it will just be sent to that player. This argument can also be a
 * table of player elements.
 * @param bandwidth The bytes per second rate to send the data contained in the arguments.
 * @param persist A bool indicating whether the transmission should be allowed to continue even after the
 * resource that triggered it has since stopped.
 * @param arguments... A list of arguments to trigger with the event. You can pass any Lua data type (except
 * functions). You can also pass elements. The total amount of data should not exceed 100MB.
 * @return returns true if the event trigger has been sent, false if invalid arguments were
 * specified.
 */
export function triggerLatentClientEvent(
    sendTo: LuaTable | Element,
    name: string,
    bandwidth: number,
    persist: boolean,
    theElement: Element,
    ...varargs: any[]
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/TriggerLatentClientEvent Wiki, triggerLatentClientEvent }
 */
export function triggerLatentClientEvent(
    name: string,
    bandwidth: number,
    persist: boolean,
    theElement: Element,
    ...varargs: any[]
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/TriggerLatentClientEvent Wiki, triggerLatentClientEvent }
 */
export function triggerLatentClientEvent(
    sendTo: LuaTable | Element,
    name: string,
    theElement: Element,
    ...varargs: any[]
): boolean;

/**
 * This function checks if the last completed event was cancelled. This is mainly useful for
 * custom events created by scripts.
 * Events can be cancelled using cancelEvent, this indicates that the resource which
 * triggered the event should do whatever it can to reverse any changes made by whatever
 * caused the event. See triggerEvent for a more detailed explanation of this.
 * @see {@link https://wiki.multitheftauto.com/wiki/WasEventCancelled Wiki, wasEventCancelled }
 * @return returns true if the event was cancelled, false if it wasnt or doesnt exist.
 */
export function wasEventCancelled(): boolean;
