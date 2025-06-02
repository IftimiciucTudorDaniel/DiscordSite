import { useEffect } from "react";

const TermsModal = ({ isOpen, onClose, selectedPlan }) => {
    useEffect(() => {
        if (isOpen) {
            // Apply overflow: hidden to both body and html to be robust
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden"; // Also target html element
        } else {
            // Revert overflow style
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            // Clean up on unmount
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[1000] flex items-center justify-center px-4 overflow-y-auto">
            <div className="bg-[#1D1D1D] max-w-[1160px] w-full max-h-[110vh] p-10 rounded-2xl shadow-2xl relative text-white my-8">

                <p className="text-xl sm:text-2xl mb-6 text-gray-300">
                    <strong>Plan:</strong> {selectedPlan.planTitle}<br />
                    <strong>Price:</strong> ${selectedPlan.price} / {selectedPlan.duration}
                </p>

                <div className="mb-6 max-h-[50vh] md:max-h-[60vh] lg:max-h-[65vh] overflow-y-auto border border-gray-600 p-4 rounded bg-[#2b2b2b] text-base text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white leading-snug">
                        This Agreement outlines the terms and conditions under which IWM Academy collects and manages tuition and service fees. By enrolling in any courses or programs offered by IWM Academy, you acknowledge and agree to the following nonrefundable fee policy.
                    </h3>

                    <h3 className="text-2xl sm:text-3xl font-semibold mb-3 mt-6 text-white">Fees and Payments</h3>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">1. Fee Structure</h4>
                    <p className="mb-4">
                        1.1. All course fees, subscription charges, and associated costs are detailed on the IWM Academy website under each program description.
                        <br/>
                        1.2. Additional charges may apply for specific course materials, certifications, or administrative services.
                    </p>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">2. Payment Methods</h4>
                    <p className="mb-4">
                        2.1. Payments must be made through approved methods as listed on the academy's website.
                        <br/>
                        2.2. IWM Academy accepts various payment methods, including credit card, PayPal, and bank transfer, subject to processing fees.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-semibold mb-3 mt-6 text-white">Nonrefundable Terms</h3>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">3. Nonrefundable Fees</h4>
                    <p className="mb-4">
                        3.1. All payments made to IWM Academy, including but not limited to tuition fees, registration fees, and subscription charges, are nonrefundable under any circumstances.
                        <br/>
                        3.2. Enrollment implies acceptance of this nonrefundable policy.
                    </p>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">4. Course Withdrawal</h4>
                    <p className="mb-4">
                        4.1. If a student decides to withdraw from a course or program, no refunds will be issued.
                        <br/>
                        4.2. Credits are non-transferable and must be utilized within the program in which the student is enrolled.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-semibold mb-3 mt-6 text-white">Course Cancellations</h3>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">5. IWM Academy Course Cancellation</h4>
                    <p className="mb-4">
                        5.1. In the event of course cancellation by IWM Academy, efforts will be made to place students into a similar course or provide course credits.
                        <br/>
                        5.2. Refunds will not be provided, but the academy will make reasonable efforts to rectify the inconvenience.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-semibold mb-3 mt-6 text-white">Agreement Acceptance</h3>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">6. Agreement to Terms</h4>
                    <p className="mb-4">
                        6.1. By accessing and utilizing the services of IWM Academy, you agree to adhere to the terms and conditions outlined in this Agreement.
                        <br/>
                        6.2. IWM Academy reserves the right to modify these terms at any time, and such changes will be effective upon being posted&nbsp;on&nbsp;the&nbsp;website.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
                    <p className="text-gray-300">Bank Transfer: <span className="text-yellow-400">---------------------------</span></p>
                    <p className="text-gray-300">PayPal: <span className="text-yellow-400">payments@yourdomain.com</span></p>
                    <p className="text-gray-300">Crypto Wallet: <span className="text-yellow-400">0xABC123...789XYZ</span></p>
                    {/* Duplicate PayPal/Crypto removed for clarity */}
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-6"> {/* Added mt-6 for spacing from payment info */}
                    <button
                        onClick={onClose}
                        className="px-6 py-3 border border-gray-500 text-lg rounded-lg text-white hover:bg-gray-700 transition font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            alert("Order Confirmed!");
                            onClose();
                        }}
                        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-lg font-bold rounded-lg text-black transition"
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
};
export default TermsModal;