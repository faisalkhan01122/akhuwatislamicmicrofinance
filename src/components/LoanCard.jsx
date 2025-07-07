
"use client"
import { motion } from "framer-motion";
import { FaHandHoldingUsd, FaMosque, FaUsers, FaQuran } from "react-icons/fa";

const LoanCard = ({ 
  img, 
  title, 
  description, 
  linkText = "Apply Now", 
  linkUrl = "#",
  loanType = "qard-e-hasan" // Default to Qard-e-Hasan
}) => {
  // Set icon based on loan type
  const getIcon = () => {
    switch(loanType) {
      case "family-enterprise": return <FaUsers className="text-2xl text-green-600" />;
      case "education": return <FaQuran className="text-2xl text-green-600" />;
      case "mosque-based": return <FaMosque className="text-2xl text-green-600" />;
      default: return <FaHandHoldingUsd className="text-2xl text-green-600" />;
    }
  };

  // Set Arabic title based on loan type
  const getArabicTitle = () => {
    switch(loanType) {
      case "family-enterprise": return "تمويل الأسرة";
      case "education": return "التمويل التعليمي";
      case "mosque-based": return "القرض المسجدي";
      default: return "القرض الحسن";
    }
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-white to-emerald-50 h-auto min-h-[400px] border border-emerald-100 shadow-lg rounded-xl overflow-hidden group hover:shadow-xl transition duration-300"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Islamic Finance Ribbon */}
      <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-10 translate-y-4 z-10 w-40 text-center shadow-md">
        حلال التمويل
      </div>

      {/* Image with Islamic pattern overlay */}
      <div className="relative overflow-hidden h-48">
        <img
          src={img || "/islamic-finance-default.jpg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay with subtle Islamic pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
        {/* Arabic title overlay */}
        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 shadow-sm">
          <p className="text-lg font-bold text-emerald-800">{getArabicTitle()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-emerald-100 rounded-full shadow-inner">
            {getIcon()}
          </div>
          <h3 className="text-xl font-bold text-emerald-800">{title}</h3>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>

        {/* Islamic finance features */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-emerald-700">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>100% Interest-Free</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-emerald-700">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>Sharia-Compliant</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-emerald-700">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>Community-Based</span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href={linkUrl}
          className="inline-flex items-center justify-between w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium hover:from-emerald-700 hover:to-teal-700 transition-all shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{linkText}</span>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-lg">حلال</span>
        </motion.a>
      </div>

      {/* Islamic pattern border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-repeat-x bg-[length:40px_40px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBmaWxsPSIjZmVmZWZlIiBkPSJNMjAgMjBhNSA1IDAgMSAwIDAtMTAgNSA1IDAgMCAwIDAgMTB6bTAtOGEzIDMgMCAxIDEgMCA2IDMgMyAwIDAgMSAwLTZ6Ii8+PC9zdmc+')]" />
      </div>
    </motion.div>
  );
};

// Example usage with Akhuwat content
export const AkhuwatLoanCardExample = () => (
  <LoanCard
    img="/qard-e-hasan.jpg"
    title="Qard-e-Hasan Loan"
    description="Interest-free financial assistance following Islamic principles to help families start businesses or meet essential needs without the burden of interest."
    linkText="Apply for Qard-e-Hasan"
    linkUrl="/qard-e-hasan"
    loanType="qard-e-hasan"
  />
);

export default LoanCard;