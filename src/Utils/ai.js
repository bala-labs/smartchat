import { pipeline, env } from "@xenova/transformers";

// Required for browser
env.allowLocalModels = false;
env.useBrowserCache = true;
env.remoteModelPath = "https://huggingface.co/";

let generator = null;

export async function getAIResponse(message) {
    if (!generator) {
        generator = await pipeline(
            "text-generation",
            "Xenova/distilgpt2",
            { quantized: true }
        );
    }

    const prompt = `User: ${message}\nAI:`;

    const output = await generator(prompt, {
        max_new_tokens: 40,
        temperature: 0.8,
        do_sample: true
    });

    console.log(output);

    return output[0].generated_text.replace(prompt, "").split("\n")[0].trim();
}