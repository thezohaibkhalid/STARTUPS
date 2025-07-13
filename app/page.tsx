import { Search } from "lucide-react";
import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import { auth } from "@/auth";
import StartupCard from "@/components/StartupCard";
export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const posts = [
    {
      _createdAt: new Date().toISOString(),
      views: 150,
      author: { _id: "1", name: "Zohaib Khalid" },
      _id: "1",
      description:
        "A revolutionary startup that changes the way we interact with technology.",
      image:
        "https://www.esparklearning.com/app/uploads/2024/04/Albert-Einstein-generated-by-AI-1024x683.webp",
      category: "Technology",
      title: "Tech Revolution",
    },
  ];

  type StartupcardType = {
    _createdAt: string;
    views: number;
    author: { _id: string };
    _id: string;
    description: string;
    image: string;

    category: string;
    title: string;
  };

  const query = searchParams?.query || "";
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          {" "}
          Submit Ideas, Vote on Pitches, and Get Notices in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupcardType, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
