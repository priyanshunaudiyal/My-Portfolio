import cv from '../assets/Priyanshu-Naudiyal-Resume.pdf'

const Resume = () => {
    return (
      <section
        id="resume"
        className="min-h-screen px-6 py-12 bg-white flex flex-col items-center text-center scroll-mt-24"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Resume</h2>
  
        <div className="w-full max-w-4xl h-[80vh] border border-gray-300 rounded shadow-lg overflow-hidden">
          <iframe
            src={cv}
            className="w-full h-full"
            title="Priyanshu's Resume"
          ></iframe>
        </div>
  
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Download PDF
        </a>
      </section>
    );
  };
  
  export default Resume;
  