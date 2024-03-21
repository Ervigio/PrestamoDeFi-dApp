export default function Footer() {
  return (
    <footer className="border-t py-4 px-3 flex justify-center bg-gradient-to-r from-orange-400 to-pink-600 shadow-xs">
      <p>
        Derechos de autor &copy;{new Date().getFullYear()} Blockmaker Academy
      </p>
    </footer>
  );
}
