import { Search } from "lucide-react";
import Image from "next/image";
import SearchForm from "@/components/SearchForm";

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
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
    </>
  );
}
