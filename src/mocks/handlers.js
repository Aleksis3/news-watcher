import { rest } from "msw";
import news from "./mock2.json";
export default [
  rest.get("/message", (req, res, ctx) => {
    const params = req.url.searchParams;
    const limit = params.get("limit") || 20;
    const offset = params.get("offset") || 0;
    // console.log(req.url.searchParams.get("limit"));
    const slicedNews = {
      pagination: news.pagination,
      data: news.data.slice(offset, limit),
    };
    // const slicedNews = news.data.slice(0, 50);
    return res(
      ctx.json({
        news: slicedNews,
      })
    );
  }),
];
