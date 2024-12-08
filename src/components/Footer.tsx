const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-stone-50">
      <div className="container mx-auto text-center text-sm text-stone-400 flex justify-between">
        <p>
          Review Analysis App | Created by{" "}
          <a
            className="text-indigo-500"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            @your-handle
          </a>{" "}
          &copy; {new Date().getFullYear()}
        </p>

        <a
          className="hover:underline"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          view on GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
