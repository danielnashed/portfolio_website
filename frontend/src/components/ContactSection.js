export default function ContactSection() {
    return (
      <section id="contact" className="h-screen flex flex-col justify-center items-center pt-16">
        <h2 className="text-4xl font-light mb-8">// Contact Me</h2>
        {/* <div className="max-w-md w-full"> */}
        {/* <div className="w-full flex justify-center"> */}
        <div className="w-full flex flex-col items-center">
          <div className="w-[90vw] border-t border-neutral-500 pt-6 mb-8">
            <p className="text-center mb-4">Got something to have a conversation on, ping me.</p>
          </div>
          {/* Github */}
          {/* <div className="flex flex-row justify-between items-start grid-cols-3"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
                <p className="text-neutral-400 mb-4">github</p>
                <p>
                    <span className="text-neutral-400">{'>'} </span>
                    <a href="https://github.com/danielnashed" 
                    className="hover:font-bold text-green-500 transition-colors">
                    github
                    </a>
                </p>
            </div>
            {/* Linkedln & Twitter */}
            <div>
                <p className="text-neutral-400 mb-4">follow me</p>
                <p>
                    <span className="text-neutral-400">{'>'} </span>
                    <a href="https://www.linkedin.com/in/daniel-nashed/" 
                    className="hover:font-bold text-green-500 transition-colors">
                    linkedin
                    </a>
                </p>
                <p>
                    <span className="text-neutral-400">{'>'} </span>
                    <a href="https://www.linkedin.com/in/daniel-nashed/" 
                    className="hover:font-bold text-green-500 transition-colors">
                    twitter
                    </a>
                </p>
            </div>
            {/* Email */}
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
      </section>
    );
  }