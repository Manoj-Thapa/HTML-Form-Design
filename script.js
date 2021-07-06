//UI element Variables

let formUI = document.querySelector('#submit-form');
let fnameUI = document.querySelector('#fname');
let lnameUI = document.querySelector('#lname');
let addressoneUI = document.querySelector('#address_one');
let addresstwoUI = document.querySelector('#address_two');
let pinUI = document.querySelector('#pin');
let maleUI = document.querySelector('#male');
let femaleUI = document.querySelector('#female');
let seaUI = document.querySelector('#sea');
let stateUI = document.querySelector('#state');
let countryUI = document.querySelector('#country');
let invalidUI = document.querySelectorAll('.invalid-message');
let tbodyUI = document.querySelector('tbody');


/************************************* EvenListener *************************************/
formUI.addEventListener('submit', runEvent);

let count = 0; //whenever the count is 0 then data is send into temporary database successfully
let displayMessage = "This field is required.";

function runEvent(e) {
	e.preventDefault();

	//function to remove alert message
	function removeAlertMessage(elem, txt) {
		if (elem.classList.contains("is-invalid")) {
			elem.classList.remove("is-invalid");
			txt.textContent = '';
			count += 1;
		}
	}

	//function to create UI element
	function create_element(element, text) {
		let new_element = document.createElement(element);
		new_element.textContent = text;
		return new_element;
	}

    
	/************************************* check the form validation *************************************/
	if (fnameUI.value === '') {
		if (!fnameUI.classList.contains("is-invalid")) {
			fnameUI.classList.add("is-invalid");
			invalidUI[0].textContent = displayMessage;
			count -= 1;
		}
	} else {
		removeAlertMessage(fnameUI, invalidUI[0]);
	}

	if (lnameUI.value === '') {
		if (!lnameUI.classList.contains("is-invalid")) {
			lnameUI.classList.add("is-invalid");
			invalidUI[1].textContent = displayMessage;
			count -= 1;
		}
	} else {
		removeAlertMessage(lnameUI, invalidUI[1]);
	}

	if (addressoneUI.value === '') {
		if (!addressoneUI.classList.contains("is-invalid")) {
			addressoneUI.classList.add("is-invalid");
			invalidUI[2].textContent = displayMessage;
			count -= 1;
		}
	} else {
		removeAlertMessage(addressoneUI, invalidUI[2]);
	}

	if (pinUI.value === '') {
		if (!pinUI.classList.contains("is-invalid")) {
			pinUI.classList.add("is-invalid");
			invalidUI[4].textContent = displayMessage;
			count -= 1;
		}
	} else {
		removeAlertMessage(pinUI, invalidUI[4]);
	}

	if (!maleUI.checked && !femaleUI.checked) {
		if (invalidUI[5].textContent !== displayMessage) {
			invalidUI[5].textContent = displayMessage;
			count -= 1;
		}

	} else {
		if (invalidUI[5].textContent === displayMessage) {
			invalidUI[5].textContent = '';
			count += 1;
		}
	}

	let CheckBoxItems = document.querySelectorAll('input[type="checkbox"]'); //list of CheckBox Items
	let index = 0; //select the index of first
	let countCheckBox = 0; //count the number of checked boxes
	while (index < CheckBoxItems.length) {
		let checkboxUI = document.querySelector(`#${CheckBoxItems[index].id}`);
		if (checkboxUI.checked) {
			countCheckBox += 1;
		}
		index += 1;
	}
	if (countCheckBox < 2) {
		if (invalidUI[6].textContent !== 'At least two field is required.') {
			invalidUI[6].textContent = 'At least two field is required.';
			count -= 1;
		}

	} else {
		if (invalidUI[6].textContent === 'At least two field is required.') {
			invalidUI[6].textContent = '';
			count += 1;
		}
	}

	if (stateUI.value === '') {
		if (!stateUI.classList.contains("is-invalid")) {
			stateUI.classList.add("is-invalid");
			invalidUI[7].textContent = displayMessage;
			count -= 1;
		}
	} else {
		removeAlertMessage(stateUI, invalidUI[7]);
	}

	if (countryUI.value === '') {
		if (!countryUI.classList.contains("is-invalid")) {
			countryUI.classList.add("is-invalid");
			invalidUI[8].textContent = displayMessage;
			count -= 1;
		}
	} else {
		removeAlertMessage(countryUI, invalidUI[8]);
	}

    
	/************************************* submit the data and show the data to the user *************************************/
	if (count === 0) {

		let trUI = document.createElement('tr');

		let fnameText = fnameUI.value;
		let tdfnameUI = create_element('td', fnameText);
		fnameUI.value = '';
		trUI.append(tdfnameUI);

		let lnameText = lnameUI.value;
		let tdlnameUI = create_element('td', lnameText);
		lnameUI.value = '';
		trUI.append(tdlnameUI);

		let address_oneText = addressoneUI.value;
		let address_twoText = addresstwoUI.value;
		let tdaddressUI = create_element('td', `${address_oneText} ${address_twoText}`);
		addressoneUI.value = '';
		addresstwoUI.value = '';
		trUI.append(tdaddressUI);

		let pinText = pinUI.value;
		let tdpinUI = create_element('td', pinText);
		pinUI.value = '';
		trUI.append(tdpinUI);

		if (maleUI.checked) {
			let maleText = maleUI.value;
			let tdmaleUI = create_element('td', maleText);
			maleUI.checked = false;
			trUI.append(tdmaleUI);
		} else {
			let femaleText = femaleUI.value;
			let tdfemaleUI = create_element('td', femaleText);
			femaleUI.checked = false;
			trUI.append(tdfemaleUI);
		}

		let CheckBoxItems = document.querySelectorAll('input[type="checkbox"]'); //list of CheckBox Items
		let index = 0; //select the index of first
		let addItems = ''; //adds the checkbox items
		while (index < CheckBoxItems.length) {
			let checkboxUI = document.querySelector(`#${CheckBoxItems[index].id}`);
			if (checkboxUI.checked) {
				addItems += checkboxUI.value + ' ';
				checkboxUI.checked = false;
			}
			index += 1;
		}
		addItems = addItems.split(' ');
		addItems.pop();
		addItems = addItems.join(','); //join items separated by comma
		console.log(addItems);

		let tdfoodUI = create_element('td', addItems);
		trUI.append(tdfoodUI);

		let stateText = stateUI.value;
		let tdstateUI = create_element('td', stateText);
		stateUI.value = '';
		trUI.append(tdstateUI);

		let countryText = countryUI.value;
		let tdcountryUI = create_element('td', countryText);
		countryUI.value = '';
		trUI.append(tdcountryUI);

		tbodyUI.append(trUI);
	}

}