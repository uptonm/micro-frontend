import faker from "faker";

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`

    el.innerHTML = cartText;
}


// Situation 1: Local Development
// Utilizes ./public/index.html
if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#cart-dev");
    if (el) {
        mount(el)
    }
}

// Situation 2: Production
// Utilizes container app to render content
export {mount};