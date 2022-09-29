
//if(document.getElementsByClassName('shop-country__stats')[0])

if(document.getElementsByClassName('shop-country__stats')[0].innerHTML.includes('MKD')) {
  if(document.querySelector('.price-wrapper')) {
    let price = parseInt(document.querySelector('.price-wrapper').firstElementChild.content);
  
    let shippingPriceElement = document.querySelector('.meta__disclaimer').innerText.split(' ');
    let shipping = parseInt(shippingPriceElement[2].replace(',', ''));
    
    let sum = (price + shipping);
    
    let carina = getPValue(sum, 9);
    sum = sum + parseInt(carina);
    let danok = getPValue(sum, 18);
    sum = sum + parseInt(danok);
    
    let d = parseInt(carina + danok);
    sum = parseInt(sum);
    
    document.getElementsByClassName('fx-tooltip')[0].before(createNewPriceElements(d, sum, '28px'));
  }
  
  if(document.getElementsByClassName('basket-sum')) {
    let sumPrice = document.getElementsByClassName('basket-sum__price')[0].innerHTML.split(' ')[1];
    sumPrice = sumPrice.replace(',', '');
  
    let sum = parseInt(sumPrice);
  
    let carina = getPValue(sum, 9);
    sum = sum + parseInt(carina);
    let danok = getPValue(sum, 18);
    sum = sum + parseInt(danok);
  
    let d = parseInt(carina + danok);
    sum = parseInt(sum);
  
    document.getElementsByClassName('basket-sum__price--secondary')[0].after(createNewPriceElements(d, sum, '24px'));
  }
}

function getPValue(value, percent) {
	return (value * percent) / 100;
}

function createNewPriceElements(davachki, suma, size) {
	let davachkiDiv = document.createElement('div');
	davachkiDiv.style.fontWeight = 700;
	davachkiDiv.style.fontSize = size;
	
	let span1 = document.createElement('span');
	span1.innerText = "Давачки: " + numberWithCommas(davachki) + ' MKD';
	span1.style.display = 'block';
	span1.style.marginBottom = '10px';
	
	let span2 = document.createElement('span');
	span2.innerText = "Вкупно: " + numberWithCommas(suma) + ' MKD';
	span2.style.display = 'block';
	span2.style.marginBottom = '20px';
	
	davachkiDiv.append(span1, span2);

	return davachkiDiv;
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}