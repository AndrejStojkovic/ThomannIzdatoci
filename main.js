/*
  Thomann Izdatoci
  Chrome Extension
*/

let carina = 0.09;
let danok = 0.18;

if(document.getElementsByClassName('shop-country__stats')[0].innerHTML.includes('MKD')) {
  // Individual item/s
  if(document.querySelector('.price-wrapper')) {
    let price = parseInt(document.querySelector('.price-wrapper').firstElementChild.content);
    let shipping = parseInt(document.querySelector('.meta__disclaimer').innerText.split(' ')[2].replace(',', ''));
    document.getElementsByClassName('meta')[1].after(createNewPriceElements(price + shipping, '28px'));
  }
  
  // Shopping Cart
  if(document.getElementsByClassName('basket-sum').length > 0) {
    let price = parseInt(document.getElementsByClassName('basket-sum__price')[0].innerHTML.split(' ')[1].replace(',', ''));
    document.getElementsByClassName('basket-sum__price--secondary')[0].after(createNewPriceElements(price, '24px'));
  }
}

function createNewPriceElements(price, size) {
	let izdatociDiv = document.createElement('div');
	izdatociDiv.style.fontWeight = 700;
	izdatociDiv.style.fontSize = size;
	
  let izdatoci = (price * carina) + parseInt((price + (price * carina)) * danok);

	let span1 = document.createElement('span');
	span1.innerText = "Издатоци: " + numberWithCommas(parseInt(izdatoci)) + ' MKD';
	span1.style.display = 'block';
	span1.style.marginBottom = '10px';
	
	let span2 = document.createElement('span');
	span2.innerText = "Вкупно: " + numberWithCommas(parseInt(price + izdatoci)) + ' MKD';
	span2.style.display = 'block';
	span2.style.marginBottom = '20px';
	
	izdatociDiv.append(span1, span2);
	return izdatociDiv;
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// TODO: Check if the price in the cart has changed