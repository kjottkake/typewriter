//list of greetings
const greetings = ["Hei Hei!", "Bonjour!", "Hola!", "Yo!", "Sup!", "Ni hao！", "Annyeong!", "Salam!", "Konnichiwa!", "Dia dhuit!", "Selamat siang!"]

//length of greetings
const lenGreetings = greetings.length;

//typewriter variable declarations
let i = 0;
const txt = greetings[0]; //sets random text array for output
const speed = 60;


//typewriter function
function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    
      console.log("i: ", i); //test log
      if (isEnd(i, txt.length)){
          console.log("End reached.");
        // document.getElementById("demo").innerHTML -= txt.charAt(i);
        // i--;
        // setTimeout(typeWriter,speed);
      }
    }
  }

  setTimeout(typeWriter, 0); //runs typewriter  

function isEnd(count, len){
    if (count == len)
    {
        return (true);
    } else {
        return (false);
    }
}



//print text
    //if zero then adds
        
        //checks if reached end of textline
            //loops through dom and adds letter to text
        //if at the end of the textline
            //loops through and deletes txt
    
    

//delete text


//print text

//delete text

//print text


//delete text