function listOfPropieties(obj){
    let result = `Sample Output: `;
    for(const [key,value] of Object.entries(obj))
    {
        result+=`${value},`;
    }
    console.log(result);
}
let testObj = {
    val1: 'val1',
    val2: 'val2',
    val3: '3'
}

function delateRollno(obj) {
    console.log(obj);
    delete obj.rollno;
}
let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
}];
function displayStatusBook(bookTable){
    bookTable.forEach(bookObj => {
        console.log(`${bookObj.title} by ${bookObj.author}. It is ${bookObj.readingStatus} that book is read`);
    });
}

function cilinderVolume(obj){
    let volume = obj.radius * obj.radius * obj.height * Math.PI;
    volume = Math.round(volume * 10000)/10000;
    return console.log(volume);
}

let cilinderObj = {
    radius: 3,
    height: 10
}

