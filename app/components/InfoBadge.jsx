export default function InfoBadge({ icon: Icon, text }) {
    return (
        <div className="flex items-center gap-2 text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm">
            <Icon className="w-5 h-5" />
            <span>{text}</span>
        </div>
    );
}
