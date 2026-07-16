import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    include: [
      "lib/learnerArtifacts/*.test.ts",
      "lib/courseProgress/*.test.ts",
    ],
    setupFiles: ["./test/setup.ts"],
    clearMocks: true,
    coverage: {
      reporter: ["text"],
      reportsDirectory: join(tmpdir(), "future-of-id-IWO-5-001-coverage"),
    },
  },
});
