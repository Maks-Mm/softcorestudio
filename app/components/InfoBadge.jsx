export default function InfoBadge({ icon: Icon, text }) {
  return (
    <div
      className="flex items-center gap-3 text-gray-700 
        bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl 
        shadow-md hover:shadow-lg transition-all duration-300
        hover:bg-white/90"
    >
      <Icon className="w-5 h-5 opacity-80" />
      <span className="font-medium">{text}</span>
    </div>
  );
}
