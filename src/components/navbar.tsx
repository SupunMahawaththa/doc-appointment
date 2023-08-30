import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function Navbar() {
  return (
      <nav className="bg-white w-full border-b md:border-0 md:static">
          <div className="flex items-center justify-between px-4 md:px-16 lg:px-32 py-3">
            <h1 className="text-gray-500 text-2xl font-semibold">
              <Link to="/">LOGO HERE</Link>
            </h1>
            <Button variant="default" className="rounded-xl px-6 font-semibold" asChild>
              <Link to="/login" className="">Login</Link>
            </Button>
          </div>
          <Separator />
      </nav>
  )
}

export default Navbar