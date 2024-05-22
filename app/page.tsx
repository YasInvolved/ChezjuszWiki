import Database from "@/database/database";

export default async function Home() {
  const posts = await Database.getAllPosts();
  return (
    <main className="flex min-h-screen bg-white dark:bg-dark transition-colors duration-500">
      <form action="/api/posts" method="POST" target="dummy">
        <input type="text" id="title" name="title"/>
        <input type="text" id="markup" name="markup"/>
        <input type="submit" value="Submit"/>
        {posts.map((post, index) => {
          return (
            <a href={`/api/posts?id=${post.postId}`} key={index} className="text-black dark:text-white">
              <div>{`Tytuł: ${post.title}`}</div>
              <div>{`Treść: ${post.text}`}</div>
              <div>{`ID: ${post.postId}`}</div>
              <div>{`Data utworzenia: ${new Date(post.createdAt).toDateString()}`}</div>
            </a>
          )
        })}
      </form>
    </main>
  );
}
