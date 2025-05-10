// 
"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DoctorCard from "./DoctorCard.jsx";
import Loader from "./Loader.jsx";
import Message from "./Message.jsx"

export default function DoctorInfo({
  doctors,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    specialty: "",
    experience: 0,
    languages: "",
    location: "",
    fee: 0,
    bio: "",
    availabilityToday: false,
    availabilityTomorrow: false,
    availabilityWeek: false,
  });
   const [success,setsuccess]=useState(false);
   const [isSaving,setIsSaving]=useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();
    setIsSaving(true)
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      setsuccess(true);
      setForm({
        fullName: "",
        specialty: "",
        experience: 0,
        languages: "",
        location: "",
        fee: 0,
        bio: "",
        availabilityToday: false,
        availabilityTomorrow: false,
        availabilityWeek: false,
      });
      setDialogOpen(false);
      setTimeout(() => {
        setsuccess(false);
      }, 33000);
      setIsSaving(false);
      window.location.reload()
    } catch (err) {
      console.error(err);
      alert("Failed to add doctor");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  if (!doctors || doctors.length === 0) return <Loader />;
  if(success) return <Message/>
  return (
    <div className="space-y-6">
      {/* Header & Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Top Doctors</h1>
        </div>
        <div className="flex items-center gap-3">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fee">Fee: Low to High</SelectItem>
              <SelectItem value="experience">Experience</SelectItem>
            </SelectContent>
          </Select>
          {/* You can expose sortOrder toggles here if you like */}
        </div>
      </div>

      {/* Add Doctor Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button className="bg-purple-700 hover:bg-purple-800 flex items-center">
            <Plus className="mr-2" /> Add Doctor
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Doctor</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              {[
                { id: "fullName", label: "Full Name", type: "text" },
                { id: "specialty", label: "Specialty", type: "text" },
                { id: "experience", label: "Experience", type: "number" },
                { id: "languages", label: "Languages", type: "text" },
                { id: "location", label: "Location", type: "text" },
                { id: "fee", label: "Fee ($)", type: "number" },
              ].map(({ id, label, type }) => (
                <div key={id} className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={id} className="text-right">{label}</Label>
                  <Input
                    id={id}
                    name={id}
                    type={type}
                    value={form[id]}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
              ))}

              {/* Availability Radio */}

              <div className="grid grid-cols-4 items-center gap-4">
  <Label className="text-right">Availability</Label>
  <div className="col-span-3">
    <RadioGroup
      // compute the selected value, or '' if none
      value={
        form.availabilityToday
          ? "today"
          : form.availabilityTomorrow
          ? "tomorrow"
          : form.availabilityWeek
          ? "week"
          : ""
      }
      onValueChange={(val) => {
        setForm((prev) => ({
          ...prev,
          availabilityToday:   val === "today",
          availabilityTomorrow: val === "tomorrow",
          availabilityWeek:     val === "week",
        }));
      }}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="today" id="availability-today" />
        <Label htmlFor="availability-today">Available Today</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="tomorrow" id="availability-tomorrow" />
        <Label htmlFor="availability-tomorrow">Available Tomorrow</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="week" id="availability-week" />
        <Label htmlFor="availability-week">Available This Week</Label>
      </div>
    </RadioGroup>
  </div>
</div>

              </div>

              {/* Bio */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  className="col-span-3"
                  rows={3}
                />
              </div>
        
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              {/* <Button type="submit" className="bg-purple-700 hover:bg-purple-800">
                Submit
              </Button> */}
              <Button type="submit" className="bg-purple-700 hover:bg-purple-800 flex items-center justify-center" disabled={isSaving}>
                  {isSaving ? (
                    <>
                      <svg className="animate-spin h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                      Creating...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Render the filtered & sorted doctor list */}
      <div className="space-y-4">
        {doctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}

