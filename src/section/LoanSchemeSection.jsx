import React from "react";

const LoanSchemeSection = () => {
  return (
    <div className="bg-[#E3FCEE]">
  <section className="max-w-7xl mx-auto px-4 py-12">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 leading-snug">
          Apply Online <br /> Akhuwat Foundation Loan
        </h1>
      </header>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Card */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-green-900 via-green-700 to-green-400 text-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
            <div className="absolute top-5 right-[-10px] bg-green-300 text-xs font-bold rounded-xl transform rotate-12 px-4 py-1">
              AKHUWAT <br /> APPROVED
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌱</span>
                <span className="text-lg font-semibold tracking-widest">AKHUWAT</span>
              </div>
              <h2 className="text-3xl font-bold leading-tight mb-2">
                Fuel Your <br /> Business <br /> Growth
              </h2>
              <p className="text-sm">Easy and Fast Business Loans Available Now.</p>
            </div>

            <div className="space-y-2 my-6">
              {[
                "No Interest",
                "Fast Disbursement",
                "Long Term Repayment",
                "Online Submissions Are Available"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <span className="bg-green-300 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-end mt-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">🌐</span>
                  <div>
                    <p className="text-xs">More Information</p>
                    <p className="text-sm font-semibold">www.akhuwat.network</p>
                  </div>
                </div>
                <p className="text-sm">Click on Whatsapp link</p>
              </div>

              <div className="flex items-end gap-2">
                <div className="grid grid-cols-2 gap-1">
                  <img
                    className="w-9 h-9 rounded-md border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1625486792898-a903f4770410?w=500"
                    alt="Profile 1"
                  />
                  <img
                    className="w-9 h-9 rounded-md border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1541535881962-3bb380b08458?q=80"
                    alt="Profile 2"
                  />
                </div>
                <img
                  className="w-14 h-14 rounded-xl border-4 border-white object-cover"
                  src="https://i.postimg.cc/xCChTh36/akhuwatfoundationhome.jpg"
                  alt="Main Profile"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Info */}
        <div className="bg-white rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-green-700 border-b-4 border-green-400 pb-2 mb-4">
            Akhuwat Lahore Helpline
          </h2>
          <ul className="space-y-4 list-none">
            {[
              "Visit the Official Website: Go to the Akhuwat Foundation's official website to access the loan application portal.",
              "Create an Account: Register with your basic details such as name, CNIC, contact number, and email address.",
              "Fill Out the Application Form: Provide accurate information about your financial situation, loan purpose, and repayment plan.",
              "Upload Required Documents: Attach scanned copies of your CNIC, proof of income, utility bills, and any other necessary documents.",
              "Submit the Application: Review your details and submit the form for processing.",
              "Application Review and Interview: Akhuwat's team will review your application and may schedule an interview for further verification.",
              "Loan Approval and Disbursement: If approved, you will receive the loan amount in your specified bank account."
            ].map((step, index) => (
              <li key={index} className="pl-6 relative text-sm text-gray-700">
                <span className="absolute left-0 top-1 text-green-500 text-lg">•</span>
                <strong className="text-green-700">{step.split(":")[0]}:</strong>
                {" "}{step.split(":").slice(1).join(":")}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </div>
  
  );
};

export default LoanSchemeSection;
