import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bgimg, logo1 } from "../Data";
import Doctors from "../components/Doctors";
import { doctor2, doctor3, doctors1 } from "../Data";
import SearchForm from "../components/SearchForm";

export function LandingPage() {

const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/ApnaDoctor_logo.svg/2560px-ApnaDoctor_logo.svg.png";
const insuranceSvgs = [
  "https://ext.same-assets.com/1265337255/1242084934.svg",
  "https://ext.same-assets.com/1265337255/1461360510.svg",
  "https://ext.same-assets.com/1265337255/2220836385.svg",
  "https://ext.same-assets.com/1265337255/448615295.svg",
];
// import { doclogo } from 

const heroBg =
  "https://images.ctfassets.net/4cd45et68cgf/6H6Dq6xqS5s6M6k0q4Wa8A/2e1d39f0d6d8e7d0b2c9f5f3d7e4e6b3/doctor-patient-hero.jpg";
const doctorImg =
  "https://images.ctfassets.net/4cd45et68cgf/3pJ6NwX7q5X7Y9b2s4Aqg7/0d2f4c9d3f6f6d3e4b0a8f9d5e1c7a2e/doctor-profile.jpg";

const specialtyIcons = [
  { icon: "🩺", name: "Primary Care" },
  { icon: "🦷", name: "Dentist" },
  { icon: "👶", name: "OB-GYN" },
  { icon: "🧴", name: "Dermatologist" },
  { icon: "🧠", name: "Psychiatrist" },
  { icon: "👁️", name: "Eye Doctor" },
];


      const [search, setSearch] = useState(""); // State to manage search input
    
  return (
    <>
    {/* <div className="min-h-screen bg-gray-50 font-sans text-gray-900"> */}

{/* Hero Section */}
  {/* <section
  id="find-doctor"
  className="relative bg-gradient-to-tr from-gray-800 to-gray-700 text-white"
>
  <img
    src={logo1}
    alt="Doctor consulting patient"
    className="absolute inset-0 object-cover w-full h-full opacity-30"
    loading="lazy"
  />
  <div className="relative max-w-7xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center md:items-start gap-12">
    <div className="max-w-xl text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
        Find the right doctor, book instantly
      </h1>
      <p className="mt-6 text-lg sm:text-xl max-w-md drop-shadow-md">
        Search top-rated doctors, read verified patient reviews, and book appointments instantly — all for free.
      </p>
      <form
        className="mt-8 flex max-w-md mx-auto md:mx-0 bg-white rounded-full shadow-lg overflow-hidden"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Search doctors"
      >
        <input
          type="text"
          placeholder="Search doctors, specialties, or conditions"
          className="flex-grow py-3 px-5 text-gray-900 placeholder-gray-400 focus:outline-none"
          aria-label="Search doctors, specialties, or conditions"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search state
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 font-semibold text-white rounded-full"
          aria-label="Search"
        >
          Search
        </button>
      </form>
      <p className="mt-4 text-sm opacity-75">
        No hidden fees. Free to use.
      </p>
    </div>
    <div className="hidden md:block flex-shrink-0 rounded-lg overflow-hidden shadow-lg w-80">
      <img
        src={doctorImg}
        alt="Friendly doctor smiling"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </div>
</section> */}

{/* Doctors Search Results */}
{/* <section className={`max-w-7xl mx-auto px-6 py-12 absolute top-125 left-50 border-red-100 border-1 rounded-2xl bg-gray-600 pt-3 pb-3 ${search.length>0? '' : 'hidden'}`}>
  <Doctors search={search} />
</section> */}

{/* How it Works */}
{/* <section
  id="how-it-works"
  className="max-w-7xl mx-auto px-6 py-20 text-center"
>
  <h2 className="text-3xl font-extrabold mb-12 text-gray-900">
    How ApnaDoctor Works
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
    <div>
      <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-2xl font-bold">
        1
      </div>
      <h3 className="text-xl font-semibold mb-2">Find a Doctor</h3>
      <p className="text-gray-600 max-w-xs mx-auto">
        Search by specialty, condition, or location to find the best doctor for your needs.
      </p>
    </div>
    <div>
      <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-2xl font-bold">
        2
      </div>
      <h3 className="text-xl font-semibold mb-2">Book Instantly</h3>
      <p className="text-gray-600 max-w-xs mx-auto">
        View available appointment times and book instantly, no phone calls required.
      </p>
    </div>
    <div>
      <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-2xl font-bold">
        3
      </div>
      <h3 className="text-xl font-semibold mb-2">See Your Doctor</h3>
      <p className="text-gray-600 max-w-xs mx-auto">
        Visit your doctor and manage your health with confidence and convenience.
      </p>
    </div>
  </div>
</section> */}

{/* Featured Specialties */}
{/* <section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
      Popular Specialties
    </h2>
    <p className="text-gray-600 max-w-xl mx-auto">
      Explore top specialties and find the right care for you.
    </p>
  </div>
  <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
    {[
      { name: "Dentists", icon: "🦷" },
      { name: "Dermatologists", icon: "🧴" },
      { name: "Pediatricians", icon: "🧒" },
      { name: "Cardiologists", icon: "❤️" },
      { name: "Therapists", icon: "🧠" },
      { name: "Optometrists", icon: "👁️" },
    ].map(({ name, icon }) => (
      <a
        key={name}
        href="#"
        className="flex flex-col items-center text-blue-700 hover:text-blue-900 transition-colors"
        aria-label={`Browse ${name}`}
      >
        <div className="text-4xl mb-2">{icon}</div>
        <span className="text-sm font-semibold">{name}</span>
      </a>
    ))}
  </div>
</section> */}

{/* </div> */}
    
    <div className="bg-[#fafaf7] min-h-screen font-sans">
      {/* Hero section */}
      <section  
      style={{
        backgroundImage: `url(${logo1})`,
        // backgroundImage: `url()`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
      className="bg-[#faf2bc] h-115 py-14 px-4 lg:px-0 border-b">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-6">
        <SearchForm />
          {/* <div className="md:w-2/3 mt-2.5">
            <h1 className="text-3xl md:text-4xl font-bold text-[#333231] mb-4">Book local doctors who take your insurance</h1>
            <form className="flex flex-col md:flex-row shadow-lg bg-white rounded-lg  mb-3">
              <input placeholder="Hospital Name,/ Search..." className=" flex-1 px-4 py-3 outline-none text-base text-[#333231]" />
              <input placeholder="City / Search" className="w-56 px-4 py-3 border-l outline-none text-base text-[#333231]" />
              <input placeholder="Doctors / service" className="w-72 px-4 py-3 border-l outline-none text-base text-[#333231]" />
              <button type="submit" className="bg-[#f6df4e] w-16 rounded-lg md:w-auto px-4 flex items-center justify-center font-bold text-[#333231] hover:bg-yellow-300 transition-colors">
                <span className="hidden md:inline">Search</span>
                <svg className="md:ml-1 w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              </button>
            </form>
            <div className="text-sm text-gray-500">No hidden fees. Free to use.</div>
          </div> */}
          <div className="hidden md:flex justify-center w-1/3">
            {/* <img alt="Doctor illustration" src="https://ugc.same-assets.com/6cfZ89GhCcGTnLqxADliensyxYjCholk.jpeg" className="w-56 h-auto rounded-lg shadow-md" /> */}
          </div>
        </div>
      </section>
      {/* Insurance providers */}
      <section className="py-8 px-4 max-w-5xl mx-auto">
        <h2 className="text-lg font-semibold mb-5">Find an in-network doctor from over 1,000 insurance plans</h2>
        <div className="flex flex-wrap gap-6 items-center mb-5">
          {insuranceSvgs.map((src, i) => (
            <img src={src} alt="Insurance" key={i} className="h-9 w-auto" />
          ))}
        </div>
        <button className="px-4 py-2 border rounded-md bg-white text-[#333231] hover:bg-gray-100 transition-colors">Add your insurance coverage</button>
      </section>
      {/* Doctor listings */}
      <section className="py-8 px-4 max-w-5xl mx-auto">
        <h2 className="text-lg font-semibold mb-4">Top-rated primary care doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {[{
            name: "Dr. Sumit Budhwar, MD",
            photo: doctors1,
            specialty: "Primary Care Doctor",
            rating: "4.6",
            reviews: 620,
            location: "Sunaria, HR"
          },{
            name: "Dr. Saurav, DO",
            photo: doctor2,
            specialty: "Family Physician",
            rating: "4.9",
            reviews: 710,
            location: "Rohtak, HR"
          },{
            name: "Dr. Manish, MD",
            photo: doctor3,
            specialty: "Primary Care Doctor",
            rating: "4.8",
            reviews: 430,
            location: "Hisar, HR"
          }].map(doc => (
            <div className="flex flex-col bg-white rounded-xl shadow-md p-4 border border-gray-100" key={doc.name}>
              <div className="flex items-center gap-3 mb-3">
                <img src={doc.photo} alt={doc.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{doc.name}</div>
                  <div className="text-xs text-gray-500">{doc.specialty}</div>
                  <div className="text-xs text-yellow-700 font-medium flex items-center gap-1"><span>{doc.rating}★</span> <span>({doc.reviews})</span></div>
                </div>
              </div>
              <div className="text-xs text-gray-600 mb-4">{doc.location}</div>
              <button className="bg-[#f6df4e] py-2 px-3 rounded font-bold text-[#333231] hover:bg-yellow-300 transition-colors">Book online</button>
            </div>
          ))}
        </div>
      </section>
      {/* Specialties grid */}
      <section className="bg-[#faf2bc] py-6 px-4">
        <div className="max-w-5xl mx-auto flex gap-4 justify-between overflow-x-auto">
          {specialtyIcons.map(s => (
            <div key={s.name} className="flex flex-col items-center text-[#333231] text-sm min-w-[104px]">
              <div className="w-16 h-16 flex items-center justify-center rounded-full border mb-1 bg-white text-2xl">{s.icon}</div>
              {s.name}
            </div>
          ))}
        </div>
      </section>
      {/* Value props - How ApnaDoctor gets you */}
      <section className="py-12 px-4 bg-[#fafaf7]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img alt="Take your insurance" src="https://ext.same-assets.com/1265337255/2700344220.svg" className="w-16 mb-3" />
            <div className="font-semibold mb-1">Browse providers who take your insurance</div>
            <span className="text-xs text-gray-600">See specialties</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img alt="Reviews from users" src="https://ext.same-assets.com/1265337255/2960008769.svg" className="w-16 mb-3" />
            <div className="font-semibold mb-1">Read reviews from users</div>
            <span className="text-xs text-gray-600">See providers</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img alt="Book today" src="https://ext.same-assets.com/1265337255/3679657063.svg" className="w-16 mb-3" />
            <div className="font-semibold mb-1">Book an appointment today, online</div>
            <span className="text-xs text-gray-600">See availability</span>
          </div>
        </div>
      </section>
      {/* App CTA section */}
       {/* <section className="bg-[#ecbe93] py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-3/5 mb-5 md:mb-0">
            <div className="font-bold text-lg mb-2">Thousands of providers. One app.</div>
            <div className="mb-4 text-sm">The ApnaDoctor app is the fastest, easiest way to book care. Download now:</div>
            <div className="flex gap-3 items-center">
              <a href="https://apps.apple.com/us/app/ApnaDoctor/id358057466" rel="noopener noreferrer" target="_blank"><img alt="App Store" className="h-10" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" /></a>
              <a href="https://play.google.com/store/apps/details?id=com.ApnaDoctor.android" rel="noopener noreferrer" target="_blank"><img alt="Google Play" className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" /></a>
            </div>
          </div>
          <img src="https://ugc.same-assets.com/avJdzeqlaSqFth9UD1YgwY55XXwjO-Z-.jpeg" alt="ApnaDoctor app on phone" className="w-44 h-auto rounded-md shadow" />
        </div>
      </section> */}
      {/* Partners and health systems */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-base font-medium mb-6">We’re trusted by top health systems</div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Memorial_Sloan_Kettering_Cancer_Center_logo.png" alt="Memorial Sloan Kettering" className="h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Tufts_Health_Plan_logo.svg" alt="Indian Health" className="h-7" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Mount_Sinai_Health_System_Logo.png" alt="Mount Sinai" className="h-8" />
          </div>
        </div>
      </section>
      {/* City links */}
      <section className="bg-[#faf2bc] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-semibold mb-6">Find doctors and dentists by city</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 text-sm">
            {['Rohtak','Hisar','Gurugram','Bahadurghar','Sonipat','Delhi','Faridabad','Shimla','Jammu','Benglore','Ahmdabad','Pune','Mumbai','Goa','Surat','Ajmer','Agra','Lakhnow','Kanpur','Dehradun'].map(city => (
              <span key={city} className="px-2 py-1 inline-block hover:underline cursor-pointer text-[#333231]">{city}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Jobs CTA */}
      {/* <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto flex items-center bg-[#f6df4e] rounded-lg shadow-md">
          <img src="https://ugc.same-assets.com/I5xEamsBUFLLBjNUxrA6y0K5wlKiowXB.jpeg" alt="ApnaDoctor jobs" className="w-28 h-28 rounded-l-lg object-cover" />
          <div className="flex-1 p-5">
            <div className="font-semibold mb-2">ApnaDoctor jobs</div>
            <div className="mb-3 text-sm">Join us, and help transform healthcare for everyone.</div>
            <a href="#" className="text-sm font-bold bg-[#333231] text-white px-4 py-2 rounded-full hover:bg-[#444442] transition-colors">View job openings</a>
          </div>
        </div>
      </section> */}
      {/* Common visits */}
      <section className="bg-[#fafaf7] border-t py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-semibold mb-3">Common visit reasons</div>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            {["Medical","Dental","Mental health","Vision"].map((reason) => (
              <span key={reason} className="px-3 py-1 bg-white border rounded hover:bg-gray-50 cursor-pointer">{reason}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
