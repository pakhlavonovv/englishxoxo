
const Footer = () => {
  return (
    <footer className="mt-8 bg-gray-900 text-white py-6">
      <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2">
        
        <div className="text-center flex flex-col items-center justify-center gap-1 md:text-left">
          <h2 className="text-xl font-semibold">XOXO ENGLISH</h2>
          <p className="text-gray-400 text-sm">Education is the foundation of the future!</p>
        </div>
    
        <div className="mt-4 flex flex-col items-center md:mt-0">
          <h3 className="text-lg font-semibold">Useful links</h3>
          <ul className="text-gray-400 text-sm space-y-1 self-center">
            <li className="text-start"><a href="/about" className="hover:text-white">About</a></li>
            <li className="text-start"><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
    
      </div>
    
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} XOXO ENGLISH. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
