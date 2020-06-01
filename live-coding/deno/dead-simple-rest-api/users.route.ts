import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import DB from "./DB.ts";
import { RequestError } from "./index.ts";

export const GetAllUsers = (ctx: any) => {
  ctx.response.body = [...DB.users.values()];
};

export const GetOneUser = (ctx: any) => {
  const { id } = ctx.params;
  if (id && DB.users.has(id)) {
    ctx.response.body = { ...DB.users.get(id) };
  } else {
    const error = new Error("Not found! 🦕") as RequestError;
    error.status = 404;
    throw error;
  }
};

export const GetOneUserPosts = (ctx: any) => {
  const { id } = ctx.params;
  if (id && DB.users.has(id)) {
    ctx.response.body = [...DB.posts.values()].filter(({ userId }) => id === userId);
  } else {
    const error = new Error("Not found! 🦕") as RequestError;
    error.status = 404;
    throw error;
  }
};

export const PostUser = async (ctx: any) => {
  const body = await ctx.request.body();
  const { name, photo } = body.value;
  const user = { id: v4.generate(), name, photo };

  DB.users.set(user.id, user);
  ctx.response.body = user;
};

export const DeleteUser = async (ctx: any) => {
  const { id } = ctx.params;
  if (id && DB.users.has(id)) {
    DB.users.delete(id);
    ctx.response.status = 204;
    ctx.response.body = 1;
  } else {
    const error = new Error("Not found! 🦕") as RequestError;
    error.status = 404;
    throw error;
  }
};
