import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


// import DatePicker from "react-datepicker";
import axios from 'axios';
import styled from 'styled-components';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config.jsx';

function Resta({isAuth, resta}) {
  const [datetime, setDatetime] = useState(new Date());
  const [info, setInfo] = useState('');
  const [size, setSize] = useState(2);

  function handleSubmit(e) {
    e.preventDefault();
    const user = auth.currentUser;

    axios.post('/date', { date: {datetime, info, size},
        ini_user_id: user.uid,
        user: {displayName: user.displayName, email: user.email, photoURL: user.photoURL},
        resta_id: resta.id,
        resta : {name: resta.name, image_url: resta.image_url, url: resta.url, price: resta.price, rating: resta.rating, display_phone: resta.display_phone, location: resta.location}})
    .then((data) => console.log('data', data));
  }

  let navigate = useNavigate();
  useEffect(()=> {
    if (!isAuth) {
      navigate("/");
    }
  })

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
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    value={datetime}
                    onChange={(newValue) => {
                      setDatetime(newValue);
                    }}
                  />
                </LocalizationProvider>
              <FormLabel>Party Size</FormLabel>
              <Select placeholder = 'SELECT TOTAL PARTY SIZE' placeholder={ "2" } onChange = {(e) => setSize(e.value)} options = {sizeOptions}/>
              <TextArea onChange = {(e)=>setInfo(e.target.value)} value = {info} name = 'Feedback' placeholder = 'Special comments here'></TextArea>
              <Submit type = 'submit' value ='Submit'></Submit>
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



// const postDate = collection(db, "dates");
// const createDate = async (e) => {
//   e.preventDefault();
//   console.log('user', auth.currentUser);
//   const user = auth.currentUser;
//   console.log('test', 'date', datetime, info, size, user.uid, user.displayName, user.email, user.photoURL, resta.id);
//   await addDoc(postDate, { date: {datetime, info, size},
//     ini_user_id: user.uid,
//     user: {display: user.displayName, email: user.email, photoURL: user.photoURL},
//     resta_id: resta.id,
//     resta : {name: resta.name, image_url: resta.image_url, url: resta.url, price: resta.price, rating: resta.rating, display_phone: resta.display_phone, location: resta.location}});
//   navigate("/");
// }