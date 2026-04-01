import React from 'react';

const plans = [
    {
        name: 'Starter',
        tagline: 'Perfect for getting started',
        price: '$0',
        period: '/Month',
        features: [
            'Access to 10 free tools',
            'Basic templates',
            'Community support',
            '1 project per month',
        ],
        buttonLabel: 'Get Started Free',
        buttonStyle: 'btn-primary',
        highlighted: false,
        popular: false,
    },
    {
        name: 'Pro',
        tagline: 'Best for professionals',
        price: '$29',
        period: '/Month',
        features: [
            'Access to all premium tools',
            'Unlimited templates',
            'Priority support',
            'Unlimited projects',
            'Cloud sync',
            'Advanced analytics',
        ],
        buttonLabel: 'Start Pro Trial',
        buttonStyle: 'btn-outline btn-ghost border-white text-white hover:bg-white hover:text-purple-700',
        highlighted: true,
        popular: true,
    },
    {
        name: 'Enterprise',
        tagline: 'For teams and businesses',
        price: '$99',
        period: '/Month',
        features: [
            'Everything in Pro',
            'Team collaboration',
            'Custom integrations',
            'Dedicated support',
            'SLA guarantee',
            'Custom branding',
        ],
        buttonLabel: 'Contact Sales',
        buttonStyle: 'btn-primary',
        highlighted: false,
        popular: false,
    },
];

const CheckIcon = ({ white }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`size-4 me-2 inline-block shrink-0 ${white ? 'text-white' : 'text-purple-600'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
    </svg>
);

const Pricing = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 mb-20">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 text-center">
                Simple, Transparent Pricing
            </h2>
            <p className="mt-3 mb-12 text-gray-500 text-center text-sm md:text-base">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 w-8/12 max-w-5xl">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative flex flex-col w-full lg:w-80 rounded-2xl p-8 shadow-md transition-all duration-300
                            ${plan.highlighted
                            ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white scale-105 shadow-2xl z-10'
                                : 'bg-white text-gray-800'
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow">
                                    Most Popular
                                </span>
                            </div>
                        )}
                        <h3 className={`text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                            {plan.name}
                        </h3>
                        <p className={`text-sm mt-1 mb-6 ${plan.highlighted ? 'text-purple-200' : 'text-gray-400'}`}>
                            {plan.tagline}
                        </p>

                        <div className="flex items-end mb-6">
                            <span className={`text-5xl font-bold leading-none ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                                {plan.price}
                            </span>
                            <span className={`text-sm ml-1 mb-1 ${plan.highlighted ? 'text-purple-200' : 'text-gray-400'}`}>
                                {plan.period}
                            </span>
                        </div>

                        {/* Features */}
                        <ul className="flex flex-col gap-3 text-sm grow mb-8">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center">
                                    <CheckIcon white={plan.highlighted} />
                                    <span className={plan.highlighted ? 'text-purple-100' : 'text-gray-600'}>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`btn btn-block rounded-full font-semibold text-sm ${plan.buttonStyle}`}
                        >
                            {plan.buttonLabel}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;