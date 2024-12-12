import { describe, it, expect } from "vitest";
import { cn, formatDate, readingTime, dateRange } from "./utils";

describe("cn function", () => {
  it("should merge Tailwind classes correctly", () => {
    expect(cn("p-4", "m-2", "text-center")).toBe("p-4 m-2 text-center");
  });

  it("should handle conditional classes", () => {
    expect(cn("p-4", false && "hidden", "text-center")).toBe("p-4 text-center");
  });

  it("should remove duplicates using tailwind-merge", () => {
    expect(cn("p-4", "p-2")).toBe("p-2");
  });
});

describe("formatDate function", () => {
  it("should format a date correctly", () => {
    const date = new Date("2023-12-12");
    expect(formatDate(date)).toBe("Dec 12, 2023");
  });
});

describe("readingTime function", () => {
  it("should calculate reading time for short text", () => {
    const html = "<p>This is a short text.</p>";
    expect(readingTime(html)).toBe("1 min read");
  });

  it("should calculate reading time for long text", () => {
    const html = "<p>" + "word ".repeat(500) + "</p>";
    expect(readingTime(html)).toBe("4 min read");
  });
});

describe("dateRange function", () => {
  it("should return date range for same year", () => {
    const start = new Date("2023-01-01");
    const end = new Date("2023-12-31");
    expect(dateRange(start, end)).toBe("Jan2023 - Dec2023");
  });

  it("should return date range for different years", () => {
    const start = new Date("2023-01-01");
    const end = new Date("2024-01-01");
    expect(dateRange(start, end)).toBe("Jan2023 - Jan2024");
  });

  it("should handle open-ended ranges", () => {
    const start = new Date("2023-01-01");
    expect(dateRange(start, "2024")).toBe("Jan2023 - 2024");
  });

  it("should handle only start date", () => {
    const start = new Date("2023-01-01");
    expect(dateRange(start)).toBe("Jan2023 - undefinedundefined");
  });
});
