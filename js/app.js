/*
 * Archivo principal de funcionalidad de JS
 */

(function main(){
 	var box = Array.from(document.getElementsByClassName("all-boxes"));
 	var modal = document.getElementById("all-boxes-modal")
 	var bodyModal, close, i;

 	box.forEach(function(boxes){
 		boxes.addEventListener("click", function(){
 			modal.innerHTML = "";
 			bodyModal = document.createElement("div");
 			bodyModal.classList.add("body-modal");
 			bodyModal.innerHTML = boxes.innerHTML;
 			modal.appendChild(bodyModal)
 			modal.classList.remove("hide");
 			close = document.createElement("div");
 			close.classList.add("close");
 			i = document.createElement("i");
 			i.classList.add("fa", "fa-times-circle")
 			i.setAttribute("aria-hidden", "true")
 			close.appendChild(i);
 			modal.appendChild(close);
 			close.addEventListener("click", function(){
 				modal.classList.add("hide");
 			});
 		});
 	});	
 }) ();


/*<i class="fa fa-times-circle" aria-hidden="true"></i>*/