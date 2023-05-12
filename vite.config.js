/// <reference types="vitest"/>
/// <reference types="vite/client"/>
import reactNative from "vitest-react-native";
// this is needed for react jsx support
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";


export default defineConfig({
    plugins: [reactNative(), react()],
    globals: true,
    environment: "jsdom",
    test: {
        deps: {
          inline: [
            "react-native"
          ]
        }
      }
})