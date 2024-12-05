import Header from './components/header/Header';
import Main from './components/main/Main';
import Profile from './components/profile/Profile';
import ProfileContainer from './components/profileContainer/ProfileContainer';
import Rating from './components/rating/Rating';
import RatingsContainer from './components/ratingsContainer/RatingsContainer';
import { RATINGS_INFO } from './constants/ratings-info';
//import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<Main>
			<Header />
			<RatingsContainer>
				{RATINGS_INFO.map(rating => (
					<Rating key={rating.id} {...rating} />
				))}
			</RatingsContainer>
			<ProfileContainer>
				<Profile />
			</ProfileContainer>
		</Main>
	);
};

export default App;
