const navigator = document.querySelector('.navigator'),
    navTags = document.querySelectorAll('.navigator ul li');

navTags.forEach(e => {
    e.addEventListener('click', () => {
        navigator.querySelector('.active').classList.remove('active');
        e.classList.add('active');
    });
});

const dashboardTag = document.getElementById('dashboard'),
    userTag = document.getElementById('users'),
    bookingTag = document.getElementById('booking'),
    packageTag = document.getElementById('package'),
    queryTag = document.getElementById('query'),
    signoutTag = document.getElementById('signout');

const dashboardSection = document.querySelector('.dash'),
    userSection = document.querySelector('.users'),
    bookingSection = document.querySelector('.booking'),
    packageSection = document.querySelector('.package'),
    querySection = document.querySelector('.query');


dashboardTag.addEventListener('click', () => {
    dashboardSection.classList.remove('active');
    userSection.classList.remove('active');
    bookingSection.classList.remove('active');
    packageSection.classList.remove('active');
    querySection.classList.remove('active');
});
userTag.addEventListener('click', () => {
    dashboardSection.classList.add('active')
    userSection.classList.add('active');
    bookingSection.classList.remove('active');
    packageSection.classList.remove('active');
    querySection.classList.remove('active');
});
bookingTag.addEventListener('click', () => {
    dashboardSection.classList.remove('active')
    userSection.classList.remove('active');
    bookingSection.classList.add('active');
    packageSection.classList.remove('active');
    querySection.classList.remove('active');
});
packageTag.addEventListener('click', () => {
    dashboardSection.classList.remove('active')
    userSection.classList.remove('active');
    bookingSection.classList.remove('active');
    packageSection.classList.add('active');
    querySection.classList.remove('active');
});
queryTag.addEventListener('click', () => {
    dashboardSection.classList.remove('active')
    userSection.classList.remove('active');
    bookingSection.classList.remove('active');
    packageSection.classList.remove('active');
    querySection.classList.add('active');
});