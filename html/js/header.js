const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const wrapper = document.getElementById("wrapper");




const context = canvas.getContext("2d");

const frameCount = 61;
let i = 0;
console.log(`/Kom_fix3/Komp_${i.toString().padStart(4, '0')}.png`);
const currentFrame = index => (
  `assets/Kom_fix3/Komp_${index.toString().padStart(4, '0')}.png`
)

const preloadImages = () => {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(0);
canvas.width=2100;
canvas.height=2100;


img.onload=function(){
  context.drawImage(img, 0, 0);
}
  
let spinner = document.querySelector("#spinner");

const updateImage = index => {
  img.src = currentFrame(index);
  img.onload=function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0);
  }  
}

const updateSpinner = fracion=>{
  if(spinner)
    if(fracion==0){
      document.querySelector("svg").style.opacity = 0;
    }else{
      document.querySelector("svg").style.opacity = 1;

    }
  spinner.setAttribute("stroke-dasharray",`${ fracion*3000},3000`)
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = wrapper.clientHeight*0.6;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  let spinnerProg = Math.min(1,Math.max(scrollFraction*scrollFraction*3.0 -0.4,0))
  requestAnimationFrame(() => updateImage(frameIndex))
  requestAnimationFrame(() => updateSpinner(spinnerProg));

});

preloadImages()