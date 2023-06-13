import { rest } from "msw";
import timeClusterMain from "./json/time/cluster/timeClusterMain.json";
import timeClusterSub from "./json/time/cluster/timeClusterSub.json";
import ratioClusterMain from "./json/ratio/cluster/ratioClusterMain.json";
import ratioClusterSub from "./json/ratio/cluster/ratioClusterSub.json";
import distanceClusterMain from "./json/distance/cluster/distanceClusterMain.json";
import distanceClusterSub from "./json/distance/cluster/distanceClusterSub.json";

// eslint-disable-next-line import/prefer-default-export
export const handlers = [
  rest.get("/cluster/time/main", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(timeClusterMain));
  }),

  rest.get("/cluster/time/sub", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(timeClusterSub));
  }),
  rest.get("/cluster/ratio/main", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ratioClusterMain));
  }),

  rest.get("/cluster/ratio/sub", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ratioClusterSub));
  }),
  rest.get("/cluster/distance/main", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(distanceClusterMain));
  }),

  rest.get("/cluster/distance/sub", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(distanceClusterSub));
  }),

  rest.get("/item/time/:id", async (req, res, ctx) => {
    const { id } = req.params;

    const jsonData = await import(`./json/time/item/time_item_${id}.json`);
    return res(ctx.status(200), ctx.json(jsonData));
  }),

  rest.get("/item/ratio/:id", async (req, res, ctx) => {
    const { id } = req.params;

    const jsonData = await import(`./json/ratio/item/ratio_item_${id}.json`);
    return res(ctx.status(200), ctx.json(jsonData));
  }),

  rest.get("/item/distance/:id", async (req, res, ctx) => {
    const { id } = req.params;

    const jsonData = await import(
      `./json/distance/item/distance_item_${id}.json`
    );
    return res(ctx.status(200), ctx.json(jsonData));
  }),
];

// async function sleep(timeout: any) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, timeout);
//   });
// }
