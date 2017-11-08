const scoreLabel = 'Score: '
const amounts = {
    target: 10,
    mole: 25
}
let launchId;
let prevLaunchId;
let collected = 0;
let score = 0;

export default class {
    constructor({game, x, y}) {

        this.create(x, y)
    }

    create(x, y) {
        this.text = game.add.text(x, y, scoreLabel + score)
        this.text.font = 'Fugaz One'
        this.text.fontSize = 30
        this.text.fill = '#babb9d'
        this.text.smoothed = false
    }

    add(type) {
        collected++
        score += amounts[type] * ((launchId === prevLaunchId) ? collected : 1)
        this.text.setText(scoreLabel + score)
        prevLaunchId = launchId
    }

    setLaunchId(_id) {
        launchId = _id
        collected = 0
    }

    update() {

    }
}
