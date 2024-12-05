import {
	StyledImage,
	StyledName,
	StyledPerson,
	StyledProfile,
	StyledText
} from './profile.styles';

const Profile = ({ url, name, comment, alignSelf }) => {
	return (
		<StyledProfile $alignSelf={alignSelf}>
			<StyledPerson>
				<StyledImage src={url} alt='' />
				<StyledName>
					<StyledText $fontWeight={'700'}>{name}</StyledText>
					<StyledText $colorText={'#EE69A4'} $fontWeight={'400'}>
						Verified Buyer
					</StyledText>
				</StyledName>
			</StyledPerson>
			<div>{comment}</div>
		</StyledProfile>
	);
};

export default Profile;
