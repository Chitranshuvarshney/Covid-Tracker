import React, { useState, useEffect } from 'react';
import {FormControl,NativeSelect} from '@material-ui/core';
import {fetchCountries} from '../../api/index';
import styles from './CountryPicker.module.css';

const CountryPickerComponent = ({handleCountryChange}) => {

    const [countries,setCountries] = useState([]);

    useEffect(() => {
      const fetchApi = async() => {
        setCountries(await fetchCountries());
      };
      fetchApi();
      console.log(countries);
    },[]);

    return (
        <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
          </NativeSelect>
       </FormControl>
    );
}

export default CountryPickerComponent;