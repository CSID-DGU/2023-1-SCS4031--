import { rest } from "msw";
import timeItem from "./json/time/itemList.json";
import timeMainList from "./json/time/mainList.json";
import timeSubList from "./json/time/subList.json";

export const handlers = [
    rest.get("/item/time", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(timeItem));
    }),

    rest.get("/delivery/main/time", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(timeMainList));
    }),

    rest.get("/delivery/sub/time", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(timeSubList));
    })
]

async function sleep(timeout: any) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    })
}

