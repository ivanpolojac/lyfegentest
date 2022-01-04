import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';

function DateSelector({ value, onChange }) {
  return (
    <DatePicker
      label="Launch Date"
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} sx={{ marginBottom: 2 }} />}
    />
  );
}

export default DateSelector;
