import { Client } from "@thebcms/client";

// All values are same as in `bcms.config.cjs`
export const bcms = new Client(
    "66ea48c2a38db2e03a2f9d7e",
    "66ea48fda38db2e03a2f9d80",
    {
        id: "66ea4ab4a38db2e03a2f9d86",
        secret: "8ed2d365c9226cc12691c47e644dcbffc02819e29d4237ef26a9a28472478c2b",
    },
    {
        injectSvg: true,
    },
);