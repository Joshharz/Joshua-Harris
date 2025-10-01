
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  location: string;
  availability: string[];
  qualifications: string[];
  experience: number;
  bio: string;
  languages: string[];
  imageUrl: string;
  rating: number;
  reviews: number;
}

export interface Service {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export enum AppointmentStatus {
  Upcoming = 'Upcoming',
  Completed = 'Completed',
  Cancelled = 'Cancelled'
}

export interface Appointment {
  id: string;
  doctorName: string;
  doctorSpecialty: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  cost: number;
}

export interface Testimonial {
    name: string;
    location: string;
    text: string;
    imageUrl: string;
}
