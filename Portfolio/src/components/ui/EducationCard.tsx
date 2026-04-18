import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { CompanyLogo } from "./CompanyLogo";

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  score: string;
  isLast: boolean;
  showConnector?: boolean;
  logo?: string;
  index?: number; // for stagger animation
}

export function EducationCard({ 
  degree, 
  institution, 
  period, 
  score, 
  isLast,
  showConnector = true,
  logo,
  index = 0
}: EducationCardProps) {
  return (
    <div className="relative group bg-white dark:bg-gray-900 p-4 sm:p-8 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
      
      <div className="relative z-10 flex items-start gap-6">
        
        {/* Cap Icon or Logo */}
        <div className="rounded-lg">
          {logo ? (
            <CompanyLogo name={institution} imageSrc={logo} />
          ) : (
            <div className="p-3 sm:p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">{degree}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">{institution}</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
            {/* Period */}
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{period}</span>
            </div>

            {/* Score */}
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Award className="w-4 h-4" />
              <span className="text-sm">Score: {score}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Connector (Hidden for Last Card) */}
      {showConnector && !isLast && (
        <div className="absolute left-[38px] bottom-0 w-[2px] h-10 bg-blue-300 dark:bg-blue-700 transform translate-y-full" />
      )}
    </div>
  );
}
