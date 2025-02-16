function Aboutus() {
  return (
    <section className="bg-[#e5dceb] py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="mb-8 text-center text-4xl font-bold text-gray-800">
          About Us
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
          At Quiz App, we are passionate about making learning fun and engaging.
          Our platform is designed to challenge your knowledge, expand your
          understanding, and help you grow. Whether you're a student,
          professional, or lifelong learner, we offer quizzes across various
          subjects to keep your mind sharp.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-6 text-center shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To inspire curiosity and promote continuous learning through
              interactive quizzes.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 text-center shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold text-gray-800">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become the leading platform for knowledge enhancement and skill
              development.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 text-center shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold text-gray-800">
              Our Values
            </h3>
            <p className="text-gray-600">
              Integrity, innovation, and a commitment to excellence drive
              everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
