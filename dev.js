const { createDevServer } = require('@layer0/core/dev')

module.exports = function() {
  return createDevServer({
    // All console output from your app will be prefixed with this label
    label: 'Routify',

    // The command to start your app in dev mode
    command: () => 'npx @roxi/routify dev:*',

    // Once your app's console output has matched all of the following patterns, the "Layer0 ready on ..." message will be displayed
    ready: [/listening on/i],

    // A function that is called with every line of output from your app. Return true to show that line to the user, false to hide it.
    // Many connectors use this to hide lines like "Next.js ready on http://localhost:3001", which might confuse the user as to
    // which URL to use when testing their app behind Layer0.
    filterOutput: line => !line.match(/some pattern/),
  })
}