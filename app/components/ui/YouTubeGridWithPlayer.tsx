"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import { dokkuYoutubeVideos } from "@/app/constants";
import Link from "next/link";

export default function YouTubeGridWithIcon() {
    const [activeVideo, setActiveVideo] = useState("");

    return (
        <div className="max-w-4xl mx-auto py-4">
            <h3 className="text-2xl text-center md:text-3xl font-semibold text-orange-700 tracking-wide">DoKKu arhiv</h3>
            <p className="text-center mt-4 mb-8">Filmi, ki so nastali na delavnici, so prikazani na različnih filmskih festivalih, javnih projekcijah, dogodkih in na internetu.</p>
            {activeVideo ? (
                <>
                    <div className="mb-6">
                        <button
                            onClick={() => setActiveVideo("")}
                            className="mb-2 px-4 py-2 bg-orange-700 text-white rounded"
                        >
                            Zapri predvajalnik
                        </button>
                        <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${activeVideo}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </>
            ) : (
                <>
                    <div className="grid grid-cols-2 gap-10">
                        {dokkuYoutubeVideos.map(({ id, title }) => (
                            <div
                                key={id}
                                onClick={() => setActiveVideo(id)}
                                className="cursor-pointer group relative rounded-lg overflow-hidden shadow-lg hover:shadow-lg transition-shadow"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                                        alt={`Thumbnail for ${title}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Play className="w-12 h-12 text-white" />
                                </div>
                                <div className="p-4 bg-white">
                                    <h3 className="text-center font-semibold text-gray-800 group-hover:text-orange-700">
                                        {title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="https://www.youtube.com/@Luksuzprodukcija"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-orange-700 text-white font-semibold rounded-lg shadow-md hover:bg-orange-800 transition"
                        >
                            Več filmov
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
