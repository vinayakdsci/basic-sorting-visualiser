var container = document.getElementById("arr");
  
// Function to generate the array of blocks
function generate() {
    container.innerHTML = ""; //Empty the div so that there is no overlap
    for (var i = 0; i < 25; i++) {
  
        // Return a value from 1 to 100 (both inclusive)
        var value = Math.ceil(Math.random() * 100); // ceiling turns the float value to the the smallest integer grater than it
  
        // Creating element div
        var array_ele = document.createElement("div");
  
        // Adding class 'block' to div
        array_ele.classList.add("bar");
  
        // Adding style to div
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;
  
        // Creating label element for displaying 
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("bar_id");
        array_ele_label.innerText = value;
  
        // Appending created elements to index.html 
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }   
    
}
  
// Promise to swap two blocks
function swap(el1, el2) {
    return new Promise((resolve) => {
  
        // For exchanging styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
  
        window.requestAnimationFrame(function() {
  
            // Change the relative positions of the bars
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 200);
        });
    });
}
  
// Asynchronous BubbleSort function
async function BubbleSort(delay = 200) {
    var blocks = document.querySelectorAll(".bar");
  
    // BubbleSort Algorithm
    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {
  
            // To change background-color of the
            // blocks to be compared
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
  
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
  
            
            var value1 = parseInt(blocks[j].childNodes[0].innerHTML);
            var value2 = parseInt(blocks[j + 1]
                        .childNodes[0].innerHTML);
  
            // To compare value of two blocks
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".bar");
            }
  
            // Changing the color to the previous one
            blocks[j].style.backgroundColor = "#24abff";
            blocks[j + 1].style.backgroundColor = "#24abff";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        blocks[blocks.length - i - 1]
                .style.backgroundColor = "#13CE66";
    }
}

async function InsertionSort(delay=100) {
  let bars = document.querySelectorAll(".bar");
  
  // Provide lightgreen colour to 0th bar
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {
  
    // Assign i-1 to j
    var j = i - 1;
  
    // To store the integer value of ith bar to key 
    var key = 
    parseInt(bars[i].childNodes[0].innerHTML);
  
    // To store the ith bar height to height
    var height = bars[i].style.height;
     bars[i].style.backgroundColor = "#FF4949";
      
 
    // For placing selected element at its correct position 
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
        
      // Provide reddish color to the jth bar
      bars[j].style.backgroundColor = "#FF4949";
        
      // For placing jth element over (j+1)th element
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
  
      // Assign j-1 to j
      j = j - 1;
  
      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
        
      // Provide lightgreen color to the sorted part
      for(var k=i;k>=0;k--){
        bars[k].style.backgroundColor = "#13CE66";
      }
    }
  
    // Placing the selected element to its correct position
    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;
       
    // Pause the execution of code for 100 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
      
    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = "#13CE66";
  }
  
}


async function SelectionSort(delay = 100) {
    let bars = document.querySelectorAll(".bar");
    var min_index = 0;
    for(var i=0;i<bars.length;++i) {
        min_index = i;
        
        for(var j=i+1;j<bars.length;++j) {
            bars[j].style.backgroundColor = "#FF4949";
      //Wait for 0.3 seconds
      await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 100)
      );
      
            valj = Number(bars[j].childNodes[0].innerHTML);
            valmin = Number(bars[min_index].childNodes[0].innerHTML);
            if(valmin>valj){
                 if (min_index !== i) {
                 bars[min_index].style.backgroundColor = "  rgb(24, 190, 255)";
                }
                min_index = j;
            }
            else 
                bars[j].style.backgroundColor = "#24abff";
        }

        var temp1 = bars[min_index].style.height;                               //change the inner text, change the inner height
        var temp2 = bars[min_index].childNodes[0].innerText;
        bars[min_index].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_index].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;       
          
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 100)
      );
          bars[min_index].style.backgroundColor = "pink";
          bars[i].style.backgroundColor = "#13CE66";
    }  
}

