import Link from "next/link";

export default function products (){
     return(
          <div>
               <h1>This is Products Page</h1>
               <Link href="/products/1">Product 1</Link><br/>
               <Link href="/products/2">Product 2</Link><br/>
               <Link href="/products/3">Product 3</Link><br/>
               <Link href="/products/4">Product 4</Link><br/>
               <Link href="/products/5">Product 5</Link><br/>
          
          </div>
     )
}