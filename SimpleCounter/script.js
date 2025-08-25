  let c = 0;
  let ci = 0;
  let cd = 0;



function inc(){
    if (c >= 10){
        c = 0;
    } else {
        c = c + 1;
    }
    if (ci >= 10) {
        ci = 0;
    } else {
    ci = ci + 1;
    }

    update();
}

function dec() {
  // decrease c, but don't go below 0
    if (c > 0) {
        c = c - 1;
    } else {
        c = 0;
    }

  // increment cd, but reset if it reaches 10
    if (cd >= 10) {
        cd = 0;
    } else {
        cd = cd + 1;
    }

  // refresh display
    update();
}

function update() {
    incCount.textContent = ci; 
    decCount.textContent = cd; 
    counter.textContent = c;     
}
