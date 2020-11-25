const level1 = `***********.*
*S.....**.*.T
*****.....*.* 
*****.***.*.* 
*****.*****.* 
*****.*****.* 
*****.......* 
*****.******* 
*.........*** 
*.******...** 
*....********`


const body = document.querySelector('body')
body.classList.add('body')
const main = document.createElement('main')
const time = document.createElement('div')
time.classList.add('time')
const p = document.createElement('p');
p.classList.add('timer')
body.appendChild(main)

let seconds = 0;
let minutes = 0;

function timer() {
    const para = document.querySelector('p')
    if (seconds >= 0) {
        para.textContent = 'time ' + seconds + ' s'
        if (seconds > 60) {
            para.textContent = 'time ' + minutes + ' mn ' + (seconds - (minutes * 60)) + ' s'
        }
    }
    if (seconds % 60 === 0 && seconds !== 0) {
        para.textContent = (minutes + 1) + ' mn'
        minutes++
    }
    seconds++
}
const interval = setInterval(timer, 1000)



const lineArr = level1.split('\n')

for (let i = 0; i <= lineArr.length - 1; i++) {
    const lineDiv = document.createElement('div')
    lineArr[i] == '*'
    lineDiv.classList.add('lineDiv')
    const line = lineArr[i]
    for (let j = 0; j <= line.length - 1; j++) {
        const characterDiv = document.createElement('div');
        const character = line.split('');
        characterDiv.innerHTML = character[j];
        lineDiv.appendChild(characterDiv)
        if (characterDiv.innerHTML == "*") {
            characterDiv.classList.add('wall')
            characterDiv.classList.add('tile')
            characterDiv.innerHTML = ''
        } else if (characterDiv.innerHTML == '.') {
            characterDiv.classList.add('paths')
            characterDiv.classList.add('tile')
            characterDiv.innerHTML = ''
        } else if (characterDiv.innerHTML == "S") {
            characterDiv.classList.add("start")
            characterDiv.classList.add('tile')
            characterDiv.innerHTML = ''
        } else if (characterDiv.innerHTML == "T") {
            characterDiv.classList.add("tresor")
            characterDiv.classList.add('tile')
            characterDiv.innerHTML = ''
            //tresorPosX = character.indexOf('T')
            //tresorPosY = i
        }
    }
    main.appendChild(lineDiv)
}



main.appendChild(time)
time.appendChild(p)
const player = document.createElement('div')
player.classList.add('player')
document.querySelector("body > main > div:nth-child(2) > div.start.tile").appendChild(player)

let posX = 2
//posX += tresorPosX +1
let posY = 2
//posY += tresorPosY +1


document.body.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowLeft') {
        console.log(e)

        if (document.querySelector('body > main > div:nth-child(' + posY + ')> div:nth-child(' + (posX - 1) + ')').classList.contains('wall')) {
            console.log('Hit a wall bolosse!')


        } else {
            posX--
            document.querySelector('body > main > div:nth-child(' + posY + ')> div:nth-child(' + posX + ')').appendChild(player)
        }
    }

    if (e.code === 'ArrowRight') {
        if (document.querySelector('body > main > div:nth-child(' + posY + ')> div:nth-child(' + (posX + 1) + ')').classList.contains('wall')) {
            console.log('Hit a wall bolosse!')

        } else {
            posX++
            document.querySelector('body > main > div:nth-child(' + posY + ')> div:nth-child(' + posX + ')').appendChild(player)
        }
    }
    if (e.code === 'ArrowUp') {
       /*  if (posY >= lineArr.length) {
            posY-- */
            if (document.querySelector('body > main > div:nth-child(' + (posY - 1) + ')> div:nth-child(' + (posX) + ')').classList.contains('wall')) {
                console.log('Hit a wall bolosse!')

            } else {
                posY--
                document.querySelector('body > main > div:nth-child(' + posY + ')> div:nth-child(' + posX + ')').appendChild(player)
            }
        
    }
    if (e.code === 'ArrowDown') {
        /* if (posY <= lineArr.length) {
            posY++ */
            if (document.querySelector('body > main > div:nth-child(' + (posY + 1) + ')> div:nth-child(' + posX + ')').classList.contains('wall')) {
                console.log('Hit a wall bolosse!')

            } else {
                posY++
                document.querySelector('body > main > div:nth-child(' + posY + ')> div:nth-child(' + posX + ')').appendChild(player)
            }
        
    }
    /* if (document.querySelector("body > main > div:nth-child(" + posY + ") > div.tresor > div")){
        alert ('You Won Little Lucky Guy ! ')
        }  */
    

})
