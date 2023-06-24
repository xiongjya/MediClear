export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      {/* First Part: Picture and Try It Out Button */}
      <section className="flex items-center justify-center h-1/2 bg-gray-200">
          <div className="container mx-auto text-center">
              <a href="#" className="text-3xl bg-gray-700 hover:bg-gray-900 text-white font-bold py-5 px-10 rounded">Try It Out</a>
          </div>
      </section>

      {/* Second Part: Words */}
      <section className="p-16">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 text-left p-6">
              <h3 className="text-2xl font-bold mb-6">Simplified Solutions</h3>
              <h1 className="text-4xl font-bold mb-6 primary">Understand your health reports and medical tests with a simple click</h1>
              <p className="text-lg mb-6">
                Upload your health reports and test results as images or files and let us do the rest for you. 
                </p>
            </div>
            <div className="md:w-1/2 p-6">
                <img src="" alt="Your Image" className="w-full mx-auto" />
            </div>
          </div>
      </section>

    </main>
  )
}
