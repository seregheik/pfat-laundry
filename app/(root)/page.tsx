import SearchForm from "@/app/components/SearchForm";

export default async function Home({searchParams}:{searchParams : Promise<{search?: string}>}) {
    const query = (await searchParams).search
  return (
      <section className="pink_container">
          <h1 className="heading">
              Pitch Your Startup, <br/>
              Connect With entrepreneurs
          </h1>
          <p className="sub-heading !max-w-3xl">
              Submit Ideas,
              Vote on Pitches,
              and Get Noticed in Virtual Competitions
          </p>
          <SearchForm query={query}/>
      </section>
);
}
