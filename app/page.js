// app/page.js
"use client"

import { useState, useEffect, useCallback } from "react"
import Header   from "./_components/header"
import Filters  from "./_components/filters"
import DoctorInfo from "./_components/doctor-info"
import FAQ      from "./_components/faq"
import Footer   from "./_components/footer"
import Medical from "./_components/Medical"

export default function Home() {
  // 1.1 All your filter state lives here
  const [filters, setFilters]         = useState({
    videoConsult: false, clinicVisit: false, homeVisit: false,
    fee1: false, fee2: false, fee3: false, fee4: false,
    english: false, spanish: false, french: false, mandarin: false,
    AvaiableToday: false, AvaiableTommrow: false, AvaiableThisWeek: false,
  })
  const [experience, setExperience]   = useState([0])
  const [sortBy, setSortBy]           = useState("relevance")
  const [sortOrder, setSortOrder]     = useState("asc")

  // 1.2 Where we store the fetched doctors
  const [doctors, setDoctors]         = useState([])

  // 1.3 Build a query string and fetch
  const fetchDoctors = useCallback(async () => {
    const params = new URLSearchParams()

    // experience
    if (experience[0] > 0)        params.set("minExp", experience[0])

    // fee ranges (you’ll probably only pick one)
    if (filters.fee1)   { params.set("minFee", 0);   params.set("maxFee", 50) }
    if (filters.fee2)   { params.set("minFee", 51);  params.set("maxFee", 100) }
    if (filters.fee3)   { params.set("minFee", 101); params.set("maxFee", 150) }
    if (filters.fee4)   { params.set("minFee", 151) }

    // languages (pick one or comma‑join)
    if (filters.english)  params.set("language","English")
    if (filters.spanish)  params.set("language","Spanish")
    // …and so on for french/mandarin

    // availability
    if (filters.AvaiableToday)     params.set("availability","today")
    else if (filters.AvaiableTommrow) params.set("availability","tomorrow")
    else if (filters.AvaiableThisWeek) params.set("availability","week")

    // sorting
    if (sortBy === "fee" || sortBy === "experience") {
      params.set("sortBy", sortBy)
      params.set("sortOrder", sortOrder)
    }

    const res = await fetch(`/api/users?${params.toString()}`)
    const json = await res.json()
    if (json.success) setDoctors(json.doctors)
    else console.error("Fetch error:", json.error)
  }, [filters, experience, sortBy, sortOrder])

  // 1.4 Optionally fetch once on mount:
  useEffect(() => { fetchDoctors() }, [fetchDoctors])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <Filters
            filters={filters}
            setFilters={setFilters}
            experience={experience}
            setExperience={setExperience}
            onApply={fetchDoctors}
            onCancel={() => {
              // reset filters & refetch
              setFilters({/* all false... */})
              setExperience([0])
              fetchDoctors()
            }}
          />

          <div className="flex-1">
            <DoctorInfo
              doctors={doctors}
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          </div>
        </div>
      </main>
       <Medical/>
      <FAQ />
      <Footer />
    </div>
  )
}
