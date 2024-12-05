import styled from 'styled-components';

const StyledProfile = styled.div`
	display: flex;
	flex-direction: column;
	gap: 23px;
	height: 248px;
	width: 327px;
	border-radius: 8px;
	padding: 35px 32px;
	background-color: #512051;
	color: #fff;

	@media screen and (width>=768px) {
		align-self: ${({ $alignSelf }) => $alignSelf};
	}
`;
export { StyledProfile };

const StyledPerson = styled.div`
	display: flex;
	justify-content: space-between;
	height: 40px;
	width: 162px;
`;

export { StyledPerson };

const StyledImage = styled.img`
	height: 40px;
	width: 40px;
	border-radius: 50%;
`;
export { StyledImage };

const StyledName = styled.div`
	display: flex;
	flex-direction: column;
`;

export { StyledName };

const StyledText = styled.span`
	font-size: 17px;
	color: ${({ $colorText }) => $colorText};
	font-weight: ${({ $fontWeight }) => $fontWeight};
`;

export { StyledText };
