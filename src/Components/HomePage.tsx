import LeftComponent from './LeftComponent/LeftComponent';
import RightComponent from './RightComponent/RightComponent';
import './HomePage.css';

interface HomePageProps {
  onClick(): void
}

export function HomePage(props: HomePageProps) {
  return (
    <div className="homePage">
      <LeftComponent buttonOnClick={props.onClick} />
      <RightComponent />
    </div>
  );
}