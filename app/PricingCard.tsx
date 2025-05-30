import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import TermsModal from "./TermsModal";
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

            {/* Modal */}
            <TermsModal
                isOpen={showModal}
                onClose={() => {setShowModal(false); document.body.classList.remove("modal-open");}}
                selectedPlan={selectedPlanData}
            />
        </>
    );
};

export default PricingCard;
