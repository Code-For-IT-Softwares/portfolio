// include-html.js
function includeHTML() {
    const headerElement = document.getElementById('header-call');
    const Home = document.getElementById('home-call');
    const about = document.getElementById('about-call');
    const service = document.getElementById('service-call');
    // const bannerId = document.getElementById('banner-slider');
    // const mainAboutId = document.getElementById('cl_aboutus');
    // const firstVerticleScrollId = document.getElementById('first-verticle-scroll');
    // const i2ctHistoryId = document.getElementById('cl_portfolio');
    // const secondVerticleScrollId = document.getElementById('second-verticle-scroll');
    // const successCounterId = document.getElementById('success-counter');
    // const firstVerticleScrollId = document.getElementById('uccess-counter');


    fetch('/components/header.html')
        .then(response => response.text())
        .then(html => headerElement.innerHTML = html);

    fetch('/Pages/home.html')
        .then(response => response.text())
        .then(html => Home.innerHTML = html);

    fetch('/Pages/aboutUs.html')
        .then(response => response.text())
        .then(html => about.innerHTML = html);

    fetch('/Pages/services.html')
        .then(response => response.text())
        .then(html => service.innerHTML = html);
    // fetch('/widgets/main-banner.html')
    // .then(response => response.text())
    // .then(html => bannerId.innerHTML = html);

    // fetch('/widgets/main-aboutUS.html')
    // .then(response => response.text())
    // .then(html => mainAboutId.innerHTML = html);

    // fetch('/widgets/i2ct/main-first-verticle-scroll.html')
    // .then(response => response.text())
    // .then(html => firstVerticleScrollId.innerHTML = html);


    // fetch('/widgets/i2ct/i2ct-history.html')
    // .then(response => response.text())
    // .then(html => i2ctHistoryId.innerHTML = html);

    // fetch('/widgets/i2ct/main-second-verticle-scroll.html')
    // .then(response => response.text())
    // .then(html => secondVerticleScrollId.innerHTML = html);

    // fetch('/widgets/success-counter.html')
    // .then(response => response.text())
    // .then(html => successCounterId.innerHTML = html);

    // fetch('/widgets/i2ct/main-first-verticle-scroll.html')
    // .then(response => response.text())
    // .then(html => firstVerticleScrollId.innerHTML = html);
}
