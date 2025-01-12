/*
 *   Copyright (c) 2025 SteveMak
 *   All rights reserved.
 */

const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia',
    'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus',
    'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil',
    'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada',
    'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia',
    'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada',
    'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India',
    'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
    'Jamaica', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan',
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
    'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
    'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea',
    'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay',
    'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis',
    'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia',
    'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
    'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden',
    'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga',
    'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam',
    'Yemen', 'Zambia', 'Zimbabwe'
];

const regexAlpha =  /^[A-Za-z]+$/;
const regexNumeric = /^\d+$/;

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function validateAlphaInput(event, inputId, errorlabelId, message) {
    let c = event.target.value;
    let element = event.target;
    if (!(event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122)) {
        document.getElementById(errorlabelId).hidden = false;
        document.getElementById(inputId).style.border = "1px solid red";
        element.classList.add('is-invalid');
        element.setCustomValidity(message);
    } else {
        if(c === '' || c.match(regexAlpha) !== null) {
            document.getElementById(errorlabelId).hidden = true;
            element.classList.remove('is-invalid');
            element.setCustomValidity('');
            document.getElementById(inputId).style.border = "";
        }
    }
}

function validateInitials(event) {
    validateAlphaInput(event, 'm-initial-input', 'lb-m-initial-error', 'Initials can only contain alpha characters');

}

function validateNames(event) {
    validateAlphaInput(event, 'name', 'lb--name-error', 'Name can only contain alpha characters');
}

function validateLastName(event) {
    validateAlphaInput(event, 'lastname', 'lb-last-name-error', 'Last name can only contain alpha characters');
}

function validateMatriculation(event) {
    let element = event.target;
    let c = event.target.value;
    if (!(48 <= event.keyCode && event.keyCode <= 57)) {
        document.getElementById('lb-error-matriculation').hidden = false;
        document.getElementById('matriculation').style.border = "1px solid red";
        element.classList.add('is-invalid');
        element.setCustomValidity('Matriculation number can only contain numbers');
    } else {
        if(c === '' || c.match(regexNumeric) !== null) {
            console.log('Matched');
            document.getElementById('lb-error-matriculation').hidden = true;
            element.classList.remove('is-invalid');
            element.setCustomValidity('');
            document.getElementById('matriculation').style.border = "";
        }
    }
}

function getCountries() {

    let countrySelect = document.getElementById('countries');
    let countryOptions = '';
    countries.forEach(country => {
        countryOptions += `<option value="${country}">${country}</option>`;
    });
    countrySelect.innerHTML = countryOptions;
}

function submitButton () {
    console.log('Submitted');
}

getCountries();