import React, { useState } from "react";
import TermsModal from "./TermsModal";

const ParentComponent = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const selectedPlan = {
        planTitle: "Gold Plan",
        price: 99,
        duration: "month",
    };

    return (
        <div className="p-10">
            <button
                onClick={() => setModalOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 text-black font-bold rounded-lg"
            >
                Show Terms
            </button>

            <TermsModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                selectedPlan={selectedPlan}
            />
        </div>
    );
};

export default ParentComponent;
