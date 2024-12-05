import styled from 'styled-components';

const StyledProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media screen and (width>=768px) {
		flex-direction: row;
		justify-content: space-between;
		height: 266px;
		max-width: 100%;
	}
`;

export { StyledProfileContainer };
