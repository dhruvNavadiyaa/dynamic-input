const formElement = document.getElementById('form')

function createElment(arr) {
    console.log(arr.type)
    switch (arr.type) {
        // case 'text':
        //     let label = `<label id=${arr.id}>${arr.labelText} </label>`
        //     let inputField = `<input type='text' id=${arr.id} name=${arr.name} placeHolder=${arr.placeHolder} class=${arr.className} required=${arr.isrequired}/>`
        //     formElement.innerHTML = label + inputField 
        case 'email':
        case 'password':
        case 'text': {
            let newDiv = document.createElement("div")
            if (arr.labelText) {
                let label = document.createElement('label');
                label.setAttribute('for', arr.id);
                label.innerText = arr.labelText + ' ';
                newDiv.appendChild(label);
            }
            let inputElement = document.createElement('input');
            for (const key in arr) {
                inputElement.setAttribute(key, arr[key]);
                // console.log(inputElement);
            }
            newDiv.appendChild(inputElement);
            formElement.appendChild(newDiv)
            break;
        }
        case 'radio': {
            let newDiv = document.createElement("div")
            if (arr.mainTitle) {
                let title = document.createElement("p")
                title.innerText = arr.mainTitle
                newDiv.appendChild(title)
            }
            for (const item of arr.gender) {
                let radio = document.createElement('input');
                console.log(item)
                for (const key in item) {
                    radio.setAttribute(key, item[key]);
                }
                let label = document.createElement('label')
                label.innerText = item.labelName
                label.setAttribute('for', item.id)
                newDiv.appendChild(radio)
                newDiv.appendChild(label)
            }
            formElement.appendChild(newDiv)
            break;
        }
        case 'select': {
            let newDiv = document.createElement("div");
            let select = document.createElement('select');
            for (const item of arr.country) {
                let option = document.createElement('option')
                option.innerHTML = item.labelName
                option.setAttribute('value', item.value);
                select.appendChild(option)
            }
            newDiv.appendChild(select)
            formElement.appendChild(newDiv)
        }
    }
}

const forrmArray = { type: 'text', id: 'name', name: 'name', labelText: 'Name', placeHolder: 'Enter name', class: 'text-black', required: true }
const radioButton = {
    type: 'radio',
    mainTitle: 'Gender',
    gender: [
        { type: 'radio', id: 'male', name: 'gender', labelName: 'Male', value: 'male' },
        { type: 'radio', id: 'female', name: 'gender', labelName: 'Female', value: 'female' },
        { type: 'radio', id: 'other', name: 'gender', labelName: 'Other', value: 'other' }
    ]
}
const checkBox = {
    type: 'select',
    mainTitle: 'Country',
    id: 'country',
    country: [
        { labelName: 'India', value: 'india' },
        { labelName: 'Canada', value: 'canada' },
        { labelName: 'Australia', value: 'australia' },
    ]
}

createElment(forrmArray)
createElment(radioButton)
createElment(checkBox)