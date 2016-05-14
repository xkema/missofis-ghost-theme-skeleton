/*!
 * Missofis Ghost Skeleton Theme
 * 
 * 	Author: Kemal Yılmaz
 * 	Website: http://missofis.com
 * 	License: MIT
 *
 * @see https://github.com/xkema/missofis-skeleton-ghost-theme.git
 */ 
;( function ( window, document, undefined ) {

	/*
	------------------------------------------------------------
	Missofis Ghost Skeleton Theme
	------------------------------------------------------------
	*/

	document.addEventListener( 'DOMContentLoaded', function() {

		var _navToggle = document.querySelector( '.nttld--nav-toggle' );
		var _navList = document.querySelector( '.nttld--nav-list' );
		_navToggle.addEventListener( 'click', function( e ) {
			if( 'block' !== _navList.style.display ) {
				_navList.style.display = 'block';
			}
			else {
				_navList.style.display = 'none';
			}
		} );
		
	} );

} ) ( window, document );