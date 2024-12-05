import { StyledHeader, StyledText } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledText
				$fontSize={'40px'}
				$fontWeight={'700'}
				$colorText={'#512051'}
				$lineHeight={'32px'}
				$dskSize={'56px'}
				$dskLine={'48px'}
				$dskLetterSpacing={'-2px'}
			>
				10,000+ of our users love our products.
			</StyledText>
			<StyledText
				$fontSize={'19px'}
				$fontWeight={'500'}
				$colorText={'#927B91'}
				$lineHeight={'25px'}
				$letterSpacing={'-0.63px'}
			>
				We only provide great products combined with excellent customer service.
				See what our satisfied customers are saying about our services.
			</StyledText>
		</StyledHeader>
	);
};

export default Header;
