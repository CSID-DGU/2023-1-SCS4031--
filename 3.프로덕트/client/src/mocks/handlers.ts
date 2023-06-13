import { rest } from "msw";
import timeItem from "./json/time/itemList.json";
import timeMainList from "./json/time/mainList.json";
import timeSubList from "./json/time/subList.json";
import eightIndex from "./json/time/Item/8.json";
import thirtyNineIndex from "./json/time/Item/39.json";
import fourNineIndex from "./json/time/Item/49.json";
import oneSevenIndex from "./json/time/Item/17.json";
import oneIndex from "./json/time/Item/1.json";
import twoIndex from "./json/time/Item/2.json";
import threeIndex from "./json/time/Item/3.json";

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
    }),

    rest.get("/item/0", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(eightIndex));
    }),

    rest.get("/item/39", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(thirtyNineIndex));
    }),

    rest.get("/item/49", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(fourNineIndex));
    }),

    rest.get("/item/17", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(oneSevenIndex));
    }),

    rest.get("/item/1", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(oneIndex));
    }),

    rest.get("/item/2", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(twoIndex));
    }),

    rest.get("/item/3", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(threeIndex));
    }),

]

async function sleep(timeout: any) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    })
}

