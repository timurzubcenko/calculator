const input = document.querySelector('#input')
const equals = document.querySelector('#equals')

function clickBtn(btn) {
    input.value += btn
}

function clearBtn() {
    input.value = ''
}

function clearOne() {
    input.value = input.value.slice(0, -1)
}

equals.addEventListener('click', equalsResult)

function equalsResult() {
    // console.log(input.value)
    let number = input.value

    // let arr = number.split('+')
    // if (arr.length > 1) {
    //     number = Number(arr[0]) + Number(arr[1])
    // }

    // arr = number.split('-')
    // if (arr.length > 1) {
    //     number = Number(arr[0]) - Number(arr[1])
    // }

    // arr = number.split('÷')
    // if (arr.length > 1) {
    //     number = Number(arr[0]) / Number(arr[1])
    // }

    // arr = number.split('×')
    // if (arr.length > 1) {
    //     number = Number(arr[0]) * Number(arr[1])
    // }

    if (number.includes('+')) {
        let arr = number.split('+')
        number = Number(arr[0]) + Number(arr[1])
    }
    else if (number.includes('-')) {
        let arr = number.split('-')
        number = Number(arr[0]) - Number(arr[1])
    }
    else if (number.includes('÷')) {
        let arr = number.split('÷')
        number = Number(arr[0]) / Number(arr[1])
    }
    else if (number.includes('×')) {
        let arr = number.split('×')
        number = Number(arr[0]) * Number(arr[1])
    }

    input.value = number
}