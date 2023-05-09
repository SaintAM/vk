import React, { useState } from "react";
import s from "./Form.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Form() {
    const [textArea, setTextA] = useState("");
    const [sel, setSel] = useState("");
    const [floor, setFloor] = useState("");
    const [meetingRoom, setMeetingRoom] = useState("");
    const [date, setDate] = useState('');
    const [timeStart, setTimeStart] = useState("");
    const [timeEnd, setTimeEnd] = useState("");

    const onSubmit = () => {
        const res = JSON.stringify({
            textArea,
            sel,
            floor,
            meetingRoom,
            date,
            inTime,
        });
        console.log(res);
    };
    const arrFloor = [];
    for (let i = 3; i <= 27; i++) {
        arrFloor.push(i);
    }
    const arrMeetingRoom = [];
    for (let i = 1; i <= 10; i++) {
        arrMeetingRoom.push(i);
    }
    let inTime = `${timeStart}-${timeEnd}`;
    const clearInput = () => {
        setTextA("");
        setTimeStart("");
        setTimeEnd("");
        setDate("")
    };
    return (
        <div className={s.formContent}>
            <form action="#" id="form">
                <div className={s.calendar}>
                    <p>Выберите дату:</p>
                    <Calendar onChange={(date) => setDate(date)} value={date} />
                </div>
                <div className={s.item}>
                    <p>Выберите интервал времени:</p>
                    <input
                        type="time"
                        value={timeStart}
                        onChange={(e) => setTimeStart(e.target.value)}
                    />
                    <span> - </span>
                    <input
                        type="time"
                        value={timeEnd}
                        onChange={(e) => setTimeEnd(e.target.value)}
                    />
                </div>
                <label className={s.item}>
                    Комментарий:
                    <br />
                    <textarea
                        className={s.textarea}
                        value={textArea}
                        onChange={(e) => setTextA(e.target.value)}
                    />
                </label>
                <label className={s.item}>
                    <span>Выбор башни:</span>
                    <select
                        value={sel}
                        onChange={(e) => setSel(e.target.value)}
                    >
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                </label>
                <label className={s.item}>
                    Выбор этажа:
                    <select
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                    >
                        {arrFloor.map((item, ind) => (
                            <option key={ind} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </label>
                <label className={s.item}>
                    Выбор переговорки:
                    <select
                        value={meetingRoom}
                        onChange={(e) => setMeetingRoom(e.target.value)}
                    >
                        {arrMeetingRoom.map((item, ind) => (
                            <option key={ind} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </label>
                <button onClick={onSubmit}>Отправить в консоль</button>
                <input
                    className={s.butRes}
                    type="reset"
                    onClick={() => clearInput()}
                    value="Очистить форму"
                ></input>
            </form>
        </div>
    );
}

export default Form;
