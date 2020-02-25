let img_src = 'https://styles.redditmedia.com/t5_2s4q6/styles/communityIcon_vz56g9fpufg41.png';

let num_hor = 10;
let num_vert = num_hor * 5;

window.onload = () => {
    let imgs = document.querySelector('#imgs');

    for (let i = 0; i < num_vert; i++) {
    	for (let j = 0; j < num_hor; j++) {
    		let img = document.createElement('img');
    		img.src = img_src;
    		img.style.width = `${parseInt(100/num_hor)}%`
    		imgs.appendChild(img);
    	}
    	imgs.innerHTML += '<br>'
    }
};