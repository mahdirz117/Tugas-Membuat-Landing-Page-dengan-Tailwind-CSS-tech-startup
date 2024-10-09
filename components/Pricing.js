export default function Pricing() {
    const plans = [
      { name: 'Basic', price: '$19/month', features: ['Feature 1', 'Feature 2'], recommended: false },
      { name: 'Pro', price: '$49/month', features: ['Feature 1', 'Feature 2', 'Feature 3'], recommended: true },
      { name: 'Enterprise', price: '$99/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'], recommended: false },
    ];
  
    return (
      <section id="pricing" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-lg ${plan.recommended ? 'bg-purple-500 text-white' : 'bg-white text-gray-700'}`}>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-4xl mt-4">{plan.price}</p>
                <ul className="mt-4">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className={`mt-6 py-2 px-4 rounded-lg ${plan.recommended ? 'bg-white text-purple-500' : 'bg-purple-500 text-white'}`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  