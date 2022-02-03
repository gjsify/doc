"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
const typedoc_1 = require("typedoc");
const Colors = {
    red: "\u001b[91m",
    yellow: "\u001b[93m",
    cyan: "\u001b[96m",
    gray: "\u001b[90m",
    reset: "\u001b[0m",
};
const messagePrefixes = {
    [typedoc_1.LogLevel.Error]: "Error: ",
    [typedoc_1.LogLevel.Warn]: "Warning: ",
    [typedoc_1.LogLevel.Info]: "Info: ",
    [typedoc_1.LogLevel.Verbose]: "Debug: ",
};
const coloredMessagePrefixes = {
    [typedoc_1.LogLevel.Error]: `${Colors.red}${messagePrefixes[typedoc_1.LogLevel.Error]}${Colors.reset}`,
    [typedoc_1.LogLevel.Warn]: `${Colors.yellow}${messagePrefixes[typedoc_1.LogLevel.Warn]}${Colors.reset}`,
    [typedoc_1.LogLevel.Info]: `${Colors.cyan}${messagePrefixes[typedoc_1.LogLevel.Info]}${Colors.reset}`,
    [typedoc_1.LogLevel.Verbose]: `${Colors.gray}${messagePrefixes[typedoc_1.LogLevel.Verbose]}${Colors.reset}`,
};
/**
 * A logger that outputs all messages to the console.
 * @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/utils/loggers.ts
 */
class ConsoleLogger extends typedoc_1.Logger {
    /**
     * Specifies if the logger is using color codes in its output.
     */
    hasColoredOutput;
    /**
     * Create a new ConsoleLogger instance.
     */
    constructor() {
        super();
        this.hasColoredOutput = !("NO_COLOR" in process.env);
    }
    /**
     * Print a log message.
     *
     * @param message  The message itself.
     * @param level  The urgency of the log message.
     */
    log(message, level) {
        super.log(message, level);
        if (level < this.level) {
            return;
        }
        const method = {
            [typedoc_1.LogLevel.Error]: "error",
            [typedoc_1.LogLevel.Warn]: "warn",
            [typedoc_1.LogLevel.Info]: "info",
            [typedoc_1.LogLevel.Verbose]: "log",
        }[level];
        const prefix = this.hasColoredOutput
            ? coloredMessagePrefixes[level]
            : messagePrefixes[level];
        console[method](prefix + message);
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUEyQztBQUUzQyxNQUFNLE1BQU0sR0FBRztJQUNiLEdBQUcsRUFBRSxZQUFZO0lBQ2pCLE1BQU0sRUFBRSxZQUFZO0lBQ3BCLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxZQUFZO0lBQ2xCLEtBQUssRUFBRSxXQUFXO0NBQ25CLENBQUM7QUFFRixNQUFNLGVBQWUsR0FBRztJQUN0QixDQUFDLGtCQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUztJQUMzQixDQUFDLGtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVztJQUM1QixDQUFDLGtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUTtJQUN6QixDQUFDLGtCQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUztDQUM5QixDQUFDO0FBRUYsTUFBTSxzQkFBc0IsR0FBRztJQUM3QixDQUFDLGtCQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxrQkFBUSxDQUFDLEtBQUssQ0FBQyxHQUMvRCxNQUFNLENBQUMsS0FDVCxFQUFFO0lBQ0YsQ0FBQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsR0FDaEUsTUFBTSxDQUFDLEtBQ1QsRUFBRTtJQUNGLENBQUMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLGtCQUFRLENBQUMsSUFBSSxDQUFDLEdBQzlELE1BQU0sQ0FBQyxLQUNULEVBQUU7SUFDRixDQUFDLGtCQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxHQUNwRSxNQUFNLENBQUMsS0FDVCxFQUFFO0NBQ0gsQ0FBQztBQUVGOzs7R0FHRztBQUNILE1BQWEsYUFBYyxTQUFRLGdCQUFNO0lBQ3ZDOztPQUVHO0lBQ0ssZ0JBQWdCLENBQVU7SUFFbEM7O09BRUc7SUFDSDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNNLEdBQUcsQ0FBQyxPQUFlLEVBQUUsS0FBZTtRQUMzQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3RCLE9BQU87U0FDUjtRQUVELE1BQU0sTUFBTSxHQUNWO1lBQ0UsQ0FBQyxrQkFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU87WUFDekIsQ0FBQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU07WUFDdkIsQ0FBQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU07WUFDdkIsQ0FBQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUs7U0FFNUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVULE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7WUFDbEMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQztZQUMvQixDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGO0FBekNELHNDQXlDQyJ9