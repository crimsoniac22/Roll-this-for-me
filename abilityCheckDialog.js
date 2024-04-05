Hooks.on("renderChatLog", (app, html, data) => {
    const abilityCheckButton = `
        <div id="abilityCheckButton">
            <button id="openAbilityCheckDialog">Ability Check</button>
        </div>
    `;
    html.append(abilityCheckButton);
});

Hooks.on("ready", () => {
    // Register settings and initialize if necessary
});

Hooks.on("closeabilityCheckDialog", () => {
    // Clean up any resources if necessary
});

Hooks.on("createabilityCheckDialog", (skill, modifier, dc, rollType) => {
    // Handle creation of ability check
});

// Additional functions to handle button clicks, rolling dice, etc.
