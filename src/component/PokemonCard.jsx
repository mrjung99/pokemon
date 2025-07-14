import React from "react";

const PokemonCard = ({ data }) => {
  console.log(data);

  return (
    <li className="flex flex-col items-center shadow-md bg-white  hover:scale-105 hover:transition-transform hover:ease-in-out hover:duration-300">
      <figure
        style={{ borderRadius: "71% 28% 45% 54% / 47% 37% 43% 48%" }}
        className="bg-green-100 w-full  flex items-center justify-center p-2"
      >
        <img
          className="h-24 "
          src={data.sprites.other.dream_world.front_default}
          alt={data.name}
        />
      </figure>

      <h1 className="text-xl font-semibold my-3 capitalize">{data.name}</h1>

      <div>
        <p className="bg-green-500 text-white text-[12px] py-0.5 px-3 rounded-full capitalize ">
          {data.types
            .map((curType) => {
              return curType.type.name;
            })
            .join(", ")}
        </p>
      </div>

      <div className="flex justify-between w-full my-4 text-[12px] font-medium px-3">
        <p>
          Height: <span className="font-thin">{data.height}</span>
        </p>
        <p>
          Weight: <span className="font-thin">{data.weight}</span>
        </p>
        <p>
          Speed: <span className="font-thin">{data.stats[5].base_stat}</span>
        </p>
      </div>

      <div className="flex justify-between w-full text-[12px] font-thin px-3 pb-3">
        <div className="flex flex-col items-center">
          <p>{data.base_experience}</p>
          <span className="font-medium">Experience:</span>
        </div>

        <div className="flex flex-col items-center">
          <p>{data.stats[1].base_stat}</p>
          <span className="font-medium">Attack:</span>
        </div>

        <div className="flex flex-col items-center capitalize">
          <p className="m-0">
            {data.abilities
              .map((curAbility) => curAbility.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span className="font-medium">Abilities:</span>
        </div>
      </div>
    </li>
  );
};

export default PokemonCard;
