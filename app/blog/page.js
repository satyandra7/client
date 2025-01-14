import { Suspense } from "react";
import { MapFilterItems } from "../components/MapFilterItems";
import { ListingCard } from "../components/ListingCard";
import { useFetchBlogQuery }from "../lib/services/blog";

export default function Home({ searchParams }) {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilterItems />

        <ShowItems searchParams={searchParams} />
      
    </div>
  );
}

function ShowItems({ searchParams }) {
  const { data: blogs, error, isLoading } = useFetchBlogQuery(searchParams);

  

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {blogs.length === 0 ? (
        <NoItems
          description="Please check another category or create your own listing!"
          title="Sorry, no listings found for this category..."
        />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {blogs.map((item) => (
            <ListingCard
              key={item._id}
              description={item.description}
              imagePath={item.photo}
              price={item.price}
              pathName="/"
            />
          ))}
        </div>
      )}
    </>
  );
}

function SkeletonLoading() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      {/* <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard /> */}
    </div>
  );
}