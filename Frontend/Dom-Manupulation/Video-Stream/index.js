
let allMovies=[]
const moviesContainer=document.getElementById("movies-container")
async function getMoviesData(){
   try{
    const response=await fetch("http://localhost:3000/movies");
   allMovies=await response.json();
   displayMovies()
   }catch(err){
    console.log(err)
   }

};
async function handlCart(movie){

 try{
   await fetch("http://localhost:3000/cart",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(movie)

   });
  alert("Movies Added to cart")
 
   }catch(err){
    console.log(err)
   }
}

function displayMovies(){
 if(!moviesContainer){
   console.log("Movies container is missing")
 }

 if(!allMovies|| allMovies.length==0){
    moviesContainer.innerHTML=`<p>No movies available</p>`
    return
 }
allMovies.forEach(movie=>{
 const card=document.createElement("div");
 card.className="movie-card";
 card.innerHTML=`
 <div class="movie-poster">
 <img src=${movie.poster} alt=${movie.title} class="movie-poster-img">
 </div>
 <div class="movie-info">
   <div class=" movie-title">${movie.title}</div>
     <div class=" movie-year">${movie.year}</div>
      <div class=" movie-genre">${movie.Category}</div>
       <div class=" movie-rating">${movie.rating}⭐</div>
       <div class="movie-buttons">
       <button class="btn btn-cart"> 🛒Cart</button>
        <button class="btn btn-favourite">❤️Favourite</button>
       </div>
 </div>
 `
 let cartBtn=card.querySelector(".btn-cart");
 cartBtn.addEventListener("click",()=>{
    handlCart(movie)
 })
 moviesContainer.appendChild(card);


})

}

getMoviesData()