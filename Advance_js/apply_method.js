const youtuber1 ={
    name:"technical3",
    content : "programming3",
    feature : function (rating,play) {
            console.log(`my fav youtuber name is ${this.name}. She made videos on ${this.content} topics. I love to give ${rating}. He likes to play game ${play}`);
    }
}


const youtuber2 ={
    name:"lovely",
    content:"programming language"
}

// youtuber1.feature.call(youtuber2,3,"kho")
youtuber1.feature.apply(youtuber2,[3,"football"])