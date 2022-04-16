const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0,0,canvas.width, canvas.height)

const gravity = 0.5

class Sprite {
    // use object destructuring in constructor makes cleaner
    constructor({position, velocity}) {
        this.position = position,
        this.velocity = velocity,
            this.height = 150
    }
    draw() {
        c.fillStyle = 'red'
        // create new rectangle
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }
    update(){
        this.draw()
        // si ya esta en el piso
        if(this.position.y + this.height + this.velocity.y >= canvas.height) {
            //para de caer
            this.velocity.y = 0
        } else {
            // move pro frame
            this.position.y += gravity
        }
    }
}

const player = new Sprite({
    position: { x:0, y:190},
    velocity: { x:0, y:0}

})



const enemy = new Sprite({
    position: {x:400,
    y:200},
    velocity: { x:0, y:0}
})


console.log()
// create animation loop

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0,0, canvas.width, canvas.height)
    player.update()
    enemy.update()
    console.log('go')
}

animate()
// requestAnimationFrame()