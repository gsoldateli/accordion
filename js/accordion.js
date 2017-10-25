(function(window){
		var accordion = {};

		accordion.el = null;

		accordion.init = function() {
			var self = this;

			//List all accordions
			var acList = document.querySelectorAll('body .accordion');

			//To each one
			acList.forEach(function(item){
				//Add menu-label click event to show/hide boddy
				item.addEventListener('click', function(event) {
					// Support IE6-8
					var clickedElement = event.target || e.srcElement;

					//Only listen to clicks on menu-label elements.
					if (clickedElement.className.indexOf('menu-label') > -1) {
						self._toggleActive(clickedElement);
					}
				});
			});
		};

		accordion._toggleActive = function(item) {
			var bodyEl = item.nextElementSibling;
			//If item title is not active
			if (item.className.indexOf(' active ') === -1) {
				//Activate it
				item.className += ' active ';

				bodyEl.style.height = (this._innerHeight(bodyEl)*1.1)+'px';
			}
			else {
				//Desactivate it
				item.className = item.className.replace(/ active /g,'');	
				bodyEl.style.height = 0;
			}

			return item;

		};

		accordion._innerHeight = function(el) {
			height = 0;
			var innerElements = el.querySelectorAll('*');
			for(var i = 0; i< innerElements.length; i++ ) {
				console.log(innerElements[i]);
				height += innerElements[i].clientHeight;
			}
			console.log(height);

			return height;
		};

		window.$AC = accordion;

})(window);

$AC.init();
