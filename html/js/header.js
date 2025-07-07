const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const wrapper = document.getElementById("wrapper");




const context = canvas.getContext("2d");
canvas.width=600;
canvas.height=600;

const frameCount = 61;
let i = 0;
console.log(`/Kom_fix3/Komp_${i.toString().padStart(4, '0')}.png`);
const currentFrame = index => (
  `assets/Kom_fix3/Komp_${index.toString().padStart(4, '0')}.png`
)

const imgs = [];
const preloadImages = async () => {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    img.onload=function(){
        const canv = new OffscreenCanvas(canvas.width, canvas.height);
        const ctx = canv.getContext("2d");
        ctx.drawImage(img, 0, 0,canvas.width,canvas.height);
        imgs[i] = ctx.getImageData(0, 0, canvas.width, canvas.height)
    }

  }
};

const img = new Image()
img.src = currentFrame(0);



img.onload=function(){
  context.drawImage(img, 0, 0,600,600);
}
  
let spinner = document.querySelector("#spinner");

const updateImage = index => {
  let img = imgs[index];
 // context.clearRect(0, 0, canvas.width, canvas.height);
 //  context.drawImage(img, 0, 0,1000,1000);
  context.putImageData(img,0,0)

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

let lastFrameIndex = -1;



 window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
const maxScrollTop = wrapper.clientHeight*0.6;
 const scrollFraction = scrollTop / maxScrollTop;
   const frameIndex = Math.min(
    frameCount - 1,
     Math.ceil(scrollFraction * frameCount)
   );

  let spinnerProg = Math.min(1,Math.max(scrollFraction*scrollFraction*3.0 -0.4,0))
    requestAnimationFrame(() => updateSpinner(spinnerProg));

  if (frameIndex !== lastFrameIndex) {
     requestAnimationFrame(() => updateImage(frameIndex));
     lastFrameIndex = frameIndex;
  }

 }, {passive:true});

preloadImages()