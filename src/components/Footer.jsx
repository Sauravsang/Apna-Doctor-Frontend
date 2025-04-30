import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#333231] text-white mt-0 w-full">
      {/* Top banner */}
      <div className="text-xs text-white text-center py-4 px-4 bg-[#333231] border-b border-gray-600">
        Your privacy is important to us.
      </div>

      {/* Main Footer Content */}
      <div className="py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0 text-xs">
            © {new Date().getFullYear()} ApnaDoctor, Inc.
          </div>

          <div className="flex gap-4 mb-2 md:mb-0 text-sm">
            <a href="/terms" className="underline hover:text-yellow-300">Terms</a>
            <a href="/privacy" className="underline hover:text-yellow-300">Privacy</a>
            <a href="#" className="underline hover:text-yellow-300">Consumer Health</a>
            <a href="#" className="underline hover:text-yellow-300">Site map</a>
            <a href="#" className="underline hover:text-yellow-300">Your privacy choices</a>
          </div>

          <div className="flex gap-2 md:justify-end">
            <a
              href="https://apps.apple.com/us/app/ApnaDoctor/id358057466"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="App Store"
                className="h-6"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ApnaDoctor.android"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Google Play"
                className="h-6"
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              />
            </a>
          </div>
        </div>

        <div className="text-xs text-gray-300 max-w-3xl mx-auto mt-4 text-center">
          The content provided here and elsewhere on the ApnaDoctor site or mobile app is for general informational purposes only. It is not medical advice, diagnosis, or treatment.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
