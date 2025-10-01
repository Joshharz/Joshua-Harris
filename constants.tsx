
import type { Doctor, Service, Appointment, Testimonial } from './types';
import { AppointmentStatus } from './types';
import { HeartIcon, StethoscopeIcon, UserGroupIcon, BeakerIcon } from './components/icons';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    specialty: 'Cardiology',
    location: 'Metro Health Center',
    availability: ['Mon', 'Wed', 'Fri'],
    qualifications: ['MD, Cardiology', 'FACC'],
    experience: 15,
    bio: 'Dr. Evelyn Reed is a board-certified cardiologist with over 15 years of experience in diagnosing and treating heart conditions. She is dedicated to providing personalized care and empowering patients to lead heart-healthy lives.',
    languages: ['English', 'Spanish'],
    imageUrl: 'https://picsum.photos/seed/evelyn/400/400',
    rating: 4.9,
    reviews: 234
  },
  {
    id: '2',
    name: 'Dr. Marcus Chen',
    specialty: 'Dermatology',
    location: 'City Dermatology Clinic',
    availability: ['Tue', 'Thu'],
    qualifications: ['MD, Dermatology', 'FAAD'],
    experience: 10,
    bio: 'Dr. Marcus Chen specializes in medical and cosmetic dermatology. He is known for his meticulous approach and his commitment to using the latest technologies to achieve the best results for his patients.',
    languages: ['English', 'Mandarin'],
    imageUrl: 'https://picsum.photos/seed/marcus/400/400',
    rating: 4.8,
    reviews: 189
  },
  {
    id: '3',
    name: 'Dr. Sofia Rodriguez',
    specialty: 'Pediatrics',
    location: 'Sunrise Children\'s Hospital',
    availability: ['Mon', 'Tue', 'Wed', 'Thu'],
    qualifications: ['MD, Pediatrics', 'FAAP'],
    experience: 12,
    bio: 'With a warm and friendly demeanor, Dr. Sofia Rodriguez provides comprehensive care for children from infancy through adolescence. She believes in building strong relationships with families to ensure optimal child health.',
    languages: ['English', 'Spanish'],
    imageUrl: 'https://picsum.photos/seed/sofia/400/400',
    rating: 5.0,
    reviews: 312
  },
  {
    id: '4',
    name: 'Dr. Ben Carter',
    specialty: 'Orthopedics',
    location: 'Apex Sports Medicine',
    availability: ['Tue', 'Fri'],
    qualifications: ['MD, Orthopedic Surgery', 'FAAOS'],
    experience: 20,
    bio: 'Dr. Ben Carter is a leading orthopedic surgeon with a focus on sports-related injuries. He has helped countless athletes return to their peak performance and is an expert in minimally invasive surgical techniques.',
    languages: ['English'],
    imageUrl: 'https://picsum.photos/seed/ben/400/400',
    rating: 4.9,
    reviews: 255
  }
];

export const SERVICES: Service[] = [
  {
    name: 'Cardiology',
    description: 'Expert care for heart and vascular conditions. We focus on prevention, diagnosis, and treatment.',
    icon: HeartIcon,
  },
  {
    name: 'General Check-up',
    description: 'Comprehensive health assessments to monitor your well-being and catch issues early.',
    icon: StethoscopeIcon,
  },
  {
    name: 'Family Medicine',
    description: 'Continuous and complete healthcare for individuals and families of all ages.',
    icon: UserGroupIcon,
  },
  {
    name: 'Lab Testing',
    description: 'Accurate and timely diagnostic testing to help guide your treatment plan.',
    icon: BeakerIcon,
  }
];

export const APPOINTMENTS: Appointment[] = [
    { id: 'appt1', doctorName: 'Dr. Evelyn Reed', doctorSpecialty: 'Cardiology', date: '2024-08-15', time: '10:00 AM', status: AppointmentStatus.Upcoming, cost: 250 },
    { id: 'appt2', doctorName: 'Dr. Sofia Rodriguez', doctorSpecialty: 'Pediatrics', date: '2024-08-18', time: '02:30 PM', status: AppointmentStatus.Upcoming, cost: 150 },
    { id: 'appt3', doctorName: 'Dr. Marcus Chen', doctorSpecialty: 'Dermatology', date: '2024-07-20', time: '11:00 AM', status: AppointmentStatus.Completed, cost: 200 },
    { id: 'appt4', doctorName: 'Dr. Ben Carter', doctorSpecialty: 'Orthopedics', date: '2024-06-10', time: '09:00 AM', status: AppointmentStatus.Completed, cost: 300 },
    { id: 'appt5', doctorName: 'Dr. Evelyn Reed', doctorSpecialty: 'Cardiology', date: '2024-05-01', time: '03:00 PM', status: AppointmentStatus.Cancelled, cost: 250 },
];

export const SUCCESS_RATE_DATA = {
  overallSatisfaction: 96,
  recoveryRate: 92,
  byDepartment: [
    { name: 'Cardiology', success: 98, procedures: 1200 },
    { name: 'Orthopedics', success: 95, procedures: 950 },
    { name: 'Oncology', success: 89, procedures: 600 },
    { name: 'Neurology', success: 91, procedures: 750 },
    { name: 'Pediatrics', success: 99, procedures: 2100 },
    { name: 'Dermatology', success: 97, procedures: 1800 },
  ],
};

export const TESTIMONIALS: Testimonial[] = [
    {
        name: 'Sarah L.',
        location: 'New York, NY',
        text: 'The care I received at MediConnect was exceptional. Dr. Reed was attentive, knowledgeable, and truly cared about my health. The entire process, from booking to follow-up, was seamless.',
        imageUrl: 'https://picsum.photos/seed/sarah/100/100',
    },
    {
        name: 'David C.',
        location: 'Chicago, IL',
        text: 'Finding a specialist was so easy with their online platform. The facilities are top-notch and the staff is incredibly professional and friendly. Highly recommended!',
        imageUrl: 'https://picsum.photos/seed/david/100/100',
    },
    {
        name: 'Maria G.',
        location: 'Miami, FL',
        text: 'As a mother, I only want the best for my children. Dr. Rodriguez and the pediatrics team were fantastic. They made my son feel comfortable and answered all of my questions with patience.',
        imageUrl: 'https://picsum.photos/seed/maria/100/100',
    },
];
