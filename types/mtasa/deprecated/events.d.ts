declare function addEvent(eventName: string, allowRemoteTrigger?: false): boolean;

declare function addEventHandler(
    eventName: string,
    attachedTo: element,
    handlerFunction: (...args: any[]) => void,
    getPropagated?: true,
    priority?: 'normal',
): boolean;

declare function getEventHandlers(eventName: string, attachedTo: element): table;

declare function cancelEvent(cancel?: true, reason?: string): boolean;

declare function getCancelReason(): string;

declare function removeEventHandler(
    eventName: string,
    attachedTo: element,
    functionVar: (...args: any[]) => void,
): boolean;

declare function triggerClientEvent(
    sendTo: element | table,
    name: string,
    sourceElement: element,
    ...args: any[]
): boolean;
declare function triggerClientEvent(name: string, sourceElement: element, ...args: any[]): boolean;

declare function triggerEvent(eventName: string, baseElement: element, ...args: any[]): boolean;

declare function wasEventCancelled(): boolean;

declare function triggerLatentClientEvent(
    sendTo: element | table,
    name: string,
    bandwidth?: 50000,
    persist?: false,
    theElement?: element,
    ...args: any[]
): boolean;
declare function triggerLatentClientEvent(
    name: string,
    bandwidth?: 50000,
    persist?: false,
    theElement?: element,
    ...args: any[]
): boolean;

declare function getLatentEventHandles(thePlayer?: Player): table;

declare function getLatentEventStatus(thePlayer: Player, handle: number): table;

declare function getLatentEventStatus(handle: number): table;

declare function cancelLatentEvent(thePlayer: Player, handle: number): boolean;

declare function cancelLatentEvent(handle: number): boolean;
