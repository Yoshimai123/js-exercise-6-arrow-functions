window.addEventListener("load", function(){
let promptName = prompt("What's the name?")
let promptAge = Number(prompt("What's the age?"))

let student = {
    name: promptName, 
    age: promptAge,    
    
    printInfo: function() {
      let result = ("Name: " + this.name + " Age: " + this.age);
      return result;
    },
  
increaseAge: function(num) {
      this.age += num;
      return this.age;
    }
  };
  
  student.increaseAge(10);
  document.body.innerHTML += student.printInfo();
})
