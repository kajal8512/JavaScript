// const youtuber ={
//     name:"technical",
//     content : "programming", 
//     feature : function () {
//         console.log(`my fav youtuber name is ${this.name}. he made videos on ${this.content} topics.`)
//     }
// }
// // youtuber.feature();

// // using binding function

// let youtuberFun2=youtuber.feature.bind(youtuber);
// youtuberFun2();





const youtuber1 ={
        name:"technical1",
        content : "programming1"
}

const youtuber2 ={
    name:"technical2",
    content : "programming2"
}

const youtuber3 ={
    name:"technical3",
    content : "programming3"
}

function feature(rating) {
            console.log(`my fav youtuber name is ${this.name}. he made videos on ${this.content} topics. I love to give ${rating}.`)
}

let you1 =feature.bind(youtuber2);
you1(3);