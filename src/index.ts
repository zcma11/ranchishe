import './index.less'

import Food from './module/Food';
import ScoreBoard from './module/ScoreBoard';
import Snake from './module/Snake';

class centralControlUnit {
    food: Food
    scoreBoard: ScoreBoard
    snake: Snake
    direction: string = ''
    label: HTMLCollection

    constructor() {
        this.food = new Food()
        this.scoreBoard = new ScoreBoard()
        this.snake = new Snake()
        this.label = document.getElementsByTagName('p')
    }

    controler () {
        if (!this.snake.isLive) {
            for (let i=0; i<this.label.length; i++) {
                this.label[i].className = 'hide'
            }
            this.label[3].className = ''
        } else if (this.direction !== '') {
            console.log('pp');
            this.label[0].className = 'hide'

            if (this.snake.stop) {
                if (this.label[2].className === '') return
                this.label[1].className = 'hide'
                this.label[2].className = ''
            } else {
                if (this.label[1].className === '') return
                this.label[2].className = 'hide'
                this.label[1].className = ''
            }
        }
    }

    init () {
        this.food.addFood()
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    keydownHandler (event: KeyboardEvent) {
        this.direction = event.key
    }

    run() {
        this.checkEat()
        this.snake.headMove(this.direction)
        this.controler()
        this.snake.isLive && setTimeout(this.run.bind(this), 300 - (this.scoreBoard.level*20));
        this.snake.isLive || alert('Game Over')
    }

    checkEat () {
        if (this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
            this.food.addFood()
            this.snake.GrowUp()
            this.scoreBoard.updateScoreBoard()
        }
    }
}

const ccu = new centralControlUnit()
ccu.init()
