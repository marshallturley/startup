import React from "react";
import { WorkoutEvent, WorkoutNotifierInstance } from "../workout/workoutNotifier";
import './notifications.css'

export function WorkoutNotifications(props) {
    const userName = props.userName
    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        function handleWorkoutEvent(event) {
            setEvents((prevEvents) => [...prevEvents, event]);
        }

        WorkoutNotifierInstance.addHandler(handleWorkoutEvent);

        return () => {
            WorkoutNotifierInstance.removeHandler(handleWorkoutEvent);
        };
    }, []);

    function handleClose(index) {
        setEvents((prev) => prev.filter((_,i) => i !== index));
    }

    function createMessageArray() {
        return events.map((event,i) => {
            let message = 'Unknown event';

            if (event.type === WorkoutEvent.WorkoutLogged) {
                message = `logged: "${event.value.description}"`;
            } else if (event.type === WorkoutEvent.System) {
                if (event.value.msg === "connected" || event.value.msg === "system connected") {
                    return null
                }
                message = event.value.msg;
            }

            return (
                <div key={i} className="box">
                    <div className="box-close" onClick={() => handleClose(i)}>x</div>
                    <span className="box-message">{event.from}</span> {message}
                </div>
            );
        });
    }

    return (
        <div className="workout-box-container">
            {createMessageArray()}
        </div>
    );
}