// "use client"

// import { useState } from "react"
// import { Filter } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Slider } from "@/components/ui/slider"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// export default function Filters() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [experience, setExperience] = useState([0])

//   return (
//     <>
//       {/* Mobile Filter Button */}
//       <div className="lg:hidden flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">Find Doctors</h2>
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             <Button variant="outline" className="flex items-center gap-2">
//               <Filter className="h-4 w-4" />
//               Filters
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-[300px] sm:w-[350px]">
//             <SheetHeader>
//               <SheetTitle>Filters</SheetTitle>
//             </SheetHeader>
//             <div className="py-4">
//               <FilterContent
//                 experience={experience}
//                 setExperience={setExperience}
//                 onApply={() => setIsOpen(false)}
//                 onCancel={() => setIsOpen(false)}
//               />
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>

//       {/* Desktop Filters */}
//       <div className="hidden lg:block w-72 bg-white rounded-lg border border-gray-200 h-fit sticky top-24">
//         <div className="p-5">
//           <h3 className="text-lg font-semibold mb-4">Filters</h3>
//           <FilterContent
//             experience={experience}
//             setExperience={setExperience}
//             onApply={() => console.log("Filters applied")}
//             onCancel={() => console.log("Filters cleared")}
//           />
//         </div>
//       </div>
//     </>
//   )
// }

// function FilterContent({ experience, setExperience, onApply, onCancel }) {
//   const [filters, setFilters] = useState({
//     videoConsult: false,
//     clinicVisit: false,
//     homeVisit: false,
//     fee1: false,
//     fee2: false,
//     fee3: false,
//     fee4: false,
//     english: false,
//     spanish: false,
//     french: false,
//     mandarin: false,
//     AvaiableToday: false,
//     AvaiableTommrow: false,
//     AvaiableThisWeek: false,
//   })

//   const handleClearFilters = () => {
//     setFilters({
//       videoConsult: false,
//       clinicVisit: false,
//       homeVisit: false,
//       fee1: false,
//       fee2: false,
//       fee3: false,
//       fee4: false,
//       english: false,
//       spanish: false,
//       french: false,
//       mandarin: false,
//       AvaiableToday: false,
//     AvaiableTommrow: false,
//     AvaiableThisWeek: false,
//     })
//     setExperience([0])
//     if (onCancel) onCancel()
//   }

//   return (
//     <div className="space-y-6">
//       {/* Mode of Consult */}
//       <div className="space-y-3">
//         <h4 className="font-medium text-sm text-gray-700">Mode of Consult</h4>
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="video"
//               checked={filters.videoConsult}
//               onCheckedChange={(checked) => setFilters({ ...filters, videoConsult: checked })}
//             />
//             <label htmlFor="video" className="text-sm">
//               Video Consultation
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="clinic"
//               checked={filters.clinicVisit}
//               onCheckedChange={(checked) => setFilters({ ...filters, clinicVisit: checked })}
//             />
//             <label htmlFor="clinic" className="text-sm">
//               Clinic Visit
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="home"
//               checked={filters.homeVisit}
//               onCheckedChange={(checked) => setFilters({ ...filters, homeVisit: checked })}
//             />
//             <label htmlFor="home" className="text-sm">
//               Home Visit
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Experience */}
//       <div className="space-y-3">
//         <h4 className="font-medium text-sm text-gray-700">Experience (in years)</h4>
//         <Slider
//           defaultValue={[0]}
//           max={30}
//           step={1}
//           value={experience}
//           onValueChange={setExperience}
//           className="py-4"
//         />
//         <div className="text-sm">{experience[0]}+ years</div>
//       </div>

//       {/* Fee */}
//       <div className="space-y-3">
//         <h4 className="font-medium text-sm text-gray-700">Consultation Fee</h4>
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="fee1"
//               checked={filters.fee1}
//               onCheckedChange={(checked) => setFilters({ ...filters, fee1: checked })}
//             />
//             <label htmlFor="fee1" className="text-sm">
//               $0 - $50
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="fee2"
//               checked={filters.fee2}
//               onCheckedChange={(checked) => setFilters({ ...filters, fee2: checked })}
//             />
//             <label htmlFor="fee2" className="text-sm">
//               $51 - $100
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="fee3"
//               checked={filters.fee3}
//               onCheckedChange={(checked) => setFilters({ ...filters, fee3: checked })}
//             />
//             <label htmlFor="fee3" className="text-sm">
//               $101 - $150
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="fee4"
//               checked={filters.fee4}
//               onCheckedChange={(checked) => setFilters({ ...filters, fee4: checked })}
//             />
//             <label htmlFor="fee4" className="text-sm">
//               $151+
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Language */}
//       <div className="space-y-3">
//         <h4 className="font-medium text-sm text-gray-700">Language</h4>
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="english"
//               checked={filters.english}
//               onCheckedChange={(checked) => setFilters({ ...filters, english: checked })}
//             />
//             <label htmlFor="english" className="text-sm">
//               English
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="spanish"
//               checked={filters.spanish}
//               onCheckedChange={(checked) => setFilters({ ...filters, spanish: checked })}
//             />
//             <label htmlFor="spanish" className="text-sm">
//               Spanish
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="french"
//               checked={filters.french}
//               onCheckedChange={(checked) => setFilters({ ...filters, french: checked })}
//             />
//             <label htmlFor="french" className="text-sm">
//               French
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="mandarin"
//               checked={filters.mandarin}
//               onCheckedChange={(checked) => setFilters({ ...filters, mandarin: checked })}
//             />
//             <label htmlFor="mandarin" className="text-sm">
//               Mandarin
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Facility */}
//       <div className="space-y-3">
//         <h4 className="font-medium text-sm text-gray-700">Facility</h4>
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="parking"
//               checked={filters.parking}
//               onCheckedChange={(checked) => setFilters({ ...filters, parking: checked })}
//             />
//             <label htmlFor="parking" className="text-sm">
//               Avaiable Today
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="wheelchair"
//               checked={filters.wheelchair}
//               onCheckedChange={(checked) => setFilters({ ...filters, wheelchair: checked })}
//             />
//             <label htmlFor="wheelchair" className="text-sm">
//               Avaiable Tomorrow
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="insurance"
//               checked={filters.insurance}
//               onCheckedChange={(checked) => setFilters({ ...filters, insurance: checked })}
//             />
//             <label htmlFor="insurance" className="text-sm">
//               Avaiable This Week
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons - Always show for both mobile and desktop */}
//       <div className="flex gap-3 pt-4">
//         <Button variant="outline" className="flex-1" onClick={handleClearFilters}>
//           Clear
//         </Button>
//         <Button className="flex-1 bg-purple-700 hover:bg-purple-800" onClick={onApply}>
//           Apply
//         </Button>
//       </div>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Filters({ filters, setFilters, experience, setExperience, onApply, onCancel }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Find Doctors</h2>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <FilterContent
                filters={filters}
                setFilters={setFilters}
                experience={experience}
                setExperience={setExperience}
                onApply={() => { onApply(); setIsOpen(false); }}
                onCancel={() => { onCancel(); setIsOpen(false); }}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block w-72 bg-white rounded-lg border border-gray-200 h-fit sticky top-24">
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <FilterContent
            filters={filters}
            setFilters={setFilters}
            experience={experience}
            setExperience={setExperience}
            onApply={onApply}
            onCancel={onCancel}
          />
        </div>
      </div>
    </>
  )
}

function FilterContent({ filters, setFilters, experience, setExperience, onApply, onCancel }) {
  const handleClearFilters = () => {
    setFilters({
      videoConsult: false,
      clinicVisit: false,
      homeVisit: false,
      fee1: false,
      fee2: false,
      fee3: false,
      fee4: false,
      english: false,
      spanish: false,
      french: false,
      mandarin: false,
      AvaiableToday: false,
      AvaiableTommrow: false,
      AvaiableThisWeek: false,
    })
    setExperience([0])
    onCancel()
  }

  return (
    <div className="space-y-6">
      {/* Mode of Consult */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm text-gray-700">Mode of Consult</h4>
        <div className="space-y-2">
          {['videoConsult','clinicVisit','homeVisit'].map((key) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                id={key}
                checked={filters[key]}
                onCheckedChange={(checked) => setFilters({ ...filters, [key]: checked })}
              />
              <label htmlFor={key} className="text-sm">
                {key === 'videoConsult' ? 'Video Consultation' : key === 'clinicVisit' ? 'Clinic Visit' : 'Home Visit'}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm text-gray-700">Experience (in years)</h4>
        <Slider
          max={30}
          step={1}
          value={experience}
          onValueChange={setExperience}
          className="py-4"
        />
        <div className="text-sm">{experience[0]}+ years</div>
      </div>

      {/* Fee */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm text-gray-700">Consultation Fee</h4>
        <div className="space-y-2">
          {[
            { key: 'fee1', label: '$0 - $50' },
            { key: 'fee2', label: '$51 - $100' },
            { key: 'fee3', label: '$101 - $150' },
            { key: 'fee4', label: '$151+' },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                id={key}
                checked={filters[key]}
                onCheckedChange={(checked) => setFilters({ ...filters, [key]: checked })}
              />
              <label htmlFor={key} className="text-sm">{label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm text-gray-700">Language</h4>
        <div className="space-y-2">
          {['english','spanish','french','mandarin'].map((lang) => (
            <div key={lang} className="flex items-center space-x-2">
              <Checkbox
                id={lang}
                checked={filters[lang]}
                onCheckedChange={(checked) => setFilters({ ...filters, [lang]: checked })}
              />
              <label htmlFor={lang} className="text-sm">{lang[0].toUpperCase() + lang.slice(1)}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm text-gray-700">Availability</h4>
        <div className="space-y-2">
          {[
            { key: 'AvaiableToday', label: 'Today' },
            { key: 'AvaiableTommrow', label: 'Tomorrow' },
            { key: 'AvaiableThisWeek', label: 'This Week' },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                id={key}
                checked={filters[key]}
                onCheckedChange={(checked) => setFilters({ ...filters, [key]: checked })}
              />
              <label htmlFor={key} className="text-sm">{label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <Button variant="outline" className="flex-1" onClick={handleClearFilters}>
          Clear
        </Button>
        <Button className="flex-1 bg-purple-700 hover:bg-purple-800" onClick={onApply}>
          Apply
        </Button>
      </div>
    </div>
  )
}
