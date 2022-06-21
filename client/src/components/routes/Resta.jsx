import React, {useState} from 'react';
import StarRatings from 'react-star-ratings';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import DatePicker from "react-datepicker";
import axios from 'axios';
import styled from 'styled-components';
import Select from 'react-select';

function Resta({ resta, userInfo}) {
  const [date, setDate] = useState(new Date());
  const [info, setInfo] = useState('');
  const [size, setSize] = useState(2);
  const [time, setTime] = useState();
  console.log('userInfo', userInfo);
  function handleSubmit(e) {
    e.preventDefault();
    console.log('post',date);
    axios.post('/date',{ date, time, info, size, userInfo, restaId: resta.id})
     .then((data) => console.log('data', data));
  }
  const handleChange = (e) => {
    e.persist();
    setInfo(e.target.value);
  }
  const changeSize = (e) => {
    setSize(e.value);
  }
  let sizeOptions = Array.from({length: 30}, (_, i) => {return ({'value': i+1, 'label': i+1})});
  return (
    <div className="card">
      <img id="resta" src={ resta['image_url'] }/>
      <div className="card-container">
        <a href={resta['url']}>{ resta['name'] }</a>
        <div className = 'price-star'>{resta['price']+'  '}
          <StarRatings rating={resta['rating']} starRatedColor="black"
            numberOfStarts={5} starDimension="15px" starSpacing="2px" name='rating'/>
        </div>
        <div>Phone: {resta['display_phone']}</div>
        <div>Address: {resta['location']['address1']}, {resta['location']['city']}</div>
        <div>
        <AddDate id ='box'>
        <a href ='#StartADate'>Add</a>
        </AddDate>
        <Overlay id = 'StartADate'>
          <Wrapper id = 'formbackground'>
            <h2>Date Information</h2>
            <Close href='#box'>&times;</Close>
            <Container>
              <form onSubmit = {handleSubmit} id = 'contact'>
              <div>
                <div>
                <FormLabel>Date</FormLabel>
                <DatePicker selected={date} onChange={(value) => setDate(value)} />
                <FormLabel>Time</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  value={time}
                  onChange={(time) => {
                    setTime(time);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                 </LocalizationProvider>
                </div>
                <div>
              <FormLabel>Party Size</FormLabel>
              <Select placeholder = 'SELECT TOTAL PARTY SIZE' placeholder={ "2" } onChange = {changeSize} options = {sizeOptions}/>
              </div>

              <TextArea onChange = {handleChange} value = {info} name = 'Feedback' placeholder = 'Special comments here'></TextArea>
              <Submit type = 'submit' value ='Submit'></Submit>
              </div>
              </form>
            </Container>
          </Wrapper>
        </Overlay>

        </div>
      </div>
    </div>
  );
}

export default Resta;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.8);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  &:target {
    visibility: visible;
    opacity: 1;
  }
`;

const Close = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  color: #A8D0E6;
`;

const Container = styled.div`
  border-radius: 5px;
  padding: 20px 0;
`;

const Wrapper = styled.div`
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 2s ease-in-out;
  z-index: 100000;
`;

const FormLabel = styled.label`
  text-transform: capitalize;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
`;

const Submit = styled.input`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 10px;
  font-family: 'Kalam', cursive;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const FooterContainer = styled.div`
  border-top: 2px solid;
  width: 100%;
  display: flex;
  margin: 20px 80px 0px 80px;
  padding-top: 10px;
`;

const AddDate = styled.div`
  width : 33%;
  text-align: center;
`;
