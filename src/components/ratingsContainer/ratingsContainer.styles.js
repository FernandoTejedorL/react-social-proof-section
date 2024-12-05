import styled from 'styled-components';

const StyledRatingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;

	@media screen and (width>=768px) {
		height: 200px;
		width: 540px;
	}
`;

export { StyledRatingsContainer };
