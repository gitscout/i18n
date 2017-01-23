const fs          = require('fs')
    , path        = require('path')
    , cwd         = process.cwd()
    , baseDir     = path.basename( cwd )
    , libDir      = path.join( cwd, baseDir === 'i18n' ? '' : '..', 'lib/')
    , directories = ['app', 'web']

directories.forEach( directory =>
{
  var directoryPath = path.join( libDir, directory )

  fs
    .readdirSync( directoryPath )
    .filter( file => file.slice(-5) === '.json' )
    .forEach( file =>
    {
      var filePath = path.join( directoryPath, file )

      try
      {
        JSON.parse( fs.readFileSync( filePath, 'utf8' ) )
      }
      catch( error )
      {
        console.log( `${directory}/${file} is not a valid json`)
        console.log( error.message )
        process.exit(1)
      }
    })
})
