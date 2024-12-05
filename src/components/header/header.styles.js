import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 327px;
	height: 219px;

	@media screen and (width>=768px) {
		width: 445px;
		height: 245px;
		justify-content: space-between;
	}
`;

export { StyledHeader };

const StyledText = styled.header`
	font-size: ${({ $fontSize }) => $fontSize};
	color: ${({ $colorText }) => $colorText};
	font-weight: ${({ $fontWeight }) => $fontWeight};
	line-height: ${({ $lineHeight }) => $lineHeight};
	letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
	margin: 0;
	text-align: center;

	@media screen and (width>=768px) {
		text-align: left;
		font-size: ${({ $dskSize }) => $dskSize};
		line-height: ${({ $dskLine }) => $dskLine};
		letter-spacing: ${({ $dskLetterSpacing }) => $dskLetterSpacing};
	}
`;

export { StyledText };
