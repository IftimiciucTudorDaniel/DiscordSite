import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import React, {useEffect} from "react";

const TermsModal = ({ isOpen, onClose, selectedPlan }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/100 backdrop-blur-md z-50 flex items-center justify-center px-4">
            <div className="bg-[#1D1D1D] max-w-[1360px] text-white w-full max-w-screen-2xl max-h-[90vh] p-10 rounded-2xl shadow-2xl  relative">

                <h2 className="text-4xl font-bold mb-4">Confirm Your Order</h2>

                <p className="text-2xl mb-6 text-gray-300">
                    <strong>Plan:</strong> {selectedPlan.planTitle}<br />
                    <strong>Price:</strong> ${selectedPlan.price} / {selectedPlan.duration}
                </p>

                <div className="mb-6 max-h-[460px] overflow-y-auto border border-gray-600 p-4 rounded bg-[#2b2b2b] text-sm text-gray-300 overscroll-y-contain">
                    <h3 className="text-2xl font-semibold mb-2 text-white">This Agreement outlines the terms and conditions under which IWM Academy collects and manages tuition and service fees. By enrolling in any courses or programs offered by IWM Academy, you acknowledge and agree to the following nonrefundable fee policy.
                    </h3>

                    <h3 className="text-3xl font-semibold mb-2 text-white">Fees and Payments
                    </h3>
                    <h3 className="text-xl font-semibold mb-2 text-white">1. Fee Structure</h3>
                    <p>
                        1.1. All course fees, subscription charges, and associated costs are detailed on the IWM Academy website under each program description.
                        1.2. Additional charges may apply for specific course materials, certifications, or administrative services.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 text-white">2. Payment Methods</h3>
                    <p>
                        2.1. Payments must be made through approved methods as listed on the academys website.
                        2.2. IWM Academy accepts various payment methods, including credit card, PayPal, and bank transfer, subject to processing fees.
                    </p>
                    <h3 className="text-3xl font-semibold mb-2 text-white">Nonrefundable Terms</h3>
                    <h3 className="text-xl font-semibold mb-2 text-white">3. Nonrefundable Fees</h3>
                    <p>
                        3.1. All payments made to IWM Academy, including but not limited to tuition fees, registration fees, and subscription charges, are nonrefundable under any circumstances.
                        3.2. Enrollment implies acceptance of this nonrefundable policy.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 text-white">4. Course Withdrawa</h3>
                    <p>
                        4.1. If a student decides to withdraw from a course or program, no refunds will be issued.
                        4.2. Credits are non-transferable and must be utilized within the program in which the student is enrolled.
                    </p>
                    <h3 className="text-3xl font-semibold mb-2 text-white">Course Cancellations</h3>
                    <h3 className="text-xl font-semibold mb-2 text-white">5. IWM Academy Course Cancellation</h3>
                    <p>
                        5.1. In the event of course cancellation by IWM Academy, efforts will be made to place students into a similar course or provide course credits.
                        5.2. Refunds will not be provided, but the academy will make reasonable efforts to rectify the inconvenience.
                    </p>
                    <h3 className="text-3xl font-semibold mb-2 text-white">Agreement Acceptance</h3>
                    <h3 className="text-xl font-semibold mb-2 text-white">6.Agreement to Terms</h3>
                    <p>
                        6.1. By accessing and utilizing the services of IWM Academy, you agree to adhere to the terms and conditions outlined in this Agreement.
                        6.2. IWM Academy reserves the right to modify these terms at any time, and such changes will be effective upon being posted on the website.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
                    <p className="text-gray-300">Bank Transfer: <span className="text-yellow-400">---------------------------</span></p>
                    {/*<p className="text-gray-300">PayPal: <span className="text-yellow-400">payments@yourdomain.com</span></p>*/}
                    {/*<p className="text-gray-300">Crypto Wallet: <span className="text-yellow-400">0xABC123...789XYZ</span></p>*/}
                </div>

                {/*/!* Checkbox *!/*/}
                {/*<div className="flex items-start mb-2">*/}
                {/*    <input type="checkbox" id="agree" className="mt-1 accent-yellow-500" />*/}
                {/*    <label htmlFor="agree" className="text-sm text-gray-300">*/}
                {/*        I agree to the terms and conditions.*/}
                {/*    </label>*/}
                {/*</div>*/}

                {/* Buttons */}
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-500 text-3xl rounded-lg text-white hover:bg-gray-700 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            alert("Order Confirmed!");
                            onClose();
                        }}
                        className="px-5  py-2 bg-yellow-500 hover:bg-yellow-400 text-3xl font-bold rounded-lg text-black transition"
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
};


const PricingCard = ({ plan, onClick }) => {
    const [selectedDuration, setSelectedDuration] = useState("1month");
    const [showModal, setShowModal] = useState(false);
    const [selectedPlanData, setSelectedPlanData] = useState(null);
    const selected = plan.prices?.[selectedDuration];
    const handleOrderClick = () => {
        setSelectedPlanData({
            planTitle: plan.title,
            price: selected?.price,
            priceId: selected?.priceId,
            duration: selectedDuration,
        });
        setShowModal(true);
        document.body.classList.add("modal-open");
    };

    return (
        <>
            <div className="w-full max-w-[450px] min-h-[420px] bg-[#1D1D1D] border border-black rounded-2xl shadow-xl text-white p-16 relative">
                {plan.save && (
                    <div className="absolute top-4 right-4 bg-[#ffa600] text-white text-xl font-semibold px-5 py-1 rounded">
                        {plan.save}
                    </div>
                )}

                <h3 className="text-6xl font-extrabold mb-4 text-white">{plan.title}</h3>

                <div className="flex gap-3 mb-6">
                    {Object.keys(plan.prices).map((duration) => (
                        <button
                            key={duration}
                            onClick={() => setSelectedDuration(duration)}
                            className={`py-2 px-5 rounded-lg  text-2xl font-medium transition ${
                                selectedDuration === duration
                                    ? "bg-yellow-500 text-black font-bold"
                                    : "bg-black text-gray-300"
                            }`}
                        >
                            {duration.replace("month", " mo")}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3 mb-4">
                    {plan.oldPrice && (
                        <span className="line-through text-gray-400 text-lg">
                            ${plan.oldPrice}
                        </span>
                    )}
                    <span className="text-5xl font-bold">
                        ${selected?.price}
                        <span className="text-xl font-normal ml-1">/ {selectedDuration.replace("month", "mo")}</span>
                    </span>
                </div>

                {plan.subtitle && (
                    <p className="text-base text-yellow-400 font-semibold mb-5">
                        {plan.subtitle}
                    </p>
                )}

                <ul className="space-y-3 text-2xl text-left mb-8">
                    {plan.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                            <FaCheckCircle className="text-yellow-400" />
                            {f}
                        </li>
                    ))}
                </ul>

                <button
                    onClick={handleOrderClick}
                    className="w-full py-4 bg-[#fd961a] hover:bg-[#e58000] text-white text-lg font-bold rounded-xl transition"
                >
                    ORDER NOW
                </button>
            </div>

            <TermsModal
                isOpen={showModal}
                onClose={() => {setShowModal(false); document.body.classList.remove("modal-open");}}
                selectedPlan={selectedPlanData}
            />
        </>
    );
};

export default PricingCard;
