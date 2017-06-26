const bindEventButton = () => {
    var button = ".buttonToggle"
    bindAll(button, "click", function(event) {
        var self = event.target
        var offset = parseInt(self.dataset.offset)
        var picture = self.closest(".pictureToggle")
        var numberOfImgs = parseInt(picture.dataset.imgs)
        var showIndex = parseInt(picture.dataset.show)
        var nextIndex = (offset + numberOfImgs + showIndex) % numberOfImgs
        picture.dataset.show = nextIndex
        removeClassAll("show")
        removeClassAll("red")
        var nextImg = "#img-" + String(nextIndex)
        var nextDot = "#dot-" + String(nextIndex)
        e(nextImg).classList.add("show")
        e(nextDot).classList.add("red")
    })
}

const bindEventDot = () => {
    var dot = ".dot"
    bindAll(dot, "mouseover", function(event) {
        var self = event.target
        var index = self.dataset.index
        var picture = self.closest(".pictureToggle")
        picture.dataset.show = index
        removeClassAll("show")
        removeClassAll("red")
        var nextImg = "#img-" + index
        var nextDot = "#dot-" + index
        e(nextImg).classList.add("show")
        e(nextDot).classList.add("red")
    })
}

const autoPlay = () => {
    setInterval(function() {
        var picture = e(".pictureToggle")
        var numberOfImgs = parseInt(picture.dataset.imgs)
        var showIndex = parseInt(picture.dataset.show)
        var nextIndex = (showIndex + 1) % numberOfImgs
        picture.dataset.show = nextIndex
        removeClassAll("show")
        removeClassAll("red")
        var nextImg = "#img-" + String(nextIndex)
        var nextDot = "#dot-" + String(nextIndex)
        e(nextImg).classList.add("show")
        e(nextDot).classList.add("red")
    }, 3000)
}

const main = () => {
    bindEventButton()
    bindEventDot()
    autoPlay()
}

main()