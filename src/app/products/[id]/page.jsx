export default async function products({ params }) {
  const { id } = await params;
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const posts = await data.json();
  console.log(posts);

  return (
    <div>
      <h1>Product details:{posts.name}</h1>
    </div>
  );
}
