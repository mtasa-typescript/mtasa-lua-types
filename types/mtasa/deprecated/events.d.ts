import { element } from "./dx";
import { table } from "./MTA";
import { Player } from "./element";

export function addEvent(eventName: string, allowRemoteTrigger?: false): boolean;

export function addEventHandler(
    eventName: string,
    attachedTo: element,
    handlerFunction: (...args: any[]) => void,
    getPropagated?: true,
    priority?: 'normal',
): boolean;

export function getEventHandlers(eventName: string, attachedTo: element): table;

export function cancelEvent(cancel?: true, reason?: string): boolean;

export function getCancelReason(): string;

export function removeEventHandler(
    eventName: string,
    attachedTo: element,
    functionVar: (...args: any[]) => void,
): boolean;

export function triggerClientEvent(
    sendTo: element | table,
    name: string,
    sourceElement: element,
    ...args: any[]
): boolean;
export function triggerClientEvent(name: string, sourceElement: element, ...args: any[]): boolean;

export function triggerEvent(eventName: string, baseElement: element, ...args: any[]): boolean;

export function wasEventCancelled(): boolean;

export function triggerLatentClientEvent(
    sendTo: element | table,
    name: string,
    bandwidth?: 50000,
    persist?: false,
    theElement?: element,
    ...args: any[]
): boolean;
export function triggerLatentClientEvent(
    name: string,
    bandwidth?: 50000,
    persist?: false,
    theElement?: element,
    ...args: any[]
): boolean;

export function getLatentEventHandles(thePlayer?: Player): table;

export function getLatentEventStatus(thePlayer: Player, handle: number): table;

export function getLatentEventStatus(handle: number): table;

export function cancelLatentEvent(thePlayer: Player, handle: number): boolean;

export function cancelLatentEvent(handle: number): boolean;
