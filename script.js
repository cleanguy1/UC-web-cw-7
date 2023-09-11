const movie1 = {
    name: "SpongPop",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
}
const movie2 = {
    name: "how to train your dragon",
    img: "https://m.media-amazon.com/images/S/pv-target-images/7c94ef5a5565694e201ce737e430a1a39f5bc27394c6d1144ef530067b1aab0c.jpg"
}
const movie3 = {
    name: "Oppenheimer",
    img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
}
let moviesContainer = document.getElementById('container')
let movies = [movie1, movie2, movie3];



movies.forEach((movies) => {

    moviesContainer.innerHTML +=
        <
        div class = "movie" >
        <
        img src = "${movies.img}"
    alt = "movie picture" / >
        <
        h2 > $ { movies.name } < /h2> <
        /div>;
});
let randomMovie = document.getElementById("ks")

let random = Math.floor(Math.random() * movies.length);

if (random == 1) {
    randomMovie.innerHTML = < div class = "movie" > < img src = "https://m.media-amazon.com/images/S/pv-target-images/7c94ef5a5565694e201ce737e430a1a39f5bc27394c6d1144ef530067b1aab0c.jpg"
    alt = "" >
        <
        h2 > how to train your dragon "</h2> <
        /div>

} else if (random == 0) {
    randomMovie.innerHTML = < div class = "movie" > < img src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
    alt = "" >
        <
        h2 > SpongeBob < /h2> <
        /div>



} else {
    randomMovie.innerHTML = < div class = "movie" > < img src = "https://movies.universalpictures.com/media/06-opp-dm-mobile-banner-1080x745-now-pl-f01-071223-64bab982784c7-1.jpg"
    alt = "" >
        <
        h2 > Oppenheimer < /h2> <
        /div>

    console.log("hieenndjh");
}