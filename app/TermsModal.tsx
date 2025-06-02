import { useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";

const TermsModal = ({ isOpen, onClose, selectedPlan }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .catch(err => console.error("Failed to copy!", err));
    };


    const PaymentItem = ({ label, value }) => (
        <p className="text-gray-300 flex items-center gap-2">
            {label}: <span className="text-yellow-400">{value}</span>
            <button
                onClick={() => copyToClipboard(value)}
                title={`Copy ${label}`}
                className="text-white hover:text-yellow-400 size-14"
            >
                <FaRegCopy />
            </button>
        </p>
    );

    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center px-4 overflow-y-auto">
            <div className="bg-[#1D1D1D] max-w-[1160px] w-full max-h-[110vh] p-10 rounded-2xl shadow-2xl relative text-white my-8">
                <p className="text-xl sm:text-2xl mb-6 text-gray-300">
                    <strong>Plan:</strong> {selectedPlan.planTitle}<br />
                    <strong>Price:</strong> ${selectedPlan.price} / {selectedPlan.duration}
                </p>

                {/* Terms */}
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
                    <PaymentItem label="Recipient" value="INFINITE WORLD MARKETS LTD" />
                    <PaymentItem label="Currency accepted" value="USD" />
                    <PaymentItem label="IBAN" value="GB60 REVO 0099 6968 2627 30" />
                    <PaymentItem label="BIC" value="REVOGB21" />
                    <PaymentItem label="Intermediary BIC" value="CHASGB2L" />
                </div>

                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="px-6 py-3 border border-gray-500 text-lg rounded-lg text-white hover:bg-gray-700 transition font-medium"
                    >
                        Cancel
                    </button>
                    {/*<button*/}
                    {/*    onClick={() => {*/}
                    {/*        onClose();*/}
                    {/*    }}*/}
                    {/*    className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-lg font-bold rounded-lg text-black transition"*/}
                    {/*>*/}
                    {/*    Confirm Order*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    );
};

export default TermsModal;
