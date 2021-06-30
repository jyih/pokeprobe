window.addEventListener('DOMContentLoaded', (event) => {
  const fusionImg = document.getElementById('pokemon-random-img')
  const releaseButton = document.getElementById('pokemon-release-button')
  const catchButton = document.getElementById('pokemon-catch-button')

  /*
    :)
    -generate two numbers, each between 1-151
    Math.random() * (max - min) + min;
    -generate source URL from pokemon website containing the two numbers
    -assign image(src=url) to our image
    --happen upon load + release button
 
  */

  const generateDexNumber = () => {
    let max = 151
    let min = 1
    return Math.floor(Math.random() * (max - min) + min);
  }

  const generateFusionURL = (id1, id2) => {
    return `https://images.alexonsager.net/pokemon/fused/${id1}/${id1}.${id2}.png`
  }

  const generateFusionData = () => {
    let fusion = {}
    fusion.id1 = generateDexNumber();
    fusion.id2 = generateDexNumber();
    fusion.fusionUrl = generateFusionURL(fusion.id1, fusion.id2)

    fusionImg.src = fusion.fusionUrl

    console.log(fusion);
    return fusion
  }

  let fusionData = generateFusionData();

  releaseButton.addEventListener('click', event => {
    fusionData = generateFusionData();
  })



})