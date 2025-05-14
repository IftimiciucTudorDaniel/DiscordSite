import { FaCheckCircle } from "react-icons/fa";

const PricingCard = ({ plan, onClick }) => {
    return (
        <div className="w-full max-w-[420px] bg-[#1D1D1D] border border-[#000000] rounded-xl shadow-lg text-white p-36 relative">
            {/* SAVE Badge (optional) */}
            {plan.save && (
                <div className="absolute top-4 right-4 bg-[#ffa600] text-white text-xl font-semibold px-5 py-1 rounded">
                    {plan.save}
                </div>
            )}

            {/* Title & Price */}
            <h3 className="text-5xl text-white font-bold">{plan.title}</h3>
            <div className="flex items-center gap-2 mt-2">
                {plan.oldPrice && <span className="line-through text-gray-400">${plan.oldPrice}</span>}
                <span className="text-4xl font-bold">${plan.price} <span className="text-sm font-normal">/month</span></span>
            </div>

            {/* Optional Subtitle */}
            {plan.subtitle && (
                <p className="text-sm text-yellow-400 font-semibold mt-2">{plan.subtitle}</p>
            )}

            {/* Features */}
            <ul className="mt-4 space-y-2 text-xl text-left">
                {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-yellow-400" />
                        {f}
                    </li>
                ))}
            </ul>

            {/* ORDER NOW Button (trigger Stripe Checkout) */}
            <div className="mt-6">
                <button
                    onClick={() => onClick(plan)} // NU doar plan.price
                    className="w-full py-2 bg-[#fd961a] hover:bg-[#fd961a] text-white font-semibold transition"
                >
                    ORDER NOW
                </button>
            </div>
        </div>
    );
};
export default PricingCard;