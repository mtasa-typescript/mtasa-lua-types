import { mtasa } from 'types/mtasa/server';
import {
    CustomEventNames,
    OnClientPlayerFinishResult,
    OnPlayerFinish,
    OnPlayerStart,
} from './events';

mtasa.addEvent(CustomEventNames.OnPlayerStart, true);
mtasa.addEventHandler<OnPlayerStart>(
    CustomEventNames.OnPlayerStart,
    mtasa.root,
    function () {
        mtasa.outputChatBox(`Player ${mtasa.client.name} started quest`);
    },
);

mtasa.addEvent(CustomEventNames.OnPlayerFinish, true);
mtasa.addEventHandler<OnPlayerFinish>(
    CustomEventNames.OnPlayerFinish,
    mtasa.root,
    function () {
        mtasa.outputChatBox(`Player ${mtasa.client.name} finished quest`);

        mtasa.triggerClientEvent<OnClientPlayerFinishResult>(
            mtasa.client,
            CustomEventNames.OnClientPlayerFinishResult,
            mtasa.client,
            mtasa.client.health,
        );
    },
);
