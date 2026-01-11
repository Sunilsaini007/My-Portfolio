'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function StrategicPartnerForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        cityState: '',
        linkedin: '',
        profession: '',
        expertise: [],
        background: '',
        contribution: '',
        strength: '',
        excitement: '',
        commitAmount: '',
        lockIn: '',
        monthlyTime: '',
        agreement: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox' && name === 'expertise') {
            setFormData((prev) => {
                const exists = prev.expertise.includes(value);
                return {
                    ...prev,
                    expertise: exists
                        ? prev.expertise.filter((v) => v !== value)
                        : [...prev.expertise, value],
                };
            });
        } else if (type === 'checkbox') {
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Submit data to backend API
        console.log('Form Data:', formData);
        alert('Submitted! (API integration pending)');
    };

    return (
        <div className='max-w-6xl mx-auto mb-5 px-3'>
            <h1 className="text-3xl font-extrabold text-center container py-10">
                Strategic Partner Onboarding – Founder’s Circle
            </h1>
            {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <Image
                    className='w-full'
                    src="/pexels (1).jpg"
                    alt='/'
                    width={100}
                    height={100}
                    unoptimized
                /> */}
            <form
                onSubmit={handleSubmit}
                className=" max-w-3xl mx-auto space-y-6"
            >


                {/* Section 1 */}
                <div className="space-y-4">
                    <label className='capitalize text-sm text-[#7b7c9c]'> full name</label>
                    <input name="fullName" type="text" placeholder="Full Name" required className="input capitalize text-black placeholder-black focus:ring-[#fc7200]" onChange={handleChange} />
                    <div className="flex space-x-4">
                        <div className='w-full'>
                            <label className='capitalize text-sm text-[#7b7c9c]'>Email</label>
                            <input name="email" type="email" placeholder="eg: some@email.com" required className="input" onChange={handleChange} />
                        </div>
                        <div className='w-full'>
                            <label className='capitalize text-sm text-[#7b7c9c]'>Contact Number</label>
                            <input name="mobile" type="tel" placeholder="Mobile Number" required className="input" onChange={handleChange} />
                        </div>
                    </div>

                    <label className='capitalize text-sm text-[#7b7c9c]'>City & State</label>
                    <input name="cityState" type="text" placeholder="eg: sikar.rajasthan" required className="input" onChange={handleChange} />

                    <div className="flex space-x-4">
                        <div>
                            <label className='capitalize text-sm text-[#7b7c9c]'>LinkedIn Profile URL</label>
                            <input name="linkedin" type="url" placeholder="eg: www.linkedin.com/in/your-name" required className="input" onChange={handleChange} />
                        </div>
                        <div>
                            <label className='capitalize text-sm text-[#7b7c9c]'>Current Profession / Business / Organization</label>
                            <input name="profession" type="text" placeholder="Current Profession / Business / Organization" required className="input" onChange={handleChange} />
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">

                    <div>
                        <label className="block font-medium mb-1">Key Area of Expertise (select all that apply):</label>
                        {['Strategy', 'Marketing', 'Technology', 'Food & Hospitality', 'Supply Chain', 'Finance', 'Networking', 'Other'].map((area) => (
                            <label key={area} className="block">
                                <input type="checkbox" name="expertise" value={area} onChange={handleChange} /> {area}
                            </label>
                        ))}
                    </div>

                    <textarea name="background" placeholder="Professional Background (100–200 words)" required className="textarea" onChange={handleChange}></textarea>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                    <textarea name="contribution" placeholder="How can you contribute to MingleBite’s growth & scaling? (200–300 words)" required className="textarea" onChange={handleChange}></textarea>
                    <textarea name="strength" placeholder="What unique strength, network, or resources do you bring?" required className="textarea" onChange={handleChange}></textarea>
                    <textarea name="excitement" placeholder="What excites you most about becoming a Strategic Partner?" required className="textarea" onChange={handleChange}></textarea>
                </div>

                {/* Section 4 */}
                <div className="space-x-4 flex">

                    <div>
                        <label>
                            <span className='text-[#7b7c9c]'> Comfortable with a 3-year lock-in period? </span>
                            <select name="lockIn" required className="input" onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                    </div>

                    <label>
                        <span className='text-[#7b7c9c]'>Are you willing to commit ₹1 Lakh towards your 1% stake?</span>
                        <select name="commitAmount" required className="input" onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </label>

                </div>
                <input name="monthlyTime" type="text" placeholder="How much time can you dedicate monthly?" required className="input" onChange={handleChange} />

                {/* Section 5 */}
                <div className="space-y-4">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="agreement" required onChange={handleChange} />
                        <span className='text-[#7b7c9c]'>
                            I understand this is a long-term Strategic Partnership, not a short-term investment.
                            I accept final decisions rest with the Founder’s Office.
                        </span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#fc7200] capitalize text-white font-semibold py-3 rounded-lg transition"
                >
                    apply to join Founder’s circle
                </button>
            </form>
            {/* </div> */}
        </div>
    );
}
