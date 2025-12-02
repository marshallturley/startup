import React from "react";
import { WorkoutEvent, WorkoutNotifierInstance } from "../workout/workoutNotifier";

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

    function createMessageArray() {
        return events.map((event,i) => {
            let message = 'Unknown event';

            if (event.type === WorkoutEvent.WorkoutLogged) {
                message = `${event.from} logged: "${event.value.description}"`;
            } else if (event.type === WorkoutEvent.System) {
                message = event.value.msg;
            }

            return (
                <div key={i} className="event">
                    <span className="user-event">{event.from}</span> {message}
                </div>
            );
        });
    }

    return (
        <div className="workout-notifications">
            <h3>Workout Notifications</h3>
            <div id="notifications-list">{createMessageArray()}</div>
        </div>
    );
}