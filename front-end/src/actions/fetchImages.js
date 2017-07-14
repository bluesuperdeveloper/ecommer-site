const fetchImages = function(){
	// const imagePromise = fetch(`window.hostAddress/categories/${categories}`);
	const imagePromise = [
		'./images/accessories.jpg',
		'./images/accessories1.jpg',
		'./images/apparels1.jpg',
		'./images/apparels2.jpg',
		'./images/eyesware.jpg',
		'./images/shirt.jpg',
		'./images/shirt2.jpg',
		'./images/shirt3.jpg',
		'./images/shirt4.jpg',
		'./images/top.jpg',
		'./images/top1.jpg',
	]
	return {
		type:"GET_ALL_PRODUCTS",
		payload: imagePromise
	}
}

export default fetchImages