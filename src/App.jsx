import Header from './components/header/Header';
import Main from './components/main/Main';
import Profile from './components/profile/Profile';
import ProfileContainer from './components/profileContainer/ProfileContainer';
import Rating from './components/rating/Rating';
import RatingsContainer from './components/ratingsContainer/RatingsContainer';
import TopCard from './components/topCard/TopCard';

import { PROFILES_INFO } from './constants/profiles-info';
import { RATINGS_INFO } from './constants/ratings-info';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Main>
				<TopCard>
					<Header />
					<RatingsContainer>
						{RATINGS_INFO.map(rating => (
							<Rating key={rating.id} {...rating} />
						))}
					</RatingsContainer>
				</TopCard>
				<ProfileContainer>
					{PROFILES_INFO.map(profile => (
						<Profile key={profile.id} {...profile} />
					))}
				</ProfileContainer>
			</Main>
		</>
	);
};

export default App;
