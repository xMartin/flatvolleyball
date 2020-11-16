import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children, hideHeader }) {
  return (
    <div className={`flex flex-col min-h-screen font-sans text-gray-900 ${hideHeader ? "pt-16" : ""}`}>
      {!hideHeader && <Header />}

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="text-sm text-center pt-4 pb-4">
        © Martin Stadler
      </footer>
      
      { /*
      <footer className="bg-gray-600">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            © Martin Stadler
          </p>

          <p>
            <Link
              to="/imprint"
              className="font-bold text-white no-underline"
            >
              Imprint
            </Link>
          </p>
        </nav>
      </footer>
      */ }
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideHeader: PropTypes.bool,
};

export default Layout;
