export interface GenericEventHandler {
    name: string;
    function: (this: void, ...args: any[]) => void;
}
