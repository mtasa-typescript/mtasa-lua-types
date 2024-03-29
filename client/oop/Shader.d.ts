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
    SvgCallback,
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

/** @customConstructor Shader */
export class Shader extends Material {
    /**
     * This function sets the amount of geometric sub-division to use when drawing a shader
     * element with dxDrawImage.
     * Using tessellation allows a shader to manipulate the shape of the rendered image at each
     * sub-division boundary.
     * @see https://wiki.multitheftauto.com/wiki/DxSetShaderTessellation
     * @param tessellationX The number of sub-division points along the X axis. Range is 1 to 500.
     * @param tessellationY The number of sub-division points along the Y axis. Range is 1 to 500.
     * @return returns true if the shader elements tessellation was successfully changed, false
     * otherwise.
     */
    setTessellation(tessellationX: number, tessellationY: number): boolean;

    /**
     * This function applies a 3D transformation to a shader element when it is drawn with
     * dxDrawImage.
     * @see https://wiki.multitheftauto.com/wiki/DxSetShaderTransform
     * @param rotationX Rotation angle in degrees around the X axis (Left,right). This will make the shader
     * rotate along its width.
     * @param rotationY Rotation angle in degrees around the Y axis (Up,down). This will make the shader rotate
     * along its height.
     * @param rotationZ Rotation angle in degrees around the Z axis (In,out). This will make the shader rotate in
     * a similar way to the rotation argument in dxDrawImage.
     * @param rotationCenterOffsetX The center of rotation offset X position in screen relative units.
     * @param rotationCenterOffsetY The center of rotation offset Y position in screen relative units.
     * @param rotationCenterOffsetZ The center of rotation offset Z position in screen relative units.
     * @param bRotationCenterOffsetOriginIsScreen Set to boolean|true if the center of rotation origin should be the center of the screen
     * rather than the center of the image.
     * @param perspectiveCenterOffsetX The center of perspective offset X position in screen relative units.
     * @param perspectiveCenterOffsetY The center of perspective offset Y position in screen relative units.
     * @param bPerspectiveCenterOffsetOriginIsScreen Set to boolean|true if the center of perspective origin should be the center of the
     * screen rather than the center of the image.
     * To convert screen relative units into screen pixel coordinates, ''multiply'' by the
     * screen size. Conversely, to convert screen pixel coordinates to screen relative units,
     * '''''divide''''' by the screen size.
     * @return returns true if the shader elements transform was successfully changed, false otherwise.
     */
    setTransform(
        rotationX: number,
        rotationY: number,
        rotationZ: number,
        rotationCenterOffsetX?: number,
        rotationCenterOffsetY?: number,
        rotationCenterOffsetZ?: number,
        bRotationCenterOffsetOriginIsScreen?: boolean,
        perspectiveCenterOffsetX?: number,
        perspectiveCenterOffsetY?: number,
        bPerspectiveCenterOffsetOriginIsScreen?: boolean,
    ): boolean;

    /**
     * This sets a named parameter for a shader element
     * @see https://wiki.multitheftauto.com/wiki/DxSetShaderValue
     * @param parameterName The name of parameter
     * @param value The value to set, which can be a texture, a bool, a number or a list of numbers(max 16
     * floats(numbers))
     * @return returns true if the shader elements parameter was successfully changed, false otherwise.
     */
    setValue(parameterName: string, value: any): boolean;

    /**
     * This function applies a shader to one or more world textures.
     * * The resource Shader_examples#Texture_names|shader_tex_names can help in finding the
     * names of world textures.
     * * When replacing the texture for a ped using the CJ skin, set textureName to CJ
     * * The shader inherits the render states of the original when it is drawn, so texture
     * stage 0 will already be set to the original texture.
     * * When using with a ped, ensure you have set ped or all in the elementTypes when calling
     * dxCreateShader
     * * CJ body parts textures can be replaced by using: cj_ped_head, cj_ped_hat, cj_ped_torso,
     * cj_ped_legs, cj_ped_feet, cj_ped_glasses, cj_ped_necklace, cj_ped_watch and
     * cj_ped_extra1. Latest version of
     * http://wiki.multitheftauto.com/wiki/Shader_examples#Texture_names shader_tex_names will
     * show what is being used.
     * @see https://wiki.multitheftauto.com/wiki/EngineApplyShaderToWorldTexture
     * @param textureName The name of the world texture to apply the shader to. Wildcard matching e.g. ro?ds* can
     * be used to apply to more than one texture at a time.
     * @param targetElement The element to restrict applying the shader to. If this is not set the shader will be
     * applied to everything using the texture name. Valid element types for targetElement are
     * vehicle|vehicles, Object|objects and Ped|peds.
     * @param appendLayers allows two or more layered shaders to be applied in the same texture. You may want to
     * modify the DepthBias in the technique pass to avoid Z-fighting artifacts when using this.
     * @return returns true if the shader was successfully applied, false otherwise.
     */
    applyToWorldTexture(
        textureName: string,
        targetElement?: Element,
        appendLayers?: boolean,
    ): boolean;

    /**
     * This function removes a shader from one or more world textures.
     * @see https://wiki.multitheftauto.com/wiki/EngineRemoveShaderFromWorldTexture
     * @param textureName The name of the world texture to remove the shader from. It should be exactly the same
     * string as used with engineApplyShaderToWorldTexture when the shader was initially applied.
     * @param targetElement The element to remove the shader from. It should be the same element as used with
     * engineApplyShaderToWorldTexture when the shader was initially applied.
     * @return returns true if the shader was successfully removed, false otherwise.
     */
    removeFromWorldTexture(
        textureName: string,
        targetElement?: Element,
    ): boolean;
}
