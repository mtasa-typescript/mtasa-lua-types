export interface GenericEventHandler {
    name: string;
    function: (...args: any[]) => void;
}
