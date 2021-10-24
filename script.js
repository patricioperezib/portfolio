let navToggle = document.getElementById('nav-toggle');
let navLinks = document.querySelectorAll('li');

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	});
});

// CHANGING THEMES //

//Set theme to light mode from initial load

let theme = localStorage.getItem('theme');

if (theme == null) {
	changeTheme('light');
} else {
	changeTheme(theme);
}

//Change theme on button click

let themeOptions = document.getElementsByClassName('theme');

for (let i = 0; i < themeOptions.length; i++) {
	themeOptions[i].addEventListener('click', () => {
		let mode = themeOptions[i].dataset.mode;
		changeTheme(mode);
	});
}

function changeTheme(mode) {
	let gitHub = document.getElementsByClassName('github');

	if (mode == 'light') {
		document.getElementById('theme-style').href = 'resources/css/styles.css';

		//for loop to ensure that the github icon changes back to black when themes changes back to light
		for (let i = 0; i < gitHub.length; i++) {
			gitHub[i].innerHTML =
				'<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"alt="GitHub icon"/>';
		}
	} else if (mode == 'blue') {
		document.getElementById('theme-style').href = 'resources/css/blue.css';
	} else if (mode == 'plum') {
		document.getElementById('theme-style').href = 'resources/css/plum.css';
	}

	if (mode == 'blue' || mode == 'plum') {
		//change linkedIn icon to blue for better contrast on darker modes
		document.getElementById('linked-in').innerHTML =
			'<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />';

		//change githubs icons to white for better contrast on darker modes
		let link = document.createElement('link');
		document.head.appendChild(link);
		link.setAttribute('rel', 'stylesheet');
		link.setAttribute(
			'href',
			'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css'
		);

		for (let i = 0; i < gitHub.length; i++) {
			gitHub[i].innerHTML = '<i class="devicon-github-original"></i>';
		}
	}

	localStorage.setItem('theme', mode);
}
