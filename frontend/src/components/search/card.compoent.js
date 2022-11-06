import { Outlet } from "react-router-dom";

const Cards = () => {
    return ( 
        <>  
        <section class="min-h-screen body-font text-gray-600 ">
            <div class="container mx-auto px-5 py-10">
                <div class="-m-4 flex flex-wrap">
                    <div class="w-full p-4 md:w-1/4 lg:w-1/4">
                        <a class="relative block h-[7em] w-[7em] overflow-hidden rounded">
                            <img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/420x260" />
                        </a>
                        <div class="mt-4">
                            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
                            <h2 class="title-font text-lg font-medium text-gray-900">The Catalyzer</h2>
                            <p class="mt-1">01/09/2022</p>
                        </div>
                    </div>
                    <div class="w-full p-4 md:w-1/2 lg:w-1/4">
                        <a class="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
                        </a>
                        <div class="mt-4">
                            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
                            <h2 class="title-font text-lg font-medium text-gray-900">Shooting Stars</h2>
                            <p class="mt-1">01/09/2022</p>
                        </div>
                    </div>
                    <div class="w-full p-4 md:w-1/2 lg:w-1/4">
                        <a class="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
                        </a>
                        <div class="mt-4">
                            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
                            <h2 class="title-font text-lg font-medium text-gray-900">Shooting Stars</h2>
                            <p class="mt-1">01/09/2022</p>
                        </div>
                    </div>
                    <div class="w-full p-4 md:w-1/2 lg:w-1/4">
                        <a class="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
                        </a>
                        <div class="mt-4">
                            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
                            <h2 class="title-font text-lg font-medium text-gray-900">Shooting Stars</h2>
                            <p class="mt-1">01/09/2022</p>
                        </div>
                    </div>
                    <div class="w-full p-4 md:w-1/2 lg:w-1/4">
                        <a class="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
                        </a>
                        <div class="mt-4">
                            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
                            <h2 class="title-font text-lg font-medium text-gray-900">Shooting Stars</h2>
                            <p class="mt-1">01/09/2022</p>
                        </div>
                    </div>
                    <div class="w-full p-4 md:w-1/2 lg:w-1/4">
                        <a class="relative block h-48 overflow-hidden rounded">
                            <img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
                        </a>
                        <div class="mt-4">
                            <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
                            <h2 class="title-font text-lg font-medium text-gray-900">Shooting Stars</h2>
                            <p class="mt-1">01/09/2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <Outlet />
        </>
     );
}
 
export default Cards;