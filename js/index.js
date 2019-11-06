// Your code goes here
let bus = document.querySelector("#bus");
let textContent = document.querySelector(".text-content");

// console.log(bus);

// bus.addEventListener('mousedown', () => {
//     bus.style.height = "500px";
// })


// bus.addEventListener('mouseup', () => {
//     bus.style.height = "auto";
// })



bus.addEventListener('dblclick', () => {
    bus.style.border = "4px solid black"

})

textContent.addEventListener('mousedown', () => {
    textContent.style.background = "dodgerblue"
    textContent.style.color = "white"
})

textContent.addEventListener('mouse', () => {
    textContent.style.background = "dodgerblue"
    textContent.style.color = "dodgerblue"
})

//Matrix

let p = document.querySelector(".container .intro p");
console.log(p);

let str = p.textContent.split(" ");
console.log(str);

let char = [];
for (let i = 0; i < str.length; i++) {
    char.push(str[i].split());
}

// char.forEach(element => {
//     console.log(element);
// })
console.log(char);


p.textContent = ""
let charIndex = 0
char.forEach(element => {
    if (element === "") {
        `${element} `
    } else {
        p.innerHTML += `<span class="matrix${charIndex++}">${element} </span>`
    }
})

p.style.userSelect = "none";


p.addEventListener('click', () => {
    console.log("clicked");
    alert("Start Matrixify")
    var i = 0, howManyTimes = char.length - 1, string = 0;
    function c() {
        console.log("initalized forLoop");
        // let string = Math.round(Math.random() * char.length - 1);

        // select string
        let matrix = `.matrix${string}`
        let dir = Math.round(Math.random());
        let ang = Math.round(Math.random());
        speed = 8;
        let pixels = 0;

        let selection = document.querySelector(matrix);

        selection.style.color = "seagreen";
        selection.style.background = "black";
        selection.style.position = "relative";
        selection.style.userSelect = "none;"


        function f() {

            if (ang === 0) {
                selection.style.left = `${pixels += speed}px`
            } else {
                selection.style.right = `${pixels += speed}px`
            }

            if (dir === 0) {
                selection.style.bottom = `${pixels += speed}px`
            } else {
                selection.style.top = `${pixels += speed}px`
            }

            // if (selection.style.bottom <= "5px" || selection.style.top <= "5px") {
            //     setTimeout(f, 1);
            // } else {
            //     selection.style.visibility = "hidden";
            // }



        }
        f();
        if (i < howManyTimes) {
            string++
            setTimeout(c, 1);


        }
    }

    c();



})

console.log(p.innerHTML);

// console.info(header.innerHTML);

let body = document.querySelector("body");
body.addEventListener("contextmenu", () => {
    body.style.background = "red";
})

let btn = document.querySelectorAll('.btn');

btn.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.textContent = "OUCH!"
        element.addEventListener("wheel", () => {
            element.textContent = "I'm dizzy!"
        })
    })
    element.addEventListener('mouseout', () => {
        element.textContent = "That hurt!"

    })
    element.addEventListener('mousedown', () => {
        element.textContent = "I'm not a real button"
    })
    element.addEventListener('mouseup', () => {
        element.textContent = "WHAT?!"
    })
    element.addEventListener("online", () => {
        element.textContent = "Fully Operational"
    })
    element.addEventListener("ofline", () => {
        element.textContent = "System Error"
    })
})

