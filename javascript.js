const shaping = document.getElementById('shapingcost');
const harga = document.getElementById('price');
const total = document.getElementById('subtotal');

let Cake = document.getElementById('cake');
let Destination = document.getElementById('destination');
let Purches = document.getElementById('Purches');
let Member = document.getElementById('purcher').Checked;

const price = document.getElementById('price');
let ChooseCake = document.getElementById('cake');
ChooseCake.addEventListener('change', (event) => {
    switch (event.target.value) {
        case "durian":
            price.value = 6000
            break;

        case "mangga":
            price.value = 4000
            break

        case "strawbary":
            price.value = 5000
            break;
    }
})