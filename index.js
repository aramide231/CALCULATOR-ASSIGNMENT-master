<<<<<<< HEAD
const allButtons = document.querySelectorAll("button");
let content = ''; // Initialize content as an empty string

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    content += button.textContent;
    const display = document.getElementById("display");
    if (display) {
      display.value = content;
    }
  });
});

const answerButton = document.getElementById("btn");

answerButton.addEventListener("click", function () {
  if (content) {
    try {
      const result = eval(content); // Evaluate the expression
      const display = document.getElementById("display");
      if (display) {
        display.value = result; // Display the result
      }
      content = ''; // Clear the content after displaying the result
    } catch (error) {
      alert("Invalid expression"); // Handle any evaluation errors
    }
  }
});

const Clear = document.getElementById("Ac");
Clear.addEventListener("click", function(){
    if (content){
      content  = '';
    }
if (display.value = 'Ac'){
  display.value = ''
}
})


const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", function () {
  const display = document.getElementById("display");
  if (display) {
    // Remove the last character from the content and update the display
    content = content.slice(0, -1);
    display.value = content;
  }
});

const percentage = document.getElementById("p");
percentage.addEventListener("click", function () {
  const display = document.getElementById("display");
  if (display && content) {
    const currentValue = parseFloat(content);
    if (!isNaN(currentValue)) {
      const result = currentValue * (1 / 100);
      content = result.toString();
      display.value = content;
    }
  }
});


const squareRoot = document.getElementById("squareRoot");
squareRoot.addEventListener("click", function () {
  const display = document.getElementById("display");
  if (display && content) {
    const currentValue = parseFloat(content);
    if (!isNaN(currentValue) && currentValue >= 0) {
      const result = Math.sqrt(currentValue); // 
      content = result.toString();
      display.value = content;
    } else {
      alert("Invalid input for square root");
    }
  }
});



// content=button.textontent+content


=======
document.getElementById("btn").addEventListener("click",function(){
console.log("button clicked")})

    document.getElementById("one").addEventListener("click", function() {
        console.log("1");
    });

    document.getElementById("two").addEventListener("click", function() {
        console.log("2");
    });

    document.getElementById("three").addEventListener("click", function() {
        console.log("3");
    });

    document.getElementById("four").addEventListener("click", function() {
        console.log("4");
    });

    document.getElementById("five").addEventListener("click", function() {
        console.log("5");
    });

    document.getElementById("six").addEventListener("click", function() {
        console.log("6");
    });

    document.getElementById("seven").addEventListener("click", function() {
        console.log("7");
    });

    document.getElementById("eight").addEventListener("click", function() {
        console.log("8");
    });

    document.getElementById("nine").addEventListener("click", function() {
        console.log("9");
    });



>>>>>>> f072be640d6d30598f1d698f6536e4e5271dd133

  