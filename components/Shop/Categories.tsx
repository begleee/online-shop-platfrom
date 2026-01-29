import { Button } from "../ui/button";

const CATEGORIES = ["Women", "Men", "Children", "Food", "Sport", "Home", "Electronics"];

export default function Categories() {
  console.log(CATEGORIES.length)
  return (
    <div>
      <p className="text-2xl font-bold">Categories</p>
      <div className="mt-8 grid grid-cols-4 gap-2">
        {
          CATEGORIES.map((category) => (
              <Button className="font-bold hover:scale-[101%] cursor-pointer" variant="outline" key={category}>
                {category}
              </Button>
          ))
        }
      </div>
    </div>
  )
}
