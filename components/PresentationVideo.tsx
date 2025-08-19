type PresentationVideoProps = {
    videoId?: string; // YouTube ID only
    className?: string;
};

export function PresentationVideo({
    videoId = "5bVIwzNoeeI",
    className = "",
}: PresentationVideoProps) {
    return (
        <div
            className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 ${className}`}
        >
            <div className="w-full overflow-hidden rounded-2xl shadow ring-1 ring-black/10">
                <div className="relative w-full pt-[56.25%]">
                    <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="Presentation video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
