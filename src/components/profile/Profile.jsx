const Profile = ({ src, name, comment }) => {
	return (
		<div>
			<div>
				<img src={src} alt='' />
				<div>
					<span>{name}</span>
					<span>Verified Buyer</span>
				</div>
			</div>
			<div>{comment}</div>
		</div>
	);
};

export default Profile;
