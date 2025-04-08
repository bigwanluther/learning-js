// Task Two

// Movie Watchlist Manager

// Each movie should have: id, title, genre, year, watched (boolean)

// Features:

// Add a movie
// Mark as watched/unwatched
// List by genre or watched status
// Delete movie
// Sort by year or title


let movieList = [{
    id: 1,
    title: "matrix",
    genre:"fight",
    year:2020,
    watched:true
}]


function addMovie(title,genre,year,watched){
    let id = movieList.length +1
    let movieD = {
        id: id,
        title: title,
        genre:genre,
        year:year,
        watched:watched
    }

    movieList.push(movieD)

}
addMovie("luther the fallen sun","historical",2025,"false")
addMovie("last man","historical",2021,"false")
addMovie("betrayal","historical",2025,"true")
addMovie("den of thieves","historical",2026,"false")
addMovie("bruce lee","historical",2000,"true")

console.log("after adding movie",movieList)



function deletMovie(){
    return movieList.filter(movieList => movieList.id !== 4)
   
    
}



console.log("AFTER DELETING", deletMovie(movieList));