class Formatter {
  static capitalize(str){
   return str[0].toUpperCase() + str.slice(1)
  }
  
  static sanitize(str) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  
  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let splitedArr = sentence.split( " " )
    for ( let i = 0; i < splitedArr.length; i++ ) {
      if ( i === 0 ) {
        result.push( this.capitalize( splitedArr[i] ) )
      } else {
        if ( exceptions.includes(splitedArr[i]) ) {
          result.push( splitedArr[i] )
        } else {
          result.push( this.capitalize(splitedArr[i] ) )
        }
      }

    }
    return result.join( " " );
  }
}