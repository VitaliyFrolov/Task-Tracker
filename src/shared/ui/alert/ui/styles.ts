export const baseStyles = "flex items-center justify-center p-4 gap-3 rounded-lg font-bold border w-fit";

export const severityStyles = {
  error: {
      filled: "bg-red-500 text-white",
      outlined: "border-red-500 text-red-500 bg-transparent",
      standard: "bg-red-50 text-red-800"
  },
  warning: {
      filled: "bg-yellow-500 text-white",
      outlined: "border-yellow-500 text-yellow-500 bg-transparent",
      standard: "bg-yellow-50 text-yellow-800"
  },
  info: {
      filled: "bg-blue-500 text-white",
      outlined: "border-blue-500 text-blue-500 bg-transparent",
      standard: "bg-blue-50 text-blue-800"
  },
  success: {
      filled: "bg-green-500 text-white",
      outlined: "border-green-500 text-green-500 bg-transparent",
      standard: "bg-green-50 text-green-800"
  }
};