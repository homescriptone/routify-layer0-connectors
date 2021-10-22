const { DeploymentBuilder } = require('@layer0/core/deploy')
const FrameworkBuildError = require('@layer0/core/errors/FrameworkBuildError')

module.exports = async function build(skipFramework) {
    const builder = new DeploymentBuilder()
    builder.clearPreviousBuildOutput()

    if (!skipFramework) {
        // run the sapper build
        try {
        await builder.exec('npx @roxi/routify build')
        } catch (e) {
        // this lets the user know that the build error was within their application code, not their Layer0 router or configuration.
        throw new FrameworkBuildError('Routify')
        }
    }

    builder
        // optionally add some file required by the app at runtime.  This is equivalent to setting the includeFiles config in layer0.config.js
        .addJSAsset('path/to/file/in/project')

    // build the Layer0 deployment bundle in the .layer0 directory
    await builder.build()
  }