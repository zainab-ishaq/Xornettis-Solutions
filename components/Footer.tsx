"use client";

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div>
          <h3 className="text-xl font-bold">Xornettis Solutions</h3>
          <p className="text-gray-400">
            Engineering the Future of Business.
          </p>
        </div>

        <p className="text-sm text-gray-400">
          © 2026 Xornettis Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}