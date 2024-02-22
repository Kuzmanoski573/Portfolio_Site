
/*Fetch for all cateforis*/
document.getElementById('Allcategories').addEventListener('click', function(e){
    console.log('click')
    e.preventDefault();
    fetch('categories.json').then(response => response.json()).then(data => allprojects(data));
});

function allprojects(data){
    const element = document.getElementById('boxes');
    element.innerHTML = `
        <div class="col-md-3 mx-1 box shadow-lg p-3 mb-4 bg-transparent rounded"><img src="${data.WebDesign01}" class="projectsImg"></div>
        <div class="col-md-3 mx-1 box shadow-lg p-3 mb-4 bg-transparent rounded"><img src="${data.WebDesign02}" class="projectsImg"></div>
        <div class="col-md-3 mx-1 box shadow-lg p-3 mb-4 bg-transparent rounded"><img src="${data.WebApplication01}" class="projectsImg"></div>
        <div class="col-md-3 mx-1 box shadow-lg p-3 mb-4 bg-transparent rounded"><img src="${data.WebApplication02}" class="projectsImg"></div>
        <div class="col-md-3 mx-1 box shadow-lg p-3 mb-4 bg-transparent rounded"><img src="${data.WebApplication03}" class="projectsImg"></div>
        <div class="col-md-3 mx-1 box shadow-lg p-3 mb-4 bg-transparent rounded"><img src="${data.MobileAppcation}" class="projectsImg"></div>
    `
}
/*Fetch for all cateforis*/

/*Fetch for WebDesign*/
document.getElementById('Webdesign').addEventListener('click', function(e){
    console.log('click')
    e.preventDefault();
    fetch('categories.json').then(response => response.json()).then(data => Webdesign(data));
});

function Webdesign(data){
    const element = document.getElementById('boxes');
    element.innerHTML = `
        <div class="col-md-3 mx-1 box shadow-lg p-3 mb-4 bg-transparent rounded"><img src="${data.WebDesign01}" class="projectsImg"></div>
        <div class="col-md-3 mx-1 box shadow-lg p-3 mb-4 bg-transparent rounded"><img src="${data.WebDesign02}" class="projectsImg"></div>
    `
}
/*Fetch for WebDesign*/


/*Fetch for Webapplications*/
document.getElementById('Webapplications').addEventListener('click', function(e){
    e.preventDefault();
    fetch('categories.json').then(response => response.json()).then(data => Webapplications(data));
});

function Webapplications(data){
    const element = document.getElementById('boxes');
    element.innerHTML = `
        <div class="col-md-3 mx-1 box shadow-lg p-3 mb-4 bg-transparent rounded"><img src="${data.WebApplication01}" class="projectsImg"></div>
        <div class="col-md-3 mx-1 box shadow-lg p-3 mb-4 bg-transparent rounded"><img src="${data.WebApplication02}" class="projectsImg"></div>
        <div class="col-md-3 mx-1 box shadow-lg p-3 mb-4 bg-transparent rounded"><img src="${data.WebApplication03}" class="projectsImg"></div>
    `
}
/*Fetch for Webapplications*/

/*Fetch for Mobileapplications*/
document.getElementById('Mobileapplications').addEventListener('click', function(e){
    console.log('click')
    e.preventDefault();
    fetch('categories.json').then(response => response.json()).then(data => Mobileapplications(data));
});

function Mobileapplications(data){
    const element = document.getElementById('boxes');
    element.innerHTML = `
        <div class="col-md-3 mx-1 box shadow-lg p-3 mb-4 bg-transparent rounded"><img src="${data.MobileAppcation}" class="projectsImg"></div>
    `
}
/*Fetch for Mobileapplications*/
