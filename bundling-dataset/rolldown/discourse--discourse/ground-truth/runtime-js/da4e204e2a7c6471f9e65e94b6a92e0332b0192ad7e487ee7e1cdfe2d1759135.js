
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><!-- LCP candidate image ${".".repeat(5000)} --></svg>`;
    document.querySelector("#d-splash .preloader-image").style.backgroundImage = `url('data:image/svg+xml,${svg}')`
  