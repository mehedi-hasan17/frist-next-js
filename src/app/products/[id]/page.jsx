export default async function products ({params}){
     const { id } = await params
     return(
          <div>
               <h1>Product details:{id}</h1>
          </div>
     )
}