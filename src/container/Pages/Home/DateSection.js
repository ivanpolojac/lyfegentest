import { useEffect } from 'react';
import { DateTime } from 'luxon';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Typography, Card } from '@mui/material';
import DateSelector from 'components/DateSelector';

import { fetchLaunchesByDate, setSelectedDate } from 'store/slices/spaceXData';

const DateSectionWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 800px) {
    height: auto;
    width: 100%;
  }
`;

const DateFormatsWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function DateSection() {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.spaceXData.selectedDate);

  useEffect(() => {
    dispatch(fetchLaunchesByDate());
  }, [dispatch]);

  const handleChangeSelectedDate = (value) => {
    const newValue = value || DateTime.utc(2017).toUTC();
    dispatch(setSelectedDate(newValue));
    dispatch(fetchLaunchesByDate(newValue));
  };


  return (
    <DateSectionWrapper>
        <Card sx={{ padding: 4 }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Select Launch Date
          </Typography>

          <DateSelector
            value={selectedDate}
            onChange={handleChangeSelectedDate}
          />

          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Selected Date In Different Formats
          </Typography>

          <DateFormatsWrapper>
            <span>ISO: {selectedDate.toISO()}</span>
            <span>RFC2822: {selectedDate.toRFC2822()}</span>
            <span>Unix: {selectedDate.toSeconds()}</span>
            <span>Locale: {selectedDate.toLocaleString()}</span>
            <span>Http: {selectedDate.toHTTP()}</span>
          </DateFormatsWrapper>
        </Card>
    </DateSectionWrapper>
  );
}

export default DateSection;
