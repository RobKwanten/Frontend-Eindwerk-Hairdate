import React from 'react'

export const DateFormat = (datetime) => {
    datetime = new Date(datetime)
    const year = datetime.getFullYear(datetime)
    const month = datetime.getMonth()+1
    const day = datetime.getDate()
    return day+"/"+month+"/"+year
}

export const TimeFormat = (datetime) => {
    datetime = new Date(datetime)
    const hours = datetime.getHours()
    const minutes = datetime.getMinutes()
    return hours+":"+minutes
}