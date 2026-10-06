// shows the conditions and time
function WeatherData(props) {
    const { conditions, time } = props

    return (
        <>
            <p>Conditions: {conditions}</p>
            <p>Time: {time}</p>
        </>
    )
}

export default WeatherData
