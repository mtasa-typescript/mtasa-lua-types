/**
 * Tests backward compatibility
 * With https://github.com/Subtixx/mtasa-typescript
 */

import { mtasa } from 'types/mtasa/server';

let blip: mtasa.Blip = mtasa.createBlip(
    10,
    10,
    10,
    1,
    1,
    255,
    255,
    255,
    255,
    1,
    100,
    mtasa.root,
);

blip = mtasa.createBlipAttachedTo(
    mtasa.getRandomPlayer(),
    1,
    1,
    255,
    255,
    255,
    255,
    1,
    100,
    mtasa.root,
);

const color: [number, number, number, number] = mtasa.getBlipColor(blip);
const icon: number = mtasa.getBlipIcon(blip);
const size: number = mtasa.getBlipSize(blip);
const colorR: boolean = mtasa.setBlipColor(blip, 255, 255, 255, 10);
const iconR: boolean = mtasa.setBlipIcon(blip, 3);
const sizeR: boolean = mtasa.setBlipSize(blip, 3);
const ordering: number = mtasa.getBlipOrdering(blip);
const orderingR: boolean = mtasa.setBlipOrdering(blip, 0);
const visibleDistance: number = mtasa.getBlipVisibleDistance(blip);
const visibleDistanceR: boolean = mtasa.setBlipVisibleDistance(blip, 60);
