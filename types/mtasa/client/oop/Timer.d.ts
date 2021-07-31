// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    ProgressBar,
    Gui,
    EngineTXD,
    EngineDFF,
    EngineCOL,
    EngineIFP,
    PrimitiveType,
    DxTexture,
    ObjectGroup,
    Matrix,
    Browser,
    Light,
    Effect,
    Searchlight,
    Weapon,
    GuiBrowser,
    GuiMemo,
    GuiElement,
    GuiEdit,
    GuiScrollBar,
    GuiWindow,
    Projectile,
    Material,
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
    HandleFunction,
    TimerCallbackFunction,
    FetchRemoteCallback,
    GenericEventHandler,
    CommandHandler,
    BindKeyCallback,
    ControlName,
    KeyName,
    KeyState
} from '../structure';

/** @customConstructor Timer */
export class Timer<
    CallbackType extends TimerCallbackFunction = TimerCallbackFunction
> {
    /**
     * This function checks if a variable is a timer.
     */
    valid: boolean;

    /**
     * This function is for getting the details of a running timer.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetTimerDetails Wiki, getTimerDetails }
     * @return * integer one represents the time left in miliseconds (1000th of a second) of the current
     * time left in the loop.
     * * integer two represents the amount of times the timer has left to execute.
     * * integer three represents the time interval of timer.
     * * returns false if the timer doesnt exist or stopped running. also, debugscript will say
     * bad argument @ gettimerdetails. to prevent this, you can check if the timer exists with
     * istimer().
     */
    getDetails(): LuaMultiReturn<[
        number,
        number,
        number
    ]>;

    /**
     * This function checks if a variable is a timer.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsTimer Wiki, isTimer }
     * @return returns true if the passed value is a timer, false otherwise.
     */
    isValid(): boolean;

    /**
     * This function allows you to kill/halt existing timers.
     * @see {@link https://wiki.multitheftauto.com/wiki/KillTimer Wiki, killTimer }
     * @return returns true if the timer was successfully killed, false if no such timer existed.
     */
    destroy(): boolean;

    /**
     * This function allows you to reset the elapsed time in existing timers to zero. The
     * function does not reset the times to execute count on timers which have a limited amout
     * of repetitions.
     * @see {@link https://wiki.multitheftauto.com/wiki/ResetTimer Wiki, resetTimer }
     * @return returns true if the timer was successfully reset, false otherwise.
     */
    reset(): boolean;

    /**
     * This function allows you to trigger a function after a number of milliseconds have
     * elapsed. You can call one of your own functions or a built-in function. For example, you
     * could set a timer to spawn a player after a number of seconds have elapsed.
     * Once a timer has finished repeating, it no longer exists.
     * The minimum accepted interval is 0ms.
     * Multi Theft Auto guarantees that the timer will be triggered after at least the interval
     * you specify. The resolution of the timer is tied to the frame rate (server side and
     * client-side). All the overdue timers are triggered at a single point each frame. This
     * means that if, for example, the player is running at 30 frames per second, then two
     * timers specified to occur after 100ms and 110ms would more than likely occur during the
     * same frame, as the difference in time between the two timers (10ms) is less than half the
     * length of the frame (33ms). As with most timers provided by other languages, you shouldnt
     * rely on the timer triggering at an exact point in the future.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetTimer Wiki, setTimer }
     * @param theFunction The function you wish the timer to call.
     * @param timeInterval The number of milliseconds that should elapse before the function is called. (the minimum
     * is 50 (0 on 1.5.6 r16715); 1000 milliseconds = 1 second)
     * @param timesToExecute The number of times you want the timer to execute, or 0 for infinite repetitions.
     * @param arguments Any arguments you wish to pass to the function can be listed after the timesToExecute
     * argument. Note that any tables you want to pass will get cloned, whereas metatables and
     * functions/function references in that passed table will get lost. Also changes you make
     * in the original table before the function gets called wont get transferred.
     * @return returns a timer pointer if the timer was set successfully, false if the arguments are
     * invalid or the timer could not be set.
     */
    constructor(
        theFunction: CallbackType,
        timeInterval: number,
        timesToExecute: number,
        ...arguments: Parameters<CallbackType>
    );
}
