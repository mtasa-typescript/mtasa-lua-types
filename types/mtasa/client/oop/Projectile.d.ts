/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element } from 'types/mtasa/client/structure';

export class Projectile {
    /**
     * @see {@link getProjectileCounter}
     */
    counter: number;
    /**
     * @see {@link getProjectileCreator}
     */
    creator: Element;
    /**
     * @see {@link getProjectileForce}
     */
    force: number;
    /**
     * @see {@link getProjectileTarget}
     */
    target: Element;
    /**
     * @see {@link getProjectileType}
     */
    type: number;

    /**
     * @see {@link getProjectileCounter}
     */
    getCounter(): number;

    /**
     * @see {@link getProjectileCreator}
     */
    getCreator(): Element;

    /**
     * @see {@link getProjectileForce}
     */
    getForce(): number;

    /**
     * @see {@link getProjectileTarget}
     */
    getTarget(): Element;

    /**
     * @see {@link getProjectileType}
     */
    getType(): number;

    /**
     * @see {@link setProjectileCounter}
     */
    setCounter(timeToDetonate: number): boolean;
}
