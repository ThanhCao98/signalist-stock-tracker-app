import { Inngest } from "inngest";

export const inngest = new Inngest({
    id: "signalist",
    ai: {
        gemini: {
            apiKey: process.env.GEMiNI_API_KEY!,
        },
    }
});