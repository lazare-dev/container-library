import React, { useState } from 'react';
import ButtonComponent from './components/ButtonComponent';
import IconButtonComponent from './components/IconButtonComponent';
import FABComponent from './components/FABCompoenent';
import ToggleButtonComponent from './components/ToggleButtonComponent';
import BreadcrumbComponent from './components/BreadcrumbComponent';
import TextFieldComponent from './components/TextFieldComponent';
import CheckboxComponent from './components/CheckboxComponent/CheckboxComponent';
import RadioButtonComponent from './components/RadioButtonComponent';
import SelectMenuComponent from './components/SelectMenuComponent';
import SwitchComponent from './components/SwitchComponent';
import SliderComponent from './components/SliderComponent';
import DatePickerComponent from './components/DatePickerComponent/DatePickerComponent';
import TimePickerComponent from './components/TimePickerComponent/TimePickerComponent';
import CardComponent from './components/CardComponent';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

function App() {
  const [selectedToggleButton, setSelectedToggleButton] = useState('left');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [isSwitchOn, setSwitchOn] = useState(false);
  const [sliderValue, setSliderValue] = useState(30);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedValue, setSelectedValue] = useState('');
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
  ];

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleSwitchChange = (event) => {
    setSwitchOn(event.target.checked);
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const handleToggleButtonChange = (event, newValue) => {
    setSelectedToggleButton(newValue);
    alert(`You've selected the ${newValue} toggle button`);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="App">
      <Grid container className="App-header">
        <Grid item xs={12}>
          <Typography variant="h1">Demo Application</Typography>
        </Grid>

        {/* Button Demo */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Regular Buttons</Typography>
          </Grid>
          <Grid item><ButtonComponent type="primary" label="Primary" /></Grid>
          <Grid item><ButtonComponent type="secondary" label="Secondary" /></Grid>
          <Grid item><ButtonComponent type="success" label="Success" /></Grid>
          <Grid item><ButtonComponent type="warning" label="Warning" /></Grid>
          <Grid item><ButtonComponent type="info" label="Info" /></Grid>
          <Grid item><ButtonComponent type="error" label="Error" /></Grid>
        </Grid>

        {/* IconButton Demo */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Icon Buttons</Typography>
          </Grid>
          <Grid item><IconButtonComponent icon={<DeleteIcon />} onClick={() => alert("You've clicked the delete icon button")} type="primary" /></Grid>
          <Grid item><IconButtonComponent icon={<EditIcon />} onClick={() => alert("You've clicked the edit icon button")} type="secondary" /></Grid>
          <Grid item><IconButtonComponent icon={<FavoriteIcon />} onClick={() => alert("You've clicked the favorite icon button")} type="error" /></Grid>
        </Grid>

        {/* FAB Demo */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Floating Action Buttons</Typography>
          </Grid>
          <Grid item><FABComponent icon={<AddIcon />} onClick={() => alert("You've clicked the add FAB")} type="primary" /></Grid>
          <Grid item><FABComponent icon={<EditIcon />} onClick={() => alert("You've clicked the edit FAB")} type="secondary" /></Grid>
        </Grid>

        {/* ToggleButton Demo */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Toggle Buttons</Typography>
          </Grid>
          <Grid item xs={12}>
            <ToggleButtonComponent value={selectedToggleButton} handleChange={handleToggleButtonChange} options={[{ value: 'left', label: 'Left' }, { value: 'center', label: 'Center' }, { value: 'right', label: 'Right' }]} />
          </Grid>
        </Grid>

        {/* Breadcrumb Demo */}
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h5">Breadcrumbs</Typography>
          </Grid>
          <Grid item xs={12}>
            <BreadcrumbComponent items={[{ label: 'First', href: '/first' }, { label: 'Second', href: '/second' }, { label: 'Third', href: '/third' }]} type="primary" />
          </Grid>
        </Grid>

        {/* TextField Demo */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Text Fields</Typography>
          </Grid>
          <Grid item><TextFieldComponent type="primary" label="Primary Text" /></Grid>
          <Grid item><TextFieldComponent type="secondary" label="Secondary Text" /></Grid>
          <Grid item><TextFieldComponent type="warning" label="Warning Text" /></Grid>
        </Grid>

        {/* Checkbox Demo */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Checkboxes</Typography>
          </Grid>
          <Grid item xs={12}>
            <CheckboxComponent label="Sample Checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          </Grid>
        </Grid>

        {/* RadioButton Demo */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Radio Buttons</Typography>
          </Grid>
          <Grid item xs={12}>
            <RadioButtonComponent value={selectedRadio} handleChange={handleRadioChange} options={[{ value: 'option1', label: 'Option 1' }, { value: 'option2', label: 'Option 2' }, { value: 'option3', label: 'Option 3' }]} />
          </Grid>
        </Grid>

        {/* SelectMenu Demo */}
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h5">Select Menu</Typography>
          </Grid>
          <Grid item><SelectMenuComponent label="Fruits" value={selectedValue} handleChange={handleChange} options={options} type="primary" /></Grid>
          <Grid item><SelectMenuComponent label="Fruits" value={selectedValue} handleChange={handleChange} options={options} type="secondary" /></Grid>
          <Grid item><SelectMenuComponent label="Fruits" value={selectedValue} handleChange={handleChange} options={options} type="warning" /></Grid>
        </Grid>

        {/* Switch Demo */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Switches</Typography>
          </Grid>
          <Grid item xs={12}>
            <SwitchComponent label="Toggle Me" checked={isSwitchOn} handleChange={handleSwitchChange} />
          </Grid>
        </Grid>

        {/* Slider Demo */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Sliders</Typography>
          </Grid>
          <Grid item xs={12}>
            <SliderComponent label="Volume" value={sliderValue} handleChange={handleSliderChange} />
          </Grid>
        </Grid>

        {/* Date and Time Picker Demo */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Date and Time Pickers</Typography>
          </Grid>
          <Grid item xs={6}>
            <DatePickerComponent label="Select Date" value={selectedDate} handleChange={(newValue) => setSelectedDate(newValue)} />
          </Grid>
          <Grid item xs={6}>
            <TimePickerComponent label="Select Time" value={selectedTime} handleChange={(newValue) => setSelectedTime(newValue)} />
          </Grid>
        </Grid>

        {/* Card Demo */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Cards</Typography>
          </Grid>
          <Grid item xs={12}>
            <CardComponent />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

}

export default App;
