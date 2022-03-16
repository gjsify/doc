import { Logger, LogLevel } from "typedoc";

const Colors = {
  red: "\u001b[91m",
  yellow: "\u001b[93m",
  cyan: "\u001b[96m",
  gray: "\u001b[90m",
  reset: "\u001b[0m"
};

const messagePrefixes = {
  [LogLevel.Error]: "Error: ",
  [LogLevel.Warn]: "Warning: ",
  [LogLevel.Info]: "Info: ",
  [LogLevel.Verbose]: "Debug: "
};

const coloredMessagePrefixes = {
  [LogLevel.Error]: `${Colors.red}${messagePrefixes[LogLevel.Error]}${
    Colors.reset
  }`,
  [LogLevel.Warn]: `${Colors.yellow}${messagePrefixes[LogLevel.Warn]}${
    Colors.reset
  }`,
  [LogLevel.Info]: `${Colors.cyan}${messagePrefixes[LogLevel.Info]}${
    Colors.reset
  }`,
  [LogLevel.Verbose]: `${Colors.gray}${messagePrefixes[LogLevel.Verbose]}${
    Colors.reset
  }`
};

/**
 * A logger that outputs all messages to the console.
 * @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/utils/loggers.ts
 */
export class ConsoleLogger extends Logger {
  /**
   * Specifies if the logger is using color codes in its output.
   */
  private hasColoredOutput: boolean;

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
  override log(message: string, level: LogLevel) {
    super.log(message, level);
    if (level < this.level) {
      return;
    }

    const method = (
      {
        [LogLevel.Error]: "error",
        [LogLevel.Warn]: "warn",
        [LogLevel.Info]: "info",
        [LogLevel.Verbose]: "log"
      } as const
    )[level];

    const prefix = this.hasColoredOutput
      ? coloredMessagePrefixes[level]
      : messagePrefixes[level];

    console[method](prefix + message);
  }
}
