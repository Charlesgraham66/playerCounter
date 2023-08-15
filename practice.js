let saving = document.getElementById("saver")
let counting = document.getElementById("counter")
let count = 0

function increment() {
    count += 1
    counting.textContent = count
}

function save() {
    let countStr = count + " - "
    saving.textContent += countStr
    counting.textContent = 0
    count = 0
    console.log(count)
}

