// src/components/home/HomeVisitSection.tsx
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function HomeVisitSection() {
  return (
    <section className="py-24 bg-teal-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Expert Physiotherapy at Your Doorstep in Gwalior
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Home physiotherapy makes rehabilitation accessible for those who find travel difficult 
              or require treatment in their natural environment.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Personalized 1-on-1 care at home",
                "Ideal for post-surgical & neuro recovery",
                "Service across Thatipur & Gwalior",
                "Flexible scheduling for your convenience"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="text-teal-600 h-5 w-5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
               <Link href="/services/home-physiotherapy" className="text-teal-700 font-bold border-b-2 border-teal-700 pb-1 hover:text-teal-800">
                 Learn more about home visits →
               </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
             <div className="aspect-square bg-slate-300 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center bg-gradient-to-br from-teal-700 to-slate-800 p-8 text-white text-center">
               <div>
                 <p className="text-2xl font-bold text-teal-200">Doorstep Rehabilitation</p>
                 <p className="text-sm text-slate-300 mt-2">Serving Thatipur & All Major Areas in Gwalior</p>
                 <p className="text-xs text-teal-400 mt-4 font-semibold">Sanitized Equipment • Certified Practitioner</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
