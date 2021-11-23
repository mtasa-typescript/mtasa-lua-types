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
    Svg,
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
    CommandHandler,
    BindKeyCallback,
    BindKeyCallbackVarArgs,
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../structure';

/** @customConstructor Camera */
export class Camera extends Element {
    /**
     */
    static fov: number;

    /**
     * This function returns what goggle effect is currently affecting the camera.
     */
    static goggleEffect: string;

    /**
     * Returns the interior of the local camera (independent of the interior of the local
     * player).
     */
    static interior: number;

    /**
     * This function gets the position of the camera and the position of the point it is facing.
     */
    static matrix: Matrix;

    /**
     * This function allows you to get the active camera view modes. This indicates at what
     * distance the camera will follow the player or vehicle.
     */
    static viewMode: LuaMultiReturn<[number, number]>;

    /**
     * This function will fade a players camera to a color or back to normal over a specified
     * time period. This will also affect the sound volume for the player (50% faded = 50%
     * volume, full fade = no sound). For clientside scripts you can perform 2 fade ins or fade
     * outs in a row, but for serverside scripts you must use one then the other.
     * @see https://wiki.multitheftauto.com/wiki/FadeCamera
     * @param fadeIn Should the camera be faded in our out? Pass true to fade the camera in, false to fade it
     * out to a color.
     * @param timeToFade The number of seconds it should take to fade.
     * @param red The amount of red in the color that the camera fades out to (0 - 255). Not required for
     * fading in.
     * @param green The amount of green in the color that the camera fades out to (0 - 255). Not required for
     * fading in.
     * @param blue The amount of blue in the color that the camera fades out to (0 - 255). Not required for
     * fading in.
     */
    static fade(
        fadeIn: boolean,
        timeToFade?: number,
        red?: number,
        green?: number,
        blue?: number,
    ): boolean;

    /**
     * @see https://wiki.multitheftauto.com/wiki/GetCameraClip
     * @return *objects: if you want the camera to clip on objects.
     * *vehicles: if you want the camera to clip on vehicles.
     */
    static getClip(): LuaMultiReturn<[boolean, boolean]>;

    /**
     * @see https://wiki.multitheftauto.com/wiki/GetCameraFieldOfView
     * @param cameraMode the camera mode to get the field of view of
     * ** "player": whilst walking/running
     * ** "vehicle": whilst in vehicle
     * ** "vehicle_max": the max the field of view can go to when the vehicle is moving at a
     * high speed (must be higher than "vehicle")
     * @return returns one float - the field of view angle
     */
    static getFieldOfView(cameraMode: string): number;

    /**
     * This function returns what goggle effect is currently affecting the camera.
     * @see https://wiki.multitheftauto.com/wiki/GetCameraGoggleEffect
     * @return * string indicating the current camera goggle effect. their meanings can be seen below.
     */
    static getGoggleEffect(): string;

    /**
     * Returns the interior of the local camera (independent of the interior of the local
     * player).
     * @see https://wiki.multitheftauto.com/wiki/GetCameraInterior
     */
    static getInterior(): number;

    /**
     * This function gets the position of the camera and the position of the point it is facing.
     * @see https://wiki.multitheftauto.com/wiki/GetCameraMatrix
     */
    static getMatrix(): Matrix;

    /**
     * This function allows you to get the active camera view modes. This indicates at what
     * distance the camera will follow the player or vehicle.
     * @see https://wiki.multitheftauto.com/wiki/GetCameraViewMode
     */
    static getCameraViewMode(): LuaMultiReturn<[number, number]>;

    /**
     * This function sets if the camera will collide with any objects or vehicles in its way.
     * This means that if object clip is enabled an object is in the way of where the camera
     * actually wants to be, the camera will try to be in front of it. This function can disable
     * that.
     * @see https://wiki.multitheftauto.com/wiki/SetCameraClip
     * @param objects Sets if you want the camera to clip on objects.
     * @param vehicles Sets if you want the camera to clip on vehicles.
     * @return always returns true.
     */
    static setClip(objects?: boolean, vehicles?: boolean): boolean;

    /**
     * @see https://wiki.multitheftauto.com/wiki/SetCameraFieldOfView
     * @param cameraMode the camera mode to get the field of view of
     * ** "player": whilst walking/running
     * ** "vehicle": whilst in vehicle
     * ** "vehicle_max": the max the field of view can go to when the vehicle is moving at a
     * high speed (must be higher than "vehicle")
     * @param fieldOfView The field of view angle, 0 to 179.
     * @return returns true if the arguments are valid, false otherwise.
     */
    static setFieldOfView(cameraMode: string, fieldOfView: number): boolean;

    /**
     * This function allows you to set the cameras current goggle effect. This means you can
     * activate nightvision or infrared effects by script
     * @see https://wiki.multitheftauto.com/wiki/SetCameraGoggleEffect
     * @param goggleEffect : the goggle effect you wish to set
     * @param noiseEnabled : whether or not there should be a fuzzy noise effect
     * @return * true if the effect was set correctly.
     * * false otherwise.
     */
    static setGoggleEffect(
        goggleEffect: string,
        noiseEnabled?: boolean,
    ): boolean;

    /**
     * Sets the interior of the local camera. Only the interior of the camera is changed, the
     * local player stays in the interior he was in.
     * @see https://wiki.multitheftauto.com/wiki/SetCameraInterior
     * @param interior the interior to place the camera in.
     */
    static setInterior(interior: number): boolean;

    /**
     * This function sets the cameras position and direction. The first three arguments are the
     * point at which the camera lies, the last three are the point the camera faces (or the
     * point it looks at).
     * @see https://wiki.multitheftauto.com/wiki/SetCameraMatrix
     * @param positionX The x coordinate of the cameras position.
     * @param positionY The y coordinate of the cameras position.
     * @param positionZ The z coordinate of the cameras position.
     * @param {{New feature/item|3.0141|1.4.1|7005|Instead of six coordinates, or two vectors, a Matrix can be supplied.}}
     * @param lookAtX The x coordinate of the point the camera faces.
     * @param lookAtY The y coordinate of the point the camera faces.
     * @param lookAtZ The z coordinate of the point the camera faces.
     * @param roll The camera roll angle, -180 to 180. A value of 0 means the camera sits straight, positive
     * values will turn it counter-clockwise and negative values will turn it clockwise. -180 or
     * 180 means the camera is upside down.
     * @param fov the field of view angle, 0.01 to 180. The higher this value is, the more you will be able
     * to see what is to your sides.
     */
    static setMatrix(vectorized: Matrix, roll?: number, fov?: number): boolean;

    /**
     * This function allows you to set the camera view modes. This indicates at what distance
     * the camera will follow the player or vehicle.
     * @see https://wiki.multitheftauto.com/wiki/SetCameraViewMode
     * @param vehicleCameraMode : The view mode you wish to use when inside vehicles.
     * @param pedCameraMode : The view mode you wish to use when you are not inside vehicles.
     * @return returns true if the view(s) were set correctly, false otherwise.
     */
    static setCameraViewMode(
        vehicleCameraMode: number,
        pedCameraMode?: number,
    ): boolean;
}
