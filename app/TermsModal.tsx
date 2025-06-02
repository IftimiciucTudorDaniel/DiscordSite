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
        <div className="bg-[#1D1D1D] text-white w-full max-w-screen-2xl max-h-[90vh] p-10 rounded-2xl shadow-2xl  relative">

                <p className="text-2xl mb-6 text-gray-300">
                    <strong>Plan:</strong> {selectedPlan.planTitle}<br />
                    <strong>Price:</strong> ${selectedPlan.price} / {selectedPlan.duration}
                </p>

                <div className="mb-6 max-h-[460px] overflow-y-auto border border-gray-600 p-4 rounded bg-[#2b2b2b] text-sm text-gray-300 overscroll-y-contain">
                    <h3 className="text-xl font-semibold mb-2 text-white">IWM Academy Nonrefundable Fee Agreement
                    </h3>
                    <h3 className="text-xl font-semibold mb-2 text-white">Fee Structure</h3>
                    <p>
                        1.1. All course fees, subscription charges, and associated costs are detailed on the IWM Academy website under each program description.
                        1.2. Additional charges may apply for specific course materials, certifications, or administrative services.
                    </p>
                    <p>
                        By proceeding with this purchase, you agree to our terms and conditions.
                        The service is non-refundable and subject to our usage policy. Please review
                        carefully. You also agree that payments will be processed via secure channels
                        and that your subscription will auto-renew unless cancelled manually...
                    </p>
                    <p>
                        By proceeding with this purchase, you agree to our terms and conditions.
                        The service is non-refundable and subject to our usage policy. Please review
                        carefully. You also agree that payments will be processed via secure channels
                        and that your subscription will auto-renew unless cancelled manually...
                    </p>
                    <p>
                        By proceeding with this purchase, you agree to our terms and conditions.
                        The service is non-refundable and subject to our usage policy. Please review
                        carefully. You also agree that payments will be processed via secure channels
                        and that your subscription will auto-renew unless cancelled manually...
                    </p>
                    <p>
                        By proceeding with this purchase, you agree to our terms and conditions.
                        The service is non-refundable and subject to our usage policy. Please review
                        carefully. You also agree that payments will be processed via secure channels
                        and that your subscription will auto-renew unless cancelled manually...
                    </p>
                    <p>
                        By proceeding with this purchase, you agree to our terms and conditions.
                        The service is non-refundable and subject to our usage policy. Please review
                        carefully. You also agree that payments will be processed via secure channels
                        and that your subscription will auto-renew unless cancelled manually...
                    </p>
                    <p>
                        By proceeding with this purchase, you agree to our terms and conditions.
                        The service is non-refundable and subject to our usage policy. Please review
                        carefully. You also agree that payments will be processed via secure channels
                        and that your subscription will auto-renew unless cancelled manually...
                    </p>
                    <p>
                        By proceeding with this purchase, you agree to our terms and conditions.
                        The service is non-refundable and subject to our usage policy. Please review
                        carefully. You also agree that payments will be processed via secure channels
                        and that your subscription will auto-renew unless cancelled manually...
                    </p>
                    <p>
                        By proceeding with this purchase, you agree to our terms and conditions.
                        The service is non-refundable and subject to our usage policy. Please review
                        carefully. You also agree that payments will be processed via secure channels
                        and that your subscription will auto-renew unless cancelled manually...
                    </p>
                    <p>
                        By proceeding with this purchase, you agree to our terms and conditions.
                        The service is non-refundable and subject to our usage policy. Please review
                        carefully. You also agree that payments will be processed via secure channels
                        and that your subscription will auto-renew unless cancelled manually...
                    </p>
                    <p>
                        By proceeding with this purchase, you agree to our terms and conditions.
                        The service is non-refundable and subject to our usage policy. Please review
                        carefully. You also agree that payments will be processed via secure channels
                        and that your subscription will auto-renew unless cancelled manually...
                    </p>
                    <p>
                        By proceeding with this purchase, you agree to our terms and conditions.
                        The service is non-refundable and subject to our usage policy. Please review
                        carefully. You also agree that payments will be processed via secure channels
                        and that your subscription will auto-renew unless cancelled manually...
                    </p>
                    <p>
                        By proceeding with this purchase, you agree to our terms and conditions.
                        The service is non-refundable and subject to our usage policy. Please review
                        carefully. You also agree that payments will be processed via secure channels
                        and that your subscription will auto-renew unless cancelled manually...
                    </p>
                    {/* Extend or load dynamically if needed */}
                </div>

                {/* Payment Info */}
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

export default TermsModal;
