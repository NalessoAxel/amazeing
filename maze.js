const body = document.querySelector('body')
body.className = 'body'
const wall = document.createElement('div')
wall.className = 'wall'
const paths = document.createElement('div')
paths.className = 'paths'
const start = document.createElement('div')
start.className = 'start'
const tresor = document.createElement('div')
tresor.className = 'Tresor'







const multiline = `***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********`

console.log(multiline.split(' ')) // ['line1", 'line2', 'line3']
console.log(multiline[0].split('')) // ['l', 'i', 'n', 'e', '1']



for (let i = 0; i < multiline.length; i++) {
    const line = document.createElement('div')
    //line.innerHTML = multiline[i].split('')
    line.className = 'ligne'



    if (multiline[i] == '*') {
        line.className = 'wall'
    }
    if (multiline[i] == '.') {
        line.className = 'paths'
    }
    if (multiline[i] == 'S') {
        line.className = 'Start'
    }
    if (multiline[i] == 'T') {
        line.className = 'Tresor'
    }

    body.appendChild(line)
    line.appendChild(start)

}

const player = document.createElement('div')
player.className = 'player'
document.querySelector("body > div.Start").appendChild(player)

let positionX = 17


document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        console.log(e)
        positionX++
        if (document.querySelector('body > div:nth-child(' + positionX + ')').classList.contains('wall')) {
            positionX -= 1
            document.querySelector('body > div:nth-child(' + positionX + ')').appendChild(player)
        } else {
            document.querySelector('body > div:nth-child(' + positionX + ')').appendChild(player)
        }

    }
    if (e.key === 'ArrowLeft') {
        console.log(e)
        positionX--
        if (document.querySelector('body > div:nth-child(' + positionX + ')').classList.contains('wall')) {
            positionX += 1
            document.querySelector('body > div:nth-child(' + positionX + ')').appendChild(player)
        } else {
            document.querySelector('body > div:nth-child(' + positionX + ')').appendChild(player)
        }


    }
    if (e.key === 'ArrowUp') {
        console.log(e)
        positionX -= 13
        if (document.querySelector('body > div:nth-child(' + positionX + ')').classList.contains('wall')) {
            positionX += 13
            document.querySelector('body > div:nth-child(' + positionX + ')').appendChild(player)
        } else {
            document.querySelector('body > div:nth-child(' + positionX + ')').appendChild(player)
        }

    }
    if (e.key === 'ArrowDown') {
        console.log(e)
        positionX += 13
        if (document.querySelector('body > div:nth-child(' + positionX + ')').classList.contains('wall')) {
            positionX -= 13
            document.querySelector('body > div:nth-child(' + positionX + ')').appendChild(player)
        } else {
            document.querySelector('body > div:nth-child(' + positionX + ')').appendChild(player)
        }

    }
    if(document.querySelector('body > div:nth-child(' + positionX + ')').classList.contains('Tresor')) {
        alert('You win!')
    }

})