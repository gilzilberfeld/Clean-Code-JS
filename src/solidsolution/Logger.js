export class Logger {
    log(message, param) {
        const messageWithParam = "Log: " + message + " " + param;
        console.log(messageWithParam);
    }
}