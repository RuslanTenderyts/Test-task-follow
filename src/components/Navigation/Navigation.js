import { Link } from './Navigation.styled';

export const Navigation = () => {
 
  return (
    <nav>
      <Link  to="/">
        Home
      </Link>
      <Link  to="/tweets">
        Tweets
      </Link>
    </nav>
  );
};
