import { Builder } from "@builder.io/react"
import { Text } from "./Text"

Builder.registerComponent(Text, {
  name: "Texte",
  inputs: [
    {
      name: "children",
      type: "string",
      defaultValue: "Hello world",
    },
  ],
})
