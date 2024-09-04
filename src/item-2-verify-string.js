const value = "Gabriel VieirA"

function checkExistence(st){
    let val = st.toLowerCase()
    let numChecked = val.match(/a/g)
    return numChecked.length
}

console.log(`A string informada teve a letra "a" informada ${checkExistence(value)} vezes`)