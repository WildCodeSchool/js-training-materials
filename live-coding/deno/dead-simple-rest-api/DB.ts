import { v4 } from "https://deno.land/std/uuid/mod.ts";

interface User {
  id: string;
  name: string;
  photo: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
}

const DB = {
  users: new Map<string, User>(),
  posts: new Map<string, Post>(),
};

let idUser = v4.generate(); // For demo purpose only
let idPost = v4.generate(); // For demo purpose only
DB.users.set(idUser, { id: idUser, name: "Toto", photo: "Test de photo" }); // For demo purpose only
DB.posts.set(idPost, { id: idPost, content: "Lorem Ipsum", title: "Super Post", userId: idUser }); // For demo purpose only

export default DB;
