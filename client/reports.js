const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const organization = document.getElementById('organization');
const date = document.getElementById('date');
const hours = document.getElementById('hours');
const contacts = document.getElementById('contacts');
const yesId = document.getElementById('yes-id');
const volunteer = document.getElementById('volunteer');
const optInText = document.getElementById('opt-in-text');
const optInEmail = document.getElementById('opt-in-email');
const highlights = document.getElementById('highlights');
const challenges = document.getElementById('challenges');
const submitBtn = document.getElementById('submit-btn');

const inputField = document.querySelectorAll("input");
const reportForm = document.querySelector('form');

const reportsContainer = document.querySelector('#reports-container');
const form = document.querySelector('form');



const baseURL = `http://localhost:4545/reports`

submitBtn.addEventListener("click", () => {
    console.log("hit");
    axios.get(`http://localhost:4545/submit/`).then(function(response) {
        const data = response.data;
        alert(data); 
    });
});


const reportsCallback = ({ data: reports }) => displayReports(reports);
const errCallback = err => console.log(err);

const getAllReports = () => axios.get(baseURL).then(reportsCallback).catch(errCallback);


const createReport = body => axios.post(baseURL, body).then(reportsCallback).catch(errCallback);

function submitHandler(e) {
    e.preventDefault();

    let firstName = document.querySelector('#first-name');
    let lastName = document.querySelector('#last-name');
    let organization = document.querySelector('#organization');
    let date = document.querySelector('#date');
    let hours = document.querySelector('#hours');
    let contacts = document.querySelector('#contacts');
    let yesId = document.querySelector('#yes-id');
    let volunteer = document.querySelector('#volunteer');
    let optInText = document.querySelector('#opt-in-text');
    let optInEmail = document.querySelector('#opt-in-email');
    let highlights = document.querySelector('#highlights');
    let challenges = document.querySelector('#challenges');

    let bodyObj = {
        firstName: firstName.value, 
        lastName: lastName.value,
        organization: organization.value,
        date: date.value,
        hours: hours.value,
        contacts: contacts.value, 
        yesId: yesId.value, 
        volunteer: volunteer.value, 
        optInText: optInText.value, 
        optInEmail: optInEmail.value, 
        highlights: highlights.value, 
        challenges: challenges.value
    };

    createReport(bodyObj);

    firstName.value = ''
    lastName.value = '',
    organization.value = '',
    date.value = '',
    hours.value = '',
    contacts.value = '', 
    yesId.value = '', 
    volunteer.value = '', 
    optInText.value = '', 
    optInEmail.value = '', 
    highlights.value = '', 
    challenges.value = ''
};



function createReportCard(data) {
    const reportCard = document.createElement('div');
    reportCard.classList.add('report-card');

    reportCard.innerHTML = `
    <p><b>Report Entry:</b></p>
    <p class="firstName">First Name: ${data.firstName}</p>
    <p class="lastName">Last Name: ${data.lastName}</p>
    <p class="organization">Organization: ${data.organization}</p>
    <p class="date">Date: ${data.date}</p>
    <p class="hours">Hours: ${data.hours}</p>
    <p class="contacts">Contacts: ${data.contacts}</p>
    <p class="yesId">Yes Ids: ${data.yesId}</p>
    <p class="volunteer">Volunteer: ${data.volunteer}</p>
    <p class="optInText">Opt in Text: ${data.optInText}</p>
    <p class="optInEmail">Opt in Email: ${data.optInEmail}</p>
    <p class="highlights">Highlights: ${data.highlights}</p>
    <p class="challenges">Challenges: ${data.challenges}</p>
    `


    reportsContainer.appendChild(reportCard);
};

function displayReports(arr) {
    reportsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createReportCard(arr[i]);
    }
};

form.addEventListener('submit', submitHandler);

getAllReports();