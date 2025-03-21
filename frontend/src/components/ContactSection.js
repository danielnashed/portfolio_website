export default function ContactSection() {
    return (
      <section id="contact" className="min-h-screen bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="border-1 border-neutral-500">
            <h2 className="text-4xl text-white font-light text-center py-6 border-b-1 border-neutral-500">
              // Contact Me
            </h2>
            <div className="w-full flex flex-col items-center py-6">
              <div className="w-[90vw] pt-6 mb-8">
                <p className="text-center mb-4">Want to have a conversation? Connect with me.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <div>
                    <p className="text-neutral-400 mb-4">explore my work</p>
                    <p>
                        <span className="text-neutral-400">{'>'} </span>
                        <a href="https://github.com/danielnashed" 
                        className="hover:font-bold text-green-500 transition-colors">
                        github
                        </a>
                    </p>
                </div>
                <div>
                    <p className="text-neutral-400 mb-4">follow me</p>
                    <p>
                        <span className="text-neutral-400">{'>'} </span>
                        <a href="https://www.linkedin.com/in/daniel-nashed/" 
                        className="hover:font-bold text-green-500 transition-colors">
                        linkedin
                        </a>
                    </p>
                </div>
                <div>
                  <p className="text-neutral-400 mb-4">reach me</p>
                    <p>
                        <span className="text-neutral-400">{'>'} </span>
                        <a href="mailto:danielnashed13@gmail.com" 
                        className="hover:font-bold text-green-500 transition-colors">
                        danielnashed13@gmail.com
                        </a>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>                
    );
  }