// async function getProduct(details) {
//   const res = await fetch(`https://dummyjson.com/users/${details}`);
//   return res.json();
// }

export default async function ProductPage({ params }) {
  const { details } =await params; // Destructure params directly
//   const product = await getProduct(details); // Fetch user data

  return (
    <div>
      <h1>{details}</h1>
    </div>
  );
}