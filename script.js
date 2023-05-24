let body = document.querySelector('body');
body.style.cssText = 'background-image: url("/30DaysOfJavaScript/Projects/Day24_Solar_System/images/galaxy.gif"); text-align: center; margin: 0px 150px; color: white;  height: 500px; font-family: Trebuchet MS; font-weight: lighter';
let header = document.querySelector('header');
header.style.cssText = 'margin-bottom: 10px;'
let title = document.querySelector('h1');
title.style.cssText = 'color: white; margin-bottom:50px; letter-spacing: 4px; text-shadow: 1px 1px pink';
let input = document.querySelector('input');
input.style.cssText = 'padding: 5px; width: 170px;'
let planetList = document.querySelector('select');
planetList.style.cssText = 'padding: 5px; width: 140px; height: 30px;'
let planetNames = ['mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
const planetWeights = [3.7, 8.9, 9.8, 1.6, 3.7, 23.1, 9, 8.7, 11, 7];
const planetImageArray = ["/30DaysOfJavaScript/Projects/Day24_Solar_System/images/mercury.png",
"/30DaysOfJavaScript/Projects/Day24_Solar_System/images/venus.png", "/30DaysOfJavaScript/Projects/Day24_Solar_System/images/earth.png",
"/30DaysOfJavaScript/Projects/Day24_Solar_System/images/moon.png", "/30DaysOfJavaScript/Projects/Day24_Solar_System/images/mars.png",
"/30DaysOfJavaScript/Projects/Day24_Solar_System/images/jupiter.png", "/30DaysOfJavaScript/Projects/Day24_Solar_System/images/saturn.png",
"/30DaysOfJavaScript/Projects/Day24_Solar_System/images/uranus.png", "/30DaysOfJavaScript/Projects/Day24_Solar_System/images/neptune.png",
"/30DaysOfJavaScript/Projects/Day24_Solar_System/images/pluto.png"];
for (let index = 0; index < planetNames.length; index++) {
    const element = planetNames[index];
    let options = document.createElement('option');
    options.setAttribute('value', element);
    options.setAttribute('class', 'planets');
    options.textContent = element.toUpperCase();
    planetList.appendChild(options);
}
let dropDown = document.querySelector('select');
let planetOptions = document.querySelectorAll('option');
let holder = document.querySelector('.none');
let button = document.querySelector('button');
button.style.cssText = 'height: 35px; background-color: grey; color: white; border-radius: 5px; font-size: 9pt;'
let main = document.querySelector('main');
let content = document.querySelector('div');
let contentImageOverlay = document.querySelectorAll('div')[1];
// contentImageOverlay.style.cssText = "position: fixed; display:block; width: 900px; height: 400px; background-color: rgba(0,0,0,0.5); margin-left: 80px; z-index: 1;";
contentImageOverlay.style.cssText = 'background:rgba(128,128,128,0.3); height: 500px';
let contentImage = document.querySelector('img');
contentImage.style.cssText = 'padding: 20px; width: 350px; top: 10px; left: 10px; opacity: 1; margin-top: 45px';
let contentDescription = document.querySelectorAll('div')[2];
button.addEventListener('click', e  = () => {
    if(input.value.length <= 0){
        contentImage.style.display = 'none';
        contentDescription.textContent = 'Mass is required';
        contentDescription.style.cssText = 'background:rgba(128,128,128,0.5); margin-top: -50px; margin-left:370px; width: 250px; padding: 10px 15px; ';
        contentImageOverlay.style.cssText = 'height: 60px; background:rgba(128,128,128,0.3);';
    }
    else if(dropDown.value === 'none'){
        contentImage.style.display = 'none';
        contentDescription.textContent = 'You did not choose a planet yet.';
        contentDescription.style.cssText = 'background:rgba(128,128,128,0.5); margin-top: -50px; margin-left:370px; width: 250px; padding: 10px 15px; ';
        contentImageOverlay.style.cssText = 'height: 60px; background:rgba(128,128,128,0.3);';
    }
    else{
        let planet = dropDown.value;
        for (let index = 0; index < planetNames.length; index++) {
            console.log(planetNames[index]);
            if(planetNames[index] === planet){
                contentImage.setAttribute('src', planetImageArray[index]);
                contentImage.style.cssText = 'display: flex; padding-top: 70px; padding-left: 50px; width: 350px;';
                header.style.cssText = 'margin-bottom: 10px;'
                // let innerSection = document.createElement('section');
                // innerSection.setAttribute('id', 'innerSection')
                // let answer = document.createElement('p');
                // answer.innerHTML = `The weight of the object on <span>${planet.toUpperCase()}</span>`;
                // let resultInnerSection = document.createElement('p');
                // resultInnerSection.textContent = (input.value * planetWeights[index]).toFixed(2).concat(' N');
                // console.log(resultInnerSection.textContent);
                // innerSection.appendChild(answer);
                // innerSection.appendChild(resultInnerSection);
                // contentDescription.textContent = `${innerSection}`;
                contentDescription.innerHTML = `
                <p id="innerSection">The weight of the object on <span id="description">${planet.toUpperCase()}</span></p>
                <br><div id="trial"><p id="answerSection"><span id="answer">${(input.value * planetWeights[index]).toFixed(2).concat(' N')}</span></p></div>
                `;
                contentDescription.style.cssText = 'background:rgba(128,128,128,0.3); color: white; width: 500px; height: 150px; margin-left: 440px; margin-top: -340px; padding-top: 3px;';
                let innerSection = document.querySelector('#innerSection');
                innerSection.style.cssText = 'text-align: center; height: 80px; ';
                let description = document.querySelector('#description');
                description.style.cssText = 'font-weight: bold; font-size: 15pt; color: white;';
                let answer = document.querySelector('#answer');
                answer.style.cssText = 'font-weight: bolder; font-size: 12pt; color: white; display: block; text-align: center; ';
                let answerSection = document.querySelector('#answerSection');
                answerSection.style.cssText = 'padding-top: 25px;';
                let trial = document.querySelector('#trial');
                trial.style.cssText = 'background:rgba(211,211,211,0.3); color: white; width: 80px; height: 80px; border-radius: 50%; margin-left: 220px; margin-top: -95px; font-weight:bold;';
            }
        }
    }
});

/**
 * figure out how to not use innerHTML 
 * arrange the image and the result text properly(for loop contents) (done)
 * figure out how to make only the background opaque and not the elements on top of it (done)
 * centering text (the answer needs to be centered inside the answer section)  (done)
 */