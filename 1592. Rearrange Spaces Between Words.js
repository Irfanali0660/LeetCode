var reorderSpaces = function(text) {
let word=text.split('')
let space=[]
let txt=text.split(' ').filter((elem)=>elem!='')
word.forEach(element => {
    if(element==' '){
        space.push(element)
    }
});
let count=space.length/(txt.length-1)
let result=''
for (let i = 0; i < txt.length; i++) {
    let textVal=txt[i]
    for (let j = 0; j < count; j++) {
        textVal+=' '
    }
    result+=textVal
}
return result
};

console.log(reorderSpaces(" practice   makes   perfect"));