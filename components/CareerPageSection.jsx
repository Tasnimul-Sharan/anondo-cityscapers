"use client";

import { useMemo, useState } from "react";
import {
  FaBriefcase,
  FaLocationDot,
  FaClock,
  FaUsers,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CareerPageSection() {
  const jobs = [
    {
      id: 1,
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      experience: "1–3 Years",
      deadline: "Open until filled",
      description:
        "We are looking for energetic and motivated individuals to join our sales team. Candidates should have good communication skills and a passion for real estate marketing.",
    },
    // {
    //   id: 2,
    //   title: "Civil Engineer",
    //   department: "Engineering",
    //   location: "Purbachal, Dhaka",
    //   type: "Full-time",
    //   experience: "2+ Years",
    //   deadline: "Open until filled",
    //   description:
    //     "Responsible for on-site supervision, quality control, and project management. Must have at least 2 years of experience in real estate or construction projects.",
    // },
    // {
    //   id: 3,
    //   title: "Marketing Officer",
    //   department: "Marketing",
    //   location: "Head Office, Dhaka",
    //   type: "Full-time",
    //   experience: "1–2 Years",
    //   deadline: "Open until filled",
    //   description:
    //     "Creative and target-driven individual needed to plan and execute marketing strategies for housing projects. Prior experience in property marketing preferred.",
    // },
  ];

  const CAREER_EMAIL = "career@anondohousing.com";

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const jobsPerPage = 3;

  const jobTypes = ["All", ...new Set(jobs.map((job) => job.type))];
  const locations = ["All", ...new Set(jobs.map((job) => job.location))];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        job.title.toLowerCase().includes(search) ||
        job.department.toLowerCase().includes(search) ||
        job.location.toLowerCase().includes(search) ||
        job.description.toLowerCase().includes(search);

      const matchesType = selectedType === "All" || job.type === selectedType;

      const matchesLocation =
        selectedLocation === "All" || job.location === selectedLocation;

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [jobs, searchTerm, selectedType, selectedLocation]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage) || 1;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleTypeFilter = (value) => {
    setSelectedType(value);
    setCurrentPage(1);
  };

  const handleLocationFilter = (value) => {
    setSelectedLocation(value);
    setCurrentPage(1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getApplyLink = (jobTitle) => {
    const subject = encodeURIComponent(`Application for ${jobTitle}`);
    const body = encodeURIComponent(
      `Dear HR Team,\n\nI would like to apply for the position of ${jobTitle}.\n\nName:\nPhone:\nExperience:\nPortfolio/CV Link:\n\nThank you.`,
    );

    return `mailto:${CAREER_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden bg-off_white py-20 sm:py-24">
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-primary" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
              Career Opportunities
            </p>
            <span className="h-[2px] w-12 bg-primary" />
          </div>

          <h1 className="text-4xl font-bold tracking-[-0.03em] text-soft_black sm:text-5xl lg:text-6xl">
            Join Our Growing Team
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Build your career with Anondo Housing and become part of a team
            shaping modern real estate communities in Bangladesh.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-10 grid gap-5 sm:grid-cols-3">
          <StatCard
            icon={<FaBriefcase />}
            label="Open Positions"
            value={jobs.length}
          />
          <StatCard icon={<FaUsers />} label="Departments" value="15" />
          <StatCard icon={<FaLocationDot />} label="Locations" value="Dhaka" />
        </div>

        {/* Filter Box */}
        <div className="mb-10 rounded-[2rem] border border-border_color bg-white p-5 shadow-soft">
          <div className="grid gap-4 lg:grid-cols-[1fr_220px_240px]">
            <div className="relative">
              <FaMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => handleSearch(event.target.value)}
                placeholder="Search job title, department, or keyword..."
                className="h-14 w-full rounded-2xl border border-border_color bg-gray-50 pl-12 pr-5 text-sm text-soft_black outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <select
              value={selectedType}
              onChange={(event) => handleTypeFilter(event.target.value)}
              className="h-14 rounded-2xl border border-border_color bg-gray-50 px-5 text-sm text-soft_black outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type === "All" ? "All Job Types" : type}
                </option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(event) => handleLocationFilter(event.target.value)}
              className="h-14 rounded-2xl border border-border_color bg-gray-50 px-5 text-sm text-soft_black outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location === "All" ? "All Locations" : location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result Count */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium text-gray-600">
            Showing{" "}
            <span className="font-bold text-primary">
              {filteredJobs.length}
            </span>{" "}
            job opening{filteredJobs.length > 1 ? "s" : ""}
          </p>

          <p className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* Job List */}
        {currentJobs.length > 0 ? (
          <div className="grid gap-6">
            {currentJobs.map((job) => (
              <article
                key={job.id}
                className="group overflow-hidden rounded-[2rem] border border-border_color bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="grid gap-0 lg:grid-cols-[1fr_260px]">
                  <div className="p-6 sm:p-8">
                    <div className="mb-5 flex flex-wrap gap-3">
                      <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                        {job.department}
                      </span>

                      <span className="rounded-full bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-secondary">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-[-0.02em] text-soft_black transition group-hover:text-primary sm:text-3xl">
                      {job.title}
                    </h3>

                    <div className="mt-5 grid gap-3 text-sm text-gray-600 sm:grid-cols-3">
                      <JobMeta icon={<FaLocationDot />} text={job.location} />
                      <JobMeta icon={<FaClock />} text={job.experience} />
                      <JobMeta icon={<FaBriefcase />} text={job.deadline} />
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-8 text-gray-600">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center border-t border-border_color bg-gray-50 p-6 lg:border-l lg:border-t-0">
                    <a
                      href={getApplyLink(job.title)}
                      className="group/btn inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-secondary hover:shadow-lift"
                    >
                      Apply Now
                      <FiArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>

                    <p className="mt-4 text-center text-xs leading-6 text-gray-500">
                      Send your CV through email with the correct job title.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-border_color bg-white p-10 text-center shadow-soft">
            <h3 className="text-2xl font-bold text-soft_black">
              No job openings found
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-600">
              Try changing your search keyword, job type, or location filter.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredJobs.length > jobsPerPage && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="flex h-11 items-center gap-2 rounded-full border border-border_color bg-white px-5 text-sm font-semibold text-soft_black transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FiChevronLeft />
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;

              return (
                <button
                  type="button"
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-11 w-11 rounded-full border text-sm font-bold transition ${
                    currentPage === page
                      ? "border-primary bg-primary text-white"
                      : "border-border_color bg-white text-soft_black hover:border-primary hover:text-primary"
                  }`}
                >
                  {String(page).padStart(2, "0")}
                </button>
              );
            })}

            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="flex h-11 items-center gap-2 rounded-full border border-border_color bg-white px-5 text-sm font-semibold text-soft_black transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <FiChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="rounded-[1.5rem] border border-border_color bg-white p-6 shadow-soft">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
        {icon}
      </div>

      <p className="text-3xl font-bold text-soft_black">{value}</p>
      <p className="mt-1 text-sm font-medium text-gray-500">{label}</p>
    </div>
  );
}

function JobMeta({ icon, text }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-3">
      <span className="text-primary">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
