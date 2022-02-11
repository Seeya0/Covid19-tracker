import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../api';

type Props = {
    handleCountryChanges: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const CountryPicker: React.VFC = (handleCountryChange: Function) => {
    const [countries, setCountries] = useState<string[]>([]);

    useEffect(() => {
        const fetchAllCountries = async () => {
            setCountries(await fetchCountries());
        };
        fetchAllCountries();
    }, [])


    return (
        <div>
            <label>国を選択してください</label>
            <select onChange={handleCountryChange}>
                <option value="">Japan</option>
                {countries.map((country, i) =>
                    <option value={country}>{country}</option>)}
            </select>
        </div>
    )
}

export default CountryPicker
