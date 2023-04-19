import { rest } from "msw";
import news from "./mock.json";

export default [
  rest.get("/message", (req, res, ctx) => {
    const params = req.url.searchParams;
    const limit = params.get("limit") || 20;
    const offset = params.get("offset") || 0;
    const category = params.get("category");
    const query = params.get("query");
    let slicedNews;
    if (query) {
      const filtered = news.data.filter(
        (x) =>
          x.description.toLowerCase().includes(query.toLowerCase()) ||
          x.title.toLowerCase().includes(query.toLowerCase())
      );
      slicedNews = {
        pagination: { ...news.pagination, total: filtered.length },
        data: filtered.slice(+offset, +offset + +limit),
      };
    } else if (category) {
      const filtered = news.data.filter((x) => x.category === category);
      slicedNews = {
        pagination: { ...news.pagination, total: filtered.length },
        data: filtered.slice(+offset, +offset + +limit),
      };
    } else {
      slicedNews = {
        pagination: { ...news.pagination, total: news.data.length },
        data: news.data.slice(+offset, +offset + +limit),
      };
    }

    return res(
      ctx.json({
        news: slicedNews,
      })
    );
  }),
];
