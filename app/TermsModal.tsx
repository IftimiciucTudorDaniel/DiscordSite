import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const TermsModal = ({ isOpen, onClose, selectedPlan }) => {
    const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);

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
        navigator.clipboard.writeText(text).catch((err) =>
            console.error("Failed to copy!", err)
        );
    };

    const regex = /(<([^>]+)>)/gi;
    const cleanedTitle = selectedPlan.planTitle.replace(regex, "");

    // Payment links mapping
    const paymentLinks = {
        "SMALL CAP  ACADEMY": {
            "1month":
                "https://checkout.revolut.com/pay/e7a7e225-729c-4d3b-83e5-4da6ebcd30eb",
            "6months":
                "https://checkout.revolut.com/pay/59983397-50f0-42e0-850f-be10bde8894f",
            "1year":
                "https://checkout.revolut.com/pay/7d1a8cd0-728a-416e-9caa-68b34246f5de",
        },
        "TOUGH MARKET ACADEMY": {
            "1month":
                "https://checkout.revolut.com/pay/5ee74973-2d4c-410e-8f2a-321715127dad",
            "6months":
                "https://checkout.revolut.com/pay/802b64a7-f774-4c9e-a135-74222e7ee1e3",
            "1year":
                "https://checkout.revolut.com/pay/5dd694a3-f9b7-49d2-861a-1d2e2c50576c",
        },
        "200k GROUP ACADAMY": {
            "1month":
                "https://checkout.revolut.com/pay/3073153d-a9e7-42d1-877f-f42211f13bbf",
            "6months":
                "https://checkout.revolut.com/pay/26bf1d23-06da-4fb2-af55-6f40c5eecb87",
            "1year":
                "https://checkout.revolut.com/pay/353739ba-75eb-40de-8e93-f3bfd059a449",
        },
        "EARNINGS GROUP ACADEMY": {
            "1month": null,
            "6months":
                "https://checkout.revolut.com/pay/c06aa86d-a3a2-472c-8dc7-d8fd908ca79c",
            "1year":
                "https://checkout.revolut.com/pay/6c6a8155-3a4c-42e7-87c3-b105114dad90",
        },
    };

    const getPaymentLink = () => {
        const planName = cleanedTitle;
        const duration = selectedPlan.duration;
        if (paymentLinks[planName] && paymentLinks[planName][duration]) {
            return paymentLinks[planName][duration];
        }
        return null;
    };

    const PaymentItem = ({ label, value }) => (
        <p className="text-gray-300 flex items-center justify-between text-lg mb-3">
            <span>
                <span className="font-medium text-white">{label}:</span>{" "}
                <span className="text-yellow-400">{value}</span>
            </span>
            <button
                onClick={() => copyToClipboard(value)}
                title={`Copy ${label}`}
                className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-600 text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition"
            >

                <FaRegCopy size={16} className="text-gray-400 hover:text-yellow-400" />
            </button>
        </p>
    );

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center px-4 overflow-y-auto">
            <div className="bg-[#121212]/90 backdrop-blur-xl border border-white/10 max-w-[1160px] w-full max-h-[90vh] p-8 sm:p-10 rounded-3xl shadow-2xl relative text-white my-8 animate-fadeIn">

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                        {cleanedTitle}
                    </h2>
                    <p className="text-lg text-gray-400 mt-2">
                        <strong className="text-white">Price:</strong> $
                        {selectedPlan.price} / {selectedPlan.duration}
                    </p>
                </div>

                {/* Terms Scrollbox */}
                <div className="mb-1 max-h-[360px] overflow-y-auto border border-gray-600 p-4 rounded bg-[#2b2b2b] text-sm text-gray-300 overscroll-y-contain"> <h3 className="text-2xl font-semibold mb-2 text-white">This Agreement outlines the terms and conditions under which IWM Academy collects and manages tuition and service fees. By enrolling in any courses or programs offered by IWM Academy, you acknowledge and agree to the following nonrefundable fee policy. </h3> <h3 className="text-3xl font-semibold mb-2 text-white">Fees and Payments </h3> <h3 className="text-xl font-semibold mb-2 text-white">1. Fee Structure</h3> <p> 1.1. All course fees, subscription charges, and associated costs are detailed on the IWM Academy website under each program description. 1.2. Additional charges may apply for specific course materials, certifications, or administrative services. </p> <h3 className="text-xl font-semibold mb-2 text-white">2. Payment Methods</h3> <p> 2.1. Payments must be made through approved methods as listed on the academys website. 2.2. IWM Academy accepts various payment methods, including credit card, PayPal, and bank transfer, subject to processing fees. </p> <h3 className="text-3xl font-semibold mb-2 text-white">Nonrefundable Terms</h3> <h3 className="text-xl font-semibold mb-2 text-white">3. Nonrefundable Fees</h3> <p> 3.1. All payments made to IWM Academy, including but not limited to tuition fees, registration fees, and subscription charges, are nonrefundable under any circumstances. 3.2. Enrollment implies acceptance of this nonrefundable policy. </p> <h3 className="text-xl font-semibold mb-2 text-white">4. Course Withdrawa</h3> <p> 4.1. If a student decides to withdraw from a course or program, no refunds will be issued. 4.2. Credits are non-transferable and must be utilized within the program in which the student is enrolled. </p> <h3 className="text-3xl font-semibold mb-2 text-white">Course Cancellations</h3> <h3 className="text-xl font-semibold mb-2 text-white">5. IWM Academy Course Cancellation</h3> <p> 5.1. In the event of course cancellation by IWM Academy, efforts will be made to place students into a similar course or provide course credits. 5.2. Refunds will not be provided, but the academy will make reasonable efforts to rectify the inconvenience. </p> <h3 className="text-3xl font-semibold mb-2 text-white">Agreement Acceptance</h3> <h3 className="text-xl font-semibold mb-2 text-white">6.Agreement to Terms</h3> <p> 6.1. By accessing and utilizing the services of IWM Academy, you agree to adhere to the terms and conditions outlined in this Agreement. 6.2. IWM Academy reserves the right to modify these terms at any time, and such changes will be effective upon being posted on the website. </p> </div>

                {/* Privacy Policy Checkbox */}
                <div className="mb-6">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={privacyPolicyAccepted}
                            onChange={(e) =>
                                setPrivacyPolicyAccepted(e.target.checked)
                            }
                            className="w-5 h-5 accent-yellow-400 rounded"
                        />
                        <span className="text-gray-300 text-base">
                            I agree to the{" "}
                            <span className="text-yellow-400 underline">
                                terms & privacy policy
                            </span>
                        </span>
                    </label>
                </div>

                {/* Payment Options */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Banking Info Card */}
                    <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-yellow-500/10 hover:scale-[1.02] transition">
                        <h4 className="text-xl font-semibold mb-4 text-yellow-400">
                            Bank Transfer
                        </h4>
                        <PaymentItem
                            label="Recipient"
                            value="INFINITE WORLD MARKETS LTD"
                        />
                        <PaymentItem label="Currency" value="USD" />
                        <PaymentItem
                            label="IBAN"
                            value="GB60REVO00996968262730"
                        />
                        <PaymentItem label="BIC" value="REVOGB21" />
                        <PaymentItem
                            label="Intermediary BIC"
                            value="CHASGB2L"
                        />
                    </div>

                    {/* Online Payment Card */}
                    <div className="bg-gradient-to-br from-yellow-400/20 via-orange-400/10 to-pink-500/20 p-6 rounded-2xl border border-yellow-400/30 shadow-lg flex flex-col justify-between hover:shadow-yellow-500/20 hover:scale-[1.02] transition">
                        <div>
                            <h4 className="text-xl font-semibold mb-4 text-yellow-400">
                                Online Payment
                            </h4>
                            <p className="text-gray-300 text-sm mb-6">
                                Pay securely online using our trusted partner.
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                if (!privacyPolicyAccepted) {
                                    alert(
                                        "You must accept the terms and privacy policy first."
                                    );
                                    return;
                                }
                                const paymentLink = getPaymentLink();
                                if (paymentLink) {
                                    window.open(paymentLink, "_blank");
                                } else {
                                    alert(
                                        "Online payment is not available for this plan."
                                    );
                                }
                            }}
                            disabled={!privacyPolicyAccepted || !getPaymentLink()}
                            className={`px-6 py-3 text-lg rounded-xl font-semibold transition 
                                ${
                                privacyPolicyAccepted && getPaymentLink()
                                    ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-black hover:opacity-90"
                                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            Pay Online
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end mt-8">
                    <button
                        onClick={onClose}
                        className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:bg-white/10 transition font-medium"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TermsModal;
