import Link from 'next/link';

function Certifications({ ct }) {
    if (!ct || !Array.isArray(ct)) {
        // Check if the ct prop is an array, handle errors gracefully
        return <p>No certifications available.</p>;
    }

    return (
        <div id='ct' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                        CERTIFICATIONS
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            {/* Certifications Card Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ct.map((cert, index) => (
                    <div key={index} className="bg-[#1b203e] rounded-lg p-5 shadow-lg">
                        <img src={cert.image} alt={cert.title} className="h-24 w-auto mb-3" />
                        <h3 className="text-white font-semibold">{cert.title}</h3>
                        <Link href={cert.link} passHref>
                            <a className="text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">
                                View Certification
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certifications;
