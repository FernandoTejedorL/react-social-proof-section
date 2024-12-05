import styled from 'styled-components';

const StyledMain = styled.main`
	background-image: url(../assets/images/bg-pattern-top-mobile.svg),
		url(../assets/images/bg-pattern-bottom-mobile.svg);
	background-repeat: no-repeat, no-repeat;
	background-position:
		top left,
		bottom left;
	padding: 82px 24px;

	@media screen and (width>=768px) {
		background-image: url(../assets/images/bg-pattern-top-desktop.svg),
			url(../assets/images/bg-pattern-bottom-desktop.svg);
		background-position:
			top left,
			bottom right;
		padding: 118px 165px;
	}
`;

export { StyledMain };
