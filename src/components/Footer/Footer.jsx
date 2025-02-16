function Footer() {
  return (
    // <footer className="flex h-[15rem] items-center justify-center bg-black px-20 py-6 text-white">
    //   <p>
    //     &copy; copyright all rights reserved{" "}
    //     <span className="font-bold uppercase underline">Vince Dela Pena</span>
    //   </p>
    // </footer>

    <footer className="border-t border-[#bea7cd] bg-[#FFFFFF11] py-12 text-[#444444]">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <img src="quizzy-logo.png" alt="app logo" className="w-20" />

          <p className="mt-2 text-sm">
            Empowering your learning journey with engaging quizzes.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold text-[#7C4E9B]">Quick Links</h3>
          <a href="#" className="transition hover:text-[#7C4E9B]">
            Home
          </a>
          <a href="#" className="transition hover:text-[#7C4E9B]">
            About
          </a>
          <a href="#" className="transition hover:text-[#7C4E9B]">
            Features
          </a>
          <a href="#" className="transition hover:text-[#7C4E9B]">
            Contact
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold text-[#7C4E9B]">Support</h3>
          <a href="#" className="transition hover:text-[#7C4E9B]">
            Help Center
          </a>
          <a href="#" className="transition hover:text-[#7C4E9B]">
            Terms of Service
          </a>
          <a href="#" className="transition hover:text-[#7C4E9B]">
            Privacy Policy
          </a>
          <a href="#" className="transition hover:text-[#7C4E9B]">
            Feedback
          </a>
        </div>
      </div>

      <div className="mt-12 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Quiz App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
