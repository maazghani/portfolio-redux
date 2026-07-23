"use client";

import {
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type CommandResult = {
  command: string;
  output: string;
};

const sectionCommands: Record<string, { target: string; output: string }> = {
  whoami: {
    target: "bio",
    output: "Maaz Ghani — security-first Staff Kubernetes Engineer.",
  },
  about: {
    target: "bio",
    output: "Jumped to profile.",
  },
  experience: {
    target: "experience",
    output: "Reading career journal in reverse chronological order.",
  },
  logs: {
    target: "experience",
    output: "Reading career journal in reverse chronological order.",
  },
  work: {
    target: "work",
    output: "Listing ~/projects.",
  },
  projects: {
    target: "work",
    output: "Listing ~/projects.",
  },
  ls: {
    target: "work",
    output: "ChatWithKubernetes  PDFQuery  Thinscale",
  },
  thoughts: {
    target: "thoughts",
    output: "Tailing the latest notes.",
  },
  writing: {
    target: "thoughts",
    output: "Tailing the latest notes.",
  },
  contact: {
    target: "contact",
    output: "Connection channels initialized.",
  },
  connect: {
    target: "contact",
    output: "Connection channels initialized.",
  },
};

const suggestions = ["whoami", "logs", "ls", "thoughts", "connect"];

export function TerminalConsole() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<CommandResult[]>([
    {
      command: "status --brief",
      output: "platform: healthy · location: Seattle, WA · shell: frappe",
    },
  ]);

  useEffect(() => {
    const focusConsole = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", focusConsole);
    return () => window.removeEventListener("keydown", focusConsole);
  }, []);

  const runCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setValue("");
      return;
    }

    if (command === "help") {
      setHistory((current) => [
        ...current,
        {
          command,
          output:
            "Commands: whoami, logs, ls, thoughts, connect, resume, email, clear",
        },
      ]);
      setValue("");
      return;
    }

    if (command === "resume") {
      setHistory((current) => [
        ...current,
        { command, output: "Opening resume.pdf in a new tab." },
      ]);
      window.open("https://maaz.sh/resume.pdf", "_blank", "noopener,noreferrer");
      setValue("");
      return;
    }

    if (command === "email") {
      setHistory((current) => [
        ...current,
        { command, output: "Opening your default mail client." },
      ]);
      window.location.href = "mailto:maazghani@gmail.com";
      setValue("");
      return;
    }

    const section = sectionCommands[command];

    if (section) {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      setHistory((current) => [
        ...current,
        { command, output: section.output },
      ]);
      document
        .getElementById(section.target)
        ?.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
      setValue("");
      return;
    }

    setHistory((current) => [
      ...current,
      {
        command,
        output: `command not found: ${command}. Try "help".`,
      },
    ]);
    setValue("");
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(value);
  };

  const completeSuggestion = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Tab") return;

    const suggestion = suggestions.find((item) => item.startsWith(value));
    if (suggestion) {
      event.preventDefault();
      setValue(suggestion);
    }
  };

  return (
    <div className="console" aria-label="Interactive portfolio command line">
      <div className="console__history" aria-live="polite">
        {history.slice(-3).map((item, index) => (
          <div className="console__entry" key={`${item.command}-${index}`}>
            <p>
              <span className="prompt-user">maaz@seattle</span>
              <span className="prompt-path">:~$</span> {item.command}
            </p>
            <p className="console__output">{item.output}</p>
          </div>
        ))}
      </div>

      <form className="console__form" onSubmit={submit}>
        <label className="sr-only" htmlFor="portfolio-command">
          Enter a portfolio command
        </label>
        <span className="prompt-user" aria-hidden="true">
          guest@maaz.sh
        </span>
        <span className="prompt-path" aria-hidden="true">
          :~$
        </span>
        <input
          ref={inputRef}
          id="portfolio-command"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={completeSuggestion}
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          placeholder='try "help"'
          aria-keyshortcuts="Control+K Meta+K"
        />
        <button type="submit">run</button>
      </form>

      <div className="console__suggestions" aria-label="Suggested commands">
        {suggestions.map((command) => (
          <button
            key={command}
            type="button"
            onClick={() => runCommand(command)}
          >
            {command}
          </button>
        ))}
        <span>⌘K to focus</span>
      </div>
    </div>
  );
}
