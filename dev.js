(function(){
	let us = document.getElementById("usa"),
		mex = document.getElementById("mexico"),
		can = document.getElementById("canada"),
		animation = document.getElementById("country-container").classList.value,
		cycle;

	function draw(){
		function setLength(country, type){
			let path;

			type == "js--trace" ? path = country.querySelectorAll("path.trace") : path = country.querySelectorAll("path");

			path.forEach(elem => {
				elem.setAttribute("stroke-dasharray", elem.getTotalLength());
				elem.setAttribute("stroke-dashoffset", elem.getTotalLength());
			});

			country.classList.add("animate")
		}

		function changeCountry(){
			let countries = [us, mex, can],
				current = document.querySelector(".animate"),
				index = countries.indexOf(current);

			if (index == countries.length - 1) {
				current.classList.remove("animate");
				setLength(countries[0], animation)
			} else {
				current.classList.remove("animate");
				setLength(countries[index + 1], animation);
			}
		}

		setLength(us, animation);
		cycle = setInterval(changeCountry, 11600);
	}
	
	document.addEventListener("readystatechange", () => {
		document.readyState === 'interactive' && draw();
	})
})();