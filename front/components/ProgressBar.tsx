"use client"

import { Next13ProgressBar } from "next13-progressbar"

export function ProgressBar() {
  return (
    <Next13ProgressBar
      height={"5px"}
      color={"white"}
      options={{ showSpinner: true }}
      showOnShallow
    />
  )
}
