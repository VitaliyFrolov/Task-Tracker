'use client'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FC } from "react";

export const Calendar: FC = () => {
    return (
        <FullCalendar
            plugins={[
                dayGridPlugin, 
                timeGridPlugin, 
                interactionPlugin
            ]}
            initialView="dayGridMonth"
            selectable
            editable
        />
    );
}