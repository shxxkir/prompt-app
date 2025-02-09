import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
    try {
        await connectToDB();

        res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");

        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response('Failed to fetch all prompts', { status: 500 })
    }
}