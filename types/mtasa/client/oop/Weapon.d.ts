/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element } from '../structure';

export class Weapon {
    /**
     * @see {@link getWeaponAmmo}
     */
    ammo: number;
    /**
     * @see {@link getWeaponClipAmmo}
     */
    clipAmmo: number;
    /**
     * @see {@link getWeaponFiringRate}
     */
    firingRate: number;
    /**
     * @see {@link getWeaponOwner}
     */
    owner: boolean;
    /**
     * @see {@link getWeaponState}
     */
    state: string;
    /**
     * @see {@link getWeaponTarget}
     */
    target: null | Element | number;

    /**
     * @see {@link getWeaponAmmo}
     */
    getAmmo(): number;

    /**
     * @see {@link getWeaponClipAmmo}
     */
    getClipAmmo(): number;

    /**
     * @see {@link getWeaponFiringRate}
     */
    getFiringRate(): number;

    /**
     * @see {@link getWeaponFlags}
     */
    getFlags(theFlag: string): boolean;

    /**
     * @see {@link getWeaponOwner}
     */
    getOwner(): boolean;

    /**
     * @see {@link getWeaponState}
     */
    getState(): string;

    /**
     * @see {@link getWeaponTarget}
     */
    getTarget(): null | Element | number;

    /**
     * @see {@link setWeaponClipAmmo}
     */
    setClipAmmo(clipAmmo: number): boolean;

    /**
     * @see {@link setWeaponFiringRate}
     */
    setFiringRate(firingRate: number): boolean;

    /**
     * @see {@link setWeaponFlags}
     */
    setFlags(theFlag: string, enable: boolean): boolean;

    /**
     * @see {@link setWeaponState}
     */
    setState(theState: string): boolean;

    /**
     * @see {@link setWeaponTarget}
     */
    setTarget(theTarget: Element, theComponent?: number): boolean;

    /**
     * @see {@link setWeaponProperty}
     */
    setProperty(strProperty: string, theValue: any): boolean;
}
