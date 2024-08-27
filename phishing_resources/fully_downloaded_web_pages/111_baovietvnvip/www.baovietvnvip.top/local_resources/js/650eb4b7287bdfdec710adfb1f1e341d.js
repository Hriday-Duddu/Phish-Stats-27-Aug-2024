let configBannerHome = {
    animateOut: '',
    animateIn: '',
    autoplayTimeout: 5000,
    loop: true,
    autoplay: true,
    items: 1,
    margin: 0,
    nav: false,
    dots: true,
    navText: ['<i class="far fa-long-arrow-left"></i>', '<i class="far fa-long-arrow-right"></i>'],
}
let configBannerService = {
    animateOut: '',
    animateIn: '',
    autoplayTimeout: 5000,
    loop: true,
    autoplay: true,
    items: 1,
    margin: 0,
    nav: false,
    dots: true,
    navText: ['<i class="far fa-long-arrow-left"></i>', '<i class="far fa-long-arrow-right"></i>'],
}
let configTimeout = (time) => {
    let numTime = parseInt(time);
    if (numTime) {
        return numTime * 1000;
    }
    return 5000;
}