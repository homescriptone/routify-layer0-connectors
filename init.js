/* istanbul ignore file */
const { join } = require('path')
const { DeploymentBuilder } = require('@layer0/core/deploy')

/**
 * Called when the user runs layer0 init.
 */
export default async function init() {
  new DeploymentBuilder(process.cwd())
    // Copy files from the default-app directory within the connector package.
    // These typically include the routes.js file and layer0.config.js. Typescript alternatives are often provided.
    .addDefaultAppResources(join(__dirname, 'default-app'))

    // Adds layer0:* scripts to package.json
    .addDefaultLayer0Scripts()
}