import humanizeSmallDuration from "@/filters/humanizeSmallDuration";

describe("humanizeSmallDuration", () => {
  it("humanize 0", () => {
    expect(humanizeSmallDuration(0)).toMatch("0 second");
  });
  it("humanize only seconds", () => {
    expect(humanizeSmallDuration(32)).toMatch("32 seconds");
  });
  it("humanize only minutes", () => {
    expect(humanizeSmallDuration(180)).toMatch("3 minutes");
  });
  it("humanize only hours", () => {
    expect(humanizeSmallDuration(14400)).toMatch("4 hours");
  });
  it("humanize all plural", () => {
    expect(humanizeSmallDuration(10453)).toMatch(
      "2 hours 54 minutes 13 seconds"
    );
  });
  it("humanize all singular", () => {
    expect(humanizeSmallDuration(3661)).toMatch("1 hour 1 minute 1 second");
  });
  it("humanize no minute", () => {
    expect(humanizeSmallDuration(7225)).toMatch("2 hours 25 seconds");
  });
  it("humanize no hour", () => {
    expect(humanizeSmallDuration(336)).toMatch("5 minutes 36 seconds");
  });
});
