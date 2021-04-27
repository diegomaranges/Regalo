/* FIRST LANDING */
let p1, p2, p3, p4, p5, p6, p7, img, div;
p1 = document.getElementById("p1");
p2 = document.getElementById("p2");
p3 = document.getElementById("p3");
p4 = document.getElementById("p4");
p5 = document.getElementById("p5");
p6 = document.getElementById("p6");
p7 = document.getElementById("p7");
img = document.getElementById("img");
div = document.getElementById("div");

let remuveElementsFromBody = () => {
    p1.classList.remove("text-focus-in");
    p1.classList.add("text-blur-out");
    let count = 0;
    [p2, p3, p4, p5, p6, img, p7].forEach(e => {
        setTimeout(() => {
            e.classList.remove("text-focus-in");
            e.classList.add("text-blur-out");
        }, count + 500);
        count += 500;
        console.log(count);
    });
}

let quitElements = () => {
    [p1, p2, p3, p4, p5, p6, img, p7, div].forEach(e => {
        e.classList.add("d-n");
    });
}

/* SECOND LANDING */
let p8, p9, p10, p11, p12;
p8 = document.getElementById("p8");
p9 = document.getElementById("p9");
p10 = document.getElementById("p10");
p11 = document.getElementById("p11");
p12 = document.getElementById("p12");
h2_1 = document.getElementById("h2-1");
h2_2 = document.getElementById("h2-2");
h2_3 = document.getElementById("h2-3");

let loadSendLanding = () => {
    p8.classList.add("text-focus-in-2", "d-b", "visible");
    let count = 0;
    [p9, p10, p11, p12, h2_1, h2_2, h2_3].forEach(e => {
        setTimeout(() => {
            e.classList.add("text-focus-in-2", "d-b", "visible");
        }, count + 500);
        count += 500;
    });
}

let remuveElementsFromBody2 = () => {
    p8.classList.remove("text-focus-in-2");
    p8.classList.add("text-blur-out");
    let count = 0;
    [p9, p10, p11, p12, h2_1, h2_2, h2_3].forEach(e => {
        setTimeout(() => {
            e.classList.remove("text-focus-in-2");
            e.classList.add("text-blur-out");
        }, count + 500);
        count += 500;
        console.log(count);
    });
}

let quitElements2 = () => {
    [p8, p9, p10, p11, p12, h2_1, h2_2, h2_3].forEach(e => {
        e.classList.remove("d-b");
        e.classList.add("d-n");
    });
}

/* THIRD LANDING */
let finalH2, iframe, h3;
finalH2 = document.getElementById("finalH2");
iframe1 = document.getElementById("iframe1");
iframe2 = document.getElementById("iframe2");
h3 = document.getElementById("h3");


let loadThLanding = () => {
    [finalH2, iframe1, iframe2, h3].forEach(e => {
            e.classList.remove("d-n");
    });
    finalH2.classList.add("text-focus-in-2", "d-b", "visible");
    let count = 0;
    [iframe1, iframe2, h3].forEach(e => {
        setTimeout(() => {
            e.classList.add("text-focus-in-2", "d-b", "visible");
        }, count + 500);
        count += 500;
    });
}

/* Event! */
let numberOfClicks = 0;

document.getElementById("body").addEventListener("click", () => {
    switch (numberOfClicks) {
        case 0:
            p1.classList.add("text-focus-in", "visible");
            break;
        case 1:
            p2.classList.add("text-focus-in", "visible");            
            break;
        case 2:
            p3.classList.add("text-focus-in", "visible");        
            break;
        case 3:
            p4.classList.add("text-focus-in", "visible");        
            break;
        case 4:
            p5.classList.add("text-focus-in", "visible");            
            break;
        case 5:
            p6.classList.add("text-focus-in", "visible");            
            break;
        case 6:
            img.classList.add("text-focus-in", "visible");            
            break;
        case 7:
            p7.classList.add("text-focus-in", "visible");            
            break;
        case 8:
            remuveElementsFromBody();
            setTimeout(() => {loadSendLanding(); quitElements();}, 4500)
            break;
        case 9:
            remuveElementsFromBody2();
            setTimeout(() => {loadThLanding(); quitElements2();}, 5000)
            break;
        default:
            break;
    }
    ++numberOfClicks;
});
