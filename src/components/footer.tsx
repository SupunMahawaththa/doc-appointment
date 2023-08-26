import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <>
      <Separator className="mt-5" />
      <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-lg font-semibold">LOGO HERE</h2>
          <p className="leading-relaxed mt-2 text-[15px]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
