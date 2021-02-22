/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element } from '../structure';

export class Shader {
    /**
     * @see {@link dxSetShaderTransform}
     */
    setTransform(
        rotationX: number,
        rotationY: number,
        rotationZ: number,
        rotationCenterOffsetX: number,
        rotationCenterOffsetY: number,
        rotationCenterOffsetZ: number,
        bRotationCenterOffsetOriginIsScreen: boolean,
        perspectiveCenterOffsetX: number,
        perspectiveCenterOffsetY: number,
        bPerspectiveCenterOffsetOriginIsScreen: boolean,
    ): boolean;

    /**
     * @see {@link engineApplyShaderToWorldTexture}
     */
    applyToWorldTexture(textureName: string, targetElement?: Element, appendLayers?: boolean): boolean;

    /**
     * @see {@link engineRemoveShaderFromWorldTexture}
     */
    removeFromWorldTexture(textureName: string, targetElement?: Element): boolean;
}
