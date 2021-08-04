import { GenericEventHandler } from 'types/mtasa/shared/utils/event';

export const enum CustomEventNames {
    OnPlayerStart = 'CustomEvent/OnPlayerStart',
    OnPlayerFinish = 'CustomEvent/OnPlayerFinish',
    OnClientPlayerFinishResult = 'CustomEvent/OnClientPlayerFinishResult',
}

export interface OnPlayerStart extends GenericEventHandler {
    name: CustomEventNames.OnPlayerStart;
    function: (this: void) => void;
}

export interface OnPlayerFinish extends GenericEventHandler {
    name: CustomEventNames.OnPlayerFinish;
    function: (this: void) => void;
}

export interface OnClientPlayerFinishResult extends GenericEventHandler {
    name: CustomEventNames.OnClientPlayerFinishResult;
    function: (this: void, points: number) => void;
}
