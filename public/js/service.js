const mouseMove = () => {
	let sheet = document.getElementsByClassName('banner')[0];
	let iron = document.getElementsByClassName('service-text')[0];

	sheet.addEventListener('mousemove', (event) => {
		let x = event.clientX;
		let y = event.clientY;
		
		let right = iron.offsetLeft + iron.offsetWidth;
		let rightx = x - right;
		let bottom = iron.offsetTop + iron.offsetHeight;
		let bottomx = y - bottom

		let xpos, ypos;



		if(x > right) {
			xpos = rightx*0.5;
		}

		else if (x < iron.offsetLeft) {
			xpos = -(x*0.5);
		}

		else {
			xpos = 0
		}

		if(y > bottom) {
			ypos = bottomx*0.5;
		}

		else if(y < iron.offsetTop) {
			ypos = -(y*0.5);
		}

		else {
			ypos = 0;
		}

		iron.style.transform = `translate(${xpos}px,${ypos}px`;
	})

	sheet.addEventListener('mouseleave', () => {
		iron.style.transform = "translate(0px,0px)";
	})
}

mouseMove();