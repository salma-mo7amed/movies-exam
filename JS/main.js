// select the elements globally that i will use in any function:

let searchInput= document.querySelector("#searchInput");
let allMovies=[];
const imageurl= "https://image.tmdb.org/t/p/original"
const mydiv= document.querySelector(".row");
let mymovie=""

// api 

const options = {
     method: 'GET',
     headers: {
       accept: 'application/json',
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDFiNzk3ZjVmOWYwNjE4ZmE1YzFiMmU1YTMzMjI2OCIsInN1YiI6IjY1YmQzYTEyMTFjMDY2MDE3YmQyZGUyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tmD4LfV-9qagZNlP8MD1vCVq8useQpZMlUTw1rwO3Vk'
     }
   };
    
   async function searchMovies(movie){

    let response= await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options)
  //     console.log(response);
     let data = await response.json();
    mymovie= data.results;
    console.log(mymovie);


   }
   
    
   searchInput.addEventListener("keyup", async function(e){
    //  console.log(e.target);
     await searchMovies(e.target.value);
      displayMovies();
    })

  async function getMovies(){

  let response= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
//     console.log(response);
   let data = await response.json();
//     allMovies=[data.results]
//     console.log(allMovies);
allMovies= data.results;
// console.log(allMovies);
  displayMovies()

 }

   

 function displayMovies(){
   let container=" "
 allMovies.forEach(movie => {
    const{title, poster_path, vote_average, overview, release_date}=movie;
   container+=`  
   <div class="col-md-4">
       <div class="inner">
           <img src="${imageurl + poster_path}" alt="" class="w-100">
           <div class="inneroverlay">
           <h3>${title}</h3>
           <p class="overview">${overview}</p>
           <p>release date: ${release_date}</p>
           <p><i class="fa-solid fa-star" style="color: #FFD43B;"></i>${vote_average}</p>
       </div>
         </div>
        
   </div>
   
   
   
   `


});
mydiv.innerHTML=container
 }
 getMovies();
 $("#playingMovies").click(function(){
     getMovies();
 })
$(".inneroverlay").enter
 // end of now playing movies
//  start of popular movies

async function getPopularMovies(){

     let response= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
   //     console.log(response);
      let data = await response.json();
   allMovies= data.results;
   console.log(allMovies);
     displayPopularMovies()
   
    }
    function displayPopularMovies(){
     let container=" "
   allMovies.forEach(movie => {
      const{title, poster_path, vote_average, overview, release_date}=movie;
     container+=`  
     <div class="col-md-4">
         <div class="inner">
             <img src="${imageurl + poster_path}" alt="" class="w-100">
             <div class="inneroverlay">
             <h3>${title}</h3>
             <p class="overview">${overview}</p>
             <p>release date: ${release_date}</p>
             <p><i class="fa-solid fa-star" style="color: #FFD43B;"></i>${vote_average}</p>
         </div>
           </div>
           
     </div>
     
     
     
     `
  
  
  });
  mydiv.innerHTML=container
   }

   $("#popularMovies").click(function(){
     getPopularMovies();
 })
   
//  end of popular movies
// START OF RATED MOVIES

async function getRatedMovies(){

     let response= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
   //     console.log(response);
      let data = await response.json();
   allMovies= data.results;
   console.log(allMovies);
   displayRatedMovies()
   
    }
    function displayRatedMovies(){
     let container=" "
   allMovies.forEach(movie => {
      const{title, poster_path, vote_average, overview, release_date}=movie;
     container+=`  
     <div class="col-md-4">
         <div class="inner">
             <img src="${imageurl + poster_path}" alt="" class="w-100">
             <div class="inneroverlay">
             <h3>${title}</h3>
             <p class="overview">${overview}</p>
             <p>release date: ${release_date}</p>
             <p><i class="fa-solid fa-star" style="color: #FFD43B;"></i>${vote_average}</p>
         </div>
           </div>
           
     </div>
     
     
     
     `
  
  
  });
  mydiv.innerHTML=container
   }

   $("#ratedMovies").click(function(){
     getRatedMovies();
 })

// end of rated movies
// start of trending movies


async function getTrendingMovies(){

     let response= await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
   //     console.log(response);
      let data = await response.json();
   allMovies= data.results;
   console.log(allMovies);
   displayTrendingMovies()
   
    }
    function displayTrendingMovies(){
     let container=" "
   allMovies.forEach(movie => {
      const{title, poster_path, vote_average, overview, release_date}=movie;
     container+=`  
     <div class="col-md-4">
         <div class="inner">
             <img src="${imageurl + poster_path}" alt="" class="w-100">
             <div class="inneroverlay">
             <h3>${title}</h3>
             <p class="overview">${overview}</p>
             <p>release date: ${release_date}</p>
             <p><i class="fa-solid fa-star" style="color: #FFD43B;"></i>${vote_average}</p>
         </div>
           </div>
          
     </div>
     
     
     
     `
  
  
  });
  mydiv.innerHTML=container
   }

   $("#trendingMovies").click(function(){
     getTrendingMovies();
 })

//  end of trending movies
// start of upcoming movies

async function getUpcomingMovies(){

     let response= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
   //     console.log(response);
      let data = await response.json();
   allMovies= data.results;
   console.log(allMovies);
   displayUpcomingMovies()
   
    }
    function displayUpcomingMovies(){
     let container=" "
   allMovies.forEach(movie => {
      const{title, poster_path, vote_average, overview, release_date}=movie;
     container+=`  
     <div class="col-md-4">
         <div class="inner">
             <img src="${imageurl + poster_path}" alt="" class="w-100">
             <div class="inneroverlay">
             <h3>${title}</h3>
             <p class="overview" >${overview}</p>
             <p>release date: ${release_date}</p>
             <p><i class="fa-solid fa-star" style="color: #FFD43B;"></i>${vote_average}</p>
         </div>
           </div>
           
     </div>
     
     `
  
  });
  mydiv.innerHTML=container
   }

   $("#upcomingMovies").click(function(){
     getUpcomingMovies();
 })


// end of upcoming movies
// loading screen
$(document).ready(function(){
  $(".loadingscreen").fadeOut(1500, function(){
    $(".loadingscreen").removeClass("fixed-top")
  })
    $("body").css("overflow", "auto",function(){
      
    })
    
})

// end of loading screen
// start od side bar
// $(".myclose").click(function(){
//   $(".nav").css("left" ,"",function(){
//     $(".nav-logo").css("left", "500px")
//   });
// });


$(".navmenu ul li a").click(function(){
  const hrefofclickedelement=$(this).attr("href");
  const sectionOffSet=$(hrefofclickedelement).offset().top;
  $("html,body").animate({scrollTop:sectionOffSet},1500);
});
var myName= document.querySelector(".nameInput").value;
var myEmail= document.querySelector(".emailInput").value;
var myPhone= document.querySelector(".phoneInput").value;
var myAge= document.querySelector(".ageInput").value;
var myPassword= document.querySelector(".passwordInput").value;
var myRepassword= document.querySelector(".repasswordInput").value;
var myBtn= document.querySelector(".mybtn");

// start of contact and regex
function validateName() {
  var nameRegex= /^[A-Z][a-z]{3-7}$/
   var nameInput=nameRegex.test().myName
   if(nameInput==true){
    return true
   }
   
  
}
validateName();
function validateEmail() {
  var emailRegex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
   var emailInput=nameRegex.test().myEmail
   if(emailInput==true){
    return true
   }
   
  
}
validateEmail();

function validatePhone() {
  var phoneRegex= /^(02)?01[0125][0-9]{8}$/g
   var phoneInput=nameRegex.test().myPhone
   if(phoneInput==true){
    return true
   }
   
  
}
validatePhone();
function validatePassword() {
  var passwordRegex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g
   var passwordInput=nameRegex.test().myPassword
   if(passwordInput==true){
    return true
   }
}
validatePassword();
  

 



function isEmpty(){
  if (nameInput.value==0 &&phoneInput==0&&ageInput==0 &&emailInput.value == 0 && passwordInput.value == 0&&repasswordInput==0)
  window.alert("you have to start with capital letter" )
}

  
  myBtn.addEventListener("click", function(){
    isEmpty();
  })
 
  // $(".inneroverlay").slideUp(1000);