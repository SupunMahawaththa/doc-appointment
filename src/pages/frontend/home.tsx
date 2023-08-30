import BookingForm from "@/components/forms/booking-form";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="font-bold text-2xl uppercase my-10 text-center px-4 md:px-16 lg:px-32">
        book a time to see the doctor
      </h1>
      
      <div className="">
        <BookingForm />
      </div>


      
    </div>
  );
}

export default Home;
