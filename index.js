const long = document.querySelector( '.watch__long-hand' );
const short = document.querySelector( '.watch__short-hand' );
const second = document.querySelector( '.watch__second-hand' );

(() => {
	const stepDeg = 360 / 12;
	const frame = document.querySelector( '.watch__frame' );
	const range = 20;
	for( let i = 0; i < 12; i++ )
	{
		const diag = document.createElement( 'div' );
		diag.innerText = i + 1;
		diag.classList.add( 'watch__diag' );
		diag.setAttribute( 'style', `left: calc( 48.5vw + ${ Math.sin( -( stepDeg * i - 180 + stepDeg ) * Math.PI / 180 ) * range }vh); top: ${ Math.cos( ( stepDeg * i - 180 + stepDeg ) * Math.PI / 180 ) * range + 23 }vh` );
		frame.appendChild( diag );
	}
}
)();

setInterval(() => {
	const date = new Date();
	const hourDeg = 360 * parseInt( date.format( 'HH' ) ) / 24;
	const minuteDeg = 360 * parseInt( date.format( 'mm' ) ) / 60;
	const secondDeg = 360 * parseFloat( date.format( 'SS' ) ) / 60;
	long.setAttribute( 'style', `transform: rotate( ${hourDeg -90}deg );` );
	short.setAttribute( 'style', `transform: rotate( ${minuteDeg -90}deg );` );
	second.setAttribute( 'style', `transform: rotate( ${secondDeg -90}deg );` );
}, 1000);

Date.prototype.format = function( format ){
	return format
	.replace( /dd/, ['日', '月', '火', '水', '木', '金', '土'][this.getDay()] )
	.replace( /YYYY/, this.getFullYear() )
	.replace( /MM/, `${ this.getMonth() + 1 }`.padStart( 2, 0 ) )
	.replace( /DD/, `${ this.getDate() }`.padStart( 2, 0 ) )
	.replace( /HH/, `${ this.getHours() }`.padStart( 2, 0 ) )
	.replace( /mm/, `${ this.getMinutes() }`.padStart( 2, 0 ) )
	.replace( /SS/, `${ this.getSeconds() }`.padStart( 2, 0 ) );
  };