const services = () => {
	
	let web = document.getElementById('webcard');
	let whead = document.getElementById('wheading');
	let wcon = document.getElementById('wcontent');

	let seo = document.getElementById('seo');
	let shead = document.getElementById('sheading');
	let scon = document.getElementById('scontent');

	let app = document.getElementById('appcard');
	let ahead = document.getElementById('aheading');
	let acon = document.getElementById('acontent');

	let wbg = document.getElementById('webbg');
	let seobg = document.getElementById('seobg');
	let mobbg = document.getElementById('mobbg');

	web.addEventListener("mouseenter", function () {
		wbg.style.opacity="1";
		whead.style.transform = "translateY(0px)";
		wcon.style.transform = "scaleY(1)";
		wcon.style.opacity = "1";
		seo.style.opacity = "0";
		app.style.opacity = "0";
		web.style.border = "none";
		app.style.transitionDelay = "0s";
		seo.style.transitionDelay = "0s";
		web.style.transitionDelay = "0s";
		app.style.transitionDelay = "0s";
		web.style.boxShadow = "0 15px 30px 0 rgba(0,0,0,0.3), 0 5px 15px 0 rgba(0,0,0,0.2)";
	})

	web.addEventListener("mouseleave", function () {
		wbg.style.opacity="0";
		whead.style.transform = "translateY(150px)";
		wcon.style.transform = "scaleY(0)";
		wcon.style.opacity = "0";
		seo.style.opacity = "1";
		web.style.border = "1px solid #fff";
		app.style.opacity = "1";
		app.style.transitionDelay = "0.5s";
		seo.style.transitionDelay = "0.5s";
		web.style.boxShadow = "none";
	})

	seo.addEventListener("mouseenter", function () {
		seobg.style.opacity="1";
		shead.style.transform = "translateY(0px)";
		scon.style.transform = "scaleY(1)";
		scon.style.opacity = "1";
		web.style.opacity = "0";
		seo.style.border = "none";
		app.style.opacity = "0";
		app.style.transitionDelay = "0s";
		web.style.transitionDelay = "0s";
		seo.style.transitionDelay = "0s";
		seo.style.boxShadow = "0 15px 30px 0 rgba(0,0,0,0.3), 0 5px 15px 0 rgba(0,0,0,0.2)";
	})

	seo.addEventListener("mouseleave", function () {
		seobg.style.opacity="0";
		shead.style.transform = "translateY(150px)";
		scon.style.transform = "scaleY(0)";
		scon.style.opacity = "0";
		web.style.opacity = "1";
		app.style.opacity = "1";
		app.style.transitionDelay = "0.5s";
		web.style.transitionDelay = "0.5s";
		seo.style.border = "1px solid #fff";
		seo.style.boxShadow = "none";
	})

	app.addEventListener("mouseenter", function () {
		mobbg.style.opacity="1";
		ahead.style.transform = "translateY(0px)";
		acon.style.transform = "scaleY(1)";
		acon.style.opacity = "1";
		web.style.opacity = "0";
		seo.style.opacity = "0";
		seo.style.transitionDelay = "0s";
		web.style.transitionDelay = "0s";
		app.style.transitionDelay = "0s";
		app.style.border = "none";
		app.style.boxShadow = "0 15px 30px 0 rgba(0,0,0,0.3), 0 5px 15px 0 rgba(0,0,0,0.2)";
	})

	app.addEventListener("mouseleave", function () {
		mobbg.style.opacity="0";
		ahead.style.transform = "translateY(150px)";
		acon.style.transform = "scaleY(0)";
		acon.style.opacity = "0";
		web.style.opacity = "1";
		app.style.boxShadow = "none";
		app.style.border = "1px solid #fff";
		seo.style.opacity = "1";
		seo.style.transitionDelay = "0.5s";
		web.style.transitionDelay = "0.5s";
	})
}


services();

const fsform = () => {
	let name,email,phone,interested,nameValue,emailValue,phoneValue,interestedValue,actionButton,submitButton,i=0,container;
	let field = document.getElementsByClassName('input-field');
	let error = document.getElementById('error');

	let rweb,rmobile,rseo,ruiux;
	let web = document.getElementById('web');
	let mobile = document.getElementById('mobileselect');
	let seo = document.getElementById('seoselect');
	let uiux = document.getElementById('uiux');
	console.log(web,mobile,seo,uiux);

	name=document.getElementById('name');
	email=document.getElementById('email');
	phone=document.getElementById('mobile');
	budget=document.getElementById('budget');
	actionButton=document.getElementsByClassName('continue')[0];
	container=document.getElementsByClassName('forminput');
	console.log(name,email,phone,interested,actionButton,container,field);
	//Review output variables;

	let resName = document.getElementById('review-name');
	let resEmail = document.getElementById('review-email');
	let resMobile = document.getElementById('review-mobile');
	let resBudget = document.getElementById('review-budget');

	let webTick = document.getElementById('int-web');
	let appTick = document.getElementById('int-app');
	let seoTick = document.getElementById('int-seo');
	let uiuxTick = document.getElementById('int-uiux');

	const hider = () => {
		for(var n=0; n<container.length; n++) {
			container[n].style.height = "0px";
		}
	}

	hider();

	let slidenumber = document.querySelector('#slide');
	slidenumber.innerHTML=`${i+1}/5`

	container[i].style.height="100%";

	const viewer = () => {
		console.log(i)
		if(i !== 3) {
			if(field[i].value.length === 0) {
				error.style.transform = "scaleY(1)";
				error.style.opacity = "1";
			}

			else{
				hider();
				error.style.transform = "scaleY(0)";
				error.style.opacity = "0";
				i=i+1;
				slidenumber.innerHTML=`${i+1}/5`;
				container[i].style.height="100%";
				field[i].focus();
				console.log('First');
			}
		}

		else {
			hider();
			i=i+1;
			console.log(i);
			container[i].style.height="100%";
			slidenumber.innerHTML=`${i+1}/5`;
			console.log('Second');
			if(rweb === true){
					webTick.style.opacity = "1";
					console.log('tick check')
				}

				if(rmobile === true){
					appTick.style.opacity = "1";
				}

				if(rseo === true){
					seoTick.style.opacity = "1";
				}

				if(ruiux === true){
					uiuxTick.style.opacity = "1";
				}
			actionButton.addEventListener("click", () => {
				console.log('Goyya');
				actionButton.style.opacity = "0";
				fetch('https://ancient-depths-93632.herokuapp.com/consulting', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name: resName.value,
						email: resEmail.value,
						phone:resMobile.value,
						budget: resBudget.value,
						web: rweb,
						mobile: rmobile,
						seo: rseo,
						uiux: ruiux
					}) 
				}).then(response => response.json()).then(sts => {
					if (sts === 'SUCCESS') {
						document.getElementsByClassName('form-success')[0].style.height = "100vh";
						document.getElementsByClassName('form-success')[0].style.zIndex = "100";
						document.getElementsByClassName('success')[0].innerHTML = "We recieved your Request! We will contact you as soon as possible :)"
						
						document.getElementsByClassName('form-success')[0].addEventListener("click", () => {
							document.getElementsByClassName('form-success')[0].style.height = "0vh";
							document.getElementsByClassName('form-success')[0].style.zIndex = "-5";
						})
					}
				})
			})
		}
	}

	for (var m=0;m<container.length;m++) {
		container[m].addEventListener("keypress", (event) => {
			if(event.keyCode === 13){
				viewer();
			}
		})
	}



	actionButton.addEventListener("click", viewer);

	web.addEventListener("click", () => {
		if(rweb === true) {
			web.style.transform = "translateY(0px)";
			rweb = false;
			console.log(rweb);
		} 	
		else {
			web.style.transform = "translateY(-20px)";
			rweb = true;
			console.log(rweb);
		}
	})

	mobile.addEventListener("click", () => {
		if(rmobile === true) {
			mobile.style.transform = "translateY(0px)";
			rmobile = false;
			console.log(rmobile);
		} 	
		else {
			mobile.style.transform = "translateY(-20px)";
			rmobile = true;
			console.log(rmobile);
		}	
	})

	seo.addEventListener("click", () => {
		if(rseo === true) {
			seo.style.transform = "translateY(0px)";
			rseo = false;
			console.log(rseo);
		} 	
		else {
			seo.style.transform = "translateY(-20px)";
			rseo = true;
			console.log(rseo);
		}		
	})

	uiux.addEventListener("click", () => {
		if(ruiux === true) {
			uiux.style.transform = "translateY(0px)";
			ruiux = false;
			console.log(ruiux);
		} 	
		else {
			uiux.style.transform = "translateY(-20px)";
			ruiux = true;
			console.log(ruiux);
		}	
	})


	
	name.addEventListener("change", ()=> {
		resName.value=name.value;
	})

	email.addEventListener("change", ()=> {
		let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (email.value.match(mailformat)) {
			resEmail.value=email.value;
		}
		else{
			i=i-1;
			container[i].style.height="100%";
			error.style.transform = "scaleY(1)";
			error.style.opacity = "1";
		}
	})

	phone.addEventListener("change", ()=> {
		if(phone.value.length < 10 || phone.value.length > 10 ) {
			i=i-1;
			container[i].style.height="100%";
			error.style.transform = "scaleY(1)";
			error.style.opacity = "1";
		}
		else{
			console.log('check');
			resMobile.value = phone.value;
		}
	})

	budget.addEventListener("change", ()=> {
		if(budget.value < 5000) {
			i=i-1;
			container[i].style.height="100%";
			error.style.transform = "scaleY(1)";
			error.style.opacity = "1";
		}
		else{
			console.log('check');
			resBudget.value = budget.value;
			error.style.transform = "scaleY(0)";
			error.style.opacity = "0";
		}
	})

}

fsform();

let counterRan = false

const counter = () => {

	let web = document.getElementById('webcounter');
	let app = document.getElementById('appcounter');
	let container = document.getElementsByClassName('cost')[0];

	let elementHeight = container.clientHeight;

	let scrollposition = window.scrollY || window.pageYOffset;
	let windowHeight = window.innerHeight;
	let elementposition = container.getBoundingClientRect().bottom + scrollY + elementHeight;

	const inserter = () => {
		let wcounter = 0, acounter = 0;
			web.innerHTML = "Rs 0"

			setInterval(() => {
				web.innerHTML = `Rs ${wcounter}`
				wcounter = wcounter+50;
				app.innerHTML = `Rs ${acounter}`;
				acounter = acounter+100;

				if (wcounter > 6999 || acounter > 14000) {
					web.innerHTML = "Rs 4999";
					app.innerHTML = "Rs 10999";
				}
			}, 10);
	}

	

	if(scrollposition > 200) {
		if(counterRan === false) {
			inserter();
			counterRan = true;
		}
	}
}

document.addEventListener("scroll",counter);

const bannerText = () => {
	text = document.getElementsByClassName('text')[0];

	textArray = ["Welcome to TriadKube <br>where Expectation meets Reality",
				 "Everyone can afford an Website <br>with TriadKube",
				 "Matchless Quality and Matchless Performance<br>for Lowest Price"
				];

	var i=0;
	text.innerHTML = textArray[i];

	setInterval(()=> {
		var a=document.createTextNode(textArray[i])
		i = i+1;
		if(i === textArray.length){
			i=0;
		}
		text.innerHTML = textArray[i];		
	}, 4000)
}

bannerText();
