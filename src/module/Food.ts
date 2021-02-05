class Food {
    element: HTMLElement

    constructor () {
        this.element = document.getElementById('food')!
    }

    get X () {
        return this.element.offsetLeft
    }

    set X (val) {
        this.element.style.left = val + 'px'
    }

    get Y () {
        return this.element.offsetTop
    }

    set Y (val) {
        this.element.style.top = val + 'px'
    }

    addFood () {
        this.X = Math.floor(Math.random() * 30) * 10
        this.Y = Math.floor(Math.random() * 30) * 10
    }
}

export default Food