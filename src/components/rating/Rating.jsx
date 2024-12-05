import { StyledCritic, StyledRating, StyledStars } from './rating.styles';

const Rating = ({ rating, alignSelf }) => {
	return (
		<StyledRating $selfAlign={alignSelf}>
			<StyledStars>
				<img src='./assets/images/icon-star.svg' alt='rating-star' />
				<img src='./assets/images/icon-star.svg' alt='rating-star' />
				<img src='./assets/images/icon-star.svg' alt='rating-star' />
				<img src='./assets/images/icon-star.svg' alt='rating-star' />
				<img src='./assets/images/icon-star.svg' alt='rating-star' />
			</StyledStars>
			<StyledCritic>{rating}</StyledCritic>
		</StyledRating>
	);
};

export default Rating;
