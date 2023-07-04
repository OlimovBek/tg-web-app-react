import React, {useEffect, useState} from 'react';
import "./Form.css";
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
                text: "Ma'lumotlarni yuborish"
            }
        )
    }, [])

    useEffect(() => {
        if (!city || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, city])
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    return (
        <div className={'form'}>
            <h3>Ma'lumotlaringizni kiritng</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Davlat'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Shahar'}
                value={city}
                onChange={onChangeCity}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Jismoniy shaxs</option>
                <option value={'legal'}>Yuridik shaxs</option>

            </select>
        </div>
    );
};

export default Form;