class Reviews {
  constructor(){
    this.reviewsContainer = document.querySelector('.reviews-img');
    this.renderReviews();
  }
  renderReviews() {
    const countOfReviews = 6;
    let reviewsDomString = '';
    for (let i =1; i<=countOfReviews; i++ ) {
      
      reviewsDomString += i === 5 
      ? `<img src="img/reviews/review-${i}.JPG" alt="Отзыв довольного клиента"></img>`
      : `<img src="img/reviews/review-${i}.jpg" alt="Отзыв довольного клиента"></img>`
    }
    this.reviewsContainer.innerHTML = reviewsDomString;
  }
}

new Reviews();