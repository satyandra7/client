import Image from "next/image";
import Link from "next/link";


export function ListingCard({
  description,
  imagePath,
  price,
}) {
  

  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <Image
          src= {imagePath}
          alt="Image of House"
          fill
          className="rounded-lg h-full object-cover"
        />
      </div>

      <Link href={'/'} className="mt-2">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <p className="pt-2 text-muted-foreground">
          <span className="font-medium text-black">${price}</span> Night
        </p>
      </Link>
    </div>
  );
}