

// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Star, Plus, MapPin, Video, Calendar, ThumbsUp, Pencil, Trash2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// export default function DoctorCard({doctor}) {
//     const [editDialogOpen, setEditDialogOpen] = useState(false)
//     const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
//     return (
//       <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow relative">
//         <div className="absolute top-4 right-4 flex space-x-2">
//           <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
//             <DialogTrigger asChild>
//               <Button variant="ghost" size="icon" className="h-8 w-8 bg-white bg-opacity-80 hover:bg-opacity-100">
//                 <Pencil className="h-4 w-4 text-purple-700" />
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>Edit Doctor Information</DialogTitle>
//               </DialogHeader>
//               <div className="grid gap-4 py-4">
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="edit-name" className="text-right">
//                     Full Name
//                   </Label>
//                   <Input id="edit-name" defaultValue={doctor.fullName} className="col-span-3" />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="edit-specialty" className="text-right">
//                      Specialty
//                   </Label>
//                   <Input id="edit-specialty" defaultValue={doctor.specialty} className="col-span-3" />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="edit-experience" className="text-right">
//                      Experience
//                   </Label>
//                   <Input id="edit-experience" type="number" defaultValue={doctor.experience} className="col-span-3" />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="edit-languages" className="text-right">
//                     Languages
//                   </Label>
//                   <Input id="edit-languages" defaultValue={doctor.languages} className="col-span-3" />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="edit-location" className="text-right">
//                     Loaction
//                   </Label>
//                   <Input id="edit-location" defaultValue={doctor.location} className="col-span-3" />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="edit-fee" className="text-right">
//                     Fee
//                   </Label>
//                   <Input id="edit-fee" type="number" defaultValue={doctor.fee} className="col-span-3" />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label className="text-right">Availability</Label>
//                   <div className="col-span-3">
//                     <RadioGroup defaultValue="today">
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="today" id="edit-today" />
//                         <Label htmlFor="edit-today">Available Today</Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="tomorrow" id="edit-tomorrow" />
//                         <Label htmlFor="edit-tomorrow">Available Tomorrow</Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="week" id="edit-week" />
//                         <Label htmlFor="edit-week">Available This Week</Label>
//                       </div>
//                     </RadioGroup>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="edit-bio" className="text-right">
//                     Bio
//                   </Label>
//                   <Textarea
//                     id="edit-bio"
//                     defaultValue={doctor.bio}
//                     className="col-span-3"
//                     rows={3}
//                   />
//                 </div>
//               </div>
//               <DialogFooter>
//                 <DialogClose asChild>
//                   <Button variant="outline">Cancel</Button>
//                 </DialogClose>
//                 <Button type="submit" className="bg-purple-700 hover:bg-purple-800">
//                   Save Changes
//                 </Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
  
//           <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
//             <DialogTrigger asChild>
//               <Button variant="ghost" size="icon" className="h-8 w-8 bg-white bg-opacity-80 hover:bg-opacity-100">
//                 <Trash2 className="h-4 w-4 text-red-600" />
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px]">
//               <DialogHeader>
//                 <DialogTitle>Confirm Deletion</DialogTitle>
//               </DialogHeader>
//               <div className="py-4">
//                 <p>Are you sure you want to delete Dr. Sarah Johnson from the system? This action cannot be undone.</p>
//               </div>
//               <DialogFooter>
//                 <DialogClose asChild>
//                   <Button variant="outline">Cancel</Button>
//                 </DialogClose>
//                 <Button variant="destructive">Delete</Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//         </div>
  
//         <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
//           <div className="flex-shrink-0">
//             <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto sm:mx-0">
//               <Image
//                 src="/doc.jpeg"
//                 alt="Doctor"
//                 width={96}
//                 height={96}
//                 className="object-cover"
//               />
//             </div>
//           </div>
  
//           <div className="flex-1 space-y-3">
//             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
//               <div>
//                 <h3 className="text-lg font-semibold">{doctor.fullName}</h3>
//                 <p className="text-purple-700 font-medium">{doctor.specialty}</p>
//               </div>
//               <div className="flex items-center mt-2 sm:mt-0">
//                 <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
//                 <span className="ml-1 text-sm font-medium">4.8</span>
//                 {/* <span className="text-sm text-gray-500 ml-1">(124 reviews)</span> */}
//               </div>
//             </div>
  
//             <div className="flex flex-wrap gap-2">
//               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
//                 {doctor.experience}+ years exp
//               </span>
//               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                 {doctor.languages}
//               </span>
//               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                 <ThumbsUp className="mr-1 h-3 w-3" />
//                 98% satisfaction
//               </span>
//             </div>
  
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-gray-600">
//               <div className="flex items-center">
//                 <MapPin className="h-4 w-4 mr-1 text-gray-400" />
//                 <span>{doctor.location}</span>
//               </div>
//                   <div className="flex items-center gap-2">
//   <Calendar className="h-4 w-4 text-gray-400" />
//   {doctor.availabilityToday && <span>Available Today</span>}
//   {doctor.availabilityTomorrow && <span>Available Tomorrow</span>}
//   {doctor.availabilityWeek && <span>Available This Week</span>}
// </div>

//               <div className="flex items-center">
//                 <span className="font-medium text-gray-900">${doctor.fee}</span>
//                 <span className="ml-1">per consultation</span>
//               </div>
//             </div>
  
//             <div className="flex flex-col sm:flex-row gap-3 pt-3">
//               <Button variant="outline" className="flex items-center justify-center">
//                 <Video className="h-4 w-4 mr-2" />
//                 Video Consult
//               </Button>
//               <Button className="bg-purple-700 hover:bg-purple-800">Book Appointment</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }


// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Star, MapPin, Video, Calendar, ThumbsUp, Pencil, Trash2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { useRouter } from "next/navigation"

// export default function DoctorCard({ doctor }) {
//   const router = useRouter()
//   const [editDialogOpen, setEditDialogOpen] = useState(false)
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

//   // Local state for edit form
//   const [editForm, setEditForm] = useState({
//     fullName: doctor.fullName,
//     specialty: doctor.specialty,
//     experience: doctor.experience,
//     languages: doctor.languages,
//     location: doctor.location,
//     fee: doctor.fee,
//     bio: doctor.bio,
//     availabilityToday: doctor.availabilityToday,
//     availabilityTomorrow: doctor.availabilityTomorrow,
//     availabilityWeek: doctor.availabilityWeek,
//   })

//   const handleEditChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setEditForm((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }))
//   }

//   const handleEditSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       await fetch(`/api/users/${doctor.id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(editForm),
//       })
//       setEditDialogOpen(false)
//       router.refresh()
//     } catch (err) {
//       console.error('Edit error:', err)
//     }
//   }

//   const handleDelete = async () => {
//     try {
//       await fetch(`/api/users/${doctor.id}`, { method: 'DELETE' })
//       setDeleteDialogOpen(false)
//       router.refresh()
//     } catch (err) {
//       console.error('Delete error:', err)
//     }
//   }

//   return (
//     <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow relative">
//       {/* Action Buttons */}
//       <div className="absolute top-4 right-4 flex space-x-2">
//         {/* Edit */}
//         <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
//           <DialogTrigger asChild>
//             <Button variant="ghost" size="icon" className="h-8 w-8 bg-white bg-opacity-80 hover:bg-opacity-100">
//               <Pencil className="h-4 w-4 text-purple-700" />
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
//             <DialogHeader><DialogTitle>Edit Doctor Information</DialogTitle></DialogHeader>
//             <form onSubmit={handleEditSubmit} className="grid gap-4 py-4">
//               {/** Full Name, Specialty, Experience, Languages, Location, Fee **/}
//               {[
//                 { id: 'fullName', label: 'Full Name' },
//                 { id: 'specialty', label: 'Specialty' },
//                 { id: 'experience', label: 'Experience', type: 'number' },
//                 { id: 'languages', label: 'Languages' },
//                 { id: 'location', label: 'Location' },
//                 { id: 'fee', label: 'Fee', type: 'number' },
//               ].map(({ id, label, type }) => (
//                 <div key={id} className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor={`edit-${id}`} className="text-right">{label}</Label>
//                   <Input
//                     id={`edit-${id}`}
//                     name={id}
//                     type={type || 'text'}
//                     value={editForm[id]}
//                     onChange={handleEditChange}
//                     className="col-span-3"
//                   />
//                 </div>
//               ))}
//               {/** Availability **/}
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label className="text-right">Availability</Label>
//                 <div className="col-span-3">
//                   <RadioGroup
//                     value={
//                       editForm.availabilityToday ? 'today' :
//                       editForm.availabilityTomorrow ? 'tomorrow' :
//                       editForm.availabilityWeek ? 'week' : ''
//                     }
//                     onValueChange={(val) => setEditForm({
//                       ...editForm,
//                       availabilityToday: val === 'today',
//                       availabilityTomorrow: val === 'tomorrow',
//                       availabilityWeek: val === 'week',
//                     })}
//                   >
//                     {['today','tomorrow','week'].map((val) => (
//                       <div key={val} className="flex items-center space-x-2">
//                         <RadioGroupItem value={val} id={`edit-${val}`} />
//                         <Label htmlFor={`edit-${val}`}>{
//                           val === 'today' ? 'Available Today' :
//                           val === 'tomorrow' ? 'Available Tomorrow' :
//                           'Available This Week'
//                         }</Label>
//                       </div>
//                     ))}
//                   </RadioGroup>
//                 </div>
//               </div>
//               {/** Bio **/}
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="edit-bio" className="text-right">Bio</Label>
//                 <Textarea
//                   id="edit-bio"
//                   name="bio"
//                   value={editForm.bio}
//                   onChange={handleEditChange}
//                   className="col-span-3"
//                   rows={3}
//                 />
//               </div>
//               <DialogFooter>
//                 <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
//                 <Button type="submit" className="bg-purple-700 hover:bg-purple-800">Save Changes</Button>
//               </DialogFooter>
//             </form>
//           </DialogContent>
//         </Dialog>

//         {/* Delete */}
//         <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
//           <DialogTrigger asChild>
//             <Button variant="ghost" size="icon" className="h-8 w-8 bg-white bg-opacity-80 hover:bg-opacity-100">
//               <Trash2 className="h-4 w-4 text-red-600" />
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader><DialogTitle>Confirm Deletion</DialogTitle></DialogHeader>
//             <div className="py-4">
//               <p>Are you sure you want to delete Dr. {doctor.fullName}? This action cannot be undone.</p>
//             </div>
//             <DialogFooter>
//               <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
//               <Button variant="destructive" onClick={handleDelete}>Delete</Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>

//       {/** Card Content **/}
//       <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
//         <div className="flex-shrink-0">
//           <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto sm:mx-0">
//             <Image
//               src={doctor.profileImageUrl || '/doc.jpeg'}
//               alt={doctor.fullName}
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//         <div className="flex-1 space-y-3">
//           <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
//             <div>
//               <h3 className="text-lg font-semibold">{doctor.fullName}</h3>
//               <p className="text-purple-700 font-medium">{doctor.specialty}</p>
//             </div>
//             <div className="flex items-center mt-2 sm:mt-0">
//               <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
//               <span className="ml-1 text-sm font-medium">4.8</span>
//             </div>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {doctor.experience > 0 && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">{doctor.experience}+ years exp</span>}
//             {doctor.languages && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{doctor.languages}</span>}
//             {doctor.satisfaction && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><ThumbsUp className="mr-1 h-3 w-3" />{doctor.satisfaction}% satisfaction</span>}
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-gray-600">
//             <div className="flex items-center"><MapPin className="h-4 w-4 mr-1 text-gray-400" /><span>{doctor.location}</span></div>
//             <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-gray-400" />{doctor.availabilityToday && <span>Available Today</span>}{doctor.availabilityTomorrow && <span>Available Tomorrow</span>}{doctor.availabilityWeek && <span>Available This Week</span>}</div>
//             <div className="flex items-center"><span className="font-medium text-gray-900">${doctor.fee}</span><span className="ml-1">per consultation</span></div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3 pt-3">
//             <Button variant="outline" className="flex items-center justify-center"><Video className="h-4 w-4 mr-2" />Video Consult</Button>
//             <Button className="bg-purple-700 hover:bg-purple-800">Book Appointment</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, MapPin, Video, Calendar, ThumbsUp, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from "next/navigation"

export default function DoctorCard({ doctor }) {
  const router = useRouter()
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  // Local state for edit form
  const [editForm, setEditForm] = useState({
    fullName: doctor.fullName,
    specialty: doctor.specialty,
    experience: doctor.experience,
    languages: doctor.languages,
    location: doctor.location,
    fee: doctor.fee,
    bio: doctor.bio,
    availabilityToday: doctor.availabilityToday,
    availabilityTomorrow: doctor.availabilityTomorrow,
    availabilityWeek: doctor.availabilityWeek,
  })

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target
    setEditForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    setIsSaving(true)
    try {
      await fetch(`/api/users/${doctor.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm),
      })
      setEditDialogOpen(false)
      window.location.reload()
    } catch (err) {
      console.error('Edit error:', err)
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await fetch(`/api/users/${doctor.id}`, { method: 'DELETE' })
      setDeleteDialogOpen(false)
       window.location.reload()
    } catch (err) {
      console.error('Delete error:', err)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow relative">
      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        {/* Edit */}
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 bg-white bg-opacity-80 hover:bg-opacity-100">
              <Pencil className="h-4 w-4 text-purple-700" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
            <DialogHeader><DialogTitle>Edit Doctor Information</DialogTitle></DialogHeader>
            <form onSubmit={handleEditSubmit} className="grid gap-4 py-4">
              {/* Full Name, Specialty, Experience, Languages, Location, Fee */}
              {[
                { id: 'fullName', label: 'Full Name' },
                { id: 'specialty', label: 'Specialty' },
                { id: 'experience', label: 'Experience', type: 'number' },
                { id: 'languages', label: 'Languages' },
                { id: 'location', label: 'Location' },
                { id: 'fee', label: 'Fee', type: 'number' },
              ].map(({ id, label, type }) => (
                <div key={id} className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={`edit-${id}`} className="text-right">{label}</Label>
                  <Input
                    id={`edit-${id}`}
                    name={id}
                    type={type || 'text'}
                    value={editForm[id]}
                    onChange={handleEditChange}
                    className="col-span-3"
                  />
                </div>
              ))}
              {/* Availability */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Availability</Label>
                <div className="col-span-3">
                  <RadioGroup
                    value={
                      editForm.availabilityToday ? 'today' :
                      editForm.availabilityTomorrow ? 'tomorrow' :
                      editForm.availabilityWeek ? 'week' : ''
                    }
                    onValueChange={(val) => setEditForm({
                      ...editForm,
                      availabilityToday: val === 'today',
                      availabilityTomorrow: val === 'tomorrow',
                      availabilityWeek: val === 'week',
                    })}
                  >
                    {['today','tomorrow','week'].map((val) => (
                      <div key={val} className="flex items-center space-x-2">
                        <RadioGroupItem value={val} id={`edit-${val}`} />
                        <Label htmlFor={`edit-${val}`}>{
                          val === 'today' ? 'Available Today' :
                          val === 'tomorrow' ? 'Available Tomorrow' :
                          'Available This Week'
                        }</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
              {/* Bio */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-bio" className="text-right">Bio</Label>
                <Textarea
                  id="edit-bio"
                  name="bio"
                  value={editForm.bio}
                  onChange={handleEditChange}
                  className="col-span-3"
                  rows={3}
                />
              </div>
              <DialogFooter>
                <DialogClose asChild><Button variant="outline" disabled={isSaving}>Cancel</Button></DialogClose>
                <Button type="submit" className="bg-purple-700 hover:bg-purple-800 flex items-center justify-center" disabled={isSaving}>
                  {isSaving ? (
                    <>
                      <svg className="animate-spin h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Delete */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 bg-white bg-opacity-80 hover:bg-opacity-100" disabled={isDeleting}>
              <Trash2 className="h-4 w-4 text-red-600" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader><DialogTitle>Confirm Deletion</DialogTitle></DialogHeader>
            <div className="py-4">
              <p>Are you sure you want to delete Dr. {doctor.fullName}? This action cannot be undone.</p>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button variant="outline" disabled={isDeleting}>Cancel</Button></DialogClose>
              <Button variant="destructive" className="flex items-center justify-center" onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Deleting...
                  </>
                ) : (
                  'Delete'
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/** Card Content **/}
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto sm:mx-0">
            <Image
              src={doctor.profileImageUrl || '/doc.jpeg'}
              alt={doctor.fullName}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div>
              <h3 className="text-lg font-semibold">{doctor.fullName}</h3>
              <p className="text-purple-700 font-medium">{doctor.specialty}</p>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              {/* <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-sm font-medium">4.8</span> */}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {doctor.experience > 0 && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">{doctor.experience}+ years exp</span>}
            {doctor.languages && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{doctor.languages}</span>}
            {doctor.satisfaction && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><ThumbsUp className="mr-1 h-3 w-3" />{doctor.satisfaction}% satisfaction</span>}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-gray-600">
            <div className="flex items-center"><MapPin className="h-4 w-4 mr-1 text-gray-400" /><span>{doctor.location}</span></div>
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-gray-400" />{doctor.availabilityToday && <span>Available Today</span>}{doctor.availabilityTomorrow && <span>Available Tomorrow</span>}{doctor.availabilityWeek && <span>Available This Week</span>}</div>
            <div className="flex items-center"><span className="font-medium text-gray-900">${doctor.fee}</span><span className="ml-1">per consultation</span></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <Button variant="outline" className="flex items-center justify-center"><Video className="h-4 w-4 mr-2" />Video Consult</Button>
            <Button className="bg-purple-700 hover:bg-purple-800">Book Appointment</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
