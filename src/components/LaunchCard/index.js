import { styled as styledMui, Typography } from '@mui/material';
import styled from 'styled-components';
import { Avatar as MuiAvatar } from '@mui/material';

const LaunchCardWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  border-radius: 8px;
  width: 300px;
  height: 500px;
  background: white;
  overflow: hidden;
  box-shadow: 0 7px 15px 5px rgba(0, 0, 0, 0.33);
`;

const NoDataLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Avatar = styledMui(MuiAvatar)`
  position: absolute;
  top: 12px;
  left: 12px;
`;

const MainImageWrapper = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  padding: 16px;
  overflow: hidden;
`;

function LaunchCard({ launch, noData }) {
  if (noData) {
    return (
      <LaunchCardWrapper>
        <NoDataLabel>
          No Data
        </NoDataLabel>
      </LaunchCardWrapper>
    );
  }

  const avatarSrc = launch?.links?.patch?.small || '';

  const imageSrc = launch?.links?.flickr?.original?.[0] || '';

  return (
    <LaunchCardWrapper>
      <Avatar alt="A" src={avatarSrc} />

      <MainImageWrapper alt="No image" src={imageSrc} />

      <ContentWrapper>
        <Typography variant="h5">{launch?.name}</Typography>
        <Typography variant="span" sx={{ overflow: 'hidden' }}>
          {launch?.details || 'No details'}
        </Typography>
      </ContentWrapper>
    </LaunchCardWrapper>
  );
}

export default LaunchCard;
