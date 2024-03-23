import {func} from "./img.js"
import {func2} from "./info.js"
import {func3} from "./card.js"


let b = document.getElementById("sectionTwo")

let Obj2={
    title2: "BABIES",
    img1: "../image/ruffruner.jpg",
    desc1: " Ruffrunner is easily the least curious and adventurous of the Night Lights. When not play-fighting with his brother Pouncer, he loves nothing more than to find a sunny spot to curl up and take a nap.",
    btn1: "Ruffruner",
    img2: "../image/pouncer.jpg",
    desc2: "Pouncer can create blinding flash of fire to distract his enemies. The ability appears to be unique to him.",
    btn2: "Pouncer",
    img3: "../image/dart.jpg",
    desc3: "The only female among the siblings, she has black as her predominant body color, while the medial and posterior areas are white, faintly tinged in pink.",
    btn3: "Dart"
}

let {title2, img1, desc1, btn1, img2, desc2, btn2, img3, desc3, btn3} = Obj2
b.append(func3(title2,img1,desc1,btn1,img2,desc2,btn2,img3,desc3,btn3)) 


