
export default async function AllSulgProduct({params}) {
    const {product_review} = await params
    console.log(product_review)
  return (
    <div>{product_review}</div>
  )
}
