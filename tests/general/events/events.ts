import { mtasa } from 'server';
import { EventNames } from 'server/event/all_event_names';

mtasa.addEventHandler<mtasa.Event.OnColShapeHit>(
    EventNames.OnColShapeHit,
    mtasa.root,
    function (hitElement, matchingDimension) {
        if (!matchingDimension) {
            return;
        }

        mtasa.outputConsole(
            `Element ${mtasa.inspect(hitElement)} ` +
                `hitter colshape ${mtasa.inspect(hitElement)}`,
        );
    },
);
