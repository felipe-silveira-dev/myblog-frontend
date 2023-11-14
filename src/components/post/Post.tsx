import { memo } from "react";

type PostProps = {
    title: string;
    image: string;
    categories: string[];
    date: string;
    description: string;
};

const Post = ({ title, image, categories, date, description }: PostProps) => {
    return (
        <a
            className="flex flex-col w-full p-4 border shadow-2xl transition-colors duration-300 rounded-lg hover:border hover:border-[#bb86fc] false"
            href="/"
        >
            <div className="relative w-full h-80 false">
                <img
                    alt={title}
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-center transition-all duration-300 ease-in-out rounded-xl bg-primary group-hover:border-slate-900"
                    src={image}
                />
            </div>
            <div className="pt-3 false">
                <div className="flex flex-wrap gap-2 mb-3">
                    <a className="group" href="#">
                        <p className="rounded-2xl bg-gray-500 px-3 py-1 font-normal capitalize text-gray-200 transition-colors duration-300 group-hover:bg-gray-200 group-hover:text-primary text-sm )}">
                            {categories}
                        </p>
                    </a>
                    <a className="group" href="/categories?category=Livewire">
                        <p className="rounded-2xl bg-gray-500 px-3 py-1 font-normal capitalize text-gray-200 transition-colors duration-300 group-hover:bg-gray-200 group-hover:text-primary text-sm )}">
                            {categories}
                        </p>
                    </a>
                </div>
                <div className="text-gray-400">
                    <time className="">{date}</time>
                </div>
                <p className="max-w-md mt-2 text-2xl font-medium text-ellipsis text-gray-50">
                    {title}
                </p>
                <p className="mt-3 text-gray-300">{description}</p>
            </div>
        </a>
    );
};

export default memo(Post);
