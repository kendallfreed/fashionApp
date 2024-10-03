
import React from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox";
import "@reach/combobox/styles.css";

export const LocationForm = ({ getWeather, setLocation}) => {
    const {ready, value, suggestions: { status, data }, setValue, clearSuggestions} = usePlacesAutocomplete();
    const handleInput = (e) => {
        setValue(e.target.value);
    };
    

    // Receive string of user input and set lng and lat values based on input and use it to set weather
    const handleSelect = async(address) => {
       setValue("", false);
       clearSuggestions();
       setLocation(address);
       try {
        const results = await getGeocode({address});
        const { lat, lng } = await getLatLng(results[0]);
        getWeather({ lat,lng});
        console.log(results);
       }
       catch (error) {
        console.log("Error: ", error);
       }
    };

    return (
        <div className="locationform">
           <Combobox onSelect = {handleSelect}>
            <ComboboxInput 
                value = {value}
                onChange={handleInput}
                disabled ={!ready}
                placeholder="Enter City"
                />
            <ComboboxPopover>
                <ComboboxList>
                    {status == "OK" &&
                    data.map (({id, description}) => (
                        <ComboboxOption key ={id} value = {description}/>
                    ))}
                </ComboboxList>
            </ComboboxPopover>
            </Combobox>
            </div>
    )};
