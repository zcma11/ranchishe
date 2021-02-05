class Snake {
    element: HTMLElement
    head: HTMLElement
    body: HTMLCollection
    isLive: boolean = true
    stop: boolean = false

    constructor () {
        this.element = document.getElementById('snake')!
        this.head = this.element.querySelector('div')!
        this.body = this.element.getElementsByTagName('div')
    }

    headMove (direciton: string) {
        switch (direciton) {
            case "ArrowUp":
            case "Up": 
                this.Y -= 10
                this.stop = false
                break
            case "ArrowLeft":
            case "Left": 
                this.X -= 10
                this.stop = false
                break
            case "ArrowDown":
            case "Down": 
                this.Y += 10
                this.stop = false
                break
            case "ArrowRight":
            case "Right": 
                this.X += 10
                this.stop = false
                break
            case '': break
            default:
                this.stop = true
                break;
        }
    }

    isHealth (val: number, XY: number, offsetLeft: string): number {
        if (val < 0 || val > 290) this.dead()
        if (this.body[1] && val === (this.body[1] as any)[offsetLeft]) {
            console.log(1111);
            if (val > XY) {
                val = XY - 10
            } else {
                val = XY + 10
            }
        }
        if (this.body.length > 4) this.collisionDetection()
        this.bodyMove()
        return val
    }

    dead () {
        this.isLive = false
        throw Error
    }

    collisionDetection () {
        const headX = this.X
        const headY = this.Y
        for (let i=3; i<this.body.length-1; i++) {
            const body = this.body[i] as HTMLElement
            if (headX === body.offsetLeft && headY === body.offsetTop) {
                this.dead()
            }
        }
    }

    bodyMove () {
        for (let i=this.body.length-1; i>0; i--) {
            const lastBody = this.body[i-1] as HTMLElement
            const body = this.body[i] as HTMLElement
            body.style.left = lastBody.offsetLeft + 'px'
            body.style.top = lastBody.offsetTop + 'px'
        }
    }

    GrowUp () {
        const div = document.createElement('div')
        this.element.insertAdjacentElement('beforeend', div)
    }

    get X () {
        return this.head.offsetLeft
    }

    set X (val) {
        if (this.X === val) return
        try {
            val = this.isHealth(val, this.X, 'offsetLeft')
            this.head.style.left = val + 'px'
        } catch (e) {}
    }

    get Y () {
        return this.head.offsetTop
    }

    set Y (val) {
        if (this.Y === val) return
        try {
            val = this.isHealth(val, this.Y, 'offsetTop')
            this.head.style.top = val + 'px'
        } catch (e) {}
    }
}

export default Snake