const asyncAction = () => {
    return new Promise((resolve, reject) => {
        const random = Math.floor(Math.random() * 100) + 1;

        setTimeout(() => {
            if (random <= 50) {
                resolve({
                    value: random,
                    status: "OK"
                });
            } else {
                reject({
                    value: random,
                    status: "ERROR",
                    errorMsg: "Value is greater then 50"
                });
            }
        }, 1250);
    });
};

/**

 */
const randomValue = document.querySelector("#random-value");
const message = document.querySelector("#message");

async function runAction() {
    try {
        let response = await asyncAction()
        console.log(response.status)
        if (response.status === "OK") {
            randomValue.innerText = response.status;
        }
    } catch (err) {
        message.innerText = err.status;
    }
}

runAction()