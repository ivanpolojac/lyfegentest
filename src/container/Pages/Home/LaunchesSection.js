import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { CardSwiper } from 'react-card-rotate-swiper';
import { CircularProgress } from '@mui/material';

import LaunchCard from 'components/LaunchCard';

const LaunchesSectionWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 800px) {
    height: auto;
    width: 100%;
  }
`;

const LaunchesList = styled.div`
  position: relative;
  display: flex;

  .launch-card-swiper {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

function LaunchesSection() {
  const launches = useSelector(state => state.spaceXData.launches);
  const isFetchingLaunches = useSelector(state => state.spaceXData.isFetchingLaunches);

  const [swipeIndex, setSwipeIndex] = useState(0);

  useEffect(() => {
    setSwipeIndex(0);
  }, [launches]);

  const handleSwipe = (direction) => {
    if (direction !== 'none') {
      setTimeout(() => {
        if (launches?.length) {
          if (launches.length > 1) {
            let newIndex = swipeIndex + 1;
            if (newIndex > launches.length - 1) {
              newIndex = 0;
            }

            setSwipeIndex(newIndex);
          }
        }
      }, 300);
    }
  };

  let itemToSwipe = null;
  let itemToStack = null;
  if (launches?.length) {
    if (launches.length === 1) {
      itemToStack = launches[0];
    } else {
      let stackIndex = swipeIndex + 1;
      if (stackIndex > launches.length - 1) {
        stackIndex = 0;
      }

      itemToSwipe = launches[swipeIndex];
      itemToStack = launches[stackIndex];
    }
  }

  return (
    <LaunchesSectionWrapper>
      {isFetchingLaunches
        ? <CircularProgress />
        : (
          <LaunchesList>
            {!!launches?.length
              ? (
                <>
                  {itemToStack &&
                  <LaunchCard key={itemToStack.id} launch={itemToStack} />
                  }

                  {itemToSwipe && (
                    <CardSwiper
                      key={itemToSwipe.id}
                      onSwipe={handleSwipe}
                      className="launch-card-swiper"
                      contents={
                        <LaunchCard launch={itemToSwipe} />
                      }
                    />
                  )}
                </>
              )
              : (
                <LaunchCard noData />
              )
            }
          </LaunchesList>
        )
      }
    </LaunchesSectionWrapper>
  );
}

export default LaunchesSection;
