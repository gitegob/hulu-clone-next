import Thumbnail from "../Thumbnail/Thumbnail";

function Results({ results }: { results: any[] }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result, i) => (
        <Thumbnail key={i} movie={result} />
      ))}
    </div>
  );
}

export default Results;
