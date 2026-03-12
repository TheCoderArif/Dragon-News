import { FaEye, FaStar } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";

const NewsCard = ({ news }) => {

  const {
    title,
    thumbnail_url,
    details,
    total_view,
    author,
    rating
  } = news;

  return (
    <div className="card bg-base-100 shadow-md my-2">

      {/* Header */}
      <div className="flex justify-between items-center bg-base-200 p-4">

        <div className="flex items-center gap-3">
          <img
            src={author.img}
            className="w-10 h-10 rounded-full"
            alt=""
          />

          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-4 text-xl text-gray-500">
          <BsBookmark className="cursor-pointer" />
          <FiShare2 className="cursor-pointer" />
        </div>

      </div>

      {/* Body */}
      <div className="card-body">

        {/* Title */}
        <h2 className="card-title text-lg font-bold">
          {title}
        </h2>

        {/* Image */}
        <figure>
          <img
            src={thumbnail_url}
            className="rounded-lg w-3/4"
            alt=""
          />
        </figure>

        {/* Details */}
        <p className="text-gray-600 text-sm mt-3">
          {details.slice(0, 200)}...
          <span className="text-orange-500 font-semibold cursor-pointer ml-2">
            Read More
          </span>
        </p>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 ">

        <div className="flex items-center gap-2 text-orange-400">
          <FaStar />
          <span className="text-black">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>

      </div>

    </div>
  );
};

export default NewsCard;