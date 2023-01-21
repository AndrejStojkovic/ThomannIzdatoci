/*
  ThomannDavachki
  Chrome Extension
*/

let carina = 0.09;
let danok = 0.18;

if(document.getElementsByClassName('shop-country__stats')[0].innerHTML.includes('MKD')) {
  // Individual item/s
  if(document.querySelector('.price-wrapper')) {
    let price = parseInt(document.querySelector('.price-wrapper').firstElementChild.content) + parseInt(document.querySelector('.meta__disclaimer').innerText.split(' ')[2].replace(',', ''));
    document.getElementsByClassName('meta')[0].after(createNewPriceElements(price, '28px'));
  }
  
  // Shopping Cart
  if(document.getElementsByClassName('basket-sum')) {
    let price = parseInt(document.getElementsByClassName('basket-sum__price')[0].innerHTML.split(' ')[1].replace(',', ''));
    document.getElementsByClassName('basket-sum__price--secondary')[0].after(createNewPriceElements(price, '24px'));
  }
}

function createNewPriceElements(price, size) {
	let davachkiDiv = document.createElement('div');
	davachkiDiv.style.fontWeight = 700;
	davachkiDiv.style.fontSize = size;
	
  let davachki = (price * carina) + parseInt((price + (price * carina)) * danok);

	let span1 = document.createElement('span');
	span1.innerText = "Давачки: " + numberWithCommas(davachki) + ' MKD';
	span1.style.display = 'block';
	span1.style.marginBottom = '10px';
	
	let span2 = document.createElement('span');
	span2.innerText = "Вкупно: " + numberWithCommas(price + davachki) + ' MKD';
	span2.style.display = 'block';
	span2.style.marginBottom = '20px';
	
	davachkiDiv.append(span1, span2);
	return davachkiDiv;
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// TODO: Check if the price in the cart has changed