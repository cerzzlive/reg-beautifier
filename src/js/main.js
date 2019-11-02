// Init sidebar
let sidebar = document.querySelectorAll('#wrapper > table > tbody > tr > td:nth-child(2)')[0];
sidebar.setAttribute('id', 'sidebar');
// Init responsive for mobile site
const meta = document.createElement('meta');
meta.name = 'viewport';
meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.getElementsByTagName('head')[0].appendChild(meta);
document.title = 'ระบบบริการการศึกษา มหาวิทยาลัยขอนแก่น';

let header = document.querySelectorAll('#header > .wrapper')[0];

let btn_sidebar_toggle = document.createElement('button');
btn_sidebar_toggle.setAttribute('id', 'btn_sidebar_toggle');
btn_sidebar_toggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">
    <title>Menu</title>
    <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path>
    </svg>`;

header.appendChild(btn_sidebar_toggle);

btn_sidebar_toggle.addEventListener('click', toggleSidebar);


function getCurrentLanguage() {
    const languages = ['th', 'en'];
    let lang = 0;
    lang = document.cookie.replace(/(?:(?:^|.*;\s*)CKLANG\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    return languages[lang];
}

function toggleSidebar() {
    console.log('clicked');
    if(sidebar.className === '') {
        sidebar.className = 'opened';
    } else {
        sidebar.className = '';
    }
}