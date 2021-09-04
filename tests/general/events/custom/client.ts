import { mtasa } from 'client';
import { triggerServerEvent } from 'client/function/event';
import {
    CustomEventNames,
    OnClientPlayerFinishResult,
    OnPlayerFinish,
    OnPlayerStart,
} from './events';

const startMarker = new mtasa.Marker(0, 0, 10, 'checkpoint', 10);
const stopMarker = new mtasa.Marker(100, 100, 10, 'checkpoint', 10);

startMarker.setTarget(
    ...(startMarker.getPosition() as [number, number, number]),
);

mtasa.addEventHandler<mtasa.Event.OnClientMarkerHit>(
    mtasa.EventNames.OnClientMarkerHit,
    startMarker,
    function (hitPlayer, matchingDimension) {
        if (hitPlayer != mtasa.localPlayer || !matchingDimension) {
            return;
        }

        triggerServerEvent<OnPlayerStart>(
            CustomEventNames.OnPlayerStart,
            mtasa.localPlayer,
        );
    },
);

mtasa.addEventHandler<mtasa.Event.OnClientMarkerHit>(
    mtasa.EventNames.OnClientMarkerHit,
    stopMarker,
    function (hitPlayer, matchingDimension) {
        if (hitPlayer != mtasa.localPlayer || !matchingDimension) {
            return;
        }

        triggerServerEvent<OnPlayerFinish>(
            CustomEventNames.OnPlayerFinish,
            mtasa.localPlayer,
        );
    },
);

mtasa.addEvent(CustomEventNames.OnClientPlayerFinishResult, true);
mtasa.addEventHandler<OnClientPlayerFinishResult>(
    CustomEventNames.OnClientPlayerFinishResult,
    mtasa.localPlayer,
    function (points) {
        mtasa.outputChatBox(`Your score: ${points}`);
    },
);
