import { useEffect, useState } from "react";

export default function Project() {
  const [memes, setMemes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes))
      .catch((err) => console.error(err));
  }, []);

  const filtered = memes.filter((meme) =>
    meme.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-cyan-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Meme Gallery</h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search memes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-full max-w-md text-lg"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((meme) => (
          <div
            key={meme.id}
            className=" shadow p-3  hover:scale-105 duration-200"
          >
            <img
              src={meme.url}
              alt={meme.name}
              className="w-full h-auto rounded"
            />
            <p className="mt-2 text-center font-medium">{meme.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
