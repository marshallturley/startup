class WorkoutEvent {
    static System = 'system';
    static WorkoutLogged = 'workoutLogged';
}

class WorkoutEventMessage {
    constructor(from, type, value) {
        this.from = from;
        this.type = type;
        this.value = value;
    }
}

class WorkoutNotifier {
    events = [];
    handlers = [];

    constructor() {
        const port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

        this.socket.onopen = () => {
            this.receiveEvent(new WorkoutEventMessage('System', WorkoutEvent.System, { msg: 'connected' }));
        };

        this.socket.onclose = () => {
            this.receiveEvent(new WorkoutEventMessage('System', WorkoutEvent.System, { msg: 'disconnected' }));
        };

        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.receiveEvent(event);
            } catch {}
        };
    }

    broadcastEvent(from, type, value) {
        const event = new WorkoutEventMessage(from, type, value);
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(event));
        } else {
            this.socket.addEventListener('open', () => {
                this.socket.send(JSON.stringify(event));
            }, { once: true });
        }
        
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
    }

    receiveEvent(event) {
    this.events.push(event);
    this.handlers.forEach((handler) => {
            handler(event);
    });
    }
}

const WorkoutNotifierInstance = new WorkoutNotifier();

export { WorkoutEvent, WorkoutNotifierInstance };