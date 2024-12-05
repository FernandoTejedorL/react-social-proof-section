const Rating = ({ rating }) => {
	return (
		<div>
			<img src='./assets/images/icon-star.svg' alt='rating-star' />
			<img src='./assets/images/icon-star.svg' alt='rating-star' />
			<img src='./assets/images/icon-star.svg' alt='rating-star' />
			<img src='./assets/images/icon-star.svg' alt='rating-star' />
			<img src='./assets/images/icon-star.svg' alt='rating-star' />
			<span>{rating}</span>
		</div>
	);
};

export default Rating;
