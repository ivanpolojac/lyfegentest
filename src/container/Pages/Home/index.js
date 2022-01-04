import styled from 'styled-components';

import DateSection from './DateSection';
import LaunchesSection from './LaunchesSection';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;ª
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  border: none;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(0deg, rgba(88, 86, 125, 1) 0%, rgba(10, 23, 25, 1) 100%);

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }
`;

function Home() {
  return (
    <HomeWrapper>
      <DateSection />

      <LaunchesSection />
    </HomeWrapper>
  );
}

export default Home;
