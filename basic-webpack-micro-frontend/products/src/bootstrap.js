import faker from "faker";

const mount = (el) => {
    let products = "";
    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
}


// Situation 1: Local Development
// Utilizes ./public/index.html
if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#products-dev");
    if (el) {
        mount(el)
    }
}

// Situation 2: Production
// Utilizes container app to render content
export {mount};