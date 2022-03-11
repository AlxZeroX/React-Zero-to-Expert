import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { messages } from '../../helpers/calendar-messages-es'
import { CalendarEvent } from './CalendarEvent'
import 'react-big-calendar/lib/css/react-big-calendar.css';



import 'moment/locale/es';
moment.locale('es');


const localizer = momentLocalizer(moment);

const events = [
    {
        title: "Cumpleaños Mi",
        start: moment().toDate(),
        end: moment().add(2, "hours").toDate(),
        bgcolor: "#fafafa",
        notes: 'Comprar el Pastel',
        user: {
            _id: '123',
            name: 'Alex'
        }
    },
];


export const CalendarScreen = () => {

    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );


    const onDoubleClick = (e) => {
        console.log(e);
    }

    const onSelectEvent = (e) => {
        console.log(e);
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }


        return {
            style
        }
    };



    return (
        <div className="calendar-container">
            <div className="calendar-screen">
                <Navbar />

                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    messages={messages}
                    eventPropGetter={eventStyleGetter}
                    components={{
                        event: CalendarEvent
                    }}
                    onDoubleClickEvent={onDoubleClick}
                    onSelectEvent={onSelectEvent}
                    onView={onViewChange}
                    view={ lastView }

                />
            </div>
        </div>
    )
}