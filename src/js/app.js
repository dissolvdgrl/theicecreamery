const flavs = [
    { id: 1, name: 'Strawberry', bgColour: 'bg-strawberry', tub: 'strawberry_tub.png', circles: 'pink_circles.svg' },
    { id: 2, name: 'Cinnamon Chai', bgColour: 'bg-cinnamon', tub: 'cinnamon_tub.png', circles: 'cinnamon_circles.svg' },
    { id: 3, name: 'Chocolate', bgColour: 'bg-cinnamon bg-opacity-20', tub: 'choc_tub.png', circles: 'choc_circles.svg' },
    { id: 4, name: 'Choc Mint', bgColour: 'bg-cinnamon bg-opacity-40', tub: 'choc_mint_tub.png', circles: 'choc_mint_circles.svg' },
    { id: 5, name: 'Vanilla', bgColour: 'bg-white', tub: 'vanilla_tub.png', circles: 'vanilla_circles.svg' },
    { id: 6, name: 'Coffee', bgColour: 'bg-caramel', tub: 'coffee_tub.png', circles: 'cinnamon_circles.svg' }
];

window.flavours = () => {
    return {
        flavours: flavs,
        currentFlavour: flavs[0],
        nextFlavour: flavs[1],
        previousFlavour: flavs[5],
        bgColor: flavs[0].bgColour,

        next() {
            this.currentFlavour = this.currentFlavour.id === flavs.length ? flavs[0] : flavs[this.currentFlavour.id];

            this.nextFlavour = this.currentFlavour.id === flavs.length ? this.flavours[0] : this.flavours[this.currentFlavour.id];

            this.previousFlavour = this.currentFlavour.id === 1 ? flavs[5] : flavs[this.currentFlavour.id - 2];

            this.bgColor = this.currentFlavour.bgColour;
        },

        previous() {
            this.currentFlavour = this.currentFlavour.id === 1 ? flavs[5] : flavs[this.currentFlavour.id - 2];
            this.previousFlavour = this.currentFlavour.id === 1 ? flavs[5] : flavs[this.currentFlavour.id - 2];

            this.nextFlavour = this.currentFlavour.id === flavs.length ? this.flavours[0] : this.flavours[this.currentFlavour.id];

            this.bgColor = this.currentFlavour.bgColour;
        }
    }
}

function printEmail(className, first, last) {
    let emailAddress = `<a href="mailto:${first}@${last}" class="link">${first}@${last}</a>`;
    let span = document.querySelectorAll('.' + className), i;
    for (i = 0; i < span.length; ++i) {
        span[i].innerHTML = emailAddress;
    }
}

printEmail('epos', 'karin', 'theicecreamery.co.za');