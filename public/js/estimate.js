const estimate = () => {
	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let mobileField = document.getElementById('mobile');
	let company = document.getElementById('name');

	let submit = document.getElementById('submit');
	let desktop = document.getElementById('est-desktop');
	let mobile = document.getElementById('est-mobile');
	let front = document.getElementById('est-front');
	let back = document.getElementById('est-back');

	console.log(front, back);

	let tdesktop = document.getElementById('est-desktop-tick');
	let tmobile = document.getElementById('est-mobile-tick');
	let tfront = document.getElementById('est-front-tick');
	let tback = document.getElementById('est-back-tick');

	let bdesktop = false;
	let bmobile = false;
	let bfront = false;
	let bback = false;

	desktop.addEventListener("click", () => {
		bdesktop = !bdesktop;
		if (bdesktop === true) {
			tdesktop.style.opacity = 1;
		}
		else {
			tdesktop.style.opacity = 0;
		}
	})

	mobile.addEventListener("click", () => {
		bmobile = !bmobile;
		if (bmobile === true) {
			tmobile.style.opacity = 1;
		}
		else {
			tmobile.style.opacity = 0;
		}
	})

	front.addEventListener("click", () => {
		bfront = !bfront;
		if (bfront === true) {
			tfront.style.opacity = 1;
		}
		else {
			tfront.style.opacity = 0;
		}
	})

	back.addEventListener("click", () => {
		bback = !bback;
		if (bback === true) {
			tback.style.opacity = 1;
		}
		else {
			tback.style.opacity = 0;
		}
	})

	document.getElementById('submit').addEventListener("click", () => {
		console.log(name.value, email.value, mobileField.value, company.value, bdesktop, bmobile, bfront, bback);
		submit.style.backgroundColor = "#bbb";
		submit.style.color = "#333";

		fetch('https://ancient-depths-93632.herokuapp.com/estimate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: name.value,
				email: email.value,
				phone:mobileField.value,
				company: company.value,
				desktop: bdesktop,
				mobile: bmobile,
				front: bfront,
				back: bback
			})
		}).then(response => response.json()).then(sts => {
			if (sts === 'SUCCESS') {
				submit.style.backgroundColor = "green";
				submit.style.color = "#fff";
				submit.innerHTML = "Thank You for Your Interest! We will get back to You soon!"
			}
		})
	})

}

estimate();