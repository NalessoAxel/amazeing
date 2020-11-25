let level = 0

const level1 =
    `***********.*
*S.....**.*.T
*****.....*.* 
*****.***.*.* 
*****.*****.* 
*.....*****.* 
*****.......* 
*****.******* 
*.........*** 
*.******...** 
*....********`

const level2 = `**********************
*..S.................*
********************.*
*....................*
*.********************
*...................T*`


const level3 = `********
****S***
****.***
****.***
****.***
*......*
*.****.*
*..***.*
*..***.*
**.*****
*T.*****
********`

const level4 = 
`**********.******
**S..*****.******
****.*****.******
...........******
*****.***********
*****.......*****
***********.*****
****........*****
.....*****.******
**********.******
*T...............`

const level5 = 
`.*...........*.....
.*.*******.***.***.
.*...*...*.....*...
.***.*.*.*******.**
.....*S*.*.....*...
.*******.*.***.*.*.
.*.......*.*...*.*.
.***.*****.*.*****.
.....*...*.*.*...*.
****.*.*.*.*.*.*.*.
.*...*.*...*...*...
.*.***.*****.******
.....*...*...*.....
.*******.*****.***.
...*...*.......*...
****.*.***.*****.*.
.....*...*...*...*.
.*******.*****.***.
T*.............*...
`

const multiline = [level1, level2, level3, level4, level5]

const body = document.querySelector('body')
body.classList.add('body')
const main = document.createElement('main')
/* const time = document.createElement('div')
time.classList.add('time')
const p = document.createElement('p');
const button = document.createElement('input')
button.classList.add('button')
button.type = 'button'
button.value = 'start'
p.classList.add('timer') */
body.appendChild(main)
/* main.appendChild(time)
time.appendChild(p) */
let posX
let posY
/* let seconds = 0;
let minutes = 0;

function timer() {
    const para = document.querySelector('p')
    if (seconds >= 0) {
        para.textContent = 'Time: ' + seconds + ' s'
        if (seconds > 60) {
            para.textContent = 'Time: ' + minutes + ' mn ' + (seconds - (minutes * 60)) + ' s'
        }
    }
    if (seconds % 60 === 0 && seconds !== 0) {
        para.textContent = (minutes + 1) + ' mn'
        minutes++
    }
    seconds++
}
const interval = setInterval(timer, 1000)*/

let emptyArr = []

function leveling() {
    const lineArr = multiline[level].split('\n')

    for (let i = 0; i < lineArr.length; i++) {
        emptyArr[i] = []
        const lineDiv = document.createElement('div')

        lineDiv.classList.add('lineDiv')
        const line = lineArr[i]
        for (let j = 0; j <= line.length - 1; j++) {
            const characterDiv = document.createElement('div')
            emptyArr[i][j] = characterDiv
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
                const player = document.createElement('div')
                player.classList.add('player')
                characterDiv.appendChild(player)
                posX = j
                posY = i
            } else if (characterDiv.innerHTML == "T") {
                characterDiv.classList.add("tresor")
                characterDiv.classList.add('tile')
                characterDiv.innerHTML = ''
                tresorPosX = character.indexOf('T')
                tresorPosY = i
            }
        }
        main.appendChild(lineDiv)
    }
    console.log(emptyArr)
}

document.body.addEventListener('keydown', function (e) {
    const user = document.querySelector('.player')
    let destination
    if (e.code === 'ArrowLeft') {
        posX--
        destination = emptyArr[posY][posX]
        if (destination.classList.contains('wall')) {
            alert('Hit a wall bolosse')
            posX++
            destination = emptyArr[y][x]
          }
    }
    if (e.code === 'ArrowRight') {
        posX++
        destination = emptyArr[posY][posX]
        if (destination.classList.contains('wall')) {
            alert('Hit a wall bolosse')
            posX--
            destination = emptyArr[y][x]
          }
    }
    if (e.code === 'ArrowUp') {
        posY--
        destination = emptyArr[posY][posX]
        if (destination.classList.contains('wall')) {
            alert('Hit a wall bolosse')
            posY++
            destination = emptyArr[y][x]
          }
    }
    if (e.code === 'ArrowDown') {
        posY++
        destination = emptyArr[posY][posX]
        if (destination.classList.contains('wall')) {
            alert('Hit a wall bolosse')
            posY--
            destination = emptyArr[y][x]
          } 
        }
        destination.appendChild(user)

    if (destination.classList.contains('tresor')) {
        alert('you won badass next level up')
        posX = 0
        posY = 0
        destination = emptyArr[posY][posX]
        main.innerHTML = ''
        level++
        seconds = 0
        minutes = 0
        leveling()
        clearInterval(interval)

    }    
})

leveling()
