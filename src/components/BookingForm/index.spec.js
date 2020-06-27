import { getNearestSlotDate } from "."

describe("getNearestSlotDate", () => {
  it("should return the next hour of the day if the time is lesser than or equals to the max hour", () => {
    expect(getNearestSlotDate(new Date(2019, 6, 15, 18))).toEqual(
      new Date(2019, 6, 15, 19)
    )
  })

  it("should return next day at min hour if the time is higher than the max hour", () => {
    expect(getNearestSlotDate(new Date(2019, 6, 15, 22))).toEqual(
      new Date(2019, 6, 16, 7)
    )
  })

  it("should return the same day at min hour if the time is lesser than the min hour", () => {
    expect(getNearestSlotDate(new Date(2019, 6, 16, 6))).toEqual(
      new Date(2019, 6, 16, 7)
    )
  })
})
