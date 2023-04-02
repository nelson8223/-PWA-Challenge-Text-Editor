const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    try {
        const isDeferredPromptStored = sessionStorage.getItem('deferredPrompt');
        if (isDeferredPromptStored) {
            const deferredPrompt = JSON.parse(isDeferredPromptStored);
            deferredPrompt.prompt();
            const choiceResult = await deferredPrompt.userChoice;
            console.log('User choice:', choiceResult.outcome);
            sessionStorage.removeItem('deferredPrompt');
        }
    } catch (error) {
        console.error('Error  prompts:', error);
    }
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App was  installed');
    navigator.serviceWorker.register('/service-worker.js');
});
