import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <main className="bg-white px-10 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-donkin">JoaoMartinsDev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-br from-cyan-500 to-purple-950 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10 p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              João Martins
            </h2>
            <h3 className="text-2xl py-2">Web Developer</h3>
            <p className="text-md py-5 leading-7 text-gray-800">
              Full Stack Developer with a focus on Front End. Proficient in
              HTML, CSS, and JavaScript. My love for Front End trends drives my
              interest to explore online experiences. Beyond work, I dabble in
              game development, adding depth to my skills. I excel at bringing
              concepts to life as user-friendly digital solutions.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
        </section>
      </main>
    </>
  );
}
