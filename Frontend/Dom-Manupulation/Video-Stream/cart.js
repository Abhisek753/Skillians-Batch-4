let allMovies=[]
const moviesContainer=document.getElementById("movies-container")
async function getMoviesData(){
   try{
    const response=await fetch("http://localhost:3000/cart");
   allMovies=await response.json();
   console.log("cart movies",allMovies)
   displayMovies()
   }catch(err){
    console.log(err)
   }

};
// REMOVE CART DATA

async function removeFromCart(id) {
  try{
    await fetch(`http://localhost:3000/cart/${id}`,{
      method:"DELETE"
    })
   alert("Movie removed from cart");
   getMoviesData()
  }catch(err){
    console.log(err);
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
      <div class="movie-button">
       <button class="btn btn-remove">Remove</button>
      </div>
       
 </div>
 `
 let removeBtn=card.querySelector(".btn-remove");
 removeBtn.addEventListener("click",()=>{
  removeFromCart(movie.id);
 })

 moviesContainer.appendChild(card);


})

}
getMoviesData()