/* COURSES PAGE MODAL COURSES */


let modal1 = document.getElementsByClassName('modal1');

let openmodal1 = document.getElementsByClassName('apply-now-modal-courses');
for (let i=0; i<openmodal1.length; i++){
  openmodal1[i].addEventListener('click', () => {
    for (let j=0; j<modal1.length;j++){
      if(i===j){
        modal1[j].style.display = "block";
      }
    }
  });
}

let closemodal1 = document.getElementsByClassName('close-modal-1');
for(let k=0; k<closemodal1.length; k++){
  closemodal1[k].addEventListener('click', () => {
    for(let l=0; l<closemodal1.length;l++){
      modal1[l].style.display = "none"; 
    }
});
}


/* END OF COURSES PAGE MODAL COURSES */