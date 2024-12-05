import styled from 'styled-components';

const StyledRating = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	height: 78px;
	width: 327px;
	border-radius: 8px;
	background-color: #f7f2f7;

	@media screen and (width>=768px) {
		align-self: ${({ $selfAlign }) => $selfAlign};
		flex-direction: row;
		justify-content: flex-start;
		gap: 32px;
		width: 445px;
		height: 56px;
	}
`;

export { StyledRating };

const StyledStars = styled.div`
	display: flex;
	gap: 8.45px;
`;

export { StyledStars };

const StyledCritic = styled.span`
	font-size: 17px;
	font-weight: 700;
	color: #512051;
`;

export { StyledCritic };
