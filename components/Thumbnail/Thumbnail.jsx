import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Thumbnail = ({ movie }) => {
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        src={`https://image.tmdb.org/t/p/original${
          movie?.backdrop_path || movie?.poster_path
        }`}
        layout="responsive"
        height={1080}
        width={1920}
        alt={movie?.title}
      />
      <p className="truncate max-w-md">{movie?.overview}</p>
      <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
        {movie?.title || movie?.original_title || movie?.original_name}{" "}
      </h2>
      <p className="flex items-center opacity-0 group-hover:opacity-100">
        {movie?.media_type && `${movie?.media_type} . `}
        {`${movie?.release_date || movie?.first_air_date} .`}{" "}
        <ThumbUpIcon className="h-5 mx-2" /> {movie?.vote_count}
      </p>
    </div>
  );
};

export default Thumbnail;
