const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                'Thursday', 'Friday', 'Saturday']
        

function getWeekDay() {
    const dateStr = prompt('enter date in format dd.mm.yyyy :');
    const [day, month, year] = dateStr.split('.')
    let date = new Date(`${year}-${month}-${day}`)
    
    return weekDays[date.getDay()];
}

module.exports = getWeekDay;