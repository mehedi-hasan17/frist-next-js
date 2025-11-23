import Link from "next/link";

export default async function about() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await data.json();
  console.log(posts);
  
  return (
    <div>
      <h1>This is About Page</h1>
      <div className="flex flex-col">
          {
               posts.map(post => <Link key={post.id} href={`/products/${post.id}`}>{post.name}</Link>)
          }
      </div>
    </div>
  );
}
