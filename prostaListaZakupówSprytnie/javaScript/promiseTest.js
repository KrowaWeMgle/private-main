const testPromise = new Promise(function(resolve,reject){
    const res = true;
    if(res){
        resolve('Resolved1!');
    }
    else {
        reject(Error('Erro1r'));
    }
});

const testPromise2 = new Promise(function(resolve,reject){
    const res = true;
    if(res){resolve('Resolved2!');}
    else{reject(Error('testErro2r'));}
})
const testPromise3 = new Promise(function(resolve,reject){
    const res = true;
    if(res){
        resolve('Resolved3!');
    }
    else {
        reject(Error('Error3'));
    }
})
/*
testPromise.then((res) => console.log(res));
testPromise.catch((err) => console.log(err));
*/
const promiseTable = [testPromise,testPromise2, testPromise3];
Promise.all(promiseTable).then(function(res){
    res.forEach(ele => console.log(ele));
});
Promise.all(promiseTable).catch(function(err){
     console.log(err);
});

function helloWorld(){
    return new Promise(function(resolve){
        setTimeout(function(){resolve('Hello World!')}, 5000);
    })
};

async function afun1() {
    const messege = await helloWorld();
    console.log('Message:', messege);
}
