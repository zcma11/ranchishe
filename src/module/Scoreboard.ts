class Scoreboard {
    score: number = 0
    level: number = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    maxLevel: number
    step: number

    constructor (maxLevel: number = 10, step: number = 6) {
        this.scoreEle = document.querySelector('.score > span') as HTMLElement
        this.levelEle = document.querySelector('.level > span') as HTMLElement
        this.maxLevel = maxLevel
        this.step = step
    }

    updateScoreBoard () {
        this.scoreEle.innerHTML = ++this.score + ''
        if (this.score % this.step === 0){
            this.levelUp()
        }
    }
    levelUp () {
        if (this.level === this.maxLevel) return 
        this.levelEle.innerHTML = ++this.level + ''
    }
}

export default Scoreboard