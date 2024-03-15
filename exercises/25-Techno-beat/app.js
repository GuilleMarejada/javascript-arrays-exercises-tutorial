// Your code here
function lyricsGenerator(notes){
    let lyrics=""
    let contador=0

    for(let i = 0; i<notes.length; i++){
        if(notes[i]==0){
        lyrics+="Boom "
        contador=0
    }
        else if(notes[i]==1){
        lyrics += "Drop the bass "
        contador+=1
    
            if(contador==3){
            lyrics += "!!!Break the bass!!! "
}
}
}
    return lyrics;
}

// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
