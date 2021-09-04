import { mtasa } from 'client';

mtasa.addCommandHandler('hello-world', command => {
    mtasa.outputChatBox(`Hello, ${mtasa.localPlayer.name}`, 255, 255, 255);
});
