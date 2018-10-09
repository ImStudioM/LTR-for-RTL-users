
window.addEventListener('load', 
  function() { 
	
	    var body, wpcontent, btn, btnDiv;
	
		body      = document.querySelector('body');
	    wpcontent = document.getElementById('wpcontent');
	    btn       = document.querySelector('.ltr-btn');
	    btnDiv       = document.querySelector('.ltr-btn > div');
	

		// Set Cookie
		function setCookie(cname, cvalue, exdays) {
			
			var d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			var expires = "expires="+ d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		 }

		// Get Cookie
		function getCookie(cname) {

			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');

			for(var i = 0; i <ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}

		// ChackClass
		function hasClass(element, cls) {
			return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
		}

		// Switch direction
		function switchDir() {
			wpcontent.style.direction = wpcontent.style.direction === 'rtl' ? 'ltr' : 'rtl';
			var val = wpcontent.style.direction;
			setCookie("rtl2ltrChack", val, 40);

		}

		// Add class to the btn
		function btnClass() {
			btn.classList.toggle('on');
		}
		// Add trl 
		function addRTL() {
			wpcontent.style.direction = 'rtl';
		}
		// Add ltr
		function addLTR() {
			wpcontent.style.direction = 'ltr';
		}
	    // Change btn Tille
	    function changeTille(){
			var dir = hasClass(btn, 'on') === true ? 'LTR' : 'RTL' ;
			btnDiv.innerHTML = dir;
		}
	
	
	if (hasClass(body, 'rtl')){
		
		
		if ( getCookie("rtl2ltrChack") === 'rtl' ) {
			addRTL();
			
			

		} else if ( getCookie("rtl2ltrChack") === 'ltr' ){
			addLTR();
			
		}
			
	  		
		document.querySelector('.ab-empty-item').onclick = function() {
			switchDir();
			btnClass();
			changeTille()
		}		
		
		
		
	}
	
	
	

	
	/*
	if (hasClass(body, 'rtl')){

		if ( getCookie("rtl2ltrChack") === 'rtl' ) {
			addRTL();
			changeTille()
			

		} else if ( getCookie("rtl2ltrChack") === 'ltr' ){
			addLTR();
			btnClass();
			changeTille()
			
	    } else if  ( getCookie("rtl2ltrChack") === '' ){
			addRTL();
			changeTille()
		}

		document.querySelector('.ab-empty-item').onclick = function() {
			switchDir();
			btnClass();
			changeTille()
		}
	}
	*/

  }, false); //Ends window load
  