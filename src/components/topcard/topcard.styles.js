import styled from 'styled-components';

const StyledTopCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 524px;
	width: 375px;
	margin-bottom: 49px;

	@media screen and (width>=768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 245px;
		margin-bottom: 71px;
	}
`;

export { StyledTopCard };
