import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleProduct = () => {
  const item = useLoaderData();
  useEffect( () => {
    window.scrollTo(0, 0);
  },[])

  const extractNumber = (timeString) => {
    let timeArray = timeString.split(" ");
    return parseInt(timeArray[0])
  }

  let prepTimeMinutes = extractNumber(item?.more[0].prep_time);
  let cookTimeMinutes = extractNumber(item?.more[0].cook_time);

  const totalTimeMinutes = prepTimeMinutes + cookTimeMinutes
  return (
    <section className="min-h-dvh md:flex justify-center items-center md:bg-eggshell">
      <article>
        <div className="bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl">
          <picture>
            <img src={item.thumbnail_image} alt="" className="md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto" />
          </picture>

          <div className='px-8'>
            <h1 className='text-4xl mt-12 text-secondary'>{item.name}</h1>
            <p className='mt-6'>An easy and quick dish, perfect for any meal. This classic omlette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats</p>

            <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
              <h3 className='text-xl font-semibold ml-2'>Preparation time</h3>
              <ul className='list-disc mt-3 ml-8 text-lg marker:text-orange-500'>
                <li className='pl-3'>
                  <p>
                    <span>Total:</span> <span>{totalTimeMinutes} minutes</span>
                  </p>
                </li>
                <li className='pl-3 mt-3'>
                  <p>
                    <span>Preparation:</span> <span>{item?.more[0].prep_time}</span>
                  </p>
                </li>
                <li className='pl-3 mt-3'>
                  <p>
                    <span>Cooking:</span> <span>{item?.more[0].cook_time}</span>
                  </p>
                </li>
              </ul>
            </article>

            <div className='mt-5'>
              <h3 className='text-xl font-semibold ml-2'>Ingredients</h3>
              <ul className="list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle">
                {
                  item?.ingredients.map((ingredient, index) => (
                    <li key={index} className='pl-4 mt-2'>
                      <span>{ingredient?.name}:</span>
                      <span>{ingredient?.quantity}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="font-fancy text-3xl text-nutmeg">Instructions</h3>
              <ol
                className="marker:text-nutmeg marker:font-semibold marker:font-outfit list-decimal mt-4 ml-6"
              >
                <li className='pl-4'>
                  <p>
                    <span className="font-bold">Beat the eggs: </span>In a bowl, beat
                    the eggs with a pinch of salt and pepper until they are well
                    mixed. You can add a tablespoon of water or milk for a
                    fluffier texture.
                  </p>
                </li>
                <li className="pl-4 mt-2">
                  <p>
                    <span className="font-bold">Heat the pan: </span>Place a non-stick
                    frying pan over medium heat and add butter or oil.
                  </p>
                </li>
                <li className="pl-4 mt-2">
                  <p>
                    <span className="font-bold">Cook the omelette: </span>Once the
                    butter is melted and bubbling, pour in the eggs. Tilt the pan
                    to ensure the eggs evenly coat the surface.
                  </p>
                </li>
                <li className="pl-4 mt-2">
                  <p>
                    <span className="font-bold">Add fillings (optional):</span>When
                    the eggs begin to set at the edges but are still slightly
                    runny in the middle, sprinkle your chosen fillings over one
                    half of the omelette.
                  </p>
                </li>
                <li className="pl-4 mt-2">
                  <p>
                    <span className="font-bold">Fold and serve: </span>As the omlette
                    continues to cook, carefully lift one edge and fold it over
                    the fillings.Let it cook for another minute, then slide it
                    onto a plate.
                  </p>
                </li>
                <li className="pl-4 mt-2">
                  <p>
                    <span className='font-bold'>Enjoy: </span>Serve hot, with
                    additional salt and pepper if needed.
                  </p>
                </li>
              </ol>
            </div>
            <div className="w-full h-px bg-light-gray mx-auto mt-8"></div>
            <div className="mt-8">
              <h3 className='font-fancy text-3xl text-nutmeg'>Nutrition</h3>
              <p className="mt-4">
                The table below shows nutritional values per serving without the
                additional fillings.
              </p>
              <ul className="mt-6">
                <li>
                  <div className="flex">
                    <p className="ml-8 text-lg w-full mr-auto">Calories</p>
                    <p className='font-bold text-nutmeg text-lg w-full mr-auto'>
                      277kcal
                    </p>
                  </div>
                  <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                </li>
                <li>
                  <div className="flex mt-3">
                    <p className="ml-8 text-lg w-full mr-auto">Carbs</p>
                    <p className="font-bold text-nutmeg text-lg w-full mr-auto">0g</p>
                  </div>
                  <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                </li>
                <li>
                  <div className="flex mt-3">
                    <p className="ml-8 text-lg w-full mr-auto">Protein</p>
                    <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                      20g
                    </p>
                  </div>
                  <div className='w-full h-px bg-light-gray mx-auto mt-3'></div>
                </li>
                <li>
                  <div className="flex mt-3">
                    <p className="ml-8 text-lg w-full mr-auto">Fat</p>
                    <p className='font-bold text-nutmeg text-lg w-full mr-auto'>
                      22g
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SingleProduct