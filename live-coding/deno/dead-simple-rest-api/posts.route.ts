import { v4 } from "https://deno.land/std/uuid/mod.ts";

import DB from "./DB.ts";
import { RequestError } from "./index.ts";

export const getAllPosts = (ctx: any) => {
  ctx.response.body = [...DB.posts.values()];
};

export const GetOnePost = (ctx: any) => {
  const { id } = ctx.params;
  if (id && DB.posts.has(id)) {
    ctx.response.body = { ...DB.posts.get(id) };
  } else {
    const error = new Error("Not found! 🦕") as RequestError;
    error.status = 404;
    throw error;
  }
};

export const PostPost = async (ctx: any) => {
  const body = await ctx.request.body();
  const { title, content, userId } = body.value;
  const post = { id: v4.generate(), title, content, userId };

  DB.posts.set(post.id, post);
  ctx.response.body = post;
};

export const DeletePost = async (ctx: any) => {
  const { id } = ctx.params;
  if (id && DB.posts.has(id)) {
    DB.posts.delete(id);
    ctx.response.status = 204;
    ctx.response.body = 1;
  } else {
    const error = new Error("Not found! 🦕") as RequestError;
    error.status = 404;
    throw error;
  }
};
