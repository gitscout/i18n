
module.exports = function( context, lang )
{
  try
  {
    return require( './' + context + '/' + lang + '.json' )
  }
  catch( e )
  {
    console.error('I18N import error')
    console.log(e)
    return {}
  }
}
